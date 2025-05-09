import { ProfitIcons } from "@/constants/profitIcons";
import { StaticImageData } from "next/image";

export interface Cite {
    text: string;
    owner: string;
    job: string;
}

export interface Profit {
    id: string;
    icon: ProfitIcons;
    text: string;
}
export interface Result {
    id: number;
    title: string;
    text: string;
    cite: Cite;
    image: string | StaticImageData;
    color?: string;
    textColor?: string;
    profits: Profit[];
}
export interface OurResults {
    title: string;
    separator: string;
    results: Result[];
}
