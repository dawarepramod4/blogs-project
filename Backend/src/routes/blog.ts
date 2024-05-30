import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { Hono } from "hono";
import { JWTPayload } from "hono/utils/jwt/types";
type Variables = {
    userid: any;
};
export const blogRouter = new Hono<{
    Variables: Variables;
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
}>();

//middleware to check if the user is authenticated
blogRouter.use("/*", async (c, next) => {
    const token = c.req.header("Authorization")?.split(" ")[1];
    if (!token) {
        c.status(401);
        return c.body("Unauthorized");
    }
    try {
        const payload = await verify(token, c.env.JWT_SECRET);
        if (payload.id) {
            c.set<"userid">("userid", payload.id);
            return await next();
        }
        c.status(401);
        return c.body("Unauthorized");
    } catch (e) {
        c.status(401);
        return c.body("Unauthorized");
    }
});

//creates a new blog
blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    console.log("body", body);
    const blog = await prisma.post.create({
        data: {
            content: body.content,
            title: body.title,
            authorId: c.get("userid"),
        },
    });
    return c.json(blog);
});

//returns all the blogs
blogRouter.get("/all", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const blog = await prisma.post.findMany();
        console.log("blog", blog);
        if (!blog) {
            c.status(404);
            return c.json({ error: "Blog not found" });
        }
        return c.json(blog);
    } catch (e) {
        c.status(405);
        return c.json({ message: e });
    }
});
//returns the blog with provided id
blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");

    try {
        const blog = await prisma.post.findFirst({ where: { id: id } });
        if (!blog) {
            c.status(404);
            return c.json({ error: "Blog not found" });
        }
        return c.json(blog);
    } catch (e) {
        c.status(405);
        return c.json({ message: e });
    }
});

//update the blog with provided id
blogRouter.put("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    const body = await c.req.json();
    try {
        const blog = await prisma.post.update({
            where: { id: id },
            data: { content: body.content, title: body.title },
        });
        if (!blog) {
            c.status(404);
            return c.json({ error: "Blog not found" });
        }
        return c.json(blog);
    } catch (e) {
        c.status(405);
        return c.json({ message: e });
    }
});
