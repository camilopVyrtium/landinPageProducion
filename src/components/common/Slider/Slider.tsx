"use client";
import { useId, useRef, useState } from "react";
import Image from "next/image";
import { point, back, next } from "@/data/commonData";
import clsx from "clsx";
import { CustomActualPoint } from "./CustomActualPoint";

type Props = {
  children: React.ReactNode[];
  actualPointColor?: string;
  className?: string;
  classNameContent?: string;
};

export const Slider = ({
  children,
  className,
  classNameContent,
  actualPointColor = "#FF5143",
}: Props) => {
  const [actual, setActual] = useState(0);
  const isLast = actual === children.length - 1;
  const isFirst = actual === 0;
  const id = useId();
  const $slides = useRef<HTMLOListElement>(null);
  const toogleSlide = (index: number) => {
    const { scrollWidth } = $slides.current!;
    const { length } = children;
    const unitSize = scrollWidth / length;
    const $slideList = document.querySelector(`#${id}`);
    console.log(unitSize * index);

    if ($slideList)
      $slideList.scrollLeft = unitSize * index;
    setActual(index);
  };
  if ($slides.current) {
    $slides.current.onscrollend = (e: Event) => {
      const { scrollWidth, scrollLeft } = e.target as HTMLOListElement;
      const { length } = children;
      const unitSize = scrollWidth / length;
      const scroll = parseInt("" + Math.round(Math.abs(((scrollWidth - scrollLeft) / (unitSize)) - length)))
      setActual(scroll);
    }
  }
  return (
    <div className={clsx(className, "my-4 max-w-full")}>
      <div className="flex gap-4 items-center">
        <Image
          src={back}
          alt="back"
          width={50}
          height={50}
          className={clsx("cursor-pointer hidden h-fit", "md:block")}
          onClick={() => {
            toogleSlide(isFirst ? children.length - 1 : actual - 1);
          }}
        />
        <div className={clsx(classNameContent, "overflow-x-scroll")} style={{ scrollbarWidth: 'none' }}>
          <ol
            className={clsx(
              `overflow-x-scroll flex duration-200 w-full snap-mandatory snap-x scroll-smooth [scrollbar-width:none] h-full`
            )}
            ref={$slides}
            dir="ltr"
            id={id}
          >
            {children.map((child, index) => (
              <li key={`slide-${index}`} className="flex-none w-full snap-center h-fit max-h-full">
                {child}
              </li>
            ))}
          </ol>
        </div>
        <Image
          src={next}
          alt="next"
          width={50}
          height={50}
          className={clsx("cursor-pointer hidden h-fit", "md:block")}
          onClick={() => {
            toogleSlide(isLast ? 0 : actual + 1);
          }}
        />
      </div>
      <div className={clsx("flex justify-center gap-2 mt-4 mx-4")}>
        {" "}
        {children.map((_, index) => {
          return (
            <div key={`point-${index}`}>
              {index === actual ? (
                <CustomActualPoint actualPointColor={actualPointColor} />
              ) : (
                <Image
                  src={point}
                  alt="point"
                  className="cursor-pointer w-[15px]"
                  onClick={() => {
                    console.log("Index point", { index })
                    toogleSlide(index);
                  }}
                  width={15}
                  height={15}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
