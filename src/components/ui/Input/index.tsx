



"use client";

import * as React from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  loading?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      success = false,
      loading = false,

      leftIcon,
      rightIcon,

      startAdornment,
      endAdornment,

      className,

      type = "text",

      required,
      disabled,

      id,

      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    const [showPassword, setShowPassword] = React.useState(false);

    const inputType =
      type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-slate-700"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        <div
          className={cn(
            "flex h-11 w-full items-center rounded-xl border bg-white transition-all",

            error
              ? "border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100"
              : success
              ? "border-emerald-500 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100"
              : "border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100",

            disabled &&
              "cursor-not-allowed bg-slate-100 opacity-60"
          )}
        >
          {startAdornment && (
            <span className="border-r px-3 text-slate-500">
              {startAdornment}
            </span>
          )}

          {leftIcon && (
            <span className="pl-3 text-slate-400">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={inputType}
            disabled={disabled || loading}
            required={required}
            aria-invalid={!!error}
            aria-required={required}
            aria-busy={loading}
            className={cn(
              "h-full w-full bg-transparent px-3 text-slate-900 outline-none",
              "placeholder:text-slate-400",
              className
            )}
            {...props}
          />

          {loading && (
            <span className="pr-3">
              <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
            </span>
          )}

          {!loading && type === "password" && (
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="pr-3 text-slate-500 transition-colors hover:text-slate-700"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          )}

          {!loading &&
            rightIcon &&
            type !== "password" && (
              <span className="pr-3 text-slate-400">
                {rightIcon}
              </span>
            )}

          {endAdornment && (
            <span className="border-l px-3 text-slate-500">
              {endAdornment}
            </span>
          )}
        </div>

        {error ? (
          <p className="text-sm font-medium text-red-600">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-sm text-slate-500">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;