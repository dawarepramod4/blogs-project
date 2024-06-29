import AppBar from "../components/AppBar";
import TextEditor from "../components/TextEditor";
import { useState } from "react";
import { createBlogInput } from "@dawarepramod4/medium-common";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateBlogPage() {
    const [articleData, setArticleData] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    async function uploadData() {
        //prevent default

        const createBlogInputs: createBlogInput = {
            title: encodeURI(title),
            content: encodeURI(articleData),
        };
        console.log("Uploading Data");
        try {
            axios
                .post(`${BACKEND_URL}/api/v1/blog`, createBlogInputs, {
                    headers: {
                        Authorization: `bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((response) => {
                    console.log(response);
                    // const blogs = response.data;
                });
            navigate("/blog");
        } catch (e) {
            console.log(e);
            console.log("error");
            alert("Error in uploading data");
        }
    }

    return (
        <>
            <AppBar
                buttons={
                    <SaveBtn
                        uploadData={() => {
                            uploadData();
                        }}
                    />
                }
            />
            <TextEditor setArticleData={setArticleData} setTitle={setTitle} />
        </>
    );
}

function SaveBtn(props: { uploadData: any }) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                props.uploadData();
            }}
            className=" bg-green-700 text-white px-2   rounded-md mr-4"
        >
            Save
        </button>
    );
}
