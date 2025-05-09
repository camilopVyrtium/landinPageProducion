export type ButtonVariant = "primary" | "secondary" | "gray" | "white" | "transparent" | "blue3" | "gray4" | "red3" | "transparent-secondary";
export type ButtonType = "submit" | "reset" | "button";
import { Link as NextIntlLink } from '@/i18n/navigation';

export interface Button {
    children: React.ReactNode;
    type?: ButtonType;
    onClick?: (e: React.MouseEvent) => void;
    variant?: ButtonVariant;
    className?: string;
    href?: string;
    linkComponent?: typeof NextIntlLink;

}