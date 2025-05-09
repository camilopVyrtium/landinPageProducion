import Image from "next/image";

export default function InfoBlock({ icon, title, color, children, className = "" }: {
  icon: string;
  title: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-2 transition-all duration-300 ${className}`}>
      <div className="flex items-center gap-2">
        <Image src={icon} alt={title} width={34} height={34} />
        <h3 className={`tex-base md:text-5xl font-extrabold ${color}`}>
          {title}
        </h3>
      </div>
      <p className="text-gray-700 text-base leading-relaxed md:text-xl">
        {children}
      </p>
    </div>
  );
}