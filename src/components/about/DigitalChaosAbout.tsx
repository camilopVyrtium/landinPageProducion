"use client"
import clsx from "clsx";
import { getDigitalChaosAbout } from "@/data/aboutData"
import { Formula } from "@/components/common/Formula";
import { DigitalMarketing } from "@/components/home/DigitalMarketing/DigitalMarketing";
import { useTranslations } from "next-intl";
import { TranslateFunction } from "@/interfaces/common/TranslateFunction";

export const DigitalChaosAbout = () => {
    const t:TranslateFunction = useTranslations('pages.about.digitalChaos');
    const { section } = getDigitalChaosAbout(t);
    const { title, } = section;
    return (
        <div className="text-gray1 max-w-[1920px]" id="digital-caos-asi-somos">
            <h3 className={clsx("text-[26px] leading-[34px] font-bold text-blue1 my-12 md:my-20", "lg:text-[36px] lg:leading-[44px]")}>{title}</h3>
            <Formula className="max-[1260px]:mb-16"/>
            <DigitalMarketing />
        </div>
    )
}