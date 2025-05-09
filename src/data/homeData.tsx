import { OrderCaosItem } from "@/interfaces/home/OrderCaosItem";
import { ButtonVariant } from "@/interfaces/common/Button";
import { OurResults } from "@/interfaces/home/OurResult";
import { Blog } from "@/interfaces/common/Blog";
import lineOne from '@/assets/images/home/orderCaos/line-one.svg';
import lineTwo from '@/assets/images/home/orderCaos/line-two.svg';
import lineThree from '@/assets/images/home/orderCaos/line-three.svg';
import lineFour from '@/assets/images/home/orderCaos/line-four.svg';
import lineFive from '@/assets/images/home/orderCaos/line-five.svg';
import lineSix from '@/assets/images/home/orderCaos/line-six.svg';
import ourResultsSeparator1 from '@/assets/images/common/results/ourResultsSeparator1.svg';
import ownerCite1 from '@/assets/images/common/results/owner-cite-1.png';
import ownerCite2 from '@/assets/images/common/results/owner-cite-2.png';

import blogSeparator from "@/assets/images/common/blog/blogSeparator.svg"
import imageBlog from "@/assets/images/common/blog/imageBlog.jpeg";
import card1Blog from "@/assets/images/blog/cards/card1-blog.png";
import card2Blog from "@/assets/images/blog/cards/card2-blog.png";
import card3Blog from "@/assets/images/blog/cards/card3-blog.png";

import { ProfitIcons } from "@/constants/profitIcons";
const variant: ButtonVariant = "secondary";

export const orderCaosItems: OrderCaosItem[] = [
  {
    id: 1,
    titulo: "items.0.title",
    descripcion: "items.0.description",
    varianButton: "blue3",
    href: "/our-process-catalog?tag=0#ourServices-marketing_digital",
    configLine: {
      src: lineOne,
      className:
        "absolute top-16 w-full left-0 h-[350px] object-cover object-[25%_0]",
      translateY: true,
    },
  },
  {
    id: 2,
    titulo: "items.1.title",
    descripcion: "items.1.description",
    varianButton: "secondary",
    href: "/our-process-catalog?tag=1#ourServices-proyectos-de-creacion",
    configLine: {
      src: lineTwo,
      className:
        "absolute top-16 w-full left-0 h-[250px] object-cover object-[22%_0]",
      translateY: true,
    },
  },
  {
    id: 3,
    titulo: "items.2.title",
    descripcion: "items.2.description",
    varianButton: "primary",
    href: "/our-process-catalog?tag=2#ourServices-gestion-de-redes-sociales",
    configLine: {
      src: lineThree,
      className:
        "absolute md:bottom-0 bottom-0 w-full left-0 h-[30px] object-cover object-[24%_0]",
      translateY: false,
    },
  },
  {
    id: 4,
    titulo: "items.3.title",
    descripcion: "items.3.description",
    varianButton: "blue3",
    href: "/our-process-catalog?tag=3#ourServices-produccion-audiovisual",
    configLine: {
      src: lineFour,
      className:
        "absolute md:bottom-0 bottom-0 w-full left-0 h-[20px] object-cover object-[20%_0]",
      translateY: false,
    },
  },
  {
    id: 5,
    titulo: "items.4.title",
    descripcion: "items.4.description",
    varianButton: "gray4",
    href: "/our-process-catalog?tag=4#ourServices-ia_aplicada",
    configLine: {
      src: lineFive,
      className:
        "absolute md:bottom-0 bottom-0 w-full left-0 h-[20px] object-cover object-[18%_0]",
      translateY: false,
    },
  },
  {
    id: 6,
    titulo: "items.5.title",
    descripcion: "items.5.description",
    varianButton: "red3",
    href: "/our-process-catalog?tag=5#ourServices-relaciones_publicas",
    configLine: {
      src: lineSix,
      className:
        "absolute md:bottom-0 bottom-0 w-full left-0 h-[20px] object-cover object-[16%_0]",
      translateY: false,
    },
  },
];

export const digitalMarketing = {
  button: {
    text: "Conoce más",
    variant,
  },
  animation: {
    src: '/animations/animationDigitalMarketing.mp4',
    type: "video/mp4",
  },
};

export const ourResults: OurResults = {
  title: "ourResults.title",
  separator: ourResultsSeparator1,
  results: [
    {
      id: 1,
      title: "ourResults.items.0.title",
      text: "ourResults.items.0.text",
      color: '#FF5143',
      cite: {
        text: "items.0.citeTex",
        owner: "items.0.owner",
        job: "items.0.job",
      },
      image: ownerCite1,
      profits: [
        {
          id: `profit-design`,
          icon: ProfitIcons.DESIGN,
          text: "Diseño de marca."
        },
        {
          id: `profit-web-development`,
          icon: ProfitIcons.WEB_DEVELOPMENT,
          text: "Diseño de paginas web."
        },
        {
          id: `profit-rss`,
          icon: ProfitIcons.RRS,
          text: "Gestión de redes sociales."
        },
        {
          id: `profit-cinema`,
          icon: ProfitIcons.CINEMA,
          text: "Producción y posproducción de contenidos audiovisuales para redes."
        }
      ]
    },
    {
      id: 2,
      title: "ourResults.items.1.title",
      text: "ourResults.items.1.text",
      cite: {
        text: "items.1.citeTex",
        owner: "items.1.owner",
        job: "items.1.job",
      },
      image: ownerCite2,
      color: '#282828',
      profits: [
        {
          id: `profit-strategy`,
          icon: ProfitIcons.MEDIA_STRATEGY,
          text: "Estrategia de medios."
        },
        {
          id: `profit-rss`,
          icon: ProfitIcons.RRS,
          text: "Diseño de marca."
        },
        {
          id: `profit-cinema`,
          icon: ProfitIcons.CINEMA,
          text: "Posproducción de contenidos audiovisuales para redes."
        }
      ]
    },
    {
      id: 3,
      title: "ourResults.items.2.title",
      text: "ourResults.items.2.text",
      color: '#464646',
      cite: {
        text: "items.2.citeTex",
        owner: "items.2.owner",
        job: "items.2.job",
      },
      image: ownerCite1,
      profits: [

        {
          id: `profit-design`,
          icon: ProfitIcons.DESIGN,
          text: "Diseño de marca."
        },
        {
          id: `profit-cinema`,
          icon: ProfitIcons.CINEMA,
          text: "Posproducción de contenidos audiovisuales para redes."
        }
      ]
    },
    // {
    //   id: 4,
    //   title: "ourResults.items.3.title",
    //   text: "ourResults.items.3.text",
    //   cite: {
    //     text: "items.3.citeTex",
    //     owner: "items.3.owner",
    //     job: "items.3.job",
    //   },
    //   image: ownerCite1,
    //   // color: '',
    //   profits: [
    //     {
    //       id: `media-strategy`,
    //       image: mediaStrategy,
    //       text: "Estrategia de medios"
    //     },
    //     {
    //       id: `profit-rss`,
    //       image: rss,
    //       text: "Gestión de redes sociales."
    //     },
    //     {
    //       id: `profit-cinema`,
    //       image: cinema,
    //       text: "Producción y posproducción de contenidos audiovisuales para redes."
    //     }
    //   ]
    // },
    // {
    //   id: 5,
    //   title: "ourResults.items.4.title",
    //   text: "ourResults.items.4.text",
    //   cite: {
    //     text: "items.4.citeTex",
    //     owner: "items.4.owner",
    //     job: "items.4.job",
    //   },
    //   image: ownerCite1,
    //   profits: [
    //     {
    //       id: `profit-podcast`,
    //       image: podcast,
    //       text: "Servicio de podcast."
    //     },
    //     {
    //       id: `profit-media-strategy`,
    //       image: mediaStrategy,
    //       text: "Estrategia de medios."
    //     },
    //     {
    //       id: `profit-rss`,
    //       image: rss,
    //       text: "Gestión de redes sociales."
    //     },
    //     {
    //       id: `profit-cinema`,
    //       image: cinema,
    //       text: "Producción y posproducción de contenidos audiovisuales para redes."
    //     }
    //   ]
    // },
  ],
};

export const blog: Blog = {
  title: "blog.title",
  separator: blogSeparator,
  news: [
    {
      id: 1,
      title: "news.0.title",
      text: "news.0.text",
      image: imageBlog,
      button: {
        variant: "white",
        text: "news.0.button",
        href: "/blog",
      },
    },
  ],
  cards: [
    {
      id: 1,
      title: "cards.0.title",
      text: "cards.0.text",
      categories: [],
      image: card1Blog,
      url: "/",
    },
    {
      id: 2,
      title: "cards.1.title",
      text: "cards.1.text",
      categories: [],
      image: card2Blog,
      url: "/",
    },
    {
      id: 3,
      title: "cards.2.title",
      text: "cards.2.text",
      categories: [],
      image: card3Blog,
      url: "/",
    },
  ],
};
