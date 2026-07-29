





"use client";

import { MapPin } from "lucide-react";

interface ApartmentLocationProps {
  location?: {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
  };
}

export default function ApartmentLocation({
  location,
}: ApartmentLocationProps) {

  if (!location) return null;


  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">

      <MapPin size={15} />

      <span>
        {[
          location.city,
          location.state,
          location.country,
        ]
          .filter(Boolean)
          .join(", ")}
      </span>

    </div>
  );
}