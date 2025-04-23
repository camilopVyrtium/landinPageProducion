'use client'
import { CSSProperties, useState } from "react";
import clsx from "clsx";
import { OpenAccordion } from "./OpenAccordion";
import { CloseAccordion } from "./CloseAccordion";

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
}
export const Accordion = ({ title, children, styleTitle, description, color, className, classNameTitle, classNameDescription, isOpen = false }: Props) => {
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
                        description ? "w-[90%]" : "w-4/5",
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
                        description ? "md:w-[90%] lg:w-[90%]" : "lg:w-4/5",
                        "hover:scale-110 hover:transition-transform"
                    )}>
                    <h3 className={clsx("text-[--gray1] mb-1", description ? "text-[3.5vw] md:text-[2vw]" : "text-[4.5vw]", "lg:text-2xl")}>{title}</h3>
                    {open ? <OpenAccordion stroke={color} className={clsx("w-8 h-8 overflow-hidden", "md:w-10 md:h-10")} /> : <CloseAccordion stroke={color} className={clsx("w-8 h-8", "md:w-10 md:h-10")} />}
                </div>
                {description && <p className={clsx("text-[4vw]", "md:text-[1.8vw] lg:text-[1.42vw] md:w-full", "lg:mx-4", classNameDescription)}>{description}</p>}
            </div>
            <div className={clsx(`${open ? clsx("max-h-[1000vh]", "md:max-h-[300vh]", "lg:max-h-[150vh]") : "max-h-0"} overflow-hidden relative`, "accordion-content")}>
                {children}
            </div>
        </div>
    )
}