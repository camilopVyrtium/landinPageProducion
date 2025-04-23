"use client"
import clsx from "clsx";
import { getDigitalChaosAbout } from "@/data/aboutData"
import { Formula } from "@/components/common/Formula";
import { DigitalMarketing } from "@/components/home/DigitalMarketing/DigitalMarketing";
import { useTranslations } from "next-intl";
import { RichTranslateFunction } from "@/interfaces/common/TranslateFunction";

export const DigitalChaosAbout = () => {
    const t = useTranslations('pages.about.digitalChaos') as RichTranslateFunction;
    const { section } = getDigitalChaosAbout(t);
    const { title, } = section;
    return (
        <div className="text-gray1 max-w-[1920px]" id="digital-caos-asi-somos">
            <h3 className={clsx("text-2xl font-bold text-blue1 my-20", "md:text-3xl")}>{title}</h3>
            <Formula />
            <DigitalMarketing />
        </div>
    )
}