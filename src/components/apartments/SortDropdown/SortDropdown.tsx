



"use client";

import * as React from "react";
import {
  ArrowDownWideNarrow,
  Check,
  ChevronDown,
} from "lucide-react";

export type SortOption =
  | "recommended"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest"
  | "popular";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const options: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "recommended",
    label: "Recommended",
  },
  {
    value: "price-low",
    label: "Price (Low → High)",
  },
  {
    value: "price-high",
    label: "Price (High → Low)",
  },
  {
    value: "rating",
    label: "Top Rated",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "popular",
    label: "Most Popular",
  },
];

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  const [open, setOpen] = React.useState(false);

  const selected =
    options.find((o) => o.value === value) ??
    options[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex
          h-12
          min-w-[240px]
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-5
          shadow-sm
          transition-all
          hover:border-blue-400
          hover:shadow-md
        "
      >
        <div className="flex items-center gap-3">
          <ArrowDownWideNarrow
            size={18}
            className="text-blue-600"
          />

          <span className="font-medium">
            {selected.label}
          </span>
        </div>

        <ChevronDown
          size={18}
          className={`
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <>
          {/* Backdrop */}

          <button
            type="button"
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Menu */}

          <div
            className="
              absolute
              right-0
              z-50
              mt-3
              w-72
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-2xl
            "
          >
            {options.map((option) => {
              const active =
                option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    px-5
                    py-4
                    text-left
                    transition

                    ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-slate-50"
                    }
                  `}
                >
                  <span>{option.label}</span>

                  {active && (
                    <Check size={18} />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}