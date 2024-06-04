export function PrimaryBtn({ onClick, label }: { onClick: () => void; label: string }) {
    return (
        <div>
            <button
                onClick={onClick}
                className=" bg-slate-950 text-white font-bold py-1 px-4 rounded w-full"
            >
                {label}
            </button>
        </div>
    );
}
