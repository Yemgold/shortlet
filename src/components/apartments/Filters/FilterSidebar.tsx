


"use client";

import {
  SlidersHorizontal,
  X,
} from "lucide-react";

import {
  Button,
  Card,
} from "@/components/ui";

import FilterHeader from "./FilterHeader";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import BedroomFilter from "./BedroomFilter";
import BathroomFilter from "./BathroomFilter";
import GuestFilter from "./GuestFilter";
import RatingFilter from "./RatingFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import AmenityFilter from "./AmenityFilter";
import FilterFooter from "./FilterFooter";
import MobileFilter from "./MobileFilters";


interface FilterSidebarProps {
  className?: string;
  onClose?: () => void;
}

export default function FilterSidebar({
  className,
  onClose,
}: FilterSidebarProps) {
  return (
    <Card
      className={`
        sticky
        top-24
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        ${className ?? ""}
      `}
      padding="none"
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-200
          px-6
          py-5
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
            "
          >
            <SlidersHorizontal
              className="text-blue-600"
              size={20}
            />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Filters
            </h2>

            <p className="text-sm text-slate-500">
              Narrow your search
            </p>
          </div>
        </div>

        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            leftIcon={<X size={18} />}
          >
            Close
          </Button>
        )}
      </div>

      {/* Filters */}

      <div
        className="
          max-h-[calc(100vh-230px)]
          space-y-8
          overflow-y-auto
          px-6
          py-6
        "
      >
        <FilterHeader />

        <MobileFilter />

        <PriceFilter />

        <PropertyTypeFilter />

        <BedroomFilter />

        <BathroomFilter />

        <GuestFilter />

        <RatingFilter />

        <AvailabilityFilter />

        <AmenityFilter />
      </div>

      {/* Footer */}

      <div
        className="
          border-t
          border-slate-200
          bg-slate-50
          px-6
          py-5
        "
      >
        <FilterFooter />
      </div>
    </Card>
  );
}