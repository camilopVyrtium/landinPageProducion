import { ButtonVariant } from "@/interfaces/common/Button";
import { StaticImageData } from "next/image";

interface CardBlog {
  id: number;
  title: string;
  text: string;
  categories: {
    icon: string;
    category: string;
  }[];
  image: string;
  url: string;
}

interface CardCategory {
  icon?: string;
  category: string;
}

export interface New {
  id: number | string;
  title: string;
  text: string;
  image: string;
  button: {
    variant: ButtonVariant;
    text: string;
    href: string;
  };
}

export interface Card {
  image: string | StaticImageData;
  title: string;
  text: string;
  url: string;
  categories: CardCategory[];
}

export interface Blog {
  title: string;
  separator: string;
  news: New[];
  cards: CardBlog[];
}

export interface Topic {
  id: string | number;
  title: string;
  cards: (Card & { id: string | number })[];
  image: string;
  url: string;
}
