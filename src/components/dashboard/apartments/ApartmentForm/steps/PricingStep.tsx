



"use client";

import { BedDouble, Bath, Users, Wallet, Building2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

import Input from "@/components/ui/Input";

import type { ApartmentFormValues } from "@/schemas/apartment.schema";

export default function PricingStep() {
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
          <Wallet size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing & Capacity
          </h2>

          <p className="mt-2 text-slate-500">
            Set your nightly rate and specify how many guests
            the apartment can comfortably accommodate.
          </p>
        </div>
      </div>

      {/* Price */}

      <Input
        label="Price Per Night (₦)"
        type="number"
        placeholder="50000"
        leftIcon={<Wallet size={18} />}
        {...register("pricePerNight", {
          valueAsNumber: true,
        })}
        error={errors.pricePerNight?.message}
      />

      {/* Capacity */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Input
          label="Bedrooms"
          type="number"
          placeholder="2"
          leftIcon={<BedDouble size={18} />}
          {...register("bedrooms", {
            valueAsNumber: true,
          })}
          error={errors.bedrooms?.message}
        />

        <Input
          label="Bathrooms"
          type="number"
          placeholder="2"
          leftIcon={<Bath size={18} />}
          {...register("bathrooms", {
            valueAsNumber: true,
          })}
          error={errors.bathrooms?.message}
        />

        <Input
          label="Maximum Guests"
          type="number"
          placeholder="4"
          leftIcon={<Users size={18} />}
          {...register("guests", {
            valueAsNumber: true,
          })}
          error={errors.guests?.message}
        />

        <Input
          label="Total Units"
          type="number"
          placeholder="1"
          leftIcon={<Building2 size={18} />}
          {...register("totalUnits", {
            valueAsNumber: true,
          })}
          error={errors.totalUnits?.message}
        />
      </div>

      {/* Information Card */}

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
          Pricing Tips
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-blue-800">
          <li>
            • Research similar apartments before setting your
            nightly rate.
          </li>

          <li>
            • Higher-quality photos often justify premium
            pricing.
          </li>

          <li>
            • Keep guest capacity realistic for a better guest
            experience.
          </li>

          <li>
            • Update prices during holidays and peak seasons.
          </li>
        </ul>
      </div>
    </div>
  );
}