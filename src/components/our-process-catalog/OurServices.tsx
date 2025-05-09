import { getOurServices } from "@/data/ourProcessCatalogData"
import { useTranslations } from "next-intl";
import { OurServicesAccordion } from "./OurServicesAccordion";
import { TranslateFunction } from "@/interfaces/common/TranslateFunction";
export const OurServices = () => {
    const t: TranslateFunction = useTranslations('pages.ourProcessCatalog.ourServices');
    const { title, text, services } = getOurServices(t);
    return (
        <div className="mb-24 md:mb-40 max-w-[1920px] w-[85%] md:w-[80%] m-auto my-4 md:my-12">
            <div>
                <h2 className="text-red1 font-black text-[30px] lg:text-[40px]">{title}</h2>
                {/* P -> md:leading-[26px] md:text-[18px] */}
                <p className="my-4 md:my-6 text-[14px] leading-[22px] lg:text-2xl lg:leading-[32px]">{text}</p>
            </div>
            <OurServicesAccordion services={services} />
        </div>
    )
}