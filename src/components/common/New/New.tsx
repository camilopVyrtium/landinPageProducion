import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { ButtonVariant } from "@/interfaces/common/Button";
import { SectionNew2 } from "./SectionNew2";

type Props = {
    title: string;
    text: string,
    image: string | StaticImageData;
    button: {
        variant: ButtonVariant,
        text: string,
        href: string
    },
    color?: string;

}
export const New = ({ title, text, image, button, }: Props) => {
    return (
        <div className={clsx("relative rounded-xl shadow-gray-600 shadow-lg", "lg:max-h-[42rem]")}>
            <Image src={image} alt="newImage" width={1000} height={300} className={clsx("w-full -z-10 rounded-xl min-h-[32rem]", "lg:max-h-[42rem]")} loading="lazy" />
            <SectionNew2 title={title} text={text} button={button} className='' />
        </div>
    )
}