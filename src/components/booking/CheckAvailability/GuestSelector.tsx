



"use client";

import { Minus, Plus, Users } from "lucide-react";

import Button from "@/components/ui/Button";

interface GuestSelectorProps {
  value: number;
  maxGuests: number;
  onChange: (value: number) => void;
}

export default function GuestSelector({
  value,
  maxGuests,
  onChange,
}: GuestSelectorProps) {
  const decreaseGuests = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const increaseGuests = () => {
    if (value < maxGuests) {
      onChange(value + 1);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Users
              size={18}
              className="text-primary"
            />

            <h3 className="font-semibold text-slate-900">
              Guests
            </h3>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Maximum {maxGuests}{" "}
            {maxGuests === 1
              ? "guest"
              : "guests"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={decreaseGuests}
            disabled={value <= 1}
            className="h-10 w-10 rounded-full"
          >
            <Minus size={16} />
          </Button>

          <div className="min-w-[40px] text-center text-lg font-semibold">
            {value}
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={increaseGuests}
            disabled={value >= maxGuests}
            className="h-10 w-10 rounded-full"
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${(value / maxGuests) * 100}%`,
          }}
        />
      </div>

      <p className="mt-3 text-xs text-slate-500">
        {value} of {maxGuests} guests selected
      </p>
    </div>
  );
}