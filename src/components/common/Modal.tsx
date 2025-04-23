"use client";

import { MouseEventHandler, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  handleClose: MouseEventHandler;
  type: "lg" | "md" | "sm";
  variant?: "blue" | "red" | "yellow";
};

export const Modal = ({ children, handleClose, type, variant = "blue" }: Props) => {
  useEffect(() => {
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const mouseEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        handleClose(mouseEvent as unknown as React.MouseEvent);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  const sizeClasses = {
    lg: "w-3/4 max-w-4xl",
    md: "md:w-[30vw] md:max-w-2xl w-[70vw]",
    sm: "w-1/3 max-w-lg",
  };

  const variantClasses = {
    blue: "bg-[--blue1]",
    red: "bg-[--red1]",
    yellow: "bg-[--yellow4]",
  };

  const buttonClasses = {
    blue: "bg-red1 text-yellow4 border-yellow4 hover:bg-red2",
    red: "bg-yellow4 text-red1 border-yellow4 hover:bg-yellow1",
    yellow: "bg-red1 text-yellow4 border-yellow4 hover:bg-red2",
  };

  // Usar createPortal para renderizar el modal directamente en el body
  return createPortal(
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[9999] overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className={`${sizeClasses[type]} ${variantClasses[variant]} rounded-lg shadow-xl my-8 relative`}>
        <div className="p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={handleClose}
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${buttonClasses[variant]}`}
            >
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
