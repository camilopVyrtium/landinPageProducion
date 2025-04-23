import { useTranslations } from "next-intl";
import Image from "next/image";

export const DigitalCaos = () => {
  const t = useTranslations("pages.homePage.digitalCaos");

  return (
    <div
      className="pt-4 md:pb-10 w-full md:px-12 md:px-32 flex flex-col gap-4"
      id="digital-caos"
    >
      <h2 className="w-full text-3xl font-black text-[--red1] mt-2 w-80 mb-6 md:text-5xl px-4">
        {t("section1.title")}
      </h2>
      <Image
        src="/images/home/digitalCaos.svg"
        alt="Digital Caos"
        className="max-w-full w-full mb-6"
        width={1676}
        height={335}
      />
      <h2 className="w-full text-3xl font-black text-[--red1] mt-2 w-80 mb-4 md:text-5xl px-4">
        {t("section2.title")}
      </h2>
      <p className="font-normal text-[--gray2] text-xl md:text-3xl px-4">
        <span>
          {t.rich("section2.description", {
            bold: (text) => (
              <strong className="font-bold text-black text-2xl md:text-4xl">{text}</strong>
            ),
          })}
        </span>
      </p>
    </div>
  );
};



