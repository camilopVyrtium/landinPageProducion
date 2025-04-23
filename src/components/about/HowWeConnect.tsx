"use client"

//En este cp,
import { howWeConnect } from "@/data/aboutData"
import { cite } from "@/data/commonData";
import { useTranslations } from "next-intl";
import Image from "next/image"
import { ExperienceSeparator } from "./ExperienceSeparator";
import { EndSeparator } from "./EndSeparator";

export const HowWeConnect = () => {
    const t = useTranslations('pages.about.howWeConnect');

    const { getSection, getTestimonial } = howWeConnect;
    const testimonial = getTestimonial(t);
    const section = getSection(t);
    return (
        <div id="asi-nos-conectamos" className="max-w-[1920px]">
            <div className="relative">
                <div className="relative my-8">
                    <h2 className="text-blue1 font-black text-2xl absolute left-1/4 md:text-4xl md:bottom-[37px] lg:left-[29%]">{testimonial.title}</h2>
                    <ExperienceSeparator className="w-full" />
                </div>
                <div className="flex flex-col justify-center items-center relative gap-1 md:flex-row-reverse">
                    <div className="flex flex-col text-gray1 text-xl relative mx-4 md:w-1/2 md:mx-0">
                    <p className="italic text-2xl md:text-[2.5vw] lg:text-3xl">
                    {t.rich('testimonial.text', {
                        bold: (text) => <strong className="font-bold">{text}</strong>,
                      })}
                    </p>
                        <div className="flex flex-col my-4 z-10">
                            <strong className="text-xl md:text-[2vw] lg:text-2xl">{testimonial.owner}</strong>
                            <span className="text-xs md:text-[1.5vw] lg:text-xl">{testimonial.profession}</span>
                        </div>
                        <Image src={cite} alt='cite' className="absolute right-1 w-48 top-auto md:-top-8" width={64} height={64} />
                    </div>
                    <Image src={testimonial.image} alt="owner" width={986} height={949} className="w-[469.906px] mr-[16vw] md:w-[32rem] md:mr-[0]" />
                </div>
                <EndSeparator className="w-full relative -top-[11vw] md:-top-[9vw] lg:-top-[6.5rem]" />
            </div>
            <div className="my-16 mx-24 md:mb-16">
                <h2 className="text-blue1 font-black text-3xl md:text-4xl">{section.title}</h2>
                <p className="text-xl my-10 md:text-2xl">{section.text}</p>
            </div>
        </div>
    )
}