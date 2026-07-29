






"use client";

import { CalendarDays } from "lucide-react";

interface Props {
  label: string;
  placeholder?: string;
}

export default function DateRangeField({
  label,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        <CalendarDays
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
        />

        <input
          type="date"
          className="
            h-[60px]
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            pl-12
            pr-4
            shadow-sm
            outline-none
            transition
            focus:border-blue-500
            focus:bg-white
          "
        />
      </div>
    </div>
  );
}