import clsx from "clsx"
import Image from "next/image"
import { search } from '@/data/commonData';
import { InputProps } from "@/components/common/Input"
export const InputSearch = ({ handleChange, type = 'search', className, ...props }: InputProps) => {
    return (
        <div className={clsx(className, "relative")}>
            <Image src={search} alt="search" width={20} height={20} className={clsx("absolute top-3 left-2")} />
            <input {...props} onChange={handleChange} type={type} className={clsx(" pl-8 rounded-lg h-10 border border-gray1 w-full outline-none text-2xl", "placeholder:text-2xl placeholder:text-gray1")} />
        </div>
    )
}