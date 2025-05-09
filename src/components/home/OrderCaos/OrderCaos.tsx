"use client";

import { Accordion } from "@/components/common/AccordionChaos/Accordion";
import { AccordionItem } from "@/components/common/AccordionChaos/AccordionItem";
import React from "react";

import { orderCaosItems } from "@/data/homeData";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const OrderCaos = () => {
  const t = useTranslations("pages.homePage.orderCaos");

  return (
    <>
      <div className="relative overflow-x-hidden w-full md:mt-10 md:pt-10 pt-4 h-auto">
        <h2 className={clsx("text-center text-gray1 text-xl font-medium mb-4 md:mb-10", "md:text-[clamp(20px,4vw,60px)]", "lg:text-6xl ")}>
          {t.rich("title", {
            bold: (text) => <strong className="font-black">{text}</strong>,
          })}
        </h2>
        <div className="mx-auto h-full relative z-10 lg:pb-28 pb-10">
          <Accordion>
            {orderCaosItems.map(
              (
                { id, titulo, descripcion, varianButton, configLine, href },
                index
              ) => (
                <AccordionItem
                  key={id}
                  title={t(titulo)}
                  index={index}
                  varianButton={varianButton}
                  configLine={configLine}
                  href={href}
                >
                  <div className="flex justify-between items-start gap-8">
                    <p className="lg:text-xl text-[clamp(14px,3.5vw,18px)] mr-[20%] lg:mr-[20%] leading-[clamp(22px,3.5vw+8px,26px)]">
                      {t.rich(descripcion, {
                        bold: (text) => (
                          <strong className="font-bold">{text}</strong>
                        ),
                      })}
                    </p>
                  </div>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default OrderCaos;
