



"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import { useApartments } from "@/hooks/apartment/useApartments";

import Button from "@/components/ui/Button";

export default function RecentApartments() {

const {
  data: apartments = [],
  isLoading,
  isError,
} = useApartments();

const recentApartments =
  apartments.slice(0, 5);

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recent Apartments
          </h2>

          <p className="mt-2 text-slate-500">
            Recently added apartment listings.
          </p>
        </div>

        <Button variant="outline">
          <Link href="/admin/dashboard/apartments">
            View All

            <ArrowRight
              size={16}
              className="ml-2"
            />
          </Link>
        </Button>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Apartment
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Location
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Price
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Details
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Rating
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {recentApartments.map(
              (apartment, index) => (
                <motion.tr
                  key={apartment._id}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.08,
                  }}
                  className="
                    border-b
                    border-slate-100
                    transition
                    hover:bg-slate-50
                  "
                >
              {/* Apartment */}
<td className="py-6">
  <div className="flex items-center gap-4">
    <img
      src={
        apartment.media?.[0]?.url ??
        "/images/apartment-placeholder.jpg"
      }
      alt={apartment.name}
      className="
        h-20
        w-24
        rounded-2xl
        object-cover
      "
      onError={(e) => {
        e.currentTarget.src =
          "/images/apartment-placeholder.jpg";
      }}
    />

    <div>
      <h3 className="font-semibold text-slate-900">
        {apartment.name}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        <Building2 size={15} />

        <span>
          {apartment.location.city},{" "}
          {apartment.location.state}
        </span>
      </div>
    </div>
  </div>
</td>

                  {/* Location */}

                  <td className="py-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin
                        size={16}
                      />

                      <div>
                        <p>
                          {
                            apartment.location.city
                          }
                        </p>

                        <p className="text-sm text-slate-400">
                          {
                            apartment.location.state
                          }
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Price */}

                  <td className="py-6">
                    <span className="text-lg font-bold text-primary">
                      ₦
                      {apartment.pricePerNight.toLocaleString()}
                    </span>

                    <p className="text-xs text-slate-400">
                      /night
                    </p>
                  </td>

                  {/* Details */}

                  <td className="py-6">
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <BedDouble
                          size={15}
                        />

                        {
                          apartment.bedrooms
                        }{" "}
                        Beds
                      </div>

                      <div className="flex items-center gap-2">
                        <Bath
                          size={15}
                        />

                        {
                          apartment.bathrooms
                        }{" "}
                        Baths
                      </div>

                      <div className="flex items-center gap-2">
                        <Users
                          size={15}
                        />

                        {
                          apartment.guests
                        }{" "}
                        Guests
                      </div>
                    </div>
                  </td>

                  {/* Rating */}

                  <td className="py-6">
                    <div className="flex items-center gap-2">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="font-semibold">
                        {
                          apartment.rating
                        }
                      </span>

                      <span className="text-sm text-slate-400">
                        (
                        {
                          apartment.reviews
                        }
                        )
                      </span>
                    </div>
                  </td>

                  {/* Status */}

                  <td className="py-6">
                    <div className="flex flex-wrap gap-2">
                      {apartment.isAvailable && (
                        <span
                          className="
                            rounded-full
                            bg-emerald-100
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-emerald-700
                          "
                        >
                          Available
                        </span>
                      )}

                      {apartment.isFeatured && (
                        <span
                          className="
                            rounded-full
                            bg-blue-100
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-blue-700
                          "
                        >
                          Featured
                        </span>
                      )}

                     
                    </div>
                  </td>
                </motion.tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}