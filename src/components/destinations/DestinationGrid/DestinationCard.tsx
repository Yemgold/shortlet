


"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Star,
  Heart,
} from "lucide-react";

export interface DestinationCardProps {
  destination: {
    id: string | number;
    name: string;
    slug: string;
    image: string;
    apartments: number;
    description: string;
    featured?: boolean;
    rating?: number;
  };
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={`/apartments?city=${destination.slug}`}
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Featured Badge */}

        {destination.featured && (
          <div className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
            Featured
          </div>
        )}

        {/* Wishlist */}

        <button
          type="button"
          className="
            absolute
            right-5
            top-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-slate-700
            backdrop-blur
            transition
            hover:bg-red-500
            hover:text-white
          "
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={18} />
        </button>

        {/* Bottom Content */}

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold">
              {destination.name}
            </h3>

            <div className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 backdrop-blur">
              <Star
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="text-sm font-semibold">
                {destination.rating ?? "4.9"}
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-white/90">
            <MapPin size={16} />

            Nigeria
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="p-7">
        <p className="line-clamp-3 leading-7 text-slate-600">
          {destination.description}
        </p>

        {/* Stats */}

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Building2 size={20} />
            </div>

            <div>
              <p className="text-lg font-bold text-slate-900">
                {destination.apartments.toLocaleString()}
              </p>

              <span className="text-sm text-slate-500">
                Apartments
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-semibold text-blue-600">
            Explore

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Luxury
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Verified
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Short Stay
          </span>
        </div>
      </div>
    </Link>
  );
}