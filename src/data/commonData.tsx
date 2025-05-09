import { Bullet } from "@/interfaces/common/Bullet";
import { FormOption } from "@/interfaces/common/FormOption";
import actualPoint from '@/assets/icons/actual-point.svg';
import point from '@/assets/icons/point.svg';
import cite from '@/assets/icons/cite.svg';
import down from '@/assets/icons/down.svg';
import menu from '@/assets/icons/icon-menu.svg';
import pause from '@/assets/icons/icon-pause.svg';
import play from '@/assets/icons/icon-play.svg';
import mute from '@/assets/icons/mute.svg';
import unmute from '@/assets/icons/unmute.svg';
import next from '@/assets/icons/next.svg';
import back from '@/assets/icons/back.svg';
import sound from '@/assets/icons/sound.svg';
import logoGuias from '@/assets/icons/logo-guias.svg';
import search from '@/assets/icons/search.svg';
import playAudio from '@/assets/icons/play-audio.svg';
import pauseAudio from '@/assets/icons/pause-audio.svg';
export {
  actualPoint,
  point,
  cite,
  down,
  menu,
  pause,
  play,
  mute,
  unmute,
  next,
  sound,
  back,
  logoGuias,
  search,
  playAudio,
  pauseAudio,
};

export const bullets: Bullet[] = [
  {
    title: "Experiencia",
    description:
      "Equipo interdisciplinario con experiencia en marketing digital, creación audiovisual y programación.",
  },
  {
    title: "Tecnología (IA)",
    description:
      "Potenciamos tu estrategia de marketing digital con inteligencia artificial.",
  },
  {
    title: "Resultados Medibles",
    description:
      "Enfoque basado en datos y análisis para resultados medibles y escalables.",
  },
];


const initialForm = {
  fullname: "",
  email: "",
  company: "",
  phone: "",
  service: "",
};

export const form = {
  initialForm,
  services: [
    {
      id: "service-marketing-digital",
      text: "Marketing Digital",
      value: "Marketing Digital",
    },
    {
      id: "service-proyectos-de-creacion",
      text: "Proyectos de creación",
      value: "Proyectos de creación",
    },
    {
      id: "service-gestion-de-redes-sociales",
      text: "Gestión de redes sociales",
      value: "Gestión de redes sociales",
    },
    {
      id: "service-produccion-audiovisual",
      text: "Producción audiovisual",
      value: "Producción audiovisual",
    },
    {
      id: "service-ia-aplicada",
      text: "IA Aplicada",
      value: "IA Aplicada",
    },
    {
      id: "service-relaciones-publicas",
      text: "Relaciones Públicas",
      value: "Relaciones Públicas",
    },
  ] as FormOption[],
};
