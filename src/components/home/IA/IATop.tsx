"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

export const IATop = () => {
  const t = useTranslations("pages.homePage.ia");

  return (
    <div
      className="px-4 sm:px-12 md:px-16 lg:px-32 md:pt-2 md:pt-8 overflow-x-hidden mb-8"
      id="ia"
    >
      <div
        className={clsx(
          "flex flex-col gap-4",
          "md:flex-row md:justify-between md:items-start"
        )}
      >
        <h2
          className={clsx(
            "text-[--gray3] text-2xl font-black",
            "md:text-[3rem] md:w-1/3"
          )}
        >
          {t("title")}
        </h2>
        <div
          className={clsx("text-2xl mt-2", "md:text-[1.8rem] md:w-2/3 md:mt-0")}
        >
          {t("description")}
        </div>
      </div>
    </div>
  );
}; 