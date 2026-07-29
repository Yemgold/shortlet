


"use client";

import Image from "next/image";
import clsx from "clsx";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
  className?: string;
}

const sizes = {
  xs: "w-8 h-8 text-xs",
  sm: "w-10 h-10 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-16 h-16 text-lg",
  xl: "w-24 h-24 text-xl",
};

function getInitials(name?: string) {
  if (!name) return "?";

  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export default function Avatar({
  src,
  alt = "Avatar",
  name,
  size = "md",
  rounded = true,
  className,
}: AvatarProps) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden bg-slate-200 font-semibold text-slate-700",
        sizes[size],
        rounded ? "rounded-full" : "rounded-xl",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
}