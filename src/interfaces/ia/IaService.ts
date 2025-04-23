import { ButtonVariant } from "@/interfaces/common/Button";

interface Button {
  text: string;
  variant: ButtonVariant;
  href: string;
}

interface Bullet {
  id: string;
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  line: string;
  text: string;
  color: string;
  button: Button;
  bullets: Bullet[];
}

export interface IaService {
  title: string;
  services: Service[];
}
