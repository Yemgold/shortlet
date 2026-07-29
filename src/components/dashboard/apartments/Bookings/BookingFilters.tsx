

"use client";

import {
  Search,
  RotateCcw,
} from "lucide-react";

interface BookingFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  bookingStatus: string;
  onBookingStatusChange: (
    value: string
  ) => void;

  paymentStatus: string;
  onPaymentStatusChange: (
    value: string
  ) => void;

  date: string;
  onDateChange: (value: string) => void;

  onReset: () => void;
}

export default function BookingFilters({
  search,
  onSearchChange,
  bookingStatus,
  onBookingStatusChange,
  paymentStatus,
  onPaymentStatusChange,
  date,
  onDateChange,
  onReset,
}: BookingFiltersProps) {
  return (
    <div
      className="
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
          grid
          gap-4
          lg:grid-cols-5
        "
      >
        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange(
                e.target.value
              )
            }
            placeholder="Search guest or apartment..."
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-200
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-blue-500
            "
          />
        </div>

        {/* Booking Status */}

        <select
          value={bookingStatus}
          onChange={(e) =>
            onBookingStatusChange(
              e.target.value
            )
          }
          className="
            h-12
            rounded-xl
            border
            border-slate-200
            px-4
            text-sm
            outline-none
            focus:border-blue-500
          "
        >
          <option value="">
            All Bookings
          </option>

          <option value="PENDING">
            Pending
          </option>

          <option value="CONFIRMED">
            Confirmed
          </option>

          <option value="CHECKED_IN">
            Checked In
          </option>

          <option value="CHECKED_OUT">
            Checked Out
          </option>

          <option value="CANCELLED">
            Cancelled
          </option>
        </select>

        {/* Payment Status */}

        <select
          value={paymentStatus}
          onChange={(e) =>
            onPaymentStatusChange(
              e.target.value
            )
          }
          className="
            h-12
            rounded-xl
            border
            border-slate-200
            px-4
            text-sm
            outline-none
            focus:border-blue-500
          "
        >
          <option value="">
            All Payments
          </option>

          <option value="PAID">
            Paid
          </option>

          <option value="PENDING">
            Pending
          </option>

          <option value="FAILED">
            Failed
          </option>

          <option value="REFUNDED">
            Refunded
          </option>
        </select>

        {/* Date */}

        <input
          type="date"
          value={date}
          onChange={(e) =>
            onDateChange(
              e.target.value
            )
          }
          className="
            h-12
            rounded-xl
            border
            border-slate-200
            px-4
            text-sm
            outline-none
            focus:border-blue-500
          "
        />

        {/* Reset */}

        <button
          onClick={onReset}
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-slate-900
            px-6
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-slate-800
          "
        >
          <RotateCcw size={18} />

          Reset
        </button>
      </div>
    </div>
  );
}