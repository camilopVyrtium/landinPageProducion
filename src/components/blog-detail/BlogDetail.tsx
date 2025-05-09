"use client";

import clsx from "clsx";
import Image from "next/image";
import { getFullBlog } from "@/data/blogData";
import { useTranslations } from "next-intl";
import { Card } from "@/components/common/Card/Card";
import { Slider } from "@/components/common/Slider/Slider";
import { useState, useEffect } from "react";

type Props = {
    slug: string;
}

export const BlogDetail = ({ slug }: Props) => {
    const [formattedDate, setFormattedDate] = useState("");
    const t = useTranslations("pages.blogDetail");
    const { image, title, text, owner, createdAt, sections, similar, textOwner, textSimilar } = getFullBlog(t, slug);

    useEffect(() => {
        const date = new Date(createdAt);
        setFormattedDate(date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }));
    }, [createdAt]);

    return (
        <div className="text-gray1">
            <div className={clsx("relative rounded-xl shadow-gray-600 shadow-lg", "lg:max-h-[42rem]")}>
                <Image src={image} alt="newImage" width={1000} height={300} className={clsx("w-full -z-10 rounded-xl min-h-[32rem]", "lg:max-h-[42rem]")} loading="lazy" />
            </div>
            <h2 className={"text-[min(6vw,56px)] font-black mt-16 mb-4"}>{title}</h2>
            <span className={"inline-block text-gray2 text-2xl lg:text-3xl mb-8"}>{formattedDate}</span>
            <p className={"text-base !leading-[22px] md:!leading-[26px] md:text-[18px] lg:text-xl lg:!leading-[32px]"}>{text}</p>
            <div className="mb-8">
                {
                    sections.map(({ id, text, title, image }) =>
                    (
                        <div key={id} className="my-8 lg:my-16">
                            <h3 className={clsx("text-2xl lg:text-3xl my-4")}>{title}</h3>
                            <p className={"text-base !leading-[22px] md:!leading-[26px] md:text-[18px] lg:text-xl lg:!leading-[32px] my-4"}>{text}</p>
                            {image && <Image src={image} alt={`image`} height={236.243} width={400} className="w-full" />}
                        </div>
                    ))
                }
            </div>
            <p className="text-xl lg:text-3xl font-bold">{textOwner} {owner}</p>
            <h3 className={clsx("text-[24px] text-blue1 font-bold my-4", "lg:text-3xl")}>{textSimilar}</h3>
            {/* Mobile Similar */}
            <Slider actualPointColor="#64d2d9" className={clsx("mb-20", "md:hidden")}>
                {similar.map(({ id, ...card }) => (
                    <div key={id} className="w-full flex justify-center">
                        <Card
                            {...card}
                            image={card.image}
                            url={card.url ?? "#"}
                            categories={card.categories ?? []}
                        />
                    </div>
                ))}
            </Slider>
            {/* Desktop Similar */}
            <div
                className={clsx(
                    "hidden",
                    "md:flex md:justify-between md:flex-wrap md:mt-4"
                )}
            >
                {similar.map(({ id, ...card }) => (
                    <Card
                        key={id}
                        {...card}
                        className={clsx("md:w-[49%]", "lg:w-[32%]")}
                    />
                ))}
            </div>
        </div>
    )
}