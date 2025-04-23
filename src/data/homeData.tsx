import { OrderCaosItem } from "@/interfaces/home/OrderCaosItem";
import { ButtonVariant } from "@/interfaces/common/Button";
import { OurResults } from "@/interfaces/home/OurResult";
import { Blog } from "@/interfaces/common/Blog";

const variant: ButtonVariant = "secondary";

export const orderCaosItems: OrderCaosItem[] = [
  {
    id: 1,
    titulo: "items.0.title",
    descripcion: "items.0.description",
    varianButton: "blue3",
    href:"/our-process-catalog?tag=0#ourServices-marketing_digital",
    configLine: {
      src: "/images/home/orderCaos/line-one.svg",
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
    href:"/our-process-catalog?tag=1#ourServices-proyectos-de-creacion",
    configLine: {
      src: "/images/home/orderCaos/line-two.svg",
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
    href:"/our-process-catalog?tag=2#ourServices-gestion-de-redes-sociales",
    configLine: {
      src: "/images/home/orderCaos/line-three.svg",
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
    href:"/our-process-catalog?tag=3#ourServices-produccion-audiovisual",
    configLine: {
      src: "/images/home/orderCaos/line-four.svg",
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
    href:"/our-process-catalog?tag=4#ourServices-ia_aplicada",
    configLine: {
      src: "/images/home/orderCaos/line-five.svg",
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
    href:"/our-process-catalog?tag=5#ourServices-relaciones_publicas",
    configLine: {
      src: "/images/home/orderCaos/line-six.svg",
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
    src: "/animations/animationDigitalMarketing.mp4",
    type: "video/mp4",
  },
};

export const ourResults: OurResults = {
  title: "ourResults.title",
  separator: "/images/common/results/ourResultsSeparator1.svg",
  results: [
    {
      id: 1,
      title: "ourResults.items.0.title",
      text: "ourResults.items.0.text",
      cite: {
        text: "items.0.citeTex",
        owner: "items.0.owner",
        job: "items.0.job",
      },
      image: "/images/common/results/owner-cite-1.png",
      line: "/images/common/results/ourResultsLine.svg",
      profits: [
        {
          id: `profit-design`,
          image: '/icons/design.svg',
          text: "Diseño de marca."
        },
        {
          id: `profit-web-development`,
          image: '/icons/web-development.svg',
          text: "Diseño de paginas web."
        },
        {
          id: `profit-rss`,
          image: '/icons/rss.svg',
          text: "Gestión de redes sociales."
        },
        {
          id: `profit-cinema`,
          image: '/icons/cinema.svg',
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
      image: "/images/common/results/owner-cite-1.png",
      line: "/images/common/results/ourResultsLine1.svg",
      profits: [
        {
          id: `profit-design`,
          image: '/icons/design.svg',
          text: "Diseño de marca."
        },
        {
          id: `profit-web-development`,
          image: '/icons/web-development.svg',
          text: "Diseño de paginas web."
        },
        {
          id: `profit-rss`,
          image: '/icons/rss.svg',
          text: "Gestión de redes sociales."
        },
        {
          id: `profit-cinema`,
          image: '/icons/cinema.svg',
          text: "Producción y posproducción de contenidos audiovisuales para redes."
        }
      ]
    },
    {
      id: 3,
      title: "ourResults.items.2.title",
      text: "ourResults.items.2.text",
      cite: {
        text: "items.2.citeTex",
        owner: "items.2.owner",
        job: "items.2.job",
      },
      image: "/images/common/results/owner-cite-1.png",
      line: "/images/common/results/ourResultsLine1.svg",
      profits: [
        {
          id: `profit-design`,
          image: '/icons/design.svg',
          text: "Diseño de marca."
        },
        {
          id: `profit-web-development`,
          image: '/icons/web-development.svg',
          text: "Diseño de paginas web."
        },
        {
          id: `profit-rss`,
          image: '/icons/rss.svg',
          text: "Gestión de redes sociales."
        },
        {
          id: `profit-cinema`,
          image: '/icons/cinema.svg',
          text: "Producción y posproducción de contenidos audiovisuales para redes."
        }
      ]
    },
    {
      id: 4,
      title: "ourResults.items.3.title",
      text: "ourResults.items.3.text",
      cite: {
        text: "items.3.citeTex",
        owner: "items.3.owner",
        job: "items.3.job",
      },
      image: "/images/common/results/owner-cite-1.png",
      line: "/images/common/results/ourResultsLine1.svg",
      profits: [
        {
          id: `profit-design`,
          image: '/icons/design.svg',
          text: "Diseño de marca."
        },
        {
          id: `profit-web-development`,
          image: '/icons/web-development.svg',
          text: "Diseño de paginas web."
        },
        {
          id: `profit-rss`,
          image: '/icons/rss.svg',
          text: "Gestión de redes sociales."
        },
        {
          id: `profit-cinema`,
          image: '/icons/cinema.svg',
          text: "Producción y posproducción de contenidos audiovisuales para redes."
        }
      ]
    },
  ],
};

export const blog: Blog = {
  title: "blog.title",
  separator: "images/common/blog/blogSeparator.svg",
  news: [
    {
      id: 1,
      title: "news.0.title",
      text: "news.0.text",
      image: "/images/common/blog/imageBlog.jpeg",
      button: {
        variant: "white",
        text: "news.0.button",
        href: "/",
      },
    },
  ],
  cards: [
    {
      id: 1,
      title: "cards.0.title",
      text: "cards.0.text",
      categories: [],
      image: "/images/blog/cards/card1-blog.png",
      url: "/",
    },
    {
      id: 2,
      title: "cards.1.title",
      text: "cards.1.text",
      categories: [],
      image: "/images/blog/cards/card2-blog.png",
      url: "/",
    },
    {
      id: 3,
      title: "cards.2.title",
      text: "cards.2.text",
      categories: [],
      image: "/images/blog/cards/card3-blog.png",
      url: "/",
    },
  ],
};
