import { Video } from "@/components/common/Video";
import { Cite as CiteModel } from "@/interfaces/common/Cite";
import { StaticImageData } from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Cite } from "./Cite";
import { OurResultLine } from "./OurResultLine";
import { Profit } from "@/components/icons/Profit";
import { Profit as ProfitModel } from "@/interfaces/home/OurResult";

type Props = {
  title: string;
  text: string;
  cite: CiteModel;
  // line: string;
  textColor?: string;
  color?: string;
  video: string;
  image: string | StaticImageData;
  profits: ProfitModel[];
};

export const Result = ({
  title,
  cite,
  image,
  video,
  color = '#FF5143',
  profits = [],
}: Props) => {
  const t = useTranslations("pages.homePage");
  const t2 = useTranslations("pages.homePage.ourResults");

  return (
    <div>
      <div className="flex items-center lg:items-stretch lg:justify-end lg:gap-0 flex-col gap-[clamp(0.7rem,4vw,2rem)] lg:flex-row-reverse lg:h-[700px] lg:overflow-hidden">
        <div className="relative mb-5 md:mb-0 flex flex-col justify-between min-h-[194px]"> {/* min-h-[194px] */}

          <div className="flex flex-col relative">
            <div className="flex flex-col gap-2 lg:gap-3 self-start lg:ml-[9rem] bg-white z-20"> {/* min-h-[194px] */}
              <h3 className={clsx(`text-[clamp(24px,4.5vw,36px)] leading-[clamp(32px,4.5vw+8px,44px)] font-black block`, "lg:text-4xl md:ml-0")} style={{ color }}>
                {t(title)}
              </h3>
              <div className={clsx("flex flex-col  text-gray1", "lg:text-xl lg:gap-2")}>
                {
                  profits.map(({ id, icon, text }) => (
                    <Profit
                      key={id}
                      text={text}
                      icon={icon}
                      color={color}
                      classNameIcon="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px]"
                    />
                  ))
                }
              </div>
            </div>
            <OurResultLine className="z-10 my-4 w-full -left-[0.9rem] absolute lg:max-w-none bottom-[clamp(-7rem,-13vw,-6rem)] lg:-bottom-12 lg:left-0" color={color} />
          </div>
          <Cite cite={cite} image={image} t2={t2} className="hidden lg:flex" color={color} />
        </div>
        <div className="flex justify-center items-center w-11/12 md:w-full md:max-w-[30rem] lg:w-[70rem]">
          <Video
            src={video}
            className="rounded-xl w-full h-full"
            classNameVideo="h-[clamp(35rem,120vw,50rem)] md:max-h-[44rem] md:h-[92vw] md:mt-10 lg:mt-0 md:w-full lg:h-[700px] lg:w-[70rem] lg:w-full object-cover w-full"
          />
        </div>
        <Cite cite={cite} image={image} t2={t2} className="lg:hidden" />
      </div>
    </div>
  );
};
