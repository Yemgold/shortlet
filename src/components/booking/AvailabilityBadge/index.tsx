


"use client";

import { CheckCircle2, XCircle } from "lucide-react";

interface AvailabilityBadgeProps {
  isAvailable?: boolean;

  totalUnits?: number;

  className?: string;
}

export default function AvailabilityBadge({
  isAvailable = true,
  totalUnits,
  className = "",
}: AvailabilityBadgeProps) {
  const available =
    isAvailable &&
    (totalUnits === undefined || totalUnits > 0);

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-3
        py-1.5
        text-sm
        font-medium
        ${
          available
            ? "bg-emerald-100 text-emerald-700"
            : "bg-red-100 text-red-700"
        }
        ${className}
      `}
    >
      {available ? (
        <>
          <CheckCircle2 size={16} />

          <span>Available</span>
        </>
      ) : (
        <>
          <XCircle size={16} />

          <span>Unavailable</span>
        </>
      )}
    </div>
  );
}