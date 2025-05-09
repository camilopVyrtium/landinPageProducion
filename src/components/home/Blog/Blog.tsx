"use client";
import clsx from "clsx";
import { Card } from "@/components/common/Card/Card";
import { New } from "@/components/common/New/New";
import { Slider } from "@/components/common/Slider/Slider";
import { blog } from "@/data/homeData";
import Image from "next/image";
import { useTranslations } from "next-intl";
export const Blog = () => {
  const { separator, cards, news } = blog;
  const t = useTranslations("pages.homePage.blog");
  return (
    <div id="blog" className="max-w-[1920px] mb-12">
      <div className={clsx("flex mt-10 justify-between")}>
        <h3
          className={clsx(
            "text-[--gray3] text-[24px] md:text-3xl 2xl:text-5xl font-black max-w-[50%]"
          )}
        >
          {t("title")}
        </h3>
        <Image
          className={clsx("max-w-[50%] md:w-[50vw] w-[30vw]")}
          src={separator}
          alt="separator"
          width={100}
          height={41}
        />
      </div>
      <p
        className={clsx(
          "text-[--gray3] text-base !leading-[22px] md:!leading-[32px] md:text-2xl 2xl:!leading-[38px] 2xl:text-3xl font-normal md:my-12 my-6"
        )}
      >
        {t("description")}
      </p>
      <div>
        {news.map(({ id, title, text, image, button }) => (
          <New
            key={id}
            title={t(title)}
            text={t(text)}
            image={image}
            button={{
              variant: button.variant,
              text: t(button.text),
              href: button.href,
            }}
          />
        ))}
      </div>
      <Slider actualPointColor="#64d2d9" className={clsx("md:hidden")}>
        {cards.map(({ id, ...card }) => (
          <div key={id} className="w-full flex justify-center">
            <Card
              title={t(card.title)}
              text={t(card.text)}
              categories={card.categories.map(({ icon, category }) => ({
                icon,
                category: t(category),
              }))}
              image={card.image}
              url={card.url}
            />
          </div>
        ))}
      </Slider>
      <div
        className={clsx(
          "hidden",
          "md:grid md:grid-cols-2 md:justify-center md:gap-4 md:mt-12",
          "lg:grid-cols-3"
        )}
      >
        {cards.map(({ id, ...card }) => (
          <Card
            key={id}
            title={t(card.title)}
            text={t(card.text)}
            categories={card.categories.map(({ icon, category }) => ({
              icon,
              category: t(category),
            }))}
            image={card.image}
            url={card.url}
            className="w-full"
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};
