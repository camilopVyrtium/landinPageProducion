import { Metadata } from "next";
import { MasServiciosConIA } from "@/components/IA/MoreAIservices";
import { WhatWeDoWithAI } from "@/components/IA/WhatIA/WhatWeDoWithAI";
// import { Form } from "@/components/home/Form/Form";
import Animation from "@/components/common/Animation";
import { shouldShowSpline } from "@/lib/should-show-spline";
import { IaCarousel } from "@/components/common/MobileCarousel";
import { locales } from "@/constants/locales";
import { Contact } from "@/components/our-process-catalog/Contact";

export const metadata: Metadata = {
  title: "IA Aplicada | Vyrtium Marketing",
  description:
    "Integramos la IA en cada fase de nuestras estrategias, maximizando conversiones, optimizando procesos y acelerando el crecimiento de tu marca.",
  keywords:
    "inteligencia artificial, IA aplicada, marketing con IA, chatbots, asistentes virtuales, e-learning, software empresarial",
  openGraph: {
    title: "IA Aplicada | Vyrtium Marketing",
    description:
      "Integramos la IA en cada fase de nuestras estrategias, maximizando conversiones, optimizando procesos y acelerando el crecimiento de tu marca.",
    url: "https://www.vyrtiummarketing.com/ia",
    siteName: "Vyrtium Marketing",
    locale: "es_ES",
    type: "website",
  },
};
export const generateStaticParams = async () => {
  return locales.map((locale) => ({
    locale
  }))
}
export default async function IA() {
  const showSpline = await shouldShowSpline();
  return (
    <div className="relative lg:overflow-hidden">
      <IaCarousel height="h-[700px]" />
      {showSpline && (
        <Animation
          height="60rem"
          scene="https://prod.spline.design/uWqID-6dp1DQg86Z/scene.splinecode"
          // scene="https://prod.spline.design/AJRvIagEZAELaKrr/scene.splinecode"
        />
      )}
      <div className="w-[85%] md:w-[80%] mx-auto mt-14 md:mt-20">
        <WhatWeDoWithAI />
      </div>
      <MasServiciosConIA />
      <div className="w-[85%] md:w-[80%] mx-auto -mt-16">
        <Contact />
      </div>
    </div>
  );
}
