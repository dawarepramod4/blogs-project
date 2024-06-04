import { useState } from "react";

export const Quote = () => {
    const [quote, setQuote] = useState("This is made for the fun");
    const [author, setAuthor] = useState("Pramod Daware");
    const [designation, setDesignation] = useState("Developer");
    return (
        <div className="flex bg-slate-200 h-screen flex-col justify-center align-middle px-10">
            <div className="basis-1/2 flex flex-col justify-center">
                <div className="text-lg font-bold">"{quote}"</div>
                <div className="block pt-5">
                <div className="text-sm font-bold">{author}</div>
                <div className="text-sm font-thin">{designation}</div>
                </div>
            </div>
        </div>
    );
};
