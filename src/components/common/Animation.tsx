"use client";

import React from "react";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Carga diferida del componente Spline
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function ErrorFallback({ resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.userAgent);

  return (
    <div className="text-red-400 p-4 text-center">
      <h3 className="text-xl mb-2">⚠️ Error al cargar el mapa 3D</h3>
      {isMac && (
        <p className="mb-2">
          Recomendado: Usa Safari o Chrome actualizado en macOS
        </p>
      )}
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Intentar nuevamente
      </button>
    </div>
  );
}

// 2. Verificación WebGL
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

function Animation({ scene, height }: { scene: string; height: string }) {
  const [isValidScene, setIsValidScene] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  // 3. Pre-validar la escena Spline
  useEffect(() => {
    const verifyScene = async () => {
      try {
        const response = await fetch(
          scene
        );

        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers.get("content-type"));
        console.log(
          "Tamaño del archivo:",
          (await response.blob()).size + " bytes"
        );

        if (!response.ok) throw new Error("Scene not found");

        setIsValidScene(true);
      } catch (error) {
        console.error("Error en verificación:", error);
        setIsValidScene(false);
      }
    };

    setWebGLSupported(checkWebGLSupport());
    verifyScene();
  }, [scene]);

  if (!webGLSupported) {
    return (
      <div className="text-yellow-500 p-4 text-center">
        Tu navegador no soporta gráficos 3D. Actualiza o usa Chrome/Firefox.
      </div>
    );
  }
  return (
    <div
      style={{ height }}
      className="relative block overflow-x-hidden max-w-screen"
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div className="text-white">Cargando mapa...</div>}>
          {isValidScene && (
            <Spline
              className="overflow-x-hidden absolute top-0 flex items-center justify-center"
              scene={scene}
              onLoad={(spline) => {
                console.log("Spline cargado:", spline);
                spline.setZoom(0.5); // Ejemplo de ajuste
              }}
              onError={(error) => {
                console.error("Spline runtime error:", error);
                throw new Error("Spline initialization failed");
              }}
            />
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Animation;
