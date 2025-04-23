import { StaticImageData } from "next/image";

export interface CardCategory {
    icon?: string;
    category: string;
}

export interface Card {
    image: string | StaticImageData;
    title: string;
    text: string;
    url?: string;
    categories?: CardCategory[];
}