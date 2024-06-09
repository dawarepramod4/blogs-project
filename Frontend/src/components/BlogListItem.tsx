import { BsBookmarkPlus, BsFillShareFill } from "react-icons/bs";
import UserAvatar from "./UserAvatar";

interface BlogItem {
    title: string;
    description: string;
    authorName: string;
    date: Date;
}

export default function BlogListItem({ title, description, authorName, date }: BlogItem) {
    return (
        <>
            <div className=" flex flex-col items-center ">
                <div className="max-w-lg w-full flex flex-col border-b pb-2">
                    <div className="flex flex-row items-center py-2 ">
                        <UserAvatar userName={authorName} size="small" />

                        <div className="text-sm text-gray-400 pr-5 pl-1">{authorName}</div>
                        <div className="text-sm text-gray-400">{date.toDateString()}</div>
                    </div>
                    <div className=" text-lg font-bold">{title}</div>
                    <div className="text-sm">{description}</div>
                    <div className="flex flex-row justify-between py-2">
                        <div className=" text-xs text-gray-400">2 min read</div>
                        <div className="flex w-10 justify-between  ">
                            <BsBookmarkPlus />
                            <BsFillShareFill />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
