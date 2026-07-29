


"use client";

import { Minus, Plus, Users } from "lucide-react";

import Button from "@/components/ui/Button";

interface BookingGuestsProps {
  value: number;

  maxGuests: number;

  onChange: (value: number) => void;
}

export default function BookingGuests({
  value,
  maxGuests,
  onChange,
}: BookingGuestsProps) {
  const decrease = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const increase = () => {
    if (value < maxGuests) {
      onChange(value + 1);
    }
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
      "
    >
      <div className="flex items-center gap-3">
        <Users
          size={20}
          className="text-primary"
        />

        <div>
          <h3 className="font-semibold text-slate-900">
            Guests
          </h3>

          <p className="text-sm text-slate-500">
            Maximum {maxGuests} guest
            {maxGuests > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decrease}
          disabled={value <= 1}
        >
          <Minus size={18} />
        </Button>

        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900">
            {value}
          </p>

          <p className="text-sm text-slate-500">
            Guest{value > 1 ? "s" : ""}
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={increase}
          disabled={value >= maxGuests}
        >
          <Plus size={18} />
        </Button>
      </div>

      <div className="mt-5">
        <input
          type="range"
          min={1}
          max={maxGuests}
          value={value}
          onChange={(e) =>
            onChange(Number(e.target.value))
          }
          className="w-full accent-primary"
        />
      </div>
    </div>
  );
}