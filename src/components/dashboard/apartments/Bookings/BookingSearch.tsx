


"use client";

import { Search, X } from "lucide-react";

interface BookingSearchProps {
  value: string;

  onChange: (value: string) => void;

  placeholder?: string;
}

export default function BookingSearch({
  value,
  onChange,
  placeholder = "Search guest, apartment or booking...",
}: BookingSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      {/* Input */}

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          pl-11
          pr-11
          text-sm
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

      {/* Clear Button */}

      {value && (
        <button
          onClick={() => onChange("")}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            text-slate-400
            transition
            hover:bg-slate-100
            hover:text-slate-700
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}