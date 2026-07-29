




"use client";

import { MapPin } from "lucide-react";

export default function DestinationField() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        Destination
      </label>

      <div className="relative">
        <MapPin
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
        />

        <select
          className="
            h-[60px]
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            pl-12
            pr-4
            text-slate-800
            shadow-sm
            outline-none
            transition
            focus:border-blue-500
            focus:bg-white
          "
        >
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Port Harcourt</option>
          <option>Ibadan</option>
          <option>Enugu</option>
          <option>Calabar</option>
          <option>Uyo</option>
          <option>Jos</option>
        </select>
      </div>
    </div>
  );
}