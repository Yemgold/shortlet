


"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CreditCard,
  Hotel,
  User,
} from "lucide-react";

import BookingActions from "./BookingActions";

import type { Booking } from "@/types/booking";

interface BookingRowProps {
  booking: Booking;

  onConfirm: (id: string) => void;

  onCancel: (id: string) => void;

  onCheckIn: (id: string) => void;

  onCheckOut: (id: string) => void;
}

export default function BookingRow({
  booking,
  onConfirm,
  onCancel,
  onCheckIn,
  onCheckOut,
}: BookingRowProps) {
  const paymentBadge = {
    PAID: "bg-emerald-100 text-emerald-700",
    PENDING: "bg-yellow-100 text-yellow-700",
    FAILED: "bg-red-100 text-red-700",
    REFUNDED: "bg-slate-200 text-slate-700",
  };

  const statusBadge = {
    PENDING: "bg-yellow-100 text-yellow-700",
    CONFIRMED: "bg-blue-100 text-blue-700",
    CHECKED_IN: "bg-emerald-100 text-emerald-700",
    CHECKED_OUT: "bg-slate-200 text-slate-700",
    CANCELLED: "bg-red-100 text-red-700",
  };

  return (
    <motion.tr
      layout
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="border-b border-slate-100 hover:bg-slate-50"
    >
      {/* Guest */}

      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <Image
            src={
              booking.guest.avatar ??
              "/images/avatar.jpg"
            }
            alt={booking.guest.fullName}
            width={52}
            height={52}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-slate-900">
              {booking.guest.fullName}
            </h3>

            <p className="text-sm text-slate-500">
              {booking.guest.email}
            </p>

            <p className="text-xs text-slate-400">
              {booking.guest.phone}
            </p>
          </div>
        </div>
      </td>

      {/* Apartment */}

      <td className="px-6 py-5">
        <Link
          href={`/admin/dashboard/apartments/view/${booking.apartment._id}`}
          className="flex items-center gap-3"
        >
          <Image
            src={
              booking.apartment.image ??
              "/images/apartment-placeholder.jpg"
            }
            alt={booking.apartment.name}
            width={72}
            height={56}
            className="h-14 w-20 rounded-xl object-cover"
          />

          <div>
            <div className="flex items-center gap-1 text-sm font-semibold text-slate-900">
              <Hotel size={15} />
              {booking.apartment.name}
            </div>
          </div>
        </Link>
      </td>

      {/* Check In */}

      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <CalendarDays size={16} />

          {new Date(
            booking.checkIn
          ).toLocaleDateString()}
        </div>
      </td>

      {/* Check Out */}

      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <CalendarDays size={16} />

          {new Date(
            booking.checkOut
          ).toLocaleDateString()}
        </div>
      </td>

      {/* Nights */}

      <td className="px-6 py-5">
        <span className="font-semibold text-slate-900">
          {booking.nights}
        </span>
      </td>

      {/* Amount */}

      <td className="px-6 py-5">
        <span className="font-semibold text-slate-900">
          ₦
          {booking.totalAmount.toLocaleString()}
        </span>
      </td>

      {/* Payment */}

      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            paymentBadge[
              booking.paymentStatus
            ]
          }`}
        >
          <CreditCard
            size={14}
            className="mr-1"
          />

          {booking.paymentStatus}
        </span>
      </td>

      {/* Status */}

      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            statusBadge[
              booking.status
            ]
          }`}
        >
          <User
            size={14}
            className="mr-1"
          />

          {booking.status.replaceAll(
            "_",
            " "
          )}
        </span>
      </td>

      {/* Actions */}

      <td className="px-6 py-5 text-right">
        <BookingActions
          booking={booking}
          onConfirm={onConfirm}
          onCancel={onCancel}
          onCheckIn={onCheckIn}
          onCheckOut={onCheckOut}
        />
      </td>
    </motion.tr>
  );
}