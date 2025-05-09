import { ProfitIcons } from "@/constants/profitIcons";
import clsx from "clsx";
import { Cinema } from "./Cinema";
import { Design } from "./Design";
import { RRS } from "./RRS";
import { WebDevelopment } from "./WebDevelopment";
import { MediaStrategy } from "./MediaStrategy";

type Props = {
    className?: string;
    classNameIcon?: string;
    text: string;
    color?: string;
    icon: ProfitIcons;
}
export const Profit = ({ icon, text, className, classNameIcon, color = '#FF5143' }: Props) => {
    const profits: Record<ProfitIcons, React.ReactNode> = {
        [ProfitIcons.CINEMA]: <Cinema color={color} className={classNameIcon} />,
        [ProfitIcons.DESIGN]: <Design color={color} className={classNameIcon} />,
        [ProfitIcons.RRS]: <RRS color={color} className={classNameIcon} />,
        [ProfitIcons.WEB_DEVELOPMENT]: <WebDevelopment color={color} className={classNameIcon} />,
        [ProfitIcons.MEDIA_STRATEGY]: <MediaStrategy color={color} className={classNameIcon} />
    }

    return (
        <div className={clsx(className, "flex items-center z-10 gap-4", "lg:gap-0")}>
            {profits[icon]}
            <p className={clsx("lg:text-2xl", "", "")}>{text}</p>
        </div>
    )
}