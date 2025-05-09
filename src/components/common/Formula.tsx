import { bullets } from "@/data/commonData";
import clsx from "clsx";
import { Bullet } from "@/components/common/Bullet";
import Logo from "@/components/common/Logo";

type Props = {
    className?: string;
}
export const Formula = ({ className }: Props) => {
    return (
        <div className={clsx(className, "flex flex-col mt-2 flex-wrap", "md:flex-row md:justify-start md:items-center md:gap-[2.5vw]", "lg:h-[20rem]")}>
            {
                bullets.map((props, index) => {
                    const isLast = bullets.length - 1 === index;
                    return (
                        <div className={clsx("flex flex-col items-center my-2", "md:flex-row", "lg:gap-4", "md:min-h-[clamp(140px,10vw,300px)]")} key={`digital-bullet-${index}`}>
                            <Bullet
                                {...props}
                                classNameDescription="text-[clamp(14px,3.5vw,18px)] leading-[clamp(22px,3.5vw+8px,26px)]"
                                className="border rounded-lg border-blue1 py-2 -tracking-[0.8px]" />
                            <div className={clsx("text-5xl font-black", "md:mx-3", "lg:mt-6")}>{!isLast ? "+" : "="}</div>
                        </div>
                    )
                }
                )
            }
            <Logo className={clsx("mt-4 max-w-full mx-auto", "md:ml-8")} width={286} height={80} />
        </div>
    )
}