import { Video } from "@/components/common/Video";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type Props = {
    title: string;
    text: React.ReactNode;
    images: { id: string, image: string | StaticImageData, customClasses?: string; }[];
    video: string;
}
export const IdentityCreation = ({ title, text, images, video }: Props) => {
    return (
        <div className={clsx("max-w-[1920px] mt-6")}>
            <div className={clsx("flex flex-col items-center", "lg:flex-row-reverse lg:gap-4 lg:items-start")}>
                <div className={clsx("flex flex-col w-fit", "lg:gap-4 lg:h-[45rem] lg:justify-between mt-0")}>
                    <h2 className={clsx("text-gray2 font-black text-xl mb-4", "md:text-4xl")}>{title}</h2>
                    <p className={clsx("text-base", "md:text-2xl")}>{text}</p>
                    <div className={clsx("hidden", "lg:flex")}>
                        {
                            images.map(({ id, image, customClasses }) => (
                                <Image key={id} src={image} alt="identidad-visual" width={353} height={247} className={clsx(customClasses, id != 'create-identification-image-3' ? "lg:h-[26.8vw]" : "lg:h-[26.5vw]", "lg:w-[32%] object-fill rounded-2xl")} />
                            ))
                        }
                    </div>
                </div>
                <div className={clsx("flex justify-between my-8 md:my-14 w-full flex-wrap gap-4", "md:w-[85%] md:flex-row-reverse md:flex-nowrap", "lg:flex-wrap-reverse lg:flex-row-reverse lg:justify-center lg:my-0")}>
                    <div className={clsx("flex justify-between flex-row flex-nowrap overflow-x-auto", "md:justify-center md:flex-col", "lg:hidden lg:flex-row lg:items-center lg:justify-center")}>
                        {
                            images.map(({ id, image }) => (
                                <Image key={id} src={image} alt="identidad-visual" width={353} height={247} className={clsx("w-[32%] rounded-2xl", "md:w-auto", "lg:w-[32%]")} />
                            ))
                        }
                    </div>
                    <div className={clsx("w-full", "lg:w-[450px]", "lg:h-[45rem]")}>
                        <Video src={video} controls={false} className={clsx('rounded-xl h-full')} classNameVideo={clsx("object-cover h-full")} />
                    </div>
                </div>
            </div>
        </div>
    )    
}