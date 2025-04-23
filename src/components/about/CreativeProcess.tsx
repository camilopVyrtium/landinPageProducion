import { useTranslations } from "next-intl";
import { Video } from "../common/Video";
import { getCreativeProcess } from "@/data/aboutData";
import Image from "next/image";

export const CreativeProcess = () => {
  const t = useTranslations("pages.about.creativeProcess");
  const { video, title, section } = getCreativeProcess(t);
  return (
    <div className="flex flex-col gap-2 md:gap-12 lg:flex-row">
      <Video src={video} controls={false} className="w-full lg:w-[900px]" />
      <div className="w-fit">
        <div>
          <h3 className="text-blue1 text-3xl font-black md:text-2xl lg:text-[3vw]">
            {title}
          </h3>
          <p className="text-xl text-gray1 my-4 leading-normal md:text-2xl md:my-10">
            {t.rich('text', {
              bold: (text) => <strong className="font-bold">{text}</strong>,
            })}
          </p>
        </div>
        <div>
          <h3 className="text-blue1 text-2xl font-black md:text-2xl lg:text-[2.5vw]">
            {section.title}
          </h3>
          <div className="flex flex-col my-4 gap-6 md:my-10 md:gap-8">
            {section.items.map(({ id, icon, text }) => (
              <div key={id} className="flex items-center gap-4">
                <Image src={icon} alt="icon" width={50} height={50} />
                <p className="text-xl">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
