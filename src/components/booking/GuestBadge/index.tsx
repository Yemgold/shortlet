


"use client";

import { Users } from "lucide-react";

interface GuestBadgeProps {
  guests: number;

  className?: string;
}

export default function GuestBadge({
  guests,
  className = "",
}: GuestBadgeProps) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-blue-50
        px-3
        py-1.5
        text-sm
        font-medium
        text-blue-700
        ${className}
      `}
    >
      <Users size={15} />

      <span>
        {guests} Guest{guests !== 1 ? "s" : ""}
      </span>
    </div>
  );
}