


"use client";

import {
  MobileFilters,
} from "@/components/apartments/Filters";

import {
  SortDropdown,
  type SortOption,
} from "@/components/apartments/SortDropdown";

import {
  ViewSwitcher,
  type ViewType,
} from "@/components/apartments/ViewSwitcher";

import ListingStats from "./ListingStats";

interface ListingsHeaderProps {
  apartmentCount: number;

  view: ViewType;

  onViewChange: (view: ViewType) => void;

  sort: SortOption;

  onSortChange: (sort: SortOption) => void;
}

export default function ListingsHeader({
  apartmentCount,
  view,
  onViewChange,
  sort,
  onSortChange,
}: ListingsHeaderProps) {
  return (
    <div
      className="
        mb-8
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div>
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-wide
              text-blue-600
            "
          >
            Verified Apartments
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              text-slate-900
            "
          >
            {apartmentCount} Apartment
            {apartmentCount !== 1 && "s"} Found
          </h2>

          <p
            className="
              mt-2
              text-slate-500
            "
          >
            Luxury serviced apartments,
            villas, penthouses and
            short-let homes across
            Nigeria.
          </p>
        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-4
          "
        >
          <MobileFilters />

          <SortDropdown
            value={sort}
            onChange={onSortChange}
          />

          <ViewSwitcher
            value={view}
            onChange={onViewChange}
          />
        </div>
      </div>

      {/* Stats */}

      <div
        className="
          mt-8
        "
      >
        <ListingStats
          apartmentCount={apartmentCount}
        />
      </div>
    </div>
  );
}