


"use client";

import { X } from "lucide-react";

interface ActiveFilter {
  key: string;
  label: string;
}

interface ActiveFiltersProps {
  filters: ActiveFilter[];

  onRemove: (key: string) => void;

  onClearAll: () => void;
}

export default function ActiveFilters({
  filters,
  onRemove,
  onClearAll,
}: ActiveFiltersProps) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div
      className="
        mb-8
        flex
        flex-wrap
        items-center
        gap-3
      "
    >
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onRemove(filter.key)}
          className="
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
          "
        >
          <span>{filter.label}</span>

          <X size={14} />
        </button>
      ))}

      <button
        onClick={onClearAll}
        className="
          rounded-full
          bg-slate-100
          px-4
          py-2
          text-sm
          font-medium
          text-slate-600
          transition
          hover:bg-slate-200
        "
      >
        Clear All
      </button>
    </div>
  );
}