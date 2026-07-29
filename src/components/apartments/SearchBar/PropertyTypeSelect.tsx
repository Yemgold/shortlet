




"use client";

import { Building2 } from "lucide-react";

import { Select } from "@/components/ui";

const propertyTypes = [
  {
    label: "All Properties",
    value: "",
  },
  {
    label: "Apartment",
    value: "apartment",
  },
  {
    label: "Villa",
    value: "villa",
  },
  {
    label: "Penthouse",
    value: "penthouse",
  },
  {
    label: "Studio",
    value: "studio",
  },
  {
    label: "Duplex",
    value: "duplex",
  },
  {
    label: "Bungalow",
    value: "bungalow",
  },
  {
    label: "Hotel",
    value: "hotel",
  },
  {
    label: "Resort",
    value: "resort",
  },
];

export default function PropertyTypeSelect() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        Property Type
      </label>

      <div className="relative">
        <Building2
          size={20}
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            z-10
            -translate-y-1/2
            text-blue-600
          "
        />

        <Select
          className="
            h-[60px]
            rounded-2xl
            border-slate-200
            bg-slate-50
            pl-12
            pr-10
            shadow-sm
            transition-all
            focus:border-blue-500
            focus:bg-white
          "
        >
          {propertyTypes.map((type) => (
            <option
              key={type.value}
              value={type.value}
            >
              {type.label}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}