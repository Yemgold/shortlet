

"use client";

import Image from "next/image";
import clsx from "clsx";

interface ThumbnailProps {
  src: string;
  alt: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Thumbnail({
  src,
  alt,
  active = false,
  onClick,
}: ThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "relative h-20 w-24 overflow-hidden rounded-xl border-2 transition-all duration-200",
        active
          ? "border-primary ring-2 ring-primary/20"
          : "border-transparent hover:border-slate-300"
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="96px"
        className="object-cover"
      />
    </button>
  );
}