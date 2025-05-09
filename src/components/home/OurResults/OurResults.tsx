import Image from "next/image";
import { Slider } from "@/components/common/Slider/Slider";
import { ourResults } from "@/data/homeData";
import { Result } from "@/components/home/OurResults/Result";
import { useTranslations } from "next-intl";

export const OurResults = () => {
  const t = useTranslations("pages.homePage");
  const { results } = ourResults;
  return (
    <div id="nuestros-resultados" className="max-w-[1920px] my-6 lg:mt-10 lg:mb-20">
      <div className="flex my-6 lg:my-10 justify-between max-w-full">
        <h3 className="text-[--red1] text-[clamp(24px,4.5vw,36px)] leading-[clamp(32px,4.5vw+8px,44px)] lg:text-5xl font-black w-full">
          {t(ourResults.title)}
        </h3>
        <Image
          src={ourResults.separator}
          alt="separator"
          className="max-w-64 w-[50vw] md:max-w-none lg:w-[50%] object-contain"
          width={100}
          height={100}
          style={{ maxWidth: '100%' }}
        />
      </div>
      <Slider classNameContent="lg:max-h-[48rem]">
        {results.map(({ id, ...result }) => (
          <Result
            key={`slider-result-${id}`}
            {...result}
            video="/videos/result1.mp4"
          />
        ))}
      </Slider>
    </div>
  );
};



