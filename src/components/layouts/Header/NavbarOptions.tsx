"use client";

import { Link } from "@/i18n/navigation";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ArrowDown from "@/components/icons/ArrowDown";
import { menuOptions } from "@/data/layoutData";
import Button from "@/components/common/Button";

export default function NavbarOptions({ activePath }: { activePath: string }) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const t = useTranslations("layout.header");

  useEffect(() => {
    const closeDropdowns = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest(".relative")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav>
      <ul className="flex items-start gap-[1rem] sm:gap-[1.2rem]  md:gap-[1rem] xl:gap-[2rem] 2xl:gap-[6rem]">
      {menuOptions.map((option, index) => (
          <li
            key={option.title}
            className={option.subOptions ? "relative" : ""}
          >
            {option.subOptions ? (
              <>
                <Button
                  className="w-[200px] flex justify-between items-center font-bold"
                  onClick={() => handleDropdownToggle(index)}
                  variant={openDropdown === index ? "secondary" : "transparent"}
                >
                  {t(option.title)}
                  <ArrowDown className="text-inherit w-[12px] h-[7px]" />
                </Button>
                {openDropdown === index && (
                  <ul className="bg-[--blue1] shadow-lg text-white rounded-br-lg px-2 w-[200px] pb-2">
                    {option.subOptions.map((subOption) => (
                      <li key={subOption.title}>
                        <Link
                          href={subOption.endpoint}
                          className="block hover:bg-[--blue2] border-b border-white"
                        >
                          {t(subOption.title)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
                <Button
                  className="pt-2 mt-2 text-sm 2xl:text-xl 3xl:text-3xl font-bold"
                  variant={
                    activePath === option.endpoint ? "secondary" : "transparent"
                  }
                  href={option.endpoint}
                  linkComponent={Link}
                >
                  {t(option.title)}
                </Button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
