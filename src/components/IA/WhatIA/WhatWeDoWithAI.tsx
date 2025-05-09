import { getQueHacemosConIA } from "@/data/iaData"
import clsx from "clsx";
import Image from "next/image";
import { VoiceGeneration } from "@/components/IA/WhatIA/VoiceGeneration";
import { IdentityCreation } from "@/components/IA/WhatIA/IdentityCreation";
import { AvatarGeneration } from "@/components/IA/WhatIA/AvatarGeneration";
import { useTranslations } from "next-intl";

export const WhatWeDoWithAI = () => {
    const t = useTranslations('pages.ia');
    const { title, line, text, section1, section2, section3 } = getQueHacemosConIA(t);
    return (
        <div id="que-hacemos-con-ia" className="max-w-[1920px]">
            <div>
                <div className="relative my-4 md:my-8">
                    <h2 className={clsx("text-gray2 font-black text-xl absolute bottom-2 left-[24%]", "md:text-4xl")}>{title}</h2>
                    <Image src={line} alt="line" width={1920} height={119} className="w-full" />
                </div>
                <p className={clsx("text-base", "md:text-2xl")}>{text}</p>
            </div>
            <VoiceGeneration {...section1} />
            <IdentityCreation {...section2} />
            <AvatarGeneration {...section3} />
        </div>
    )
}