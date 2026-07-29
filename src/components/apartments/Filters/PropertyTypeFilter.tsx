


"use client";

import * as React from "react";
import { Building2 } from "lucide-react";

const propertyTypes = [
  "Apartment",
  "Villa",
  "Studio",
  "Penthouse",
  "Duplex",
  "Bungalow",
  "Hotel",
  "Resort",
];

export default function PropertyTypeFilter() {
  const [selected, setSelected] =
    React.useState<string[]>([]);

  function toggle(type: string) {
    setSelected((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  }

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <Building2
          size={20}
          className="text-blue-600"
        />

        <h3 className="text-lg font-semibold text-slate-900">
          Property Type
        </h3>
      </div>

      <div className="space-y-3">
        {propertyTypes.map((type) => {
          const active = selected.includes(type);

          return (
            <button
              key={type}
              type="button"
              onClick={() => toggle(type)}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                border
                px-4
                py-3
                transition-all

                ${
                  active
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                }
              `}
            >
              <span className="font-medium">
                {type}
              </span>

              <div
                className={`
                  h-5
                  w-5
                  rounded-md
                  border
                  transition-all

                  ${
                    active
                      ? "border-blue-600 bg-blue-600"
                      : "border-slate-300"
                  }
                `}
              />
            </button>
          );
        })}
      </div>

      <div className="border-b border-slate-200" />
    </section>
  );
}