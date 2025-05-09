"use client";

import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import decorationBanner from "@/assets/images/common/decorationBaner.svg"
import personBanner from '@/assets/images/about/banner.png';
export const Banner = () => {
  const t = useTranslations("pages.about.banner");

  return (
    <div
      className={clsx(
        "w-full bg-blue1 flex flex-col md:flex-row items-center max-w-[1920px]",
        "lg:mt-[100px]",
        "sm:gap-5",
        "md:gap-8",
        "xl:gap-10",
        "2xl:gap-20"
      )}
      id="banner"
    >
      <div
        className={clsx(
          "grid grid-rows-2 grid-cols-1 flex-1 p-0 gap-0",
          "md:pl-[60px]",
          "xl:pl-[75px]",
          "2xl:pl-[100px]"
        )}
      >
        <div className="justify-self-start self-end">
          <p
            className={clsx(
              "text-yellow1 font-montserrat font-light leading-none text-[42px]",
              "sm:text-[100px]",
              "md:text-[50px]",
              "xl:text-[85px]",
              "2xl:text-[101px]"
            )}
          >
            {t("title.firstLine")}
          </p>
        </div>

        <div className="flex justify-start items-start gap-4">
          <p
            className={clsx(
              "text-yellow1 font-montserrat font-bold leading-none text-[48px]",
              "sm:text-[100px]",
              "md:text-[60px]",
              "xl:text-[90px]",
              "2xl:text-[126px]"
            )}
          >
            {t("title.secondLine")}
          </p>
          <Image
            width={40}
            height={200}
            src={decorationBanner}
            alt="decoration banner"
            className={clsx(
              "h-full",
              "sm:w-[90px]",
              "md:w-[50px]",
              "xl:w-[70px]",
              "2xl:w-[90px]"
            )}
          />
        </div>
      </div>

      <div className="hidden md:block self-start p-0">
        <Image
          width={436}
          height={198}
          src={personBanner}
          alt="person banner"
          className={clsx(
            "w-[370px]",
            "md:w-[300px]",
            "lg:w-[400px]",
            "xl:w-[450px]",
            "2xl:w-[650px]"
          )}
        />
      </div>
    </div>
  );
};
