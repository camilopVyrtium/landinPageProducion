import clsx from "clsx";
import Button from "@/components/common/Button";
import { ButtonVariant } from "@/interfaces/common/Button";

type Props = {
    title: string;
    text: string;
    button: {
        variant: ButtonVariant;
        text: string;
        href: string;
    };
    className?: string;
};
export const SectionNew2 = ({ title, text, button, className }: Props) => {
    const { text: buttonText, ...buttonProps } = button;
    return (
        <>
            <div className={clsx("absolute bottom-0 w-full h-1/2 overflow-hidden hidden section-new-lg", "md:block", className)}>
                <div className={clsx("rounded-sm  max-h-full w-[64%] ml-4 min-[1460px]:w-[49%]")}>
                    <h2 className={clsx("text-[22px] font-bold w-2/3 mb-2", "md:text-3xl", "lg:text-4xl my-8")}>
                        {title}
                    </h2>
                    <p className={clsx("text-base max-h-[150px] !leading-[22px]", "md:text-2xl md:!leading-[32px]", "lg:max-h-none")}>
                        {text}
                    </p>
                </div>
                <Button {...buttonProps} className="absolute bottom-8 right-3">{buttonText}</Button>
            </div>
            <div className={clsx("absolute bottom-0 w-full h-[58%] overflow-hidden block md:hidden", "section-new-sm", className)}>
                <div className={clsx("rounded-sm  max-h-full w-[64%] ml-7")}>
                    <h2 className={clsx("text-[24px] !leading-[32px] font-bold w-2/3 mb-2", "md:text-3xl md:!leading-[36px]", "my-8")}>
                        {title}
                    </h2>
                    <p className={clsx("text-base max-h-[150px] !leading-[22px]", "md:text-2xl md:!leading-[32px]", "lg:max-h-none")}>
                        {text}
                    </p>
                </div>
                <Button {...buttonProps} className="absolute bottom-2 right-3 text-base min-h-[auto]">{buttonText}</Button>
            </div>
        </>
    );
};
