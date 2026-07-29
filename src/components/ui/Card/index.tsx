"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  bordered?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      hover = false,
      bordered = true,
      padding = "md",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-white",

          bordered && "border border-slate-200",

          "shadow-sm",

          hover &&
            "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",

          paddingClasses[padding],

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;