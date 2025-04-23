import clsx from "clsx";
import Image from "next/image";
import { Bullet as BulletModel } from "@/interfaces/common/Bullet";
import { down } from '@/data/commonData';
type Props = BulletModel;
export const Bullet = ({ title, description, className, classNameContent, backgroundImage, accordion = true, size = 'sm' }: Props) => {
    return (
        <div
            className={
                clsx(
                    (accordion && size === 'lg') ? "md:min-h-72 md:w-60" : "md:w-60",
                    accordion || (size == 'lg' ? "lg:min-h-24 lg:mx-4 lg:w-64" : "md:min-h-72 md:w-60"),
                    className
                )
            }
            style={{ backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none', backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
            <div className={clsx(
                "h-full w-full",
                accordion && `bullet bullet-${size}`,
                "flex flex-col items-center cursor-pointer px-4",
                accordion ? "justify-center" : "justify-evenly",
                classNameContent
            )}>
                {accordion && (size === 'sm' ? <Image loading="lazy" src={down} alt="down-image" className={clsx("down", "max-lg:hidden")} width={40} height={23} /> : "")}
                <h3 className={clsx("text-3xl font-black mb-1 text-center", "md:text-xl")}>{title}</h3>
                <p className={clsx("text-2xl pointer-events-none", "md:text-xl", accordion && "lg:h-0 lg:opacity-0")}>
                    {description}
                </p>
            </div>
        </div>
    )
}