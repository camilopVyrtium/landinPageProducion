"use client";
import { useId, useRef, useState } from "react";
import Image from "next/image";
import { point, back, next } from "@/data/commonData";
import clsx from "clsx";
import { ActualPoint } from "@/components/common/Slider/ActualPoint";

type Props = {
  children: React.ReactNode[];
  actualPointColor?: string;
  className?: string;
};

export const Slider = ({
  children,
  className,
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
      const scroll = Math.abs(((scrollWidth - scrollLeft) / (unitSize)) - length)
      setActual(scroll);
    }
  }
  return (
    <div className={clsx(className, "my-4 max-w-full")}>
      {" "}
      <div className="flex gap-4">
        {" "}
        <Image
          src={back}
          alt="back"
          width={50}
          height={50}
          className={clsx("cursor-pointer hidden", "md:block")}
          onClick={() => {
            toogleSlide(isFirst ? children.length - 1 : actual - 1);
          }}
        />
        <div className="overflow-x-scroll" style={{ scrollbarWidth: 'none' }}>
          {" "}
          <ol
            className={clsx(
              `overflow-x-scroll flex duration-200 w-full snap-mandatory snap-x scroll-smooth`
            )}
            ref={$slides}
            style={{ scrollbarWidth: 'none', }}
            dir="ltr"
            id={id}
          >
            {" "}
            {children.map((child, index) => (
              <li key={`slide-${index}`} className="flex-none w-full snap-center">
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
          className={clsx("cursor-pointer hidden", "md:block")}
          onClick={() => {
            toogleSlide(isLast ? 0 : actual + 1);
          }}
        />
      </div>
      <div className={clsx("flex justify-center gap-4 mt-4 mx-4")}>
        {" "}
        {children.map((_, index) => {
          return (
            <div key={`point-${index}`}>
              {index === actual ? (
                <ActualPoint color={actualPointColor} />
              ) : (
                <Image
                  src={point}
                  alt="point"
                  className="cursor-pointer w-auto"
                  onClick={() => {
                    toogleSlide(index);
                  }}
                  width={20}
                  height={20}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
