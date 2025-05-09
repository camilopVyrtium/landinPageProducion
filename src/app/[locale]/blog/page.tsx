import { getBlog } from "@/data/blogData";
import { News } from "@/components/blog/News";
import { useTranslations } from "next-intl";
import { Topics } from "@/components/blog/Topics";
import { Metadata } from "next";
import { Contact } from "@/components/our-process-catalog/Contact";

export const metadata: Metadata = {
  title: "Blog | Vyrtium Marketing",
  description: "Tu rincón exclusivo para informarte del mundo digital. Descubre ideas disruptivas, reflexiones expertas y la información más relevante del universo digital.",
  keywords: "blog marketing digital, tendencias digitales, innovación digital, estrategia de marketing, tecnología digital",
  openGraph: {
    title: "Blog | Vyrtium Marketing",
    description: "Tu rincón exclusivo para informarte del mundo digital. Descubre ideas disruptivas, reflexiones expertas y la información más relevante del universo digital.",
    url: 'https://www.vyrtiummarketing.com/blog',
    siteName: 'Vyrtium Marketing',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Blog() {
  const t = useTranslations('pages.blog');
  const { news, topics } = getBlog(t);
  return (
    <div className="w-[85%] md:w-[80%] mx-auto mt-32">
      <News news={news} />
      <Topics topics={topics} />
      <div className="mt-10">
        <Contact />
      </div>
    </div>
  )
}