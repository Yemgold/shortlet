

"use client";

import * as React from "react";
import { Star } from "lucide-react";

const ratings = [5, 4, 3, 2];

export default function RatingFilter() {
  const [selected, setSelected] = React.useState<number | null>(4);

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <Star
          size={20}
          className="fill-yellow-400 text-yellow-400"
        />

        <h3 className="text-lg font-semibold text-slate-900">
          Guest Rating
        </h3>
      </div>

      <div className="space-y-3">
        {ratings.map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => setSelected(rating)}
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
                selected === rating
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }
            `}
          >
            <div className="flex items-center gap-2">
              {Array.from({ length: rating }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="text-sm text-slate-700">
                & Up
              </span>
            </div>

            {selected === rating && (
              <div className="h-3 w-3 rounded-full bg-blue-600" />
            )}
          </button>
        ))}
      </div>

      <div className="border-b border-slate-200" />
    </section>
  );
}