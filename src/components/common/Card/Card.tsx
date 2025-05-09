import { Card as CardModel } from "@/interfaces/common/Card";
import Image from "next/image";
import { CategoryCard } from "@/components/common/Card/CategoryCard";
import Button from "@/components/common/Button";
import clsx from "clsx";

type Props = CardModel & { className?: string };
export const Card = ({ image, title, text, url = "#", categories = [], className }: Props) => {
  return (
    <div className={clsx("flex flex-col rounded-xl bg-[--blue1] m-1 mb-3 rounded-t-2xl shadow-gray-600 shadow-lg", className)}>
      <div className="flex flex-col relative">
        <Image
          src={image}
          alt={title}
          loading="lazy"
          className="w-full rounded-t-2xl h-[270px]"
          width={400}
          height={240}
        />
        <div className="absolute flex w-full bottom-1 right-1 justify-end">
          {
            categories.map((category, index) => <CategoryCard {...category} key={`category-${index}`} />
            )}
        </div>
      </div>
      <div className="my-3 mx-7 text-[--gray3] flex flex-col h-full justify-between gap-3">
        <h3 className="text-[24px] !leading-[28px] font-bold inline-block">{title}</h3>
        <p className="text-base !leading-[22px] md:text-[20px]">
          {text}
        </p>
        <Button variant="transparent"
          className={clsx("flex place-self-end border rounded-b-lg text-[--gray3] border-[--gray3] text-base min-h-[auto]", "hover:text-[--gray3]")}
          href={url}>
          Ver más
        </Button>
      </div>

    </div>
  );
};
