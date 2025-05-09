import Image from "next/image"
import banner from '@/assets/images/our-process-catalog/contact-form/banner.png'
import { useTranslations } from "next-intl";
export const Contact = () => {
    const t = useTranslations("pages.ourProcessCatalog.contactForm");
    return (
        <div className="relative flex justify-center">
            <div className="relative flex flex-col items-start justify-start">
                <h2 className="text-red1 font-black text-[max(20px,4.5vw)] md:text-[clamp(35px,4vw,56px)]">
                    {t("title_1")}
                </h2>
                <h2 className="text-gray3 font-black text-[max(16px,4.4vw)] md:md:text-[clamp(22px,4vw,54px)] whitespace-pre-line">
                    {t("title_2")}
                </h2>
            </div>
            <Image
                width={200}
                height={100}
                className="h-auto md:w-[20rem] w-[clamp(8rem,40vw,20rem)]"
                alt="Contact form image"
                src={banner}
            />
        </div>
    )
}