import React from "react";
import { cn } from "@/lib";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-semibold transition-all duration-200",
          variant === "primary" && "bg-primary text-white hover:opacity-90",
          variant === "secondary" &&
            "bg-secondary text-white hover:opacity-90",
          variant === "outline" &&
            "border border-foreground hover:bg-foreground hover:text-background",
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2 text-base",
          size === "lg" && "px-6 py-3 text-lg",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
