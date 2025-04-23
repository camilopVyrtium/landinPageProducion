import clsx from "clsx"
import { Accordion } from "@/components/common/Accordion/Accordion"
import { getMasServiciosConIa } from "@/data/iaData";
import { Bullet } from "@/components/common/Bullet";
import { Slider } from "@/components/common/Slider/Slider";
import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";
import { AccordionLine } from "@/components/our-process-catalog/AccordionLine";

export const MasServiciosConIA = () => {
    const t = useTranslations('pages.ia.masServiciosConIa');
    const { title, services } = getMasServiciosConIa(t);
    return (
        <div id="mas-servicios-con-ia" className="max-w-[1920px]">
            <div className="mt-10 mb-40">
                <h2 className={clsx("text-red1 font-black text-3xl ml-5", "md:text-4xl")}>{title}</h2>
                {
                    services.map(
                        ({ id, title, text, bullets, color, button }) => (
                            <div key={id} className={"relative mb-10"}>
                                <Accordion
                                    title={title}
                                    description={text}
                                    color={color}
                                    classNameDescription="md:text-[1.35vw]"
                                >
                                    <div className={clsx("md:flex", "hidden w-11/12 m-auto mt-40 max-w-full gap-4 flex-wrap mb-12")} style={{ scrollbarWidth: 'none' }}>
                                        {
                                            bullets.map(
                                                ({ id, ...bullet }) => (<Bullet
                                                    key={id}{...bullet}
                                                    accordion={false}
                                                    className={clsx("py-4 border rounded-lg border-blue1", "md:w-[24%]")}
                                                />)
                                            )
                                        }
                                    </div>
                                    <div className={clsx("flex mt-36 mb-12 max-w-full gap-4 flex-wrap", "md:hidden")} style={{ scrollbarWidth: 'none' }}>
                                        <Slider className={"max-w-full mt-10"} actualPointColor={color} >
                                            {
                                                bullets.map(
                                                    ({ id, ...bullet }) => (
                                                        <Bullet key={id}{...bullet} accordion={false} className={"w-full border rounded-lg border-blue1 py-2"} />)
                                                )
                                            }
                                        </Slider>
                                    </div>
                                    <Button showModalContact {...button} className="absolute bottom-0 right-3">{button.text}</Button>
                                </Accordion>
                                <AccordionLine fill={color} className={"w-full absolute top-14"} />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}