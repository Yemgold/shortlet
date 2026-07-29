

"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const Heading = ({
  title,
  subtitle,
  align = "left",
  className,
}: HeadingProps) => {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;