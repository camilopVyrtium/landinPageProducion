import { Bullet } from "@/interfaces/common/Bullet";
import { FormOption } from "@/interfaces/common/FormOption";

const prefix = "/icons";
const actualPoint = `${prefix}/actual-point.svg`;
const point = `${prefix}/point.svg`;
const cite = `${prefix}/cite.svg`;
const down = `${prefix}/down.svg`;
const menu = `${prefix}/icon-menu.svg`;
const pause = `${prefix}/icon-pause.svg`;
const play = `${prefix}/icon-play.svg`;
const mute = `${prefix}/mute.svg`;
const next = `${prefix}/next.svg`;
const back = `${prefix}/back.svg`;
const sound = `${prefix}/sound.svg`;
const logoGuias = `${prefix}/logo-guias.svg`;
const search = `${prefix}/search.svg`;
const playAudio = `${prefix}/play-audio.svg`;
const pauseAudio = `${prefix}/pause-audio.svg`;
export {
  actualPoint,
  point,
  cite,
  down,
  menu,
  pause,
  play,
  mute,
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
