


import * as React from "react";
import { cn } from "@/lib/cn";

export default function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mt-1 text-sm text-slate-500",
        className
      )}
      {...props}
    />
  );
}