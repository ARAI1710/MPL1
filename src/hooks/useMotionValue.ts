"use client";

import { useEffect, useState } from "react";

export function useMotionValue(
  initialValue: number,
  duration: number = 1000
): number {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setValue(Math.floor(initialValue * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [initialValue, duration]);

  return value;
}
