import React, { Suspense, lazy } from "react";

// Carga diferida del componente Spline
const Spline = lazy(() => import("@splinetool/react-spline/next"));

// Componente de carga
const LoadingFallback = () => (
  <div className="w-screen h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function Animation({ scene, height }: { scene: string; height: string }) {
  return (
    <div
      style={{ height }}
      className="relative block overflow-x-hidden max-w-screen"
    >
      <Suspense fallback={<LoadingFallback />}>
        <Spline
          
          scene={scene}
          className="overflow-x-hidden absolute top-0 flex items-center justify-center"
        />
      </Suspense>
    </div>
  );
}

export default Animation;
