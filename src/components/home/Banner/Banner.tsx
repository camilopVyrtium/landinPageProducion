"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import personBanner from '@/assets/images/home/personBanne.png';
import decorationBanner from '@/assets/images/common/decorationBaner.svg';
export const Banner = () => {
  const t = useTranslations("pages.homePage.banner");
  return (
    <div className="w-full bg-red1 flex justify-center md:gap-20 gap-4 items-end md:pt-4 pt-2">
      <Image
        width={200}
        height={0}
        src={personBanner}
        alt="person banner"
        className="max-[440px]:hidden md:mb-0 w-[110px] md:w-[230px] pl-2 md:block"
      />
      <div className="grid grid-cols-2 md:pb-8 pb-4">
        <div className="justify-self-start block">
          <p className="text-yellow1 text-[24px] md:text-[32px] font-montserrat font-medium leading-none">
            {t("title.part1")}
          </p>
          <p className="text-yellow1 text-[32px] md:text-[45px] font-montserrat  font-medium leading-none">
            {t("title.part2")}
          </p>
        </div>
        <Image
          width={100}
          height={2}
          src={decorationBanner}
          alt="decoration banner"
          className="md:justify-self-end justify-self-end h-full md:w-[80px] w-[60px] block"
        />
        <div className="col-span-2">
          <p className="text-yellow1 text-[36px] md:text-[52px] font-montserrat font-black leading-none">
            {t("title.part3")}
          </p>
          <p className="text-yellow1 text-[26px] md:text-[38px] font-montserrat font-black leading-none">
            {t("title.part4")}
          </p>
        </div>
      </div>
    </div>
  );
};
