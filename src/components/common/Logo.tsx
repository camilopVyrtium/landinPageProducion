import Image from "next/image";
import logo from '@/assets/images/common/logo.png';
import logoWhite from '@/assets/images/common/logo-white.png';
interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "primary" | "secondary";
}

const Logo: React.FC<LogoProps> = ({ width, height, className, variant = "primary" }) => {
  if (!width || !height) {
    console.warn("Width and height should be provided for the logo.");
  }

  const logoSrc = variant === "primary" ? logo : logoWhite;

  return (
    <div className={className}>
      <Image
        className="object-content"
        src={logoSrc}
        alt="Logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
