import zod from "zod";

export const signUpInput = zod.object({
    name: zod.string().optional(),
    email: zod.string().email(),
    password: zod.string().min(6),
});

export type SignUpInput = zod.infer<typeof signUpInput>;

export const signInInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
});

export type SignInInput = zod.infer<typeof signInInput>;

export const createBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
});

export type createBlogInput = zod.infer<typeof createBlogInput>;

export const updateBlogInput = zod.object({
    title: zod.string().optional(),
    content: zod.string().optional(),
});

export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;

