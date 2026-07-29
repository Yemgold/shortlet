



"use client";

import {
  Wifi,
  Car,
  CookingPot,
  Waves,
} from "lucide-react";

const icons = {
  Wifi,
  Parking: Car,
  Kitchen: CookingPot,
  Pool: Waves,
};

interface Props {
  amenities: string[];
}

export default function ApartmentAmenities({
  amenities,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {amenities.map((item) => {
        const Icon =
          icons[item as keyof typeof icons];

        return (
          <div
            key={item}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-slate-100
              px-3
              py-2
              text-xs
              font-medium
              text-slate-700
            "
          >
            {Icon && <Icon size={14} />}

            {item}
          </div>
        );
      })}
    </div>
  );
}