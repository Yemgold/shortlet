


"use client";

import * as React from "react";
import {
  CalendarCheck,
  Check,
} from "lucide-react";

const options = [
  "Available Today",
  "Instant Booking",
  "Free Cancellation",
];

export default function AvailabilityFilter() {
  const [selected, setSelected] =
    React.useState<string[]>([]);

  function toggle(value: string) {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <CalendarCheck
          size={20}
          className="text-blue-600"
        />

        <h3 className="text-lg font-semibold text-slate-900">
          Availability
        </h3>
      </div>

      <div className="space-y-3">
        {options.map((item) => {
          const active = selected.includes(item);

          return (
            <button
              key={item}
              type="button"
              onClick={() => toggle(item)}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                border
                p-4
                transition-all

                ${
                  active
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                }
              `}
            >
              <span className="font-medium text-slate-800">
                {item}
              </span>

              <div
                className={`
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-md
                  border

                  ${
                    active
                      ? "border-blue-600 bg-blue-600"
                      : "border-slate-300"
                  }
                `}
              >
                {active && (
                  <Check
                    size={13}
                    className="text-white"
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="border-b border-slate-200" />
    </section>
  );
}