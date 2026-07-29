


"use client";

import { CheckCircle2, Clock3, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: "ACTIVE" | "INACTIVE" | "PENDING" | string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const value = status.toUpperCase();

  if (value === "ACTIVE") {
    return (
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-200
          bg-emerald-50
          px-3
          py-1.5
          text-sm
          font-semibold
          text-emerald-700
        "
      >
        <CheckCircle2 size={16} />
        Active
      </span>
    );
  }

  if (value === "PENDING") {
    return (
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-amber-200
          bg-amber-50
          px-3
          py-1.5
          text-sm
          font-semibold
          text-amber-700
        "
      >
        <Clock3 size={16} />
        Pending
      </span>
    );
  }

  return (
    <span
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-red-200
        bg-red-50
        px-3
        py-1.5
        text-sm
        font-semibold
        text-red-700
      "
    >
      <XCircle size={16} />
      Inactive
    </span>
  );
}