


"use client";

import BookingRow from "./BookingRow";

import type { Booking } from "@/types/booking";

interface BookingTableProps {
  bookings: Booking[];

  onConfirm: (id: string) => void;

  onCancel: (id: string) => void;

  onCheckIn: (id: string) => void;

  onCheckOut: (id: string) => void;
}

export default function BookingTable({
  bookings,
  onConfirm,
  onCancel,
  onCheckIn,
  onCheckOut,
}: BookingTableProps) {
  if (bookings.length === 0) {
    return (
      <div
        className="
          flex
          h-72
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white
        "
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-900">
            No Bookings Found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Booking records will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Guest
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Apartment
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Check In
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Check Out
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Nights
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Amount
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Payment
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Status
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-right
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                onConfirm={onConfirm}
                onCancel={onCancel}
                onCheckIn={onCheckIn}
                onCheckOut={onCheckOut}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}