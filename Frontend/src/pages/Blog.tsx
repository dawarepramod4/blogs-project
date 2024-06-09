import AppBar from "../components/AppBar";
import BlogListItem from "../components/BlogListItem";

export default function Blogs() {
    return (
        <>
            <AppBar />
            <div className="flex flex-col">
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
