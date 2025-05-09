"use client";

import Image from "next/image";
import NavbarOptions from "@/components/layouts/Header/NavbarOptions";
import { usePathname } from "@/i18n/navigation";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import { useTranslations } from "next-intl";
import MobileSidebar from "@/components/layouts/Header/MobileSidebar";
import menuBurger from '@/assets/icons/icon-menu.svg'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("layout.header");
  const [isOpen, setIsOpen] = useState(false);

  const buttonProps = {
    variant: "primary" as const,
    showModalContact: true,
    className: "pt-2 mt-2 2xl:text-2xl 3xl:text-3xl font-bold"
  };

  return (
    <>
      {/* version de escritorio */}
      <header className="z-50 fixed top-0 w-full backdrop-blur-lg bg-[--yellow4] pb-12 pt-6 justify-center items-start gap-20 max-[120rem] hidden lg:flex shadow-md">
        <Link href={'/'}>
          <Logo width={200} height={200} className="md:w-[150px] w-[100px]" />
        </Link>
        <NavbarOptions activePath={pathname} />
        <Button {...buttonProps}>
          {t("contact")}
        </Button>
      </header>
      {/* version de celular */}
      <header className="px-4 block lg:hidden">
        <div className="p-4 flex items-center justify-between">
          <Link href={'/'}>
            <Logo width={150} height={100} />
          </Link>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Image
              src={menuBurger}
              alt="Logo"
              width={38}
              height={38}
            />
          </button>
        </div>
      </header>

      {/* mobile left menu */}
      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
