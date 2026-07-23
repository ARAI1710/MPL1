import React from "react";
import { cn } from "@/lib";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const sizes = {
  1: "text-4xl sm:text-5xl md:text-6xl font-bold",
  2: "text-3xl sm:text-4xl md:text-5xl font-bold",
  3: "text-2xl sm:text-3xl md:text-4xl font-bold",
  4: "text-xl sm:text-2xl md:text-3xl font-bold",
  5: "text-lg sm:text-xl md:text-2xl font-bold",
  6: "text-base sm:text-lg md:text-xl font-bold",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, className, children, ...props }, ref) => {
    const Component = (`h${level}` as unknown) as React.ElementType;

    return (
      <Component
        ref={ref}
        className={cn(sizes[level], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
