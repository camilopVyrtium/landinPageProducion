"use client";

import Button from "@/components/common/Button";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const IABottom = () => {
  const t = useTranslations("pages.homePage.ia");

  return (
    <div className="w-[85%] md:w-[80%] mx-auto mt-6 lg:mt-16">
      <div className="flex flex-col">
        <div
          className={clsx(
            " text-[--blue1] font-black flex flex-col md:w-fit md:mx-auto",
            "lg:flex lg:items-center lg:flex-row lg:justify-between gap-3 lg:w-full"
          )}
        >
          <div>
            <div
              className={clsx("text-3xl lg:mb-4", "2xl:text-[38px] md:text-[1.6rem] w-fit")}
            >
              {t("hero.left.line1")}
            </div>
            <div
              className={clsx(
                // "text-4xl",
                "text-3xl",
                "2xl:text-[54px] md:text-[2.4rem] w-max"
              )}
            >
              {t("hero.left.line2")}
            </div>
          </div>
          <div
            className={clsx(
              "text-[--gray3] text-[clamp(30px,10vw,60px);] text-center w-full",
              "md:text-4xl lg:text-[5vw] xl:text-[115px] xl:leading-[101px] md:w-fit 2xl:w-min"
            )}
          >
            {t("hero.center")}
          </div>
          <div className="flex flex-col">
            <div
              className={clsx("text-3xl lg:mb-4", "2xl:text-[38px] md:text-[26px] leading-[26px] w-fit")}
            >
              {t("hero.right.line1")}
            </div>
            <div
              className={clsx(
                "text-4xl",
                "2xl:text-[54px] 2xl:text-[] md:text-[26px] leading-[26px] w-fit"
              )}
            >
              {t("hero.right.line2")}
            </div>
          </div>
        </div>
        <Button
          href="/ia"
          variant="primary"
          className="self-end 2xl:mt-8 mt-4 mr-4 md:mr-16 p-2"
        >
          {t("button")}
        </Button>
      </div>
    </div>
  );
}; 