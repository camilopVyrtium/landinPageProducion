import { OurServices } from "@/components/our-process-catalog/OurServices";
import { Banner } from "@/components/our-process-catalog/Banner";
import { Metadata } from "next";
// import { OurResults } from "@/components/home/OurResults/OurResults";
import { locales } from "@/constants/locales";
import { Contact } from "@/components/our-process-catalog/Contact";

export const metadata: Metadata = {
  title: "Catálogo de Servicios | Vyrtium Marketing",
  description: "Descubre nuestra gama completa de servicios de marketing digital, desarrollo web, IA aplicada y estrategias de crecimiento para impulsar tu negocio.",
  keywords: "servicios de marketing digital, desarrollo web, IA aplicada, estrategia digital, branding digital, e-commerce, producción audiovisual, relaciones públicas",
  openGraph: {
    title: "Catálogo de Servicios | Vyrtium Marketing",
    description: "Descubre nuestra gama completa de servicios de marketing digital, desarrollo web, IA aplicada y estrategias de crecimiento para impulsar tu negocio.",
    url: 'https://www.vyrtiummarketing.com/our-process-catalog',
    siteName: 'Vyrtium Marketing',
    locale: 'es_ES',
    type: 'website',
  },
};
export const generateStaticParams = async () => {
  return locales.map((locale) => ({
    locale
  }))
}
export default function CatalogoAsiLoHacemos() {
  return (
    <div>
      <Banner />
      <OurServices />
      <div className="w-[85%] md:w-[80%] mx-auto -mt-12 lg:mt-32">
        {/* <OurResults /> */}
        <Contact />
      </div>
    </div>
  );
}
