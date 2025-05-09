import { HowWeConnect } from "@/components/about/HowWeConnect";
import { DigitalChaosAbout } from "@/components/about/DigitalChaosAbout";
import { OurTeam } from "@/components/about/OurTeam";
import { Banner } from "@/components/about/Banner";
import { CreativeProcess } from "@/components/about/CreativeProcess";
import { Metadata } from "next";
import { locales } from "@/constants/locales";

export const metadata: Metadata = {
  title: "Así Somos | Vyrtium Marketing",
  description: "Conoce nuestro equipo y proceso creativo. En Vyrtium Marketing combinamos creatividad, tecnología y estrategia para transformar tu presencia digital.",
  keywords: "equipo Vyrtium, proceso creativo, agencia de marketing, creatividad digital, estrategia digital",
  openGraph: {
    title: "Así Somos | Vyrtium Marketing",
    description: "Conoce nuestro equipo y proceso creativo. En Vyrtium Marketing combinamos creatividad, tecnología y estrategia para transformar tu presencia digital.",
    url: 'https://www.vyrtiummarketing.com/about',
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

export default function About() {
  return (
    <>
      <div id="banner" className="mt-4">
        <Banner />
      </div>
      <div className="w-[85%] md:w-[80%] mx-auto md:mt-16 mt-8">
        <CreativeProcess />
        <DigitalChaosAbout />
      </div>
      <div className="w-[85%] md:w-[80%] mx-auto">
        <HowWeConnect />
        <OurTeam />
      </div>
    </>
  );
}
