import clsx from "clsx";
import { InputProps } from "@/components/common/Input"
export type Option = {
    id: string | number;
    value: string;
    text: string | number;
}
type Props = InputProps & { options: Option[] };
export const InputSelect = ({ handleChange, options, className, placeholder, ...props }: Props) => {
    return (
        <div className={className}>
            <select
                className={clsx("pl-3 rounded-lg h-10 border border-gray1 w-full outline-none text-2xl bg-white", "placeholder:text-2xl placeholder:text-gray1", "hover:cursor-pointer")}
                {...props}
                onChange={handleChange}
            >
                <option value={""}>{placeholder}</option>
                {
                    options.map(({ id, value, text }) => (<option key={id} value={value}>{text}</option>))
                }
            </select>
        </div>
    )
}