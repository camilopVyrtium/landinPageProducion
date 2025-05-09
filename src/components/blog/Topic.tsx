import clsx from "clsx";
import { TopicCard as CardModel } from "@/interfaces/common/TopicCard";
import Image from "next/image";
import { Slider } from "@/components/common/Slider/Slider";
import { Card } from "@/components/common/Card/Card";
import separatorTopic from '@/assets/images/blog/separatorTopic.svg';
type Props = {
  title: string;
  filterCard: string;
  cards: (CardModel & { id: string | number; date?: string })[];
};
export const Topic = ({ title, cards, filterCard }: Props) => {
  const filterCards = cards.filter(({ title, text }) => {
    if (filterCard.trim().length === 0) return true;
    return title.concat(" ", text).toLowerCase().includes(filterCard.toLowerCase());
  });
  return (
    <div>
      <div className="relative my-8">
        <h3 className="text-xl md:text-3xl md:!leading-[32px] text-[--blue1] font-bold absolute bottom-1 left-[17vw] block ">
          {title}
        </h3>
        <Image
          src={separatorTopic}
          alt="separatorTopic"
          className="my-4 w-full"
          width={1920}
          height={75}
        />
      </div>
      <Slider actualPointColor="#64d2d9" className={clsx("mb-20", "md:hidden")}>
        {filterCards.map(({ id, ...card }) => (
          <div key={id} className="w-full flex justify-center">
            <Card
              {...card}
              image={card.image}
              url={card.url}
              categories={card.categories}
            />
          </div>
        ))}
      </Slider>
      <div
        className={clsx(
          "hidden",
          "md:flex md:justify-between md:flex-wrap md:mt-4"
        )}
      >
        {filterCards.map(({ id, ...card }) => (
          <Card
            key={id}
            {...card}
            image={card.image}
            url={card.url}
            categories={card.categories ?? []}
            className={clsx("max-w-full", "md:w-[49%]", "lg:w-[32%]")}
          />
        ))}
      </div>
    </div>
  );
};
