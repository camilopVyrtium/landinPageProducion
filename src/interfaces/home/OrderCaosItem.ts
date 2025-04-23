import { ButtonVariant } from "@/interfaces/common/Button";

export interface OrderCaosItem {
    id: number;
    titulo: string;
    descripcion: string;
    varianButton: ButtonVariant;
    href: string;
    configLine: {
      src: string;
      className: string;
      translateY: boolean;
    };
  }