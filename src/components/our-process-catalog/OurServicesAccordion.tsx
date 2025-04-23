'use client'
import { Service } from "@/data/ourProcessCatalogData"
import { Slider } from "@/components/common/Slider/Slider";
import clsx from "clsx";
import { Bullet } from "@/components/common/Bullet";
import Button from "@/components/common/Button";
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
        <>
            {
                services.map(
                    ({ id, title, text, bullets, color, button }, i) => (
                        <div key={id} className={clsx("relative", "mb-10")} id={id}>
                            {/* Punto de referencia para el scroll */}
                            <div className="absolute -top-[40px] h-[40px] w-full" />
                            
                            <Accordion
                                title={title}
                                description={text}
                                color={color}
                                isOpen={i.toString() == tag}
                            >
                                <div
                                    className={clsx("hidden", "md:flex w-11/12 m-auto mt-40 max-w-full gap-4 flex-wrap mb-12")}
                                    style={{ scrollbarWidth: 'none' }}>
                                    {
                                        bullets.map(
                                            ({ id, ...bullet }) => (
                                                <Bullet key={id}{...bullet}
                                                    className={
                                                        clsx(
                                                            "rounded-lg text-white",
                                                            "md:w-[49%]",
                                                            "lg:w-[24%]",
                                                        )}
                                                    size="lg"
                                                    classNameContent={
                                                        clsx(
                                                            "hover:backdrop-blur-sm rounded-lg"
                                                        )
                                                    }
                                                />)
                                        )
                                    }
                                </div>
                                <div className={clsx("flex mb-12", "md:hidden mt-36 max-w-full gap-4 flex-wrap")} style={{ scrollbarWidth: 'none' }}>
                                    <Slider className={clsx("md:hidden max-w-full")} actualPointColor={color} >
                                        {
                                            bullets.map(
                                                ({ id, ...bullet }) => (<Bullet key={id}{...bullet} className={clsx("w-full h-full text-white")} size="lg" />)
                                            )
                                        }
                                    </Slider>
                                </div>
                                <Button showModalContact {...button} className={`absolute bottom-0 right-3 bg-[${color}]`}>{button.text}</Button>
                            </Accordion>
                            <AccordionLine fill={color} className={clsx("w-full absolute top-10", "top-12")} />
                        </div>
                    ))
            }
        </>
    )
}