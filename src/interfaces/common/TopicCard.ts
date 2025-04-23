import { StaticImageData } from "next/image";
import { CardCategory } from "./Card";

export interface TopicCard {
  id: string | number;
  date?: string;
  title: string;
  text: string;
  image: string | StaticImageData;
  url?: string;
  categories?: CardCategory[];
}

export interface Topic {
  id: string | number;
  title: string;
  cards: (TopicCard & { id: string | number })[];
  image: string;
  url: string;
}
