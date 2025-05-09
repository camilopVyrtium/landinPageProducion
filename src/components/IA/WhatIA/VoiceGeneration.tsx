import clsx from "clsx";
import { Audio } from "@/components/common/Audio";

type Props = {
    title: string;
    text: React.ReactNode;
    section: {
        text: string;
        audios: { id: string, src: string }[];
    };
}
export const VoiceGeneration = ({ title, text, section }: Props) => {
    const [audio1, audio2] = section.audios;
    return (
        <div className="my-4 md:my-10 max-w-[1920px] text-gray1">
            <h2 className={clsx("text-gray2 font-black text-xl my-4 md:my-8 w-full", "md:w-5/12 md:text-4xl")}>{title}</h2>
            <p className={clsx("text-base", "md:text-2xl")}>{text}</p>
            <div className={clsx("flex flex-col flex-wrap mt-4 md:mt-7", "md:flex-row", "lg:justify-evenly lg:flex-row")}>
                <h3 className={clsx("text-xl text-blue1 font-black my-4", "md:text-3xl md:w-1/2", "lg:w-auto")}>{section.text}</h3>
                <div className={clsx("flex flex-col flex-grow-[2] gap-4 items-center", "md:justify-evenly", "lg:flex-row")}>
                    <div className={clsx("w-full", "lg:min-w-[350px] lg:w-2/5")}>
                        <Audio src={audio1.src} initialDuration={10.937279} />
                    </div>
                    <h3 className="text-blue1 font-black text-4xl">ó</h3>
                    <div className={clsx("w-full", "lg:min-w-[350px] lg:w-2/5")}>
                        <Audio src={audio2.src} initialDuration={12.288934} />
                    </div>
                </div>
            </div>
        </div>
    )
}