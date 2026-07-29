


import * as React from "react";
import { cn } from "@/lib/cn";

export default function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-slate-900",
        className
      )}
      {...props}
    />
  );
}