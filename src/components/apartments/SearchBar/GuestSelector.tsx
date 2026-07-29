



"use client";

import * as React from "react";
import {
  Users,
  ChevronDown,
  Minus,
  Plus,
} from "lucide-react";

export default function GuestSelector() {
  const [open, setOpen] = React.useState(false);

  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [rooms, setRooms] = React.useState(1);

  const totalGuests = adults + children;

  return (
    <div className="relative space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        Guests
      </label>

      {/* Trigger */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-[60px]
          w-full
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-4
          transition-all
          hover:border-blue-400
          hover:bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-100
        "
      >
        <div className="flex items-center gap-3">
          <Users
            size={20}
            className="text-blue-600"
          />

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">
              {totalGuests} Guest
              {totalGuests > 1 && "s"}
            </p>

            <p className="text-xs text-slate-500">
              {rooms} Room
              {rooms > 1 && "s"}
            </p>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            z-50
            mt-3
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-2xl
          "
        >
          <Counter
            title="Adults"
            subtitle="Age 13+"
            value={adults}
            min={1}
            onIncrease={() =>
              setAdults((v) => v + 1)
            }
            onDecrease={() =>
              setAdults((v) =>
                Math.max(1, v - 1)
              )
            }
          />

          <Counter
            title="Children"
            subtitle="Under 13"
            value={children}
            min={0}
            onIncrease={() =>
              setChildren((v) => v + 1)
            }
            onDecrease={() =>
              setChildren((v) =>
                Math.max(0, v - 1)
              )
            }
          />

          <Counter
            title="Rooms"
            subtitle="Number of rooms"
            value={rooms}
            min={1}
            onIncrease={() =>
              setRooms((v) => v + 1)
            }
            onDecrease={() =>
              setRooms((v) =>
                Math.max(1, v - 1)
              )
            }
          />

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
              mt-5
              w-full
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  min: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function Counter({
  title,
  subtitle,
  value,
  min,
  onIncrease,
  onDecrease,
}: CounterProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div>
        <p className="font-medium text-slate-900">
          {title}
        </p>

        <p className="text-xs text-slate-500">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          disabled={value <= min}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-300
            transition
            hover:bg-slate-100
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <Minus size={16} />
        </button>

        <span className="w-5 text-center font-semibold">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
            transition
            hover:bg-blue-700
          "
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}