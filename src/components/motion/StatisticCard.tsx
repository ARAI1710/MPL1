"use client";

import React from "react";
import { useMotionValue } from "@/hooks";

interface StatisticProps {
  label: string;
  value: string;
}

export const StatisticCard: React.FC<StatisticProps> = ({ label, value }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const animatedValue = useMotionValue(numericValue);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-primary mb-2">{animatedValue}+</p>
      <p className="text-secondary text-sm">{label}</p>
    </div>
  );
};
