



"use client";

import { Sparkles } from "lucide-react";
import { useFormContext } from "react-hook-form";

import AmenitiesInput from "../../AmenitiesInput";

import type { ApartmentFormValues } from "@/schemas/apartment.schema";

export default function AmenitiesStep() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ApartmentFormValues>();

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-start gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-50
            text-blue-600
          "
        >
          <Sparkles size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Apartment Amenities
          </h2>

          <p className="mt-2 text-slate-500">
            Select or add the facilities available in this
            apartment. Guests often filter apartments by
            amenities.
          </p>
        </div>
      </div>

      {/* Amenities */}

      <AmenitiesInput
        value={watch("amenities")}
        onChange={(amenities) =>
          setValue("amenities", amenities, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      />

      {errors.amenities && (
        <p className="mt-3 text-sm text-red-600">
          {errors.amenities.message}
        </p>
      )}

      {/* Tips */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-blue-100
          bg-blue-50
          p-5
        "
      >
        <h4 className="font-semibold text-blue-900">
          Popular Amenities
        </h4>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "WiFi",
            "Air Conditioning",
            "Smart TV",
            "Netflix",
            "Swimming Pool",
            "Gym",
            "Kitchen",
            "Washing Machine",
            "Parking",
            "Security",
            "Generator",
            "Balcony",
            "Workspace",
            "Hot Water",
            "Elevator",
          ].map((item) => (
            <span
              key={item}
              className="
                rounded-full
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
                shadow-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-5 text-sm text-blue-800">
          Listings with more complete amenities generally
          perform better in search results and receive more
          bookings.
        </p>
      </div>
    </div>
  );
}