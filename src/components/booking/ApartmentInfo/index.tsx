
//src\components\booking\ApartmentInfo\index.tsx

"use client";

import {
  MapPin,
  BedDouble,
  Bath,
  Users,
  CalendarDays,
} from "lucide-react";

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

  onCheckAvailability?: () => void;

  showCheckAvailabilityButton?: boolean;
}

export default function ApartmentInfo({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  guests,
  amenities,
  onCheckAvailability,
  showCheckAvailabilityButton = true,
}: ApartmentInfoProps) {

console.log("ApartmentInfo rendered");
console.log(onCheckAvailability);

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {title}
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={15} />

          <span>
            {location.city}, {location.state}
          </span>
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="text-3xl font-bold text-primary">
          ₦{price.toLocaleString()}

          <span className="ml-1 text-base font-normal text-slate-500">
            /night
          </span>
        </div>
      </div>

      {/* Apartment Details */}
      <div className="flex flex-wrap gap-6 border-y border-slate-200 py-4 text-sm text-slate-700">
        <div className="flex items-center gap-2">
          <BedDouble size={18} />
          <span>{bedrooms} Bedrooms</span>
        </div>

        <div className="flex items-center gap-2">
          <Bath size={18} />
          <span>{bathrooms} Bathrooms</span>
        </div>

        <div className="flex items-center gap-2">
          <Users size={18} />
          <span>{guests} Guests</span>
        </div>
      </div>

      {/* Amenities */}
      {amenities.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Amenities
          </h3>

          <div className="flex flex-wrap gap-2">
            {amenities.slice(0, 8).map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

     

   {showCheckAvailabilityButton && (
  <Button
    className="w-full"
    onClick={() => {
      console.log("Button clicked");
      console.log("onCheckAvailability =", onCheckAvailability);
      onCheckAvailability?.();
    }}
  >
    <CalendarDays size={18} className="mr-2" />
    Check Availability
  </Button>
)}





      <p className="text-center text-xs text-slate-500">
        Select your check-in and check-out dates to confirm
        availability before proceeding to booking.
      </p>
    </div>
  );
}