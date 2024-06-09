import UserAvatar from "./UserAvatar";

export default function AppBar() {
    return (
        <>
            <div className="w-screen py-2 border-b flex flex-row justify-between items-center px-5">
                <div>Medium</div>
                <div>
                    <UserAvatar userName="Pramod Daware" size="medium" />
                </div>
            </div>
        </>
    );
}
