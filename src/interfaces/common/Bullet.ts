import { StaticImageData } from "next/image";

export interface Bullet {
    title: string;
    description: string;
    icon?: string | StaticImageData;
    accordion?: boolean;
    className?: string
    classNameContent?: string;
    classNameDescription?: string;
    backgroundImage?: string;
    size?: 'sm' | 'lg'
}