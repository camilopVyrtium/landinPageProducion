import { getOurServices } from "@/data/ourProcessCatalogData"
import { useTranslations } from "next-intl";
import { OurServicesAccordion } from "./OurServicesAccordion";
import { RichTranslateFunction } from "@/interfaces/common/TranslateFunction";
export const OurServices = () => {
    const t = useTranslations('pages.ourProcessCatalog.ourServices') as RichTranslateFunction;
    const { title, text, services } = getOurServices(t);
    return (
        <div className="mb-40 max-w-[1920px]">
            <div className="w-11/12 m-auto my-4">
                <h2 className="text-red1 font-black text-3xl md:text-4xl">{title}</h2>
                <p className="text-2xl my-4 md:text-3xl">{text}</p>
            </div>
            <OurServicesAccordion services={services} />
        </div>
    )
}