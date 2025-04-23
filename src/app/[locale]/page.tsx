import { Banner } from "@/components/home/Banner/Banner";
import { DigitalCaos } from "@/components/home/DigitalCaos/DigitalCaos";
import { IA } from "@/components/home/IA/IA";
import HeaderVideo from "@/components/home/HeaderVideo/HeaderVideo";
// import { OurResults } from "@/components/home/OurResults/OurResults";
import { Blog } from "@/components/home/Blog/Blog";
import OrderCaos from "@/components/home/OrderCaos/OrderCaos";
import Animation from "@/components/common/Animation";
import { Metadata } from "next";
import { shouldShowSpline } from "@/lib/should-show-spline";

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

export default async function Home() {
  const showSpline = await shouldShowSpline();
  return (
    <>
      <HeaderVideo />
      <Banner />
      <DigitalCaos />
      {showSpline && (
        <Animation
          height="40rem"
          scene="https://prod.spline.design/AyjygaiQbXW5VevE/scene.splinecode"
        />
      )}
      <OrderCaos />
      {/* <OurResults /> */}
      <IA />
      <div className="md:px-16 px-4">
        <Blog />
      </div>
    </>
  );
}
