import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blog";
import CreateBlogPage from "./pages/CreateBlog";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/blog" element={<Blogs />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/blog/:id" element={<Blogs />} />
                    <Route path="/create/" element={<CreateBlogPage />} />
                    {/* <Route path="/create" element={<Create />} />
                     */}
                </Routes>
            </BrowserRouter>
        </>
    );
}
