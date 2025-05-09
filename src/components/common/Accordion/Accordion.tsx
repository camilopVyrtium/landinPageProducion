'use client'
import { CSSProperties, useState } from "react";
import clsx from "clsx";
import { OpenAccordion } from "./OpenAccordion";
import { CloseAccordion } from "./CloseAccordion";
import Button from "../Button";
import { ButtonIA } from "@/interfaces/ia/IaService";

type Props = {
    children: React.ReactNode;
    title: string;
    color?: string;
    description?: React.ReactNode;
    className?: string;
    classNameTitle?: string;
    classNameDescription?: string;
    styleTitle?: CSSProperties;
    isOpen?: boolean;
    button?: ButtonIA;
}
export const Accordion = ({ title, children, styleTitle, description, color, className, classNameTitle, classNameDescription, isOpen = false, button }: Props) => {
    const [open, setOpen] = useState(isOpen);
    const toogleContent = () => {
        setOpen(!open);
    }
    return (
        <div className={className}>
            <div
                className={
                    clsx("flex flex-col cursor-pointer gap-4 z-20 relative left-[10%] top-16 text-xl",
                        "md:flex-row md:text-3xl",
                        description ? "w-[90%]" : "w-[85%] md:w-[80%]",
                        classNameTitle
                    )
                }
                style={styleTitle}
                onClick={toogleContent}
            >
                <div className={
                    clsx(
                        "flex justify-between gap-4 items-center",
                        description ? "lg:w-1/3" : "",
                        description ? "md:w-[90%] lg:w-[90%]" : "lg:w-[85%] md:w-[80%]",
                        "group"
                    )}>
                    <h3 className={clsx("text-[--gray1] mb-1 md:text-[18px]", description ? "text-[clamp(14px,4.5vw,20px)] md:!leading-[26px] font-bold" : "text-[clamp(14px,4.5vw,20px)] md:text-[18px]", "lg:text-2xl","lg:group-hover:scale-110 hover:transition-transform")}>{title}</h3>
                    {open ? <OpenAccordion stroke={color} className={clsx("w-8 h-8 overflow-hidden", "md:w-10 md:h-10")} /> : <CloseAccordion stroke={color} className={clsx("w-8 h-8", "md:w-10 md:h-10")} />}
                </div>
                {description && <p className={clsx(classNameDescription, "text-[clamp(14px,3vw,16px)] leading-[clamp(22px,3vw+8px,24px)]", "lg:text-[min(1.42vw,21px)] md:text-[16px] md:!leading-[24px] md:w-full", "lg:mx-4")}>{description}</p>}
            </div>
            <div className={clsx(`${open ? clsx("max-h-[300vh]", "md:max-h-[300vh]") : "max-h-0"} overflow-hidden relative`, "accordion-content")}>
                {children}
                {button && <Button showModalContact {...button} className={`${open ? 'opacity-100' : 'opacity-0'} absolute bottom-0 right-3 text-sm`}>{button.text}</Button>}
            </div>
        </div>
    )
}