


"use client";

import type { Apartment } from "@/types/apartment";

interface ApartmentDetailsProps {
  apartment: Apartment;
}

export default function ApartmentDetails({
  apartment,
}: ApartmentDetailsProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        {apartment.name}
      </h1>

      <img
        src={
          apartment.media?.[0]?.url ??
          "/images/apartment-placeholder.jpg"
        }
        alt={apartment.name}
        className="h-96 w-full rounded-3xl object-cover"
      />

      <div className="rounded-2xl border border-slate-200 p-6">
        <p>
          <strong>Price:</strong> ₦
          {apartment.pricePerNight.toLocaleString()}
        </p>

        <p>
          <strong>Guests:</strong> {apartment.guests}
        </p>

        <p>
          <strong>Bedrooms:</strong> {apartment.bedrooms}
        </p>

        <p>
          <strong>Bathrooms:</strong> {apartment.bathrooms}
        </p>

        <p>
          <strong>Location:</strong>{" "}
          {apartment.location.address},{" "}
          {apartment.location.city},{" "}
          {apartment.location.state}
        </p>

        <div className="pt-4">
          <h2 className="font-semibold">
            Description
          </h2>

          <p className="mt-2 text-slate-600">
            {apartment.description}
          </p>
        </div>
      </div>
    </div>
  );
}