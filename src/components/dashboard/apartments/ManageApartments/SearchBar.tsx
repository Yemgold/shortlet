

"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search apartments by name, city or address...",
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}

      <Search
        size={20}
        className="
          pointer-events-none
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
          border-slate-300
          bg-white
          pl-12
          pr-12
          text-sm
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition
          duration-200
          focus:border-primary
          focus:ring-4
          focus:ring-primary/10
        "
      />

      {/* Clear Button */}

      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="
            absolute
            right-3
            top-1/2
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
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