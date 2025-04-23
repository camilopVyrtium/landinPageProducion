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
                    <h2 className={clsx("text-2xl font-bold w-2/3 mb-2", "md:text-3xl", "lg:text-4xl my-8")}>
                        {title}
                    </h2>
                    <p className={clsx("text-xl h-[13vw] overflow-x-scroll", "md:text-2xl", "lg:text-2xl 2xl:text-3xl")}>
                        {text}
                    </p>
                </div>
                <Button {...buttonProps} className="absolute bottom-8 right-3">{buttonText}</Button>
            </div>
            <div className={clsx("absolute bottom-0 w-full h-[58%] overflow-hidden block md:hidden", "section-new-sm", className)}>
                <div className={clsx("rounded-sm  max-h-full w-[64%] ml-4")}>
                    <h2 className={clsx("text-2xl font-bold w-2/3 mb-2", "md:text-3xl", "lg:text-4xl my-8")}>
                        {title}
                    </h2>
                    <p className={clsx("text-xl max-h-[145px]", "md:text-2xl", "lg:text-2xl 2xl:text-3xl")}>
                        {text}
                    </p>
                </div>
                <Button {...buttonProps} className="absolute bottom-2 right-3">{buttonText}</Button>
            </div>
        </>
    );
};
