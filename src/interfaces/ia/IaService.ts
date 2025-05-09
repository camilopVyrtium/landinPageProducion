import { ButtonVariant } from "@/interfaces/common/Button";

export interface ButtonIA {
  text: string;
  variant: ButtonVariant;
  href: string;
}

interface Bullet {
  id: string;
  icon?: string;
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  line: string;
  text: string;
  color: string;
  button: ButtonIA;
  bullets: Bullet[];
}

export interface IaService {
  title: string;
  services: Service[];
}
