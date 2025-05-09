import { useTranslations } from "next-intl";
import Image from "next/image";
import digitalChaos from '@/assets/images/home/digitalCaos.svg';
export const DigitalCaos = () => {
  const t = useTranslations("pages.homePage.digitalCaos");

  return (
    <div
      className="mt-4 mb-4 md:mb-10 w-[85%] md:w-[80%] mx-auto flex flex-col gap-2"
      id="digital-caos"
    >
      <h2 className="w-full text-[24px] font-black text-[--red1] md:mt-2 mb-4 md:mb-6 md:text-[clamp(24px,3.5vw,48px)] lg:text-5xl">
        {t("section1.title")}
      </h2>
      <Image
        src={digitalChaos}
        alt="Digital Caos"
        className="max-w-full w-full mb-2 md:mb-6"
        width={1676}
        height={335}
      />
      <h2 className="w-full text-[24px] font-black text-[--red1]  md:mt-2 md:mb-4 lg:text-5xl">
        {t("section2.title")}
      </h2>
      <p className="font-normal text-gray2 text-[clamp(14px,3.5vw,18px)] leading-[clamp(22px,3.5vw+8px,26px)] lg:text-3xl lg:leading-[38px]">
        {t.rich("section2.description", {
          bold: (text) => (
            <strong className="font-bold text-gray2">{text}</strong>
          ),
        })}
      </p>
    </div>
  );
};



