import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "@/app/[locale]/globals.css";
import Header from "@/components/layouts/Header/Header";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/layouts/Footer/Footer";
import ButtonModalContact from "@/components/common/ModalContact";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  // variable: "--font-monserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vyrtium Marketing",
    default: "Vyrtium Marketing - Ingeniería de Marketing Digital",
  },
  description: "Transformamos el caos digital en oportunidades. Especialistas en ingeniería de marketing digital, desarrollo web, IA aplicada y estrategias de crecimiento.",
  metadataBase: new URL('https://www.vyrtiummarketing.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/es',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.vyrtiummarketing.com',
    siteName: 'Vyrtium Marketing',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vyrtiummarketing',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as "es")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} className="max-w-[1920px] m-auto">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <ButtonModalContact />
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
