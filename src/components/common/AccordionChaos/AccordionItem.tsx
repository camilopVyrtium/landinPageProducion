"use client";

import clsx from "clsx";
import Image from "next/image";
import { down } from "@/data/commonData";
import { CSSProperties, useState } from "react";
import Button from "@/components/common/Button";
import { ButtonVariant } from "@/interfaces/common/Button";
type Props = {
  title: string;
  className?: string;
  classNameTitle?: string;
  styleTitle?: CSSProperties;
  varianButton: ButtonVariant;
  index: number;
  href: string;
  openIndex?: number | null;
  setOpenIndex?: (index: number | null) => void;
  children: React.ReactNode;
  configLine: {
    src: string;
    className: string;
    translateY: boolean;
  };
};

export const AccordionItem = ({
  title,
  className,
  classNameTitle,
  styleTitle,
  varianButton,
  index,
  openIndex,
  setOpenIndex,
  children,
  configLine,
  href,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (setOpenIndex) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const isItemOpen = openIndex !== undefined ? openIndex === index : isOpen;

  return (
    <div className={clsx("relative", className)}>
      {/* Título del Acordeón */}
      <div
        className={clsx(
          "flex items-center justify-end md:justify-center cursor-pointer w-screen relative transition-transform duration-300 ease-in-out",
          isItemOpen && configLine.translateY
            ? "-translate-y-4"
            : "translate-y-0",
          classNameTitle
        )}
        style={styleTitle}
      >
        <div
          className="group z-50 py-4 flex items-center h-full justify-between pr-8 md:pr-0 md:w-[40%] w-[70%] cursor-pointer transition-transform duration-300 ease-in-out"
          onClick={handleClick}
        >
          <p className="md:text-3xl text-lg font-medium group-hover:font-bold text-center">
            {title}
          </p>
          <Image
            loading="lazy"
            src={down}
            alt="down-icon"
            className={clsx(
              "transition-transform duration-300 ease-in-out md:w-[30px] w-[20px] select-none",
              isItemOpen ? "rotate-180" : "rotate-0"
            )}
            width={15}
            height={15}
          />
        </div>

        <Image
          src={configLine.src}
          alt="Background pattern"
          className={clsx(
            configLine.className,
            "pointer-events-none md:h-auto select-none z-0"
          )}
          width={100}
          height={100}
          priority
        />
      </div>

      {/* Contenido del Acordeón */}
      <div
        className={clsx(
          "transition-all duration-300 ease-in-out w-screen flex justify-center items-center overflow-hidden",
          isItemOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className={clsx(
            "flex z-20 flex-col px-4 bg-transparent md:flex-row md:justify-between items-center gap-4 md:pt-4 md:w-[50%] w-[80%] md:ml-[10%] ml-[10%]",
            "transition-all duration-300",
            isItemOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="flex-1">{children}</div>
          <Button
            href={href}
            variant={varianButton}
            className={clsx(
              "transition-all duration-300 ease-in-out",
              isItemOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
          >
            Conoce más
          </Button>
        </div>
      </div>
    </div>
  );
};
