


"use client";

import * as React from "react";
import {
  Minus,
  Plus,
  Users,
} from "lucide-react";

export default function GuestFilter() {
  const [guests, setGuests] = React.useState(2);

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <Users size={20} className="text-blue-600" />

        <h3 className="text-lg font-semibold text-slate-900">
          Guests
        </h3>
      </div>

      <div
        className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-4
        "
      >
        <div>
          <p className="font-semibold text-slate-900">
            {guests} Guest{guests > 1 ? "s" : ""}
          </p>

          <p className="text-sm text-slate-500">
            Maximum occupancy
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={guests <= 1}
            onClick={() =>
              setGuests((g) => Math.max(1, g - 1))
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-300
              transition
              hover:bg-slate-100
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <Minus size={16} />
          </button>

          <span className="w-8 text-center text-lg font-bold">
            {guests}
          </span>

          <button
            type="button"
            onClick={() =>
              setGuests((g) => g + 1)
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="border-b border-slate-200" />
    </section>
  );
}