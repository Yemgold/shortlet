





"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          `
          h-11
          w-full
          appearance-none
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          pr-10
          text-sm
          outline-none
          transition-all
          focus:border-blue-600
          focus:ring-2
          focus:ring-blue-100
          disabled:cursor-not-allowed
          disabled:opacity-50
          `,
          className
        )}
        {...props}
      >
        {children}
      </select>

      <ChevronDown
        size={18}
        className="
          pointer-events-none
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />
    </div>
  );
});

Select.displayName = "Select";

export default Select;