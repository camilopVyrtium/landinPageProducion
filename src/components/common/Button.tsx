'use client';

import { Button as ButtonModel} from "@/interfaces/common/Button";
import { Link  } from '@/i18n/navigation';
import { useModal } from "@/hooks/useModal"; 

type ButtonProps = ButtonModel & {
  showModalContact?: boolean;
};

export default function Button({
  variant,
  href,
  onClick,
  className,
  children,
  linkComponent: LinkComponent = Link,
  type,
  showModalContact = false

}: ButtonProps) {
  let colorClass = "";
  let hoverClass = "";
  const { openModal, ModalComponent } = useModal(); 

  
  switch (variant) {
    case "primary": colorClass = "bg-red1 text-yellow4"; hoverClass = "hover:bg-red2"; break;
    case "secondary": colorClass = "bg-blue2 text-yellow4"; hoverClass = "hover:bg-blue1 hover:text-yellow4"; break;
    case "gray": colorClass = "bg-gray4 text-yellow4"; hoverClass = "hover:bg-gray2"; break;
    case "white": colorClass = "bg-yellow4 text-gray3"; hoverClass = "hover:bg-yellow4 hover:text-gray3"; break;
    case "transparent": colorClass = "bg-transparent text-gray1"; hoverClass = "hover:bg-blue2 hover:text-yellow4"; break;
    case "blue3": colorClass = "bg-blue3 text-gray1"; hoverClass = "hover:bg-blue4 hover:text-gray1"; break;
    case "gray4": colorClass = "bg-gray4 text-yellow4"; hoverClass = "hover:bg-gray3 hover:text-yellow4"; break;
    case "red3": colorClass = "bg-red3 text-yellow4"; hoverClass = "hover:bg-red1 hover:text-yellow4"; break;
    default: colorClass = "bg-transparent text-gray1"; hoverClass = "bg-transparent text-gray1";
  }

  const baseClasses = "min-h-[36px] font-bold py-1 px-4 rounded-tl-lg rounded-tr-lg rounded-br-lg inline-block";
  const hasTextSizeClass = className?.match(/text-(\[.*?\]|xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/);
  const combinedClasses = `${colorClass} ${baseClasses} ${!hasTextSizeClass ? 'text-xl' : ''} ${hoverClass} ${className || ''}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (showModalContact) {
      e.preventDefault();
      openModal();
    } else if (onClick) {
      onClick(e);
    }
  };

  if (href  && !showModalContact) {
    return (
      <LinkComponent
        href={href}
        className={combinedClasses}
      >
        {children}
      </LinkComponent>
    );
  }

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        className={combinedClasses}
      >
        {children}
      </button>
      {showModalContact && <ModalComponent />}
    </>
  );
}
