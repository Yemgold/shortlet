

"use client";

import * as React from "react";
import { BedDouble } from "lucide-react";

const options = [1, 2, 3, 4, 5, 6];

export default function BedroomFilter() {
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <BedDouble size={20} className="text-blue-600" />

        <h3 className="text-lg font-semibold text-slate-900">
          Bedrooms
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {options.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setSelected(value)}
            className={`
              rounded-xl
              border
              px-5
              py-3
              text-sm
              font-semibold
              transition-all

              ${
                selected === value
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white hover:border-blue-300"
              }
            `}
          >
            {value}+
          </button>
        ))}
      </div>

      <div className="border-b border-slate-200" />
    </section>
  );
}