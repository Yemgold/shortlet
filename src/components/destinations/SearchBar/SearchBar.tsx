
"use client";

import DestinationField from "./DestinationField";
import DateRangeField from "./DateRangeField";
import GuestSelector from "./GuestSelector";
import SearchButton from "./SearchButton";

export default function SearchBar() {
  return (
    <section className="-mt-14 relative z-20">
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-3xl
          border
          border-white/20
          bg-white
          p-6
          shadow-2xl
        "
      >
        <div className="grid gap-4 lg:grid-cols-5">
          <DestinationField />

          <DateRangeField
            label="Check-in"
            placeholder="Select date"
          />

          <DateRangeField
            label="Check-out"
            placeholder="Select date"
          />

          <GuestSelector />

          <SearchButton />
        </div>
      </div>
    </section>
  );
}