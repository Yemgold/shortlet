


"use client";

import { useMemo } from "react";

import { format } from "date-fns";

import {
  CalendarDays,
  Moon,
} from "lucide-react";

import {
  DateRange,
  DayPicker,
} from "react-day-picker";

import "react-day-picker/dist/style.css";

interface DateRangePickerProps {
  value?: DateRange;

  disabledDates?: Date[];

  onChange: (
    range: DateRange | undefined
  ) => void;
}

export default function DateRangePicker({
  value,
  disabledDates = [],
  onChange,
}: DateRangePickerProps) {
  const nights = useMemo(() => {
    if (!value?.from || !value?.to)
      return 0;

    return Math.ceil(
      (value.to.getTime() -
        value.from.getTime()) /
        (1000 * 60 * 60 * 24)
    );
  }, [value]);

  return (
    <div
      className="
        space-y-6
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3">
        <CalendarDays
          className="text-primary"
          size={22}
        />

        <div>
          <h3 className="font-semibold">
            Select your stay
          </h3>

          <p className="text-sm text-slate-500">
            Choose your check-in and
            check-out dates.
          </p>
        </div>
      </div>

      {/* Summary */}

      <div className="grid grid-cols-2 gap-4">
        <div
          className="
            rounded-2xl
            border
            p-4
          "
        >
          <p className="text-xs uppercase text-slate-400">
            Check-in
          </p>

          <p className="mt-2 font-semibold">
            {value?.from
              ? format(
                  value.from,
                  "EEE, dd MMM yyyy"
                )
              : "--"}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            p-4
          "
        >
          <p className="text-xs uppercase text-slate-400">
            Check-out
          </p>

          <p className="mt-2 font-semibold">
            {value?.to
              ? format(
                  value.to,
                  "EEE, dd MMM yyyy"
                )
              : "--"}
          </p>
        </div>
      </div>

      {/* Nights */}

      <div
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-primary/5
          p-4
        "
      >
        <Moon
          size={20}
          className="text-primary"
        />

        <div>
          <p className="font-semibold">
            {nights} Night
            {nights !== 1 && "s"}
          </p>

          <p className="text-sm text-slate-500">
            Your selected stay
          </p>
        </div>
      </div>

      {/* Calendar */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
        "
      >
        <DayPicker
          mode="range"
          numberOfMonths={2}
          pagedNavigation
          selected={value}
          onSelect={onChange}
          disabled={[
            {
              before: new Date(),
            },
            ...disabledDates,
          ]}
        />
      </div>
    </div>
  );
}