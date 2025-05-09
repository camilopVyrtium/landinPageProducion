import clsx from "clsx";
import Image from "next/image";
import { Bullet as BulletModel } from "@/interfaces/common/Bullet";
import { down } from '@/data/commonData';
import dataAnalitycs from '@/assets/icons/data-analitycs.svg';
type Props = BulletModel;
export const Bullet = ({
    title,
    description,
    className,
    classNameContent,
    classNameDescription,
    backgroundImage,
    icon = undefined,
    accordion = true,
    size = 'sm'
}: Props) => {
    return (
        <div
            className={
                clsx(
                    "group",
                    (accordion && size === 'lg') ? "md:min-h-72 md:w-60" : "md:w-60",
                    accordion || (size == 'lg' ? "lg:min-h-24 lg:mx-4 lg:w-64" : "md:min-h-72 md:w-60"),
                    className
                )
            }
            style={{ backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none', backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
            <div className={clsx(
                classNameContent,
                "h-full w-full",
                accordion && `bullet bullet-${size}`,
                "flex flex-col items-center cursor-pointer px-4 gap-3",
                accordion ? "justify-center" : "justify-evenly",

            )}>
                {accordion && (size === 'sm' || size === 'lg' ? <>
                    <Image src={icon || dataAnalitycs} alt="data-analitycs" width={70} height={70} className="lg:group-hover:w-[50px] lg:group-hover:h-[50px]" />
                    <Image loading="lazy" src={down} alt="down-image" className={clsx("down", "max-lg:hidden")} width={40} height={23} />
                </> : "")}
                <h3 className={clsx("text-xl font-bold text-center")}>{title}</h3>
                <p className={clsx(classNameDescription, "text-[clamp(14px,3.5vw,18px)] leading-[clamp(22px,3.5vw+8pdx,26px)] pointer-events-none md:leading-[26px] whitespace-pre-line", size === 'lg' ? `md:text-[clamp(14px,1.2vw,18px)]` : `md:text-[clamp(14px,1vw,20px)]`, accordion && "lg:max-h-0 lg:opacity-0")}>
                    {description}
                </p>
            </div>
        </div>
    )
}