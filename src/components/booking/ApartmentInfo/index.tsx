


"use client";

import { MapPin, BedDouble, Bath, Users } from "lucide-react";

import Button from "@/components/ui/Button";

interface ApartmentInfoProps {
  title: string;

  location: {
    address: string;
    city: string;
    state: string;
    country: string;
  };

  price: number;

  bedrooms: number;

  bathrooms: number;

  guests: number;

  amenities: string[];

  onBook?: () => void;

  onView?: () => void;
}

export default function ApartmentInfo({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  guests,
  amenities,
  onBook,
}: ApartmentInfoProps) {
  return (
    <div className="space-y-5 p-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={15} />

          <span>
            {location.city}, {location.state}
          </span>
        </div>
      </div>

      <div className="text-2xl font-bold text-primary">
        ₦{price.toLocaleString()}

        <span className="ml-1 text-sm font-normal text-slate-500">
          /night
        </span>
      </div>

      <div className="flex flex-wrap gap-5 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <BedDouble size={16} />
          {bedrooms} Beds
        </div>

        <div className="flex items-center gap-2">
          <Bath size={16} />
          {bathrooms} Baths
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          {guests} Guests
        </div>
      </div>

      {amenities.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 4).map((item) => (
            <span
              key={item}
              className="
                rounded-full
                bg-slate-100
                px-3
                py-1
                text-xs
                text-slate-600
              "
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <Button
        className="w-full"
        onClick={onBook}
      >
        Book Now
      </Button>
    </div>
  );
}