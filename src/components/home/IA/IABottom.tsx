"use client";

import Button from "@/components/common/Button";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const IABottom = () => {
  const t = useTranslations("pages.homePage.ia");

  return (
    <div className="px-4 sm:px-12 md:px-16 lg:px-32">
      <div className="flex flex-col">
        <div
          className={clsx(
            "mt-4 text-[--blue1] font-black flex flex-col",
            "lg:grid lg:grid-cols-3 lg:items-center lg:justify-between"
          )}
        >
          <div>
            <div
              className={clsx("text-3xl", "2xl:text-[2.2rem] md:text-[1.6rem]")}
            >
              {t("hero.left.line1")}
            </div>
            <div
              className={clsx(
                "text-4xl",
                "2xl:text-[3.2rem] lg:mt-3 md:text-[2.4rem]"
              )}
            >
              {t("hero.left.line2")}
            </div>
          </div>
          <div
            className={clsx(
              "text-[--gray3] text-3xl text-center",
              "md:text-4xl lg:text-[5vw] xl:text-[6.5vw]"
            )}
          >
            {t("hero.center")}
          </div>
          <div className="2xl:gap-2 flex flex-col">
            <div
              className={clsx("text-3xl", "2xl:text-[3.8rem] md:text-[2.5rem]")}
            >
              {t("hero.right.line1")}
            </div>
            <div
              className={clsx(
                "text-4xl",
                "2xl:text-[4rem] lg:mt-3 md:text-[2.9rem]"
              )}
            >
              {t("hero.right.line2")}
            </div>
          </div>
        </div>
        <Button
          href="/ia"
          variant="primary"
          className="self-end 2xl:mt-8 md:mt-4 mr-4 sm:mr-8 md:mr-16"
        >
          {t("button")}
        </Button>
      </div>
    </div>
  );
}; 