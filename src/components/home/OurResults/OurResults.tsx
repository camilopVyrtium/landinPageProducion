import Image from "next/image";
import { Slider } from "@/components/common/Slider/Slider";
import { ourResults } from "@/data/homeData";
import { Result } from "@/components/home/OurResults/Result";
import { useTranslations } from "next-intl";

export const OurResults = () => {
  const t = useTranslations("pages.homePage");
  const { results } = ourResults;
  return (
    <div id="nuestros-resultados" className="max-w-[1920px] mt-10 md:px-10 px-4">
      <div className="flex my-10 justify-between max-w-full">
        <h3 className="text-[--red1] 3xs:text-4xl md:text-5xl font-black w-full">
          {t(ourResults.title)}
        </h3>
        <Image
          src={ourResults.separator}
          alt="separator"
          className="max-w-64 w-[50vw] md:max-w-none md:w-[50%] object-contain"
          width={100}
          height={100}
          style={{ maxWidth: '100%' }}
        />
      </div>
        <Slider>
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



