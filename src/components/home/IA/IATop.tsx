"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

export const IATop = () => {
  const t = useTranslations("pages.homePage.ia");

  return (
    <div
      className="mb-10 w-[85%] md:w-[80%] mx-auto overflow-hidden"
      id="ia"
    >
      <div
        className={clsx(
          "flex flex-col gap-4",
          "md:flex-row md:justify-between lg:items-start lg:gap-32 md:gap-0 md:items-center"
        )}
      >
        <h2
          className={clsx(
            "text-[--gray3] text-[24px] font-extrabold -tracking-[1px]",
            "md:text-[clamp(20px,3.5vw,3.5rem)] md:w-[70vw] md:!leading-[clamp(28px,3.5vw+8px,52px)]"
          )}
        >
          {t("title")}
        </h2>
        <p className={clsx("text-base", "md:text-[clamp(18px,1.5vw,26px)] md:mt-0 !leading-[22px] md:w-[73%] md:!leading-[clamp(28px,1.5vw+8px,32px)]")}>
          {t("description")}
        </p>
      </div>

   

    </div>
  );
}; 