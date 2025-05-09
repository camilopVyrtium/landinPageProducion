import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

export type PersonProps = {
    image: string | StaticImageData;
    name: string;
    profession: string;
}
export const Person = ({ image, name, profession }: PersonProps) => {
    return (
        <div className="flex flex-col w-56">
            <div className="rounded-full justify-end my-4 bg-blue3 relative w-52 h-52 overflow-hidden shadow-[4px_-2px_12px_0px_#00000040] border border-white">
                <Image src={image} alt={`image-${name}`} width={200} height={200} className="mt-2 image-person" />
            </div>
            <div className={clsx("flex flex-col my-4", "md:text-2xl")}>
                <strong className="text-[clamp(18px,4.5vw,24px)] md:text-2xl">{name}</strong>
                <span className="text-[clamp(14px,3vw,20px)]">{profession}</span>
            </div>
        </div>
    )
}