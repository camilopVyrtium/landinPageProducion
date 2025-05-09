import { useTranslations } from "next-intl";
import { Video } from "../common/Video";
import { getCreativeProcess } from "@/data/aboutData";
import Image from "next/image";

export const CreativeProcess = () => {
  const t = useTranslations("pages.about.creativeProcess");
  const { video, title, section } = getCreativeProcess(t);
  return (
    // min-[1400px]:flex-row
    <div className="flex flex-col gap-2 md:gap-12 lg:flex-row">
      <Video src={video} controls={false} className="w-full lg:min-w-[379px] lg:max-w-[600px]" />
      <div className="w-fit flex flex-col justify-between mt-4">
        <div>
          <h3 className="text-blue1 font-black text-[30px] lg:text-[clamp(24px,2.5vw,40px)] lg:leading-[clamp(32px,2.5vw+8px,48px)]">
            {title}
          </h3>
          <p className="text-gray1 my-4 text-base leading-[22px] md:leading-[26px] md:text-[18px] lg:text-[clamp(16px,1.5vw,24px)] lg:leading-[clamp(24px,1.5vw+8px,32px)]">
            {t.rich('text', {
              bold: (text) => <strong className="font-bold">{text}</strong>,
            })}
          </p>
        </div>
        <div>
          <h3 className="text-blue1 font-black text-[30px] lg:text-[clamp(24px,2.5vw,40px)]">
            {section.title}
          </h3>
          <div className="flex flex-col mt-4 gap-4 lg:gap-[clamp(0px,0.5vw,1rem)]">
            {section.items.map(({ id, icon, text }) => (
              <div key={id} className="flex items-center gap-4">
                <Image src={icon} alt="icon" width={50} height={50} className="lg:w-[clamp(40px,3vw,50px)]"/>
                <p className="text-[clamp(14px,3.5vw,18px)] leading-[clamp(22px,3.5vw+8px,26px)] md:leading-[26px] md:text-[18px] lg:text-[clamp(16px,1.5vw,24px)] lg:leading-[clamp(16px,1.5vw+8px,32px)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
