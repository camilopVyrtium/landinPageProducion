import { Video } from "@/components/common/Video";
import clsx from "clsx";

type Props = {
    title: string;
    text: React.ReactNode,
    video: string;
}
export const AvatarGeneration = ({ title, text, video }: Props) => {
    return (
        <div className={clsx("flex flex-col max-w-[1920px]", "md:justify-between md:gap-4")}>
            <div className="w-full">
                <h2 className={clsx("text-gray2 font-black text-3xl my-8", "md:text-4xl w-3/5")}>{title}</h2>
                <p className={clsx("text-xl", "md:text-2xl")}>{text}</p>
            </div>
            <Video src={video} className={clsx('rounded-xl h-full w-full my-2')} controls={false} classNameVideo={clsx("h-full w-full")} />
        </div>
    )
}