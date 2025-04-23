
import clsx from "clsx";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export type InputProps = {
    placeholder: string;
    name: string;
    value: string;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    type?: HTMLInputTypeAttribute;
    className?: string;
}
export const Input = ({ handleChange, className, ...props }: InputProps) => {
    return (
        <div className={className}>
            <input {...props} onChange={handleChange} className={clsx("rounded-lg h-10 border border-gray1 w-full outline-none text-2xl", "placeholder:text-2xl placeholder:text-gray1 placeholder:pl-2")} />
        </div>
    )
}