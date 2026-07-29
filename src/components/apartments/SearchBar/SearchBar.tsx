



"use client";

import { Search } from "lucide-react";

import {
  Button,
  Card,
} from "@/components/ui";

import DestinationField from "./DestinationField";
import DateRangeField from "./DateRangeField";
import GuestSelector from "./GuestSelector";
import PropertyTypeSelect from "./PropertyTypeSelect";

export default function SearchBar() {
  return (
    <section className="-mt-14 relative z-30 pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card
          padding="lg"
          className="
            overflow-hidden
            rounded-[30px]
            border
            border-slate-200/80
            bg-white/95
            shadow-[0_25px_80px_rgba(15,23,42,0.15)]
            backdrop-blur-xl
          "
        >
          {/* Header */}

          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Find Your Perfect Stay
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Search from luxury apartments, villas,
                penthouses and serviced homes across
                Nigeria.
              </p>
            </div>

            <div
              className="
                inline-flex
                items-center
                rounded-full
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              Over 2,500 verified properties
            </div>
          </div>

          {/* Search Form */}

          <div
            className="
              grid
              gap-5
              xl:grid-cols-6
              lg:grid-cols-3
              sm:grid-cols-2
            "
          >
            <DestinationField />

            <DateRangeField
              label="Check In"
              placeholder="Select date"
            />

            <DateRangeField
              label="Check Out"
              placeholder="Select date"
            />

            <GuestSelector />

            <PropertyTypeSelect />

            <div className="flex items-end">
              <Button
                fullWidth
                size="lg"
                leftIcon={<Search size={20} />}
                className="
                  h-[60px]
                  rounded-2xl
                  shadow-lg
                  hover:shadow-xl
                "
              >
                Search
              </Button>
            </div>
          </div>

          {/* Popular Searches */}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-slate-500">
              Popular:
            </span>

            {[
              "Lagos",
              "Abuja",
              "Port Harcourt",
              "Ibadan",
              "Short Stay",
              "Luxury Villa",
            ].map((item) => (
              <button
                key={item}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-2
                  text-sm
                  text-slate-700
                  transition
                  hover:border-blue-600
                  hover:bg-blue-50
                  hover:text-blue-700
                "
              >
                {item}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}