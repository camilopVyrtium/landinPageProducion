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
};
export const SectionNew = ({ title, text, button }: Props) => {
  const { text: buttonText, ...buttonProps } = button;
  return (
    <div className="section-new absolute bottom-0 h-full max-h-full">
      <div
        className={clsx(
          "section-new-l pl-5 pr-[16%] text-[--gray3] max-h-full",
          "md:pr-[30%]"
        )}
      >
        <h2
          className={clsx(
            "text-2xl font-bold w-2/3 mb-2",
            "md:text-3xl",
            "lg:text-4xl my-8"
          )}
        >
          {title}
        </h2>
        <p
          className={clsx("text-xl", "md:text-2xl", "lg:text-2xl 2xl:text-3xl")}
        >
          {text}
        </p>
      </div>
      <div className="section-new-r flex items-center justify-center">
        <Button {...buttonProps}>{buttonText}</Button>
      </div>
    </div>
  );
};
