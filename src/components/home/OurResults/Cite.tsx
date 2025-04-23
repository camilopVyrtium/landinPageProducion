import clsx from "clsx";
import Image from "next/image";
import { cite as citeIcon } from "@/data/commonData";
import { Cite as CiteModel } from "@/interfaces/home/OurResult";
import { TranslateFunction } from "@/interfaces/common/TranslateFunction";



type Props = {
  cite: CiteModel;
  t2: TranslateFunction;
  image: string;
  className?: string;
};
export const Cite = ({ image, cite, t2, className }: Props) => {
  return (
    <div className={clsx("flex h-auto max-w-full items-center lg:h-auto lg:mt-20", className)}>
      <div className="flex flex-col">
        <div className="md:flex items-center justify-evenly ml-4">
          <div className="hidden md:block relative">
            <Image
              src={image}
              alt="owner-cite-image"
              width={200}
              height={200}
              className="w-[300px] lg:h-auto object-cover lg:max-w-full lg:mr-10"
              />
            <Image
              src={"/images/common/results/cite-col.svg"}
              alt="cite-col"
              width={126}
              height={364}
              className="ml-8 h-[210px] lg:ml-24 lg:w-[150px] lg:h-[380px] absolute lg:bottom-0 lg:right-6 md:-right-6 bottom-0 -z-10"
            />
          </div>
          <div className={clsx("w-full ml-8", "lg:w-1/2 lg:ml-0")}>
            <div className="flex relative mt-3 md:w-fit">
              <p
                className={clsx(
                  "text-xl text-[--gray1] font-light italic",
                  "lg:text-2xl"
                )}
              >
                {t2(cite.text)}
              </p>
              <Image
                src={citeIcon}
                alt="cite"
                className={clsx(
                  "absolute right-10 w-20 h-20",
                  "lg:w-44 lg:h-44 lg:-top-5"
                )}
                width={64}
                height={64}
              />
            </div>
            <div className="flex flex-col mt-3">
              <span className={clsx("font-semibold text-xl", "lg:text-2xl")}>
                {t2(cite.owner)}
              </span>
              <span className={clsx("font-light text-xl", "md:text-2xl")}>
                {t2(cite.job)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
