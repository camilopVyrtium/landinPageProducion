'use client'
import { Service } from "@/data/ourProcessCatalogData"
import { Slider } from "@/components/common/Slider/Slider";
import clsx from "clsx";
import { Bullet } from "@/components/common/Bullet";
import { AccordionLine } from "@/components/our-process-catalog/AccordionLine";
import { Accordion } from "@/components/common/Accordion/Accordion";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

type Props = {
    services: Service[];
}

const serviceIds = [
    'ourServices-marketing_digital',
    'ourServices-proyectos-de-creacion',
    'ourServices-gestion-de-redes-sociales',
    'ourServices-produccion-audiovisual',
    'ourServices-ia_aplicada',
    'ourServices-relaciones_publicas'
];

export const OurServicesAccordion = ({ services }: Props) => {
    const queryParams = useSearchParams();
    const tag = queryParams.get('tag');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSmoothScroll(tag, serviceIds);

    return (
        <div className={clsx("relative", "-top-12")}>
            {
                services.map(
                    ({ id, title, text, bullets, color, button }, i) => (
                        <div key={id} className={clsx("relative", "mb-4 md:mb-10")} id={id}>
                            <div className="absolute -top-[40px] h-[40px] w-full" />
                            <Accordion
                                title={title}
                                description={text}
                                color={color}
                                button={button}
                                classNameTitle="!gap-2"
                                // classNameDescription="text-base !leading-[22px] lg:text-[min(1.42vw,22px)] md:!leading-[30px]"
                                isOpen={i.toString() == tag}
                            >
                                {/* <div
                                    className={clsx("hidden", "md:flex w-[85%] md:w-[80%] m-auto mt-40 max-w-full gap-4 flex-wrap mb-12 [scrollbarWidth:none]")}
                                > */}
                                <div className={clsx("hidden", "md:grid w-full mt-40 max-w-full gap-4 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,357px)] lg:justify-start mb-12 [scrollbarWidth:none]")}>
                                    {
                                        bullets.map(
                                            ({ id, ...bullet }) => (
                                                <Bullet key={id}{...bullet} accordion={true}
                                                    className={
                                                        clsx(
                                                            "rounded-lg text-black border border-blue1 py-2 -tracking-[0.8px] w-full",
                                                            "md:w-full"
                                                        )}
                                                    size="lg"
                                                    classNameContent={
                                                        clsx(
                                                            "hover:backdrop-blur-sm rounded-lg"
                                                        )
                                                    }
                                                />
                                            )
                                        )
                                    }
                                </div>
                                <div className={clsx("flex mb-12", "md:hidden mt-20 max-w-full gap-4 flex-wrap")} style={{ scrollbarWidth: 'none' }}>
                                    <Slider
                                        className={clsx("md:hidden max-w-full")}
                                        actualPointColor={color}
                                    >
                                        {
                                            bullets.map(
                                                ({ id, ...bullet }) => (<Bullet key={id}{...bullet} className={clsx("h-full text-gray1 border border-blue1 rounded-lg w-[96%] mx-auto")} size="lg" />)
                                            )
                                        }
                                    </Slider>
                                </div>
                                {/* <Button showModalContact {...button} className={`absolute bottom-0 right-3 bg-[${color}]`}>{button.text}</Button> */}
                            </Accordion>
                            <AccordionLine fill={color} className={clsx("w-full absolute top-12 lg:top-12", "md:top-[4.5rem]")} />
                        </div>
                    ))
            }
        </div>
    )
}