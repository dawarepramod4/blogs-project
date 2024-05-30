import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { Hono } from "hono";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
}>();

userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password,
        },
    });
    if (!user) {
        c.status(401);
        return c.body("Invalid credentials");
    }
    console.log("useer", user.id);
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token });
});

userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            },
        });

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt: token });
    } catch (e) {
        c.status(401);
        return c.body("Invalid credentials");
    }
});
