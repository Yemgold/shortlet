



"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  CheckCircle2,
  Home,
  ReceiptText,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface BookingSuccessProps {
  bookingId: string;

  apartmentName: string;

  checkInDate: string;

  checkOutDate: string;

  totalAmount: number;
}

export default function BookingSuccess({
  bookingId,
  apartmentName,
  checkInDate,
  checkOutDate,
  totalAmount,
}: BookingSuccessProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        mx-auto
        max-w-2xl
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-10
        text-center
        shadow-xl
      "
    >
      <div className="flex justify-center">
        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-green-100
          "
        >
          <CheckCircle2
            size={48}
            className="text-green-600"
          />
        </div>
      </div>

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        Booking Successful 🎉
      </h1>

      <p className="mt-3 text-slate-600">
        Your reservation has been confirmed.
        A confirmation email has been sent to
        your email address.
      </p>

      <div
        className="
          mt-10
          space-y-5
          rounded-2xl
          bg-slate-50
          p-6
          text-left
        "
      >
        <div className="flex justify-between">
          <span className="text-slate-500">
            Booking ID
          </span>

          <span className="font-semibold">
            {bookingId}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Apartment
          </span>

          <span className="font-semibold">
            {apartmentName}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Check-in
          </span>

          <span className="font-semibold">
            {checkInDate}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Check-out
          </span>

          <span className="font-semibold">
            {checkOutDate}
          </span>
        </div>

        <div className="flex justify-between border-t pt-5">
          <span className="text-slate-500">
            Amount Paid
          </span>

          <span className="text-xl font-bold text-primary">
            ₦
            {totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      <div
        className="
          mt-10
          grid
          gap-4
          md:grid-cols-2
        "
      >
        <Button >
          <Link href="/my-bookings">
            <ReceiptText
              size={18}
              className="mr-2"
            />
            My Bookings
          </Link>
        </Button>

        <Button
          variant="outline"
          
        >
          <Link href="/apartments">
            <Home
              size={18}
              className="mr-2"
            />
            Browse Apartments
          </Link>
        </Button>
      </div>

      <div
        className="
          mt-8
          flex
          items-center
          justify-center
          gap-2
          text-sm
          text-slate-500
        "
      >
        <CalendarCheck2 size={16} />

        <span>
          We look forward to hosting you.
        </span>
      </div>
    </motion.div>
  );
}