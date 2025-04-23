import { Video } from "@/components/common/Video";
import { Cite as CiteModel } from "@/interfaces/common/Cite";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Profit } from "@/interfaces/home/OurResult";
import { Cite } from "./Cite";

type Props = {
  title: string;
  text: string;
  cite: CiteModel;
  line: string;
  video: string;
  image: string;
  profits: Profit[];
};

export const Result = ({
  title,
  cite,
  line,
  image,
  video,
  profits = [],
}: Props) => {
  const t = useTranslations("pages.homePage");
  const t2 = useTranslations("pages.homePage.ourResults");

  return (
    <div>
      <div className="flex md:justify-end md:gap-0 flex-col gap-8 md:flex-row-reverse">
        <div className="relative mb-5 md:mb-0 flex flex-col justify-between">
          <div className="flex flex-col relative">
            <div className="flex flex-col gap-3 self-start ml-[8vw] md:ml-[5vw] lg:ml-[9rem]">
              <h3 className="text-3xl text-[--red1] font-black block md:text-4xl ml-4 md:ml-0">
                {t(title)}
              </h3>
              <div
                className={clsx(
                  "flex-col gap-2 text-gray1",
                  "lg:flex lg:text-xl"
                )}
              >
                {profits.map(({ id, image, text }) => (
                  <div key={id} className="flex items-center z-10 gap-4">
                    <Image
                      src={image}
                      alt={`icon-${id}`}
                      width={40}
                      height={400}
                    />
                    <p className="leading-normal">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src={line}
              alt="line"
              className="my-4 w-full absolute lg:max-w-none -bottom-8 -left-9"
              width={100}
              height={100}
            />
          </div>
          <Cite cite={cite} image={image} t2={t2} className="hidden md:flex" />
        </div>
        <div className="flex justify-center items-center h-[60rem] md:h-[45rem] w-full md:w-[80vw] md:max-w-[30rem]">
          <Video
            src={video}
            className="rounded-xl w-full h-full"
            classNameVideo="h-full object-cover w-full"
          />
        </div>
        <Cite cite={cite} image={image} t2={t2} className="md:hidden" />
      </div>
    </div>
  );
};
