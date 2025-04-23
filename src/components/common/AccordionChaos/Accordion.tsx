"use client";

import { useState, useEffect, useRef } from "react";
import { AccordionItem } from "@/components/common/AccordionChaos/AccordionItem";

interface Props {
  children: React.ReactNode;
  onOpenChange?: (index: number | null) => void;
  onHeightChange?: (height: number) => void;
}

export const Accordion = ({
  children,
  onOpenChange,
  onHeightChange,
}: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const accordionItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (accordionItemRef.current) {

      onHeightChange?.(accordionItemRef.current.offsetHeight);
    }
  }, [onHeightChange]);

  useEffect(() => {
    onOpenChange?.(openIndex);
  }, [openIndex, onOpenChange]);

  // Cierra el acordeón al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={accordionRef} className="w-full mx-auto space-y-2">
      {children &&
        Array.isArray(children) &&
        children.map((child, index) =>
          child ? (
            <AccordionItem
              ref={accordionItemRef}
              key={index}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              {...child.props}
            >
              {child.props.children}
            </AccordionItem>
          ) : null
        )}
    </div>
  );
};
