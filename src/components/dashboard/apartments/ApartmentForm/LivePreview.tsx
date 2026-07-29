


"use client";

import Image from "next/image";

import {
  MapPin,
  BedDouble,
  Bath,
  Users,
  Star,
  BadgeCheck,
} from "lucide-react";

import { useMemo, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import type {
  ApartmentFormValues,
} from "@/schemas/apartment.schema";

export default function LivePreview() {
  const { watch } =
    useFormContext<ApartmentFormValues>();

  const values = watch();

  const imageUrl = useMemo(() => {
    if (
      !values.files ||
      values.files.length === 0
    ) {
      return null;
    }

    return URL.createObjectURL(values.files[0]);
  }, [values.files]);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return (
    <aside
      className="
        sticky
        top-24
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        overflow-hidden
      "
    >
      {/* Cover */}

      <div className="relative aspect-[4/3] bg-slate-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Apartment Preview"
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              text-slate-400
            "
          >
            No Image
          </div>
        )}

        {values.isFeatured && (
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-amber-500
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-6">

        <h2
          className="
            text-xl
            font-bold
            text-slate-900
            line-clamp-2
          "
        >
          {values.name ||
            "Apartment Name"}
        </h2>

        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-slate-500
          "
        >
          <MapPin size={16} />

          <span className="text-sm">
            {[
              values.area,
              values.city,
              values.state,
            ]
              .filter(Boolean)
              .join(", ") ||
              "Location"}
          </span>
        </div>

        <div className="mt-5">
          <span
            className="
              text-3xl
              font-bold
              text-blue-600
            "
          >
            ₦
            {Number(
              values.pricePerNight ?? 0
            ).toLocaleString()}
          </span>

          <span className="text-slate-500">
            {" "}
            / night
          </span>
        </div>

        {/* Stats */}

        <div
          className="
            mt-6
            grid
            grid-cols-3
            gap-4
          "
        >
          <Stat
            icon={<BedDouble size={18} />}
            value={values.bedrooms ?? 0}
            label="Beds"
          />

          <Stat
            icon={<Bath size={18} />}
            value={values.bathrooms ?? 0}
            label="Baths"
          />

          <Stat
            icon={<Users size={18} />}
            value={values.guests ?? 0}
            label="Guests"
          />
        </div>

        {/* Amenities */}

        <div className="mt-6">
          <h3 className="font-semibold">
            Amenities
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {values.amenities
              ?.slice(0, 6)
              .map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-blue-700
                  "
                >
                  {item}
                </span>
              ))}

            {values.amenities?.length >
              6 && (
              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1
                  text-xs
                "
              >
                +
                {values.amenities.length -
                  6}{" "}
                more
              </span>
            )}
          </div>
        </div>

        {/* Rating */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-2">
            <Star
              size={18}
              className="
                fill-yellow-400
                text-yellow-400
              "
            />

            <span className="font-medium">
              New Listing
            </span>
          </div>

          <BadgeCheck
            className="
              text-green-600
            "
            size={20}
          />
        </div>

        {/* Description */}

        <div className="mt-6">
          <h3 className="font-semibold">
            Description
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
              line-clamp-5
            "
          >
            {values.description ||
              "Apartment description will appear here..."}
          </p>
        </div>
      </div>
    </aside>
  );
}

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
}

function Stat({
  icon,
  value,
  label,
}: StatProps) {
  return (
    <div
      className="
        rounded-xl
        bg-slate-50
        p-4
        text-center
      "
    >
      <div
        className="
          flex
          justify-center
          text-blue-600
        "
      >
        {icon}
      </div>

      <p
        className="
          mt-2
          text-lg
          font-bold
        "
      >
        {value}
      </p>

      <p
        className="
          text-xs
          text-slate-500
        "
      >
        {label}
      </p>
    </div>
  );
}