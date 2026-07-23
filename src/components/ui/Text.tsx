import React from "react";
import { cn } from "@/lib";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
}

const sizes = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = "base", weight = "normal", className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(sizes[size], weights[weight], className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";
