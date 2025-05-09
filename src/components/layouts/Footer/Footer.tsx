"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import phone from '@/assets/icons/phone.svg';
import mail from '@/assets/icons/mail.svg';
import location from '@/assets/icons/location.svg';
import Link from "next/link";
export default function Footer() {
  const t = useTranslations("layout.footer");

  return (
    <footer className="bg-[--gray2] bg-[url('/images/footer-bg.svg')] bg-cover grid md:grid-rows-2 grid-rows-1 pt-8 gap-8 w-full">
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
      <div className="flex flex-col md:flex-row justify-center items-center pb-20 3xs:px-4 xs:px-8 sm:px-20 gap-12">
        <Link href={'/'}>
          <Logo
            className="w-fit"
            width={150}
            variant="secondary"
          />
        </Link>
        <div className="flex flex-col gap-2 items-start max-w-full overflow-hidden">
          <div className="flex gap-2 w-full">
            <Image
              src={location}
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
              src={mail}
              alt="email"
              width={20}
              height={20}
              className="min-w-[20px]"
            />
            <Link href='maito:contact@vyrtium.com' className="text-white 3xs:text-xs xs:text-sm md:text-2xl font-bold break-words">
              {t("email")}
            </Link>
          </div>
          <div className="flex gap-2 w-full">
            <Image
              src={phone}
              alt="phone"
              width={20}
              height={20}
              className="min-w-[20px]"
            />
            <Link href='tel:+601 9277439' className="text-white 3xs:text-xs xs:text-sm md:text-2xl font-bold break-words">
              {t("phone")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
