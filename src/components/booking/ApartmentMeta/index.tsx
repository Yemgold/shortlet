



"use client";

import {
  BedDouble,
  Bath,
  Users,
} from "lucide-react";

import type { Apartment } from "@/types/apartment";

interface Props {
  apartment: Apartment;
}

export default function ApartmentMeta({
  apartment,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
      <div className="flex items-center gap-2">
        <BedDouble size={18} />

        <span>
          {apartment.bedrooms} Bed
          {apartment.bedrooms !== 1 && "s"}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Bath size={18} />

        <span>
          {apartment.bathrooms} Bath
          {apartment.bathrooms !== 1 && "s"}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Users size={18} />

        <span>
          {apartment.guests} Guest
          {apartment.guests !== 1 && "s"}
        </span>
      </div>
    </div>
  );
}