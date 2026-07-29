


"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap",
    "font-semibold",
    "transition-all duration-200 motion-reduce:transition-none",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-[0.98]",

        secondary:
          "bg-slate-900 text-white shadow-sm hover:bg-black hover:shadow-md active:scale-[0.98]",

        outline:
          "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",

        ghost:
          "bg-transparent text-slate-900 hover:bg-slate-100",

        danger:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow-md active:scale-[0.98]",

        success:
          "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:shadow-md active:scale-[0.98]",

        warning:
          "bg-yellow-500 text-black shadow-sm hover:bg-yellow-600 hover:shadow-md active:scale-[0.98]",

        link:
          "bg-transparent p-0 text-blue-600 underline-offset-4 hover:underline h-auto",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6 text-base",

        lg: "h-12 px-8 text-lg",

        xl: "h-14 px-10 text-xl",

        icon: "h-11 w-11 p-0",
      },

      rounded: {
        default: "rounded-xl",

        full: "rounded-full",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        data-loading={loading}
        data-variant={variant}
        className={cn(
          buttonVariants({
            variant,
            size,
            rounded,
            fullWidth,
          }),
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center">
            <Loader2 className="h-4 w-4 animate-spin" />
          </span>
        ) : (
          leftIcon
        )}

        {children}

        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;















