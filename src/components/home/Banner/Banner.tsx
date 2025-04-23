"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations("pages.homePage.banner");

  return (
    <div className="w-full bg-red1 flex justify-center md:gap-20 gap-4 md:gap-10 items-end md:pt-4 pt-2">
      <Image
        width={200}
        height={0}
        src="/images/home/personBanne.png"
        alt="person banner"
        className="md:mb-0 w-[110px] md:w-[230px] pl-2 hidden md:block"
      />
      <div className="grid grid-cols-2 md:pb-8 pb-4">
        <div className="justify-self-start block md:hidden lg:block">
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
          src="/images/common/decorationBaner.svg"
          alt="decoration banner"
          className="md:justify-self-end justify-self-end h-full md:w-[80px] w-[60px] block md:hidden lg:block"
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
