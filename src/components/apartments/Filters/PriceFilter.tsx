


"use client";

import * as React from "react";
import { Banknote } from "lucide-react";

export default function PriceFilter() {
  const [minPrice, setMinPrice] = React.useState(50000);
  const [maxPrice, setMaxPrice] = React.useState(300000);

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <Banknote
          size={20}
          className="text-blue-600"
        />

        <h3 className="text-lg font-semibold text-slate-900">
          Price Range
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Minimum
            </span>

            <span className="font-semibold text-slate-900">
              ₦{minPrice.toLocaleString()}
            </span>
          </div>

          <input
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Number(e.target.value))
            }
            className="w-full accent-blue-600"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Maximum
            </span>

            <span className="font-semibold text-slate-900">
              ₦{maxPrice.toLocaleString()}
            </span>
          </div>

          <input
            type="range"
            min={50000}
            max={1000000}
            step={10000}
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
            className="w-full accent-blue-600"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 p-3">
            <p className="text-xs text-slate-500">
              Min
            </p>

            <p className="font-semibold">
              ₦{minPrice.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-3">
            <p className="text-xs text-slate-500">
              Max
            </p>

            <p className="font-semibold">
              ₦{maxPrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200" />
    </section>
  );
}