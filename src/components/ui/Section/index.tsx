

"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

const spacing = {
  none: "",
  sm: "py-8",
  md: "py-12",
  lg: "py-20",
  xl: "py-28",
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      children,
      spacing: sectionSpacing = "lg",
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          spacing[sectionSpacing],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;