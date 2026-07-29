


import * as React from "react";
import { cn } from "@/lib/cn";

export default function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-6 flex items-center justify-between",
        className
      )}
      {...props}
    />
  );
}