



"use client";

import { MapPin } from "lucide-react";

import { Input } from "@/components/ui";

export default function DestinationField() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        Destination
      </label>

      <div className="relative">
        <MapPin
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
          placeholder="Where are you going?"
          className="
            h-[60px]
            rounded-2xl
            border-slate-200
            bg-slate-50
            pl-12
            shadow-sm
            transition-all
            focus:border-blue-500
            focus:bg-white
          "
        />
      </div>
    </div>
  );
}