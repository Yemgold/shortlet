



"use client";

import { MapPin, Landmark, Navigation } from "lucide-react";
import { useFormContext } from "react-hook-form";

import Input from "@/components/ui/Input";

import type { ApartmentFormValues } from "@/schemas/apartment.schema";

export default function LocationStep() {
  const {
    register,
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
          <MapPin size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Apartment Location
          </h2>

          <p className="mt-2 text-slate-500">
            Help guests easily find your apartment by
            providing accurate location details.
          </p>
        </div>
      </div>

      {/* State & City */}

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="State"
          placeholder="e.g. Lagos"
          {...register("state")}
          error={errors.state?.message}
        />

        <Input
          label="City"
          placeholder="e.g. Lekki"
          {...register("city")}
          error={errors.city?.message}
        />
      </div>

      {/* Area */}

      <div className="mt-6">
        <Input
          label="Area / District"
          placeholder="e.g. Lekki Phase 1"
          {...register("area")}
          error={errors.area?.message}
        />
      </div>

      {/* Address */}

      <div className="mt-6">
        <Input
          label="Street Address"
          placeholder="No. 12 Admiralty Way"
          {...register("address")}
          error={errors.address?.message}
        />
      </div>

      {/* Landmark */}

      <div className="mt-6">
        <Input
          label="Nearest Landmark"
          placeholder="Opposite Nike Art Gallery"
          leftIcon={<Landmark size={18} />}
          {...register("landmark")}
          error={errors.landmark?.message}
        />
      </div>

      {/* Google Maps */}

      <div className="mt-6">
        <Input
          label="Google Maps Link (Optional)"
          placeholder="https://maps.google.com/..."
          leftIcon={<Navigation size={18} />}
          {...register("googleMapsUrl")}
          error={errors.googleMapsUrl?.message}
        />
      </div>

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
          Location Tips
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-blue-800">
          <li>
            • Use the full street address for accurate
            navigation.
          </li>

          <li>
            • Include a well-known landmark nearby.
          </li>

          <li>
            • A Google Maps link improves the guest
            experience.
          </li>

          <li>
            • Accurate locations increase booking trust.
          </li>
        </ul>
      </div>
    </div>
  );
}