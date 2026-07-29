



"use client";

import {
  BadgeCheck,
  BedDouble,
  Bath,
  Users,
  MapPin,
  Wallet,
  Star,
  ImageIcon,
} from "lucide-react";

import { useFormContext } from "react-hook-form";

import Button from "@/components/ui/Button";

import type {
  ApartmentFormValues,
} from "@/schemas/apartment.schema";

export default function ReviewStep() {
  const { watch } =
    useFormContext<ApartmentFormValues>();

  const values = watch();

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
            bg-green-50
            text-green-600
          "
        >
          <BadgeCheck size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Review Apartment
          </h2>

          <p className="mt-2 text-slate-500">
            Please review all information before
            publishing your apartment.
          </p>
        </div>
      </div>

      {/* Basic Information */}

      <section className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Basic Information
        </h3>

        <div className="grid gap-5 md:grid-cols-2">
          <ReviewCard
            title="Apartment Name"
            value={values.name}
          />

          <ReviewCard
            title="Featured"
            value={
              values.isFeatured
                ? "Yes"
                : "No"
            }
            icon={<Star size={16} />}
          />
        </div>

        <div className="mt-5">
          <ReviewCard
            title="Description"
            value={values.description}
          />
        </div>
      </section>

      {/* Location */}

      <section className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Location
        </h3>

        <ReviewCard
          icon={<MapPin size={16} />}
          title="Address"
          value={[
            values.address,
            values.area,
            values.city,
            values.state,
          ]
            .filter(Boolean)
            .join(", ")}
        />
      </section>

      {/* Pricing */}

      <section className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Pricing & Capacity
        </h3>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ReviewCard
            icon={<Wallet size={16} />}
            title="Price / Night"
            value={`₦${Number(
              values.pricePerNight ?? 0
            ).toLocaleString()}`}
          />

          <ReviewCard
            icon={<BedDouble size={16} />}
            title="Bedrooms"
            value={String(values.bedrooms)}
          />

          <ReviewCard
            icon={<Bath size={16} />}
            title="Bathrooms"
            value={String(values.bathrooms)}
          />

          <ReviewCard
            icon={<Users size={16} />}
            title="Guests"
            value={String(values.guests)}
          />
        </div>
      </section>

      {/* Amenities */}

      <section className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Amenities
        </h3>

        <div className="flex flex-wrap gap-3">
          {values.amenities?.length ? (
            values.amenities.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-blue-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-blue-700
                "
              >
                {item}
              </span>
            ))
          ) : (
            <p className="text-slate-500">
              No amenities selected.
            </p>
          )}
        </div>
      </section>

      {/* Images */}

      <section className="mb-10">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Images
        </h3>

        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-slate-300
            p-6
          "
        >
          <div className="flex items-center gap-3">
            <ImageIcon
              size={22}
              className="text-blue-600"
            />

            <span className="font-medium">
              {values.files?.length ?? 0} image(s)
              selected
            </span>
          </div>

          {values.files?.length > 0 && (
            <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
              {values.files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                  "
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="
                      h-32
                      w-full
                      object-cover
                    "
                  />

                  <div className="p-2">
                    <p className="truncate text-xs text-slate-500">
                      {file.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Publish Notice */}

      <div
        className="
          rounded-2xl
          border
          border-green-200
          bg-green-50
          p-6
        "
      >
        <h3 className="font-semibold text-green-900">
          Ready to Publish?
        </h3>

        <p className="mt-2 text-sm text-green-800">
          Once you click{" "}
          <strong>Publish Apartment</strong>,
          your apartment will be submitted to the
          server and become available according to
          your platform's publication workflow.
        </p>

        <div className="mt-5">
          <Button
            type="submit"
            size="lg"
          >
            Publish Apartment
          </Button>
        </div>
      </div>
    </div>
  );
}

interface ReviewCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

function ReviewCard({
  title,
  value,
  icon,
}: ReviewCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-5
      "
    >
      <div className="mb-2 flex items-center gap-2 text-slate-500">
        {icon}

        <span className="text-sm font-medium">
          {title}
        </span>
      </div>

      <p className="font-semibold text-slate-900">
        {value || "-"}
      </p>
    </div>
  );
}