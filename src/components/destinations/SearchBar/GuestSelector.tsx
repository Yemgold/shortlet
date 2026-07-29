
"use client";

import { Users } from "lucide-react";

export default function GuestSelector() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        Guests
      </label>

      <div className="relative">
        <Users
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
            shadow-sm
            outline-none
            transition
            focus:border-blue-500
            focus:bg-white
          "
        >
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
          <option>5 Guests</option>
          <option>6+ Guests</option>
        </select>
      </div>
    </div>
  );
}