import UserAvatar from "./UserAvatar";
export default function AppBar({ buttons }: { buttons: JSX.Element }) {
    return (
        <>
            <div className="w-screen py-2 border-b flex flex-row justify-between items-center px-5">
                <div>Medium</div>

                <div className="flex items-center">
                    <div className="">{buttons}</div>
                    <UserAvatar userName="Pramod Daware" size="medium" />
                </div>
            </div>
        </>
    );
}
