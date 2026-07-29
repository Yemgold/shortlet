


"use client";

import { X } from "lucide-react";

interface FilterChipProps {
  label: string;

  onRemove?: () => void;

  removable?: boolean;

  className?: string;
}

export default function FilterChip({
  label,
  onRemove,
  removable = true,
  className = "",
}: FilterChipProps) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-blue-50
        px-4
        py-2
        text-sm
        font-medium
        text-blue-700
        transition
        hover:bg-blue-100
        ${className}
      `}
    >
      <span>{label}</span>

      {removable && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label} filter`}
          className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            transition
            hover:bg-blue-200
          "
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}