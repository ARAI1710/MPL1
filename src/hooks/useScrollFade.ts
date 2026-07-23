"use client";

import { useEffect, useRef } from "react";

interface UseScrollFadeOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollFade(options: UseScrollFadeOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return elementRef;
}
