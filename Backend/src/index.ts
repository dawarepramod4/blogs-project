import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";
const app = new Hono();

// middleware
app.use("/*", cors());
// routes
app.get("/", async (c) => {
    return c.json({ Messsage: "Hello there this is the backend" });
});
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
