

"use client";

import {
  Building2,
  CheckCircle2,
  Filter,
  Star,
  XCircle,
} from "lucide-react";

export interface ApartmentFilters {
  status: "all" | "available" | "unavailable";
  featured: "all" | "featured" | "normal";
}

interface FiltersProps {
  value: ApartmentFilters;
  onChange: (
    filters: ApartmentFilters
  ) => void;
}

export default function Filters({
  value,
  onChange,
}: FiltersProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
      "
    >
      {/* Heading */}

      <div className="flex items-center gap-2">
        <Filter
          size={18}
          className="text-primary"
        />

        <span className="font-semibold text-slate-700">
          Filters
        </span>
      </div>

      {/* Availability */}

      <div className="flex items-center gap-2">
        <Building2
          size={16}
          className="text-slate-400"
        />

        <select
          value={value.status}
          onChange={(e) =>
            onChange({
              ...value,
              status:
                e.target.value as ApartmentFilters["status"],
            })
          }
          className="
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-2
            text-sm
            outline-none
            transition
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
          "
        >
          <option value="all">
            All Apartments
          </option>

          <option value="available">
            Available
          </option>

          <option value="unavailable">
            Unavailable
          </option>
        </select>
      </div>

      {/* Featured */}

      <div className="flex items-center gap-2">
        <Star
          size={16}
          className="text-yellow-500"
        />

        <select
          value={value.featured}
          onChange={(e) =>
            onChange({
              ...value,
              featured:
                e.target.value as ApartmentFilters["featured"],
            })
          }
          className="
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-2
            text-sm
            outline-none
            transition
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
          "
        >
          <option value="all">
            All Listings
          </option>

          <option value="featured">
            Featured Only
          </option>

          <option value="normal">
            Non Featured
          </option>
        </select>
      </div>

      {/* Active Filters */}

      <div className="ml-auto flex flex-wrap gap-2">
        {value.status !== "all" && (
          <span
            className="
              inline-flex
              items-center
              gap-1
              rounded-full
              bg-blue-100
              px-3
              py-1
              text-xs
              font-semibold
              text-blue-700
            "
          >
            {value.status ===
            "available" ? (
              <CheckCircle2 size={14} />
            ) : (
              <XCircle size={14} />
            )}

            {value.status}
          </span>
        )}

        {value.featured !== "all" && (
          <span
            className="
              inline-flex
              items-center
              gap-1
              rounded-full
              bg-yellow-100
              px-3
              py-1
              text-xs
              font-semibold
              text-yellow-700
            "
          >
            <Star size={14} />

            {value.featured ===
            "featured"
              ? "Featured"
              : "Normal"}
          </span>
        )}

        {(value.status !== "all" ||
          value.featured !==
            "all") && (
          <button
            onClick={() =>
              onChange({
                status: "all",
                featured: "all",
              })
            }
            className="
              rounded-full
              border
              border-slate-300
              px-3
              py-1
              text-xs
              font-semibold
              text-slate-600
              transition
              hover:bg-slate-100
            "
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}