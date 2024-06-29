import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
interface Blog {
    id: string;
    title: string;
    content: string;
    author: {
        id: string;
        name: string;
        email: string;
    };
}

export default function UseBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setblogs] = useState<Blog[]>([]);

    useEffect(() => {
        try {
            axios
                .get(`${BACKEND_URL}/api/v1/blog/all`, {
                    headers: {
                        Authorization: `bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((response) => {
                    console.log(response);
                    const blogs = response.data;
                    const decodedBlogs = blogs.map((blog: any) => {
                        return {
                            ...blog,
                            title: decodeURI(blog.title),
                            content: decodeURI(blog.content),
                        };
                    });
                    setblogs(decodedBlogs);
                    setLoading(false);
                });
        } catch (e) {
            console.log(e);
        }
    }, []);

    return {
        blogs: blogs,
        loading: loading,
    };
}

export function useBlog(id: string) {
    const [loading, setLoading] = useState(true);
    const [blog, setblog] = useState<Blog>();

    useEffect(() => {
        try {
            axios
                .get(`${BACKEND_URL}/api/v1/blog/${id}}`, {
                    headers: {
                        Authorization: `bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((response) => {
                    console.log(response);
                    const blog = response.data;
                    setblog(blog);
                    setLoading(false);
                });
        } catch (e) {
            console.log(e);
        }
    }, []);

    return {
        blog: blog,
        loading: loading,
    };
}
