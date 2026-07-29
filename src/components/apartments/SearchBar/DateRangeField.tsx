



"use client";

import { CalendarDays } from "lucide-react";

import { Input } from "@/components/ui";

interface DateRangeFieldProps {
  label: string;
  placeholder: string;
}

export default function DateRangeField({
  label,
  placeholder,
}: DateRangeFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        <CalendarDays
          size={20}
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-blue-600
          "
        />

        <Input
          type="date"
          placeholder={placeholder}
          className="
            h-[60px]
            rounded-2xl
            border-slate-200
            bg-slate-50
            pl-12
            pr-4
            shadow-sm
            transition-all
            focus:border-blue-500
            focus:bg-white

            [&::-webkit-calendar-picker-indicator]:cursor-pointer
            [&::-webkit-calendar-picker-indicator]:opacity-70
            hover:[&::-webkit-calendar-picker-indicator]:opacity-100
          "
        />
      </div>
    </div>
  );
}