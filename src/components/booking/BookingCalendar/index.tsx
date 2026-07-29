

"use client";

import { CalendarDays } from "lucide-react";

interface BookingCalendarProps {
  checkInDate: string;

  checkOutDate: string;

  onCheckInChange: (
    date: string
  ) => void;

  onCheckOutChange: (
    date: string
  ) => void;

  minDate?: string;

  loading?: boolean;
}

export default function BookingCalendar({
  checkInDate,
  checkOutDate,
  onCheckInChange,
  onCheckOutChange,
  minDate = new Date()
    .toISOString()
    .split("T")[0],
  loading = false,
}: BookingCalendarProps) {
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
      <div className="mb-5 flex items-center gap-2">
        <CalendarDays
          size={20}
          className="text-primary"
        />

        <h3 className="font-semibold text-slate-900">
          Select Your Stay
        </h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Check In */}

        <div>
          <label
            htmlFor="checkIn"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
            "
          >
            Check In
          </label>

          <input
            id="checkIn"
            type="date"
            value={checkInDate}
            min={minDate}
            disabled={loading}
            onChange={(e) =>
              onCheckInChange(
                e.target.value
              )
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              py-3
              outline-none
              transition
              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>

        {/* Check Out */}

        <div>
          <label
            htmlFor="checkOut"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
            "
          >
            Check Out
          </label>

          <input
            id="checkOut"
            type="date"
            value={checkOutDate}
            min={
              checkInDate || minDate
            }
            disabled={loading}
            onChange={(e) =>
              onCheckOutChange(
                e.target.value
              )
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              py-3
              outline-none
              transition
              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>
      </div>

      {checkInDate &&
        checkOutDate && (
          <div
            className="
              mt-5
              rounded-xl
              bg-primary/5
              p-4
              text-sm
              text-slate-700
            "
          >
            <span className="font-medium">
              Check-in:
            </span>{" "}
            {checkInDate}

            <br />

            <span className="font-medium">
              Check-out:
            </span>{" "}
            {checkOutDate}
          </div>
        )}
    </div>
  );
}