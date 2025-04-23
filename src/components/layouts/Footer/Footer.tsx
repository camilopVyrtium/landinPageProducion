"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";

export default function Footer() {
  const t = useTranslations("layout.footer");

  return (
    <footer className="bg-[--gray2] bg-[url('/images/common/footer-bg.svg')] bg-cover grid md:grid-rows-2 grid-rows-1 pt-16 gap-10 md:gap-20 w-full">
      <div className="flex flex-col gap-5 justify-center items-center w-full px-4">
        <div className="max-w-[300px] 2xs:max-w-[400px] sm:max-w-full">
          <p className="text-white 3xs:text-xs 2xs:text-sm xs:text-base sm:text-2xl md:text-5xl font-extrabold text-center">
            {t("title")}
          </p>
          <p className="text-white 3xs:text-[10px] 2xs:text-xs xs:text-sm sm:text-xl md:text-4xl font-bold text-center mt-2">
            {t("description")}
          </p>
        </div>
        <Button variant="primary" showModalContact>{t("button")}</Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:items-start items-center pb-20 3xs:px-4 xs:px-8 sm:px-20 justify-between gap-5 md:gap-0">
        <Logo 
          className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[314px]" 
          width={314} 
          height={200} 
          variant="secondary" 
        />
        <div className="flex flex-col gap-2 items-start max-w-full overflow-hidden">
          <div className="flex gap-2 w-full">
            <Image
              src="/icons/location.svg"
              alt="location"
              width={20}
              height={20}
              className="min-w-[20px]"
            />
            <p className="text-white 3xs:text-xs xs:text-sm md:text-2xl font-bold break-words">
              {t("address")}
            </p>
          </div>
          <div className="flex gap-2 w-full">
            <Image 
              src="/icons/mail.svg" 
              alt="email" 
              width={20} 
              height={20}
              className="min-w-[20px]"
            />
            <p className="text-white 3xs:text-xs xs:text-sm md:text-2xl font-bold break-words">
              {t("email")}
            </p>
          </div>
          <div className="flex gap-2 w-full">
            <Image 
              src="/icons/phone.svg" 
              alt="phone" 
              width={20} 
              height={20}
              className="min-w-[20px]"
            />
            <p className="text-white 3xs:text-xs xs:text-sm md:text-2xl font-bold break-words">
              {t("phone")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
