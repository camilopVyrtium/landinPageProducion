import InfoFunner from "./InfoFunner";

export const Funner = () => {
  return (
    <>
      <section className="mb-10 w-[85%] md:w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video a la izquierda */}
        <div className="w-full h-full flex items-center animate-slide-in-left">
          <video
            src="/videos/funner.mp4"
            muted
            autoPlay
            loop
            className="h-full"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="space-y-2 animate-slide-in-right group">
          <InfoFunner
            className="infofunner-escalera"
            icon="/icons/search.svg"
            title="Análisis:"
            color="text-[#FF5A4C]"
          >
            Evaluamos variables externas como la dinámica global, la industria y
            la competencia y contrastamos con factores internos que impactan
            directamente en tus resultados, como recursos, estrategia comercial
            y modelo financiero.
          </InfoFunner>

          <InfoFunner
            className="infofunner-escalera"
            icon="/icons/trending-up.svg"
            title="Estrategia"
            color="text-gray-900"
          >
            Investigamos tu mercado para segmentarlo con precisión, identificar
            tu público objetivo y detectar el nicho dorado. Con ello,
            construimos una propuesta de valor que tenga sentido para el
            cliente, que lo diferencie y que le aporte.{" "}
          </InfoFunner>

          <InfoFunner
            className="infofunner-escalera"
            icon="/icons/wifi.svg"
            title="Táctica"
            color="text-[#3ED6DB]"
          >
            Nuestros pilares clave son: gestión estratégica de redes sociales
            (Media), proyectos a la medida, producción audiovisual, relaciones
            públicas y aplicación de la IA para optimizar procesos. Así creamos
            soluciones integrales y efectivas{" "}
          </InfoFunner>
        </div>
      </section>
    </>
  );
};
