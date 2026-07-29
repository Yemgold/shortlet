
"use client";

import Link from "next/link";

import {
  Eye,
  CheckCircle2,
  XCircle,
  LogIn,
  LogOut,
} from "lucide-react";

import type { Booking } from "@/types/booking";


interface BookingActionsProps {
  booking: Booking;

  onConfirm: (id: string) => void;

  onCancel: (id: string) => void;

  onCheckIn: (id: string) => void;

  onCheckOut: (id: string) => void;
}


export default function BookingActions({
  booking,
  onConfirm,
  onCancel,
  onCheckIn,
  onCheckOut,
}: BookingActionsProps) {

  return (
    <div className="flex items-center gap-2">

      {/* View */}

      <Link
        href={`/admin/dashboard/bookings/view/${booking._id}`}
        className="
          rounded-xl
          border
          border-slate-200
          p-2.5
          text-slate-600
          transition
          hover:border-blue-200
          hover:bg-blue-50
          hover:text-blue-600
        "
      >
        <Eye size={18} />
      </Link>



      {/* Confirm Booking */}

      {booking.status === "PENDING" && (

        <button
          onClick={() =>
            onConfirm(booking._id)
          }
          className="
            rounded-xl
            border
            border-emerald-200
            p-2.5
            text-emerald-600
            transition
            hover:bg-emerald-50
          "
          title="Confirm Booking"
        >
          <CheckCircle2 size={18} />
        </button>

      )}



      {/* Cancel Booking */}

      {(booking.status === "PENDING" ||
        booking.status === "CONFIRMED") && (

        <button
          onClick={() =>
            onCancel(booking._id)
          }
          className="
            rounded-xl
            border
            border-red-200
            p-2.5
            text-red-600
            transition
            hover:bg-red-50
          "
          title="Cancel Booking"
        >
          <XCircle size={18} />
        </button>

      )}



      {/* Check In */}

      {booking.status === "CONFIRMED" && (

        <button
          onClick={() =>
            onCheckIn(booking._id)
          }
          className="
            rounded-xl
            border
            border-indigo-200
            p-2.5
            text-indigo-600
            transition
            hover:bg-indigo-50
          "
          title="Check In Guest"
        >
          <LogIn size={18} />
        </button>

      )}



      {/* Check Out */}

      {booking.status === "CHECKED_IN" && (

        <button
          onClick={() =>
            onCheckOut(booking._id)
          }
          className="
            rounded-xl
            border
            border-amber-200
            p-2.5
            text-amber-600
            transition
            hover:bg-amber-50
          "
          title="Check Out Guest"
        >
          <LogOut size={18} />
        </button>

      )}

    </div>
  );
}