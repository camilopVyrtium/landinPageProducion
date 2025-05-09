import { TranslateFunction } from "@/interfaces/common/TranslateFunction";
import { PersonProps } from "@/components/common/Person";
import testimonial1About from '@/assets/images/about/testimonial-1-about.png';

import managmentTalentLine from '@/assets/images/about/ourteam/managment_talent/line.svg';
import audioVisualProductionLine from "@/assets/images/about/ourteam/audiovisual_production/line.svg"
import designPostproductionLine from "@/assets/images/about/ourteam/design_postproduction/line.svg";
import socialMediaManagmentLine from "@/assets/images/about/ourteam/social_media_management/line.svg";
import isra from '@/assets/images/about/ourteam/managment_talent/Isra.png';
import andres from '@/assets/images/about/ourteam/managment_talent/Andres.png'
import carolinaMorales from '@/assets/images/about/ourteam/managment_talent/Carolina-morales.png'
import carolinaRibelles from '@/assets/images/about/ourteam/managment_talent/Carolina-ribelles.png'
// import lidu from '@/assets/images/about/ourteam/managment_talent/Lidu.png';

import camila from "@/assets/images/about/ourteam/audiovisual_production/Camila.png";
import oscar from "@/assets/images/about/ourteam/audiovisual_production/Oscar.png";

import manuelFranco from '@/assets/images/about/ourteam/design_postproduction/Manuel-Franco.png';
import ailynMartinez from '@/assets/images/about/ourteam/design_postproduction/Ailyn-Martinez.png';
import camiloJimenez from '@/assets/images/about/ourteam/design_postproduction/Camilo-Jimenez.png';
import cristianSiolo from '@/assets/images/about/ourteam/design_postproduction/Cristian-Siolo.png';
import kevinAlvarado from '@/assets/images/about/ourteam/design_postproduction/Kevin-Alvarado.png';
import paulaLatorre from '@/assets/images/about/ourteam/design_postproduction/Paula-Latorre.png';

import juanCamilo from "@/assets/images/about/ourteam/social_media_management/Juan-Camilo.png";
// import julianaVega from "@/assets/images/about/ourteam/social_media_management/Juliana-Vega.png";
import luisaFernanda from "@/assets/images/about/ourteam/social_media_management/Luisa-Fernanda.png";
import luisaLatorre from "@/assets/images/about/ourteam/social_media_management/Luisa-Latorre.png";

import artificialIntelligence from '@/assets/icons/artificial-intelligence.svg';
import dataAnalytics from '@/assets/icons/data-analitycs.svg';
import accountAnalytics from '@/assets/icons/employee-account-analysis.svg'
type OurTeam = {
  id: string;
  line: string;
  title: string;
  color?: string;
  members: (PersonProps & { id: string })[];
};

export const howWeConnect = {
  getTestimonial: (t: TranslateFunction) => {
    return {
      title: t("testimonial.title"),
      image: testimonial1About,
      text: t.rich("testimonial.text", {
        bold: (text) => <strong className="font-bold">{text}</strong>,
      }),
      owner: t("testimonial.owner"),
      profession: t("testimonial.profession"),
    };
  },
  getSection: (t: TranslateFunction) => {
    return {
      title: t("section.title"),
      text: (
        <>
          {t("section.text.part1")}
          <strong>{t("section.text.strong1")}</strong>
          {t("section.text.part2")}
        </>
      ),
    };
  },
};

export const getDigitalChaosAbout = (t: TranslateFunction) => {
  return {
    texts: [
      {
        id: t("texts.0.id"),
        text: (
          <>
            {t.rich("texts.0.text", {
              bold: (text) => <strong className="font-bold">{text}</strong>,
            })}
          </>
        ),
      },
      {
        id: t("texts.1.id"),
        text: (
          <>
            {t("texts.1.part1")}
            <strong>{t("texts.1.strong1")}</strong>
            {t("texts.1.part2")}
            <strong>{t("texts.1.strong2")}</strong>
            {t("texts.1.part3")}
          </>
        ),
      },
    ],
    section: {
      title: (
        <>
          {t("section.title.part1")}{" "}
          <strong>{t("section.title.strong1")}</strong>
          {t("section.title.part2")}
        </>
      ),
      text: (
        <>
          {t("section.text.part1")}
          <strong>{t("section.text.strong1")}</strong>
          {t("section.text.part2")}
          <strong>{t("section.text.strong2")}</strong>
          {t("section.text.part3")}
          <strong>{t("section.text.strong3")}</strong>
          {t("section.text.part4")}
          <strong>{t("section.text.strong4")}</strong>
          {t("section.text.part5")}
          <strong>{t("section.text.strong5")}</strong>
          {t("section.text.part6")}
          <strong>{t("section.text.strong6")}</strong>
        </>
      ),
      lastText: t("section.lastText"),
    },
  };
};

export const getOurTeam = (t: TranslateFunction): OurTeam[] => {
  return [
    {
      id: t("team1.id"),
      line: managmentTalentLine,
      title: t("team1.title"),
      color: '#FF5143',
      members: [
        {
          id: t("team1.members.member1.id"),
          image: isra,
          name: t("team1.members.member1.name"),
          profession: t("team1.members.member1.profession"),
        },
        {
          id: t("team1.members.member2.id"),
          image: carolinaMorales,
          name: t("team1.members.member2.name"),
          profession: t("team1.members.member2.profession"),
        },
        // {
        //   id: t("team1.members.member3.id"),
        //   image: lidu,
        //   name: t("team1.members.member3.name"),
        //   profession: t("team1.members.member3.profession"),
        // },
        {
          id: t("team1.members.member4.id"),
          image: carolinaRibelles,
          name: t("team1.members.member4.name"),
          profession: t("team1.members.member4.profession"),
        },
        {
          id: t("team1.members.member5.id"),
          image: andres,
          name: t("team1.members.member5.name"),
          profession: t("team1.members.member5.profession"),
        },
      ],
    },
    {
      id: t("team2.id"),
      title: t("team2.title"),
      line: audioVisualProductionLine,
      color: '#64D2D9',
      members: [
        {
          id: t("team2.members.member1.id"),
          image: camila,
          name: t("team2.members.member1.name"),
          profession: t("team2.members.member1.profession"),
        },
        {
          id: t("team2.members.member2.id"),
          image: oscar,
          name: t("team2.members.member2.name"),
          profession: t("team2.members.member2.profession"),
        },
      ],
    },
    {
      id: t("team3.id"),
      title: t("team3.title"),
      line: designPostproductionLine,
      color: '#F9C5C5',
      members: [
        {
          id: t("team3.members.member1.id"),
          image: manuelFranco,
          name: t("team3.members.member1.name"),
          profession: t("team3.members.member1.profession"),
        },
        {
          id: t("team3.members.member2.id"),
          image: cristianSiolo,
          name: t("team3.members.member2.name"),
          profession: t("team3.members.member2.profession"),
        },
        {
          id: t("team3.members.member3.id"),
          image: camiloJimenez,
          name: t("team3.members.member3.name"),
          profession: t("team3.members.member3.profession"),
        },
        {
          id: t("team3.members.member4.id"),
          image: paulaLatorre,
          name: t("team3.members.member4.name"),
          profession: t("team3.members.member4.profession"),
        },
        {
          id: t("team3.members.member5.id"),
          image: ailynMartinez,
          name: t("team3.members.member5.name"),
          profession: t("team3.members.member5.profession"),
        },
        {
          id: t("team3.members.member6.id"),
          image: kevinAlvarado,
          name: t("team3.members.member6.name"),
          profession: t("team3.members.member6.profession"),
        },
      ],
    },
    {
      id: t("team4.id"),
      title: t("team4.title"),
      line: socialMediaManagmentLine,
      color: "#BAD3D2",
      members: [
        {
          id: t("team4.members.member1.id"),
          image: juanCamilo,
          name: t("team4.members.member1.name"),
          profession: t("team4.members.member1.profession"),
        },
        // {
        //   id: t("team4.members.member2.id"),
        //   image: julianaVega,
        //   name: t("team4.members.member2.name"),
        //   profession: t("team4.members.member2.profession"),
        // },
        {
          id: t("team4.members.member3.id"),
          image: luisaFernanda,
          name: t("team4.members.member3.name"),
          profession: t("team4.members.member3.profession"),
        },
        {
          id: t("team4.members.member4.id"),
          image: luisaLatorre,
          name: t("team4.members.member4.name"),
          profession: t("team4.members.member4.profession"),
        },
      ],
    },
  ];
};
export const getCreativeProcess = (t: TranslateFunction) => {

  return {
    video: '/videos/creative-process.mp4',
    title: t('title'),
    text: t.rich("title", {
      bold: (text) => <strong className="font-black">{text}</strong>,
    }),
    section: {
      title: t('section.title'),
      items: [
        {
          id: 'creative-process_data-analitycs',
          icon: dataAnalytics,
          text: (
            <>
              <strong>{t('section.items.0.strong1')}</strong>
              {t('section.items.0.part1')}
            </>
          )
        },
        {
          id: 'creative-process_artificial-intelligence',
          icon: artificialIntelligence,
          text: (
            <>
              <strong>{t('section.items.1.strong1')}</strong>
              {t('section.items.1.part1')}
              <strong>{t('section.items.1.strong2')}</strong>
            </>
          )
        },
        {
          id: 'creative-process_employee-account-analysis',
          icon: accountAnalytics,
          text: (
            <>
              {t('section.items.2.part1')}
              <strong>{t('section.items.2.strong1')}</strong>
              {t('section.items.2.part2')}
            </>
          )
        }

      ]
    }
  }
};
