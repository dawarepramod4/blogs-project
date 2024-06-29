import "quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import "./styles/TextEditor.css";

export default function TextEditor(props: {
    setArticleData: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}) {
    const handleProcedureContentChange = (content: any) => {
        console.log("content---->", content);

        props.setArticleData(content);
    };

    const handleTitleChange = (content: any) => {
        console.log("content---->", content);
        //limit the title to 80 characters
        //set article data here
        
        props.setTitle(content);
    };

    return (
        <div className="flex flex-col justify-center w-full  max-w-1/2 items-center min-w-96">
            {/* <input
                type="text"
                className="h-20 bg-slate-200 w-full md:w-1/2 my-1 text-3xl "
                onChange={(e) => props.setTitle(e.target.value)}
                placeholder="Title"
            /> */}
            <div className=" bg-slate-100 md:w-1/2 w-full h-full border-none  ">
                <TitleEditor onChange={handleTitleChange} />
                <ContentEditor onContentChange={handleProcedureContentChange} />
            </div>
        </div>
    );
}
function TitleEditor(props: { onChange: (content: any) => void }) {
    return (
        <>
            <ReactQuill
                id="titleEditor"
                theme="bubble"
                placeholder="Your Title...."
                onChange={props.onChange}
            ></ReactQuill>
        </>
    );
}
function ContentEditor(props: { onContentChange: (content: any) => void }) {
    return (
        <ReactQuill
            id="contentEditor"
            theme="bubble"
            defaultValue={"sddfdfd"}
            placeholder="Let your Thoughts Flow.."
            onChange={props.onContentChange}
        ></ReactQuill>
    );
}
