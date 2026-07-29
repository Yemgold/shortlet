



"use client";

import * as React from "react";
import {
  Wifi,
  Car,
  Waves,
  Dumbbell,
  ShieldCheck,
  UtensilsCrossed,
  AirVent,
  Tv,
  Check,
} from "lucide-react";

const amenities = [
  {
    name: "Wi-Fi",
    icon: Wifi,
  },
  {
    name: "Parking",
    icon: Car,
  },
  {
    name: "Swimming Pool",
    icon: Waves,
  },
  {
    name: "Gym",
    icon: Dumbbell,
  },
  {
    name: "24/7 Security",
    icon: ShieldCheck,
  },
  {
    name: "Kitchen",
    icon: UtensilsCrossed,
  },
  {
    name: "Air Conditioning",
    icon: AirVent,
  },
  {
    name: "Smart TV",
    icon: Tv,
  },
];

export default function AmenityFilter() {
  const [selected, setSelected] =
    React.useState<string[]>([]);

  function toggle(name: string) {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  }

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <Wifi
          size={20}
          className="text-blue-600"
        />

        <h3 className="text-lg font-semibold text-slate-900">
          Amenities
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {amenities.map((amenity) => {
          const Icon = amenity.icon;
          const active = selected.includes(
            amenity.name
          );

          return (
            <button
              key={amenity.name}
              type="button"
              onClick={() =>
                toggle(amenity.name)
              }
              className={`
                relative
                flex
                flex-col
                items-center
                gap-3
                rounded-2xl
                border
                p-4
                transition-all

                ${
                  active
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                }
              `}
            >
              <Icon
                size={24}
                className={
                  active
                    ? "text-blue-600"
                    : "text-slate-600"
                }
              />

              <span className="text-center text-sm font-medium">
                {amenity.name}
              </span>

              {active && (
                <div
                  className="
                    absolute
                    right-2
                    top-2
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                  "
                >
                  <Check
                    size={12}
                    className="text-white"
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}