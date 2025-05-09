import clsx from "clsx";

type Props = {
    actualPointColor: string;
    className?: string;
}
export const CustomActualPoint = ({ actualPointColor, className }: Props) => {
    console.log({ actualPointColor });
    return (
        <div className={clsx(className, `h-[15px] w-[45px] rounded-[6rem]`)} style={{ backgroundColor: actualPointColor }}></div>
    )
}