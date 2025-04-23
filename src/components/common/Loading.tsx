// app/components/Loading.tsx
import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[40rem] flex items-center justify-center bg-yellow4">
      <Image
        src="/animations/loading.gif" // tu loader animado
        alt="Cargando animación"
        width={80}
        height={80}
        priority
      />
    </div>
  );
}
