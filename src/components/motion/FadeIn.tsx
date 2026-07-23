"use client";

import React, { useEffect } from "react";
import { useScrollFade } from "@/hooks";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const ref = useScrollFade();

  return (
    <div ref={ref} className={`fade-in transition-opacity duration-1000 ${className || ""}`}>
      {children}
    </div>
  );
};
