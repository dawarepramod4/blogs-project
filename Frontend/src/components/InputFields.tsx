import { ChangeEvent } from "react";

export function FieldWithLabel({
    label,
    type,
    placeholder,
    onChange,
}: {
    label: string;
    type: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="pt-5">
            <label className="w-100">{label}</label>
            <div className="border rounded">
                <input
                    className="p-1 rounded flex grow w-full "
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
