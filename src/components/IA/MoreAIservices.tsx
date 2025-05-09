import clsx from "clsx"
import { Accordion } from "@/components/common/Accordion/Accordion"
import { getMasServiciosConIa } from "@/data/iaData";
import { Bullet } from "@/components/common/Bullet";
import { Slider } from "@/components/common/Slider/Slider";
import { useTranslations } from "next-intl";
import { AccordionLine } from "@/components/our-process-catalog/AccordionLine";

export const MasServiciosConIA = () => {
    const t = useTranslations('pages.ia.masServiciosConIa');
    const { title, services } = getMasServiciosConIa(t);
    return (
        <div id="mas-servicios-con-ia" className="max-w-[1920px] w-[85%] md:w-[80%] m-auto my-2 md:my-12">
            <div className="mt-2 mb-40">
                <h2 className={clsx("text-red1 font-black text-xl ml-5", "md:text-4xl")}>{title}</h2>
                <div className="relative bottom-8">
                    {
                        services.map(
                            ({ id, title, text, bullets, color, button }) => (
                                <div key={id} className={"relative mb-10"}>
                                    <Accordion
                                        title={title}
                                        description={text}
                                        color={color}
                                        // !items-end
                                        classNameTitle="!gap-2 lg:gap-4"
                                        classNameDescription="md:text-[1.35vw] mt-3 md:mt-0"
                                        button={button}
                                    >
                                        <div className={clsx("hidden", "md:grid w-full mt-40 max-w-full gap-4 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,357px)] lg:justify-start mb-12 [scrollbarWidth:none]")} style={{ scrollbarWidth: 'none' }}>
                                            {
                                                bullets.map(
                                                    ({ id, ...bullet }) => (<Bullet
                                                        key={id}{...bullet}
                                                        size="lg"
                                                        accordion
                                                        className={clsx("py-4 border rounded-lg border-blue1 md:w-full")}
                                                    />)
                                                )
                                            }
                                        </div>
                                        <div className={clsx("flex mt-14 mb-12 max-w-full gap-4 flex-wrap", "md:hidden")} style={{ scrollbarWidth: 'none' }}>
                                            <Slider className={"max-w-full mt-10"} actualPointColor={color} >
                                                {
                                                    bullets.map(
                                                        ({ id, ...bullet }) => (
                                                            <Bullet key={id}{...bullet} accordion={false} className={"w-full border rounded-lg border-blue1 py-2"} />)
                                                    )
                                                }
                                            </Slider>
                                        </div>

                                    </Accordion>
                                    <AccordionLine fill={color} className={"w-full absolute top-14 md:top-[7rem] lg:top-20"} />
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}