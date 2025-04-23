import { TranslateFunction, RichTranslateFunction } from "@/interfaces/common/TranslateFunction";
import { PersonProps } from "@/components/common/Person";

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
      image: "/images/about/testimonial-1-about.png",
      text: t("testimonial.text"),
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

export const getDigitalChaosAbout = (t: RichTranslateFunction) => {
  return {
    texts: [
      {
        id: t("texts.0.id"),
        text: (
          <>
            {t.rich("texts.0.text", {
              bold: (text: string) => <strong className="font-bold">{text}</strong>,
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
      line: "/images/about/ourteam/managment_talent/line.svg",
      title: t("team1.title"),
      color: '#FF5143',
      members: [
        {
          id: t("team1.members.member1.id"),
          image: "/images/about/ourteam/managment_talent/Isra.png",
          name: t("team1.members.member1.name"),
          profession: t("team1.members.member1.profession"),
        },
        {
          id: t("team1.members.member2.id"),
          image: "/images/about/ourteam/managment_talent/Carolina-morales.png",
          name: t("team1.members.member2.name"),
          profession: t("team1.members.member2.profession"),
        },
        {
          id: t("team1.members.member3.id"),
          image: "/images/about/ourteam/managment_talent/Lidu.png",
          name: t("team1.members.member3.name"),
          profession: t("team1.members.member3.profession"),
        },
        {
          id: t("team1.members.member4.id"),
          image: "/images/about/ourteam/managment_talent/Carolina-ribelles.png",
          name: t("team1.members.member4.name"),
          profession: t("team1.members.member4.profession"),
        },
        {
          id: t("team1.members.member5.id"),
          image: "/images/about/ourteam/managment_talent/Andres.png",
          name: t("team1.members.member5.name"),
          profession: t("team1.members.member5.profession"),
        },
      ],
    },
    {
      id: t("team2.id"),
      title: t("team2.title"),
      line: "/images/about/ourteam/audiovisual_production/line.svg",
      color: '#64D2D9',
      members: [
        {
          id: t("team2.members.member1.id"),
          image: "/images/about/ourteam/audiovisual_production/Camila.png",
          name: t("team2.members.member1.name"),
          profession: t("team2.members.member1.profession"),
        },
        {
          id: t("team2.members.member2.id"),
          image: "/images/about/ourteam/audiovisual_production/Oscar.png",
          name: t("team2.members.member2.name"),
          profession: t("team2.members.member2.profession"),
        },
      ],
    },
    {
      id: t("team3.id"),
      title: t("team3.title"),
      line: "/images/about/ourteam/design_postproduction/line.svg",
      color: '#F9C5C5',
      members: [
        {
          id: t("team3.members.member1.id"),
          image: "/images/about/ourteam/design_postproduction/Manuel-Franco.png",
          name: t("team3.members.member1.name"),
          profession: t("team3.members.member1.profession"),
        },
        {
          id: t("team3.members.member2.id"),
          image: "/images/about/ourteam/design_postproduction/Cristian-Siolo.png",
          name: t("team3.members.member2.name"),
          profession: t("team3.members.member2.profession"),
        },
        {
          id: t("team3.members.member3.id"),
          image: "/images/about/ourteam/design_postproduction/Camilo-Jimenez.png",
          name: t("team3.members.member3.name"),
          profession: t("team3.members.member3.profession"),
        },
        {
          id: t("team3.members.member4.id"),
          image: "/images/about/ourteam/design_postproduction/Paula-Latorre.png",
          name: t("team3.members.member4.name"),
          profession: t("team3.members.member4.profession"),
        },
        {
          id: t("team3.members.member5.id"),
          image: "/images/about/ourteam/design_postproduction/Ailyn-Martinez.png",
          name: t("team3.members.member5.name"),
          profession: t("team3.members.member5.profession"),
        },
        {
          id: t("team3.members.member6.id"),
          image: "/images/about/ourteam/design_postproduction/Kevin-Alvarado.png",
          name: t("team3.members.member6.name"),
          profession: t("team3.members.member6.profession"),
        },
      ],
    },
    {
      id: t("team4.id"),
      title: t("team4.title"),
      line: "/images/about/ourteam/social_media_management/line.svg",
      color: "#BAD3D2",
      members: [
        {
          id: t("team4.members.member1.id"),
          image: "/images/about/ourteam/social_media_management/Juan-Camilo.png",
          name: t("team4.members.member1.name"),
          profession: t("team4.members.member1.profession"),
        },
        {
          id: t("team4.members.member2.id"),
          image: "/images/about/ourteam/social_media_management/Juliana-Vega.png",
          name: t("team4.members.member2.name"),
          profession: t("team4.members.member2.profession"),
        },
        {
          id: t("team4.members.member3.id"),
          image: "/images/about/ourteam/social_media_management/Luisa-Fernanda.png",
          name: t("team4.members.member3.name"),
          profession: t("team4.members.member3.profession"),
        },
        {
          id: t("team4.members.member4.id"),
          image: "/images/about/ourteam/social_media_management/Luisa-Latorre.png",
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
    text: t('text'),
    section: {
      title: t('section.title'),
      items: [
        {
          id: 'creative-process_data-analitycs',
          icon: '/icons/data-analitycs.svg',
          text: (
            <>
              <strong>{t('section.items.0.strong1')}</strong>
              {t('section.items.0.part1')}
            </>
          )
        },
        {
          id: 'creative-process_artificial-intelligence',
          icon: '/icons/artificial-intelligence.svg',
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
          icon: '/icons/employee-account-analysis.svg',
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
