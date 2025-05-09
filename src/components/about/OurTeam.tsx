"use client";
import { getOurTeam } from "@/data/aboutData";
import { Person } from "@/components/common/Person";
import { Accordion } from "@/components/common/Accordion/Accordion";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { AccordionLine } from "../our-process-catalog/AccordionLine";

export const OurTeam = () => {
  const t = useTranslations("pages.about.ourTeam");
  const nuestroEquipo = getOurTeam(t);
  return (
    <div className="mb-[8rem] max-w-[1920px]" id="nuestro-equipo">
      <div className={clsx("hidden", "lg:block")}>
        {nuestroEquipo.map(({ id, title, members, line }, index) => (
          <div key={id} className={clsx("relative my-10")}>
            <Accordion
              title={title}
              classNameTitle={clsx(
                `relative inline-block max-w-full w-fit top-[2vh] gap-0 w-[60%] font-semibold`,
                "lg:top-[4vh] lg:w-[50vw]",
              )}
              styleTitle={{ left: `${25 + index * 3}%` }}
            >
              <div
                className={clsx(
                  "flex justify-start mt-20 ml-4 flex-wrap max-w-full gap-8",
                  "md:ml-32 md:gap-20"
                )}
                style={{ scrollbarWidth: "none" }}
              >
                {members.map(({ id, ...member }) => (
                  <Person key={id} {...member} />
                ))}
              </div>
            </Accordion>
            <Image
              src={line}
              alt={"line"}
              width={1920}
              height={57}
              className="w-full absolute top-10"
            />
          </div>
        ))}
      </div>
      {/* Version MD and SM */}
      <div className={clsx("block", "lg:hidden -mt-16")}>
        {nuestroEquipo.map(({ id, title, members, color }) => (
          <div key={id} className="relative my-10">
            <Accordion
              title={title}
              classNameTitle="font-semibold"
            >
              <div
                className={clsx(
                  "flex md:justify-start justify-center mt-20 ml-4 flex-wrap max-w-full gap-8",
                  "md:ml-32 md:gap-20"
                )}
                style={{ scrollbarWidth: "none" }}
              >
                {members.map(({ id, ...member }) => (
                  <Person key={id} {...member} />
                ))}
              </div>
            </Accordion>
            <AccordionLine fill={color} className="absolute w-full top-10" />
          </div>
        ))}
      </div>

    </div>
  );
};
