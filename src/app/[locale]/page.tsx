import { Banner } from "@/components/home/Banner/Banner";
import { DigitalCaos } from "@/components/home/DigitalCaos/DigitalCaos";
import { IA } from "@/components/home/IA/IA";
import HeaderVideo from "@/components/home/HeaderVideo/HeaderVideo";
// import { OurResults } from "@/components/home/OurResults/OurResults";
// import { Blog } from "@/components/home/Blog/Blog";
import OrderCaos from "@/components/home/OrderCaos/OrderCaos";
import Animation from "@/components/common/Animation";
import { Metadata } from "next";
import { shouldShowSpline } from "@/lib/should-show-spline";
import { locales } from "@/constants/locales";
import { Contact } from "@/components/our-process-catalog/Contact";
import { OurResults } from "@/components/home/OurResults/OurResults";
import { Funner } from "@/components/home/Funner/Funner";
export const metadata: Metadata = {
  title: "Vyrtium Marketing - Ingeniería de Marketing Digital",
  description:
    "Transformamos el caos digital en oportunidades. Especialistas en ingeniería de marketing digital, desarrollo web, IA aplicada y estrategias de crecimiento.",
  keywords:
    "marketing digital, ingeniería de marketing, IA aplicada, desarrollo web, estrategia digital",
  openGraph: {
    title: "Vyrtium Marketing - Ingeniería de Marketing Digital",
    description:
      "Transformamos el caos digital en oportunidades. Especialistas en ingeniería de marketing digital, desarrollo web, IA aplicada y estrategias de crecimiento.",
    url: "https://www.vyrtiummarketing.com",
    siteName: "Vyrtium Marketing",
    locale: "es_ES",
    type: "website",
  },
};
export const generateStaticParams = async () => {
  return locales.map((locale) => ({
    locale,
  }));
};
export default async function Home() {
  const showSpline = await shouldShowSpline();
  return (
    <>
      <HeaderVideo />
      <Banner />
      <DigitalCaos />
      <Funner />
      <OrderCaos />
      <IA />
      {/* <div className="w-[85%] md:w-[80%] mb-10 mx-auto">
        <Blog />
      </div> */}
      <div className="w-[85%] md:w-[80%] mx-auto">
        <OurResults />
      </div>
      <div className="w-[85%] md:w-[80%] mx-auto mt-16">
        <Contact />
      </div>
    </>
  );
}
