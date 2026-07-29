


import * as React from "react";
import { cn } from "@/lib/cn";

export default function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(className)}
      {...props}
    />
  );
}