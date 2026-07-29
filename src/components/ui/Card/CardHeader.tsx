


import * as React from "react";
import { cn } from "@/lib/cn";

export default function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-4", className)}
      {...props}
    />
  );
}