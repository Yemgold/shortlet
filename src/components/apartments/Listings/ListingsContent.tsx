


"use client";

import type { Apartment } from "@/types/apartment";

import {
  ApartmentGrid,
  ApartmentList,
  ApartmentMap,
} from "@/components/apartments/ApartmentGrid";

import type { ViewType } from "@/components/apartments/ViewSwitcher";

interface ListingsContentProps {
  apartments: Apartment[];
  view: ViewType;
}

export default function ListingsContent({
  apartments,
  view,
}: ListingsContentProps) {
  if (apartments.length === 0) {
    return (
      <div
        className="
          flex
          min-h-[400px]
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white
          px-8
          py-16
          text-center
        "
      >
        <h3
          className="
            text-2xl
            font-bold
            text-slate-900
          "
        >
          No Apartments Found
        </h3>

        <p
          className="
            mt-3
            max-w-md
            text-slate-500
          "
        >
          We couldn't find any apartments matching your
          current search and filter criteria. Try adjusting
          your filters or searching a different location.
        </p>
      </div>
    );
  }

  switch (view) {
    case "list":
      return (
        <ApartmentList
          apartments={apartments}
        />
      );

    case "map":
      return (
        <ApartmentMap
          apartments={apartments}
        />
      );

    case "grid":
    default:
      return (
        <ApartmentGrid
          apartments={apartments}
        />
      );
  }
}