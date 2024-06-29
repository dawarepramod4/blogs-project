import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import BlogListItem from "../components/BlogListItem";
import UseBlogs from "../hooks/Blogs";
import { PiNotePencilThin } from "react-icons/pi";

export default function Blogs() {
    const { blogs, loading } = UseBlogs();

    if (loading) {
        return (
            <>
                <div className="flex flex-col w-screen h-screen text-center">Loading</div>
            </>
        );
    }
    return (
        <>
            <AppBar buttons={<WriteBlogBtn />} />
            <div className="flex flex-col">
                {blogs.map((blog) => {
                    return (
                        <BlogListItem
                            key={blog.id}
                            title={blog.title}
                            description={blog.content}
                            authorName={blog.author.name}
                            date={new Date()}
                        />
                    );
                })}
                <BlogListItem
                    title={
                        "Sed voluptua eos sed ipsum dolor consetetur sea sanctus diam. Tempor labore vero lorem diam sit sit vero, sed lorem."
                    }
                    description="Et amet consetetur stet et et sadipscing. Sed magna duo ipsum at amet consetetur magna vero. Erat voluptua sanctus ea."
                    authorName="Prmaod daware"
                    date={new Date()}
                />
            </div>
        </>
    );
}

// write blog btn function
function WriteBlogBtn() {
    const navigate = useNavigate();
    return (
        <>
            <button
                onClick={() => {
                    //navigate to create blog page
                    navigate("/create");
                }}
                className=" px-1 py-1 mx-1 flex items-center font-extralight "
            >
                <div className="px-1">
                    <PiNotePencilThin height={20} />
                </div>{" "}
                write
            </button>
        </>
    );
}
