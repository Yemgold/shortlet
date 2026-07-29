


"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  User,
  XCircle,
} from "lucide-react";

import Button from "@/components/ui/Button";

const bookings = [
  {
    id: "BK-1001",
    customer: "John Williams",
    apartment: "Luxury Ocean View Apartment",
    checkIn: "24 Jul 2026",
    checkOut: "28 Jul 2026",
    amount: 480000,
    status: "Confirmed",
  },
  {
    id: "BK-1002",
    customer: "Sarah Johnson",
    apartment: "Executive Studio Suite",
    checkIn: "26 Jul 2026",
    checkOut: "30 Jul 2026",
    amount: 340000,
    status: "Pending",
  },
  {
    id: "BK-1003",
    customer: "David Peters",
    apartment: "Royal Penthouse Suite",
    checkIn: "28 Jul 2026",
    checkOut: "02 Aug 2026",
    amount: 1100000,
    status: "Confirmed",
  },
  {
    id: "BK-1004",
    customer: "Grace Adams",
    apartment: "Modern Family Villa",
    checkIn: "30 Jul 2026",
    checkOut: "03 Aug 2026",
    amount: 700000,
    status: "Cancelled",
  },
];

export default function RecentBookings() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recent Bookings
          </h2>

          <p className="mt-2 text-slate-500">
            Latest reservations made by guests.
          </p>
        </div>

        <Button
          variant="outline"
        >
          <Link href="/admin/dashboard/bookings">
            View All

            <ArrowRight
              size={16}
              className="ml-2"
            />
          </Link>
        </Button>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Booking
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Customer
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Stay
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Amount
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map(
              (booking, index) => (
                <motion.tr
                  key={booking.id}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.05,
                  }}
                  className="
                    border-b
                    border-slate-100
                    hover:bg-slate-50
                  "
                >
                  <td className="py-6">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {booking.id}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {booking.apartment}
                      </p>
                    </div>
                  </td>

                  <td className="py-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-primary/10
                        "
                      >
                        <User
                          size={18}
                          className="text-primary"
                        />
                      </div>

                      <span className="font-medium text-slate-700">
                        {booking.customer}
                      </span>
                    </div>
                  </td>

                  <td className="py-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <CalendarDays
                        size={16}
                      />

                      <div>
                        <p className="text-sm">
                          {booking.checkIn}
                        </p>

                        <p className="text-xs text-slate-400">
                          to{" "}
                          {booking.checkOut}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-6">
                    <span className="font-bold text-primary">
                      ₦
                      {booking.amount.toLocaleString()}
                    </span>
                  </td>

                  <td className="py-6">
                    {booking.status ===
                      "Confirmed" && (
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-emerald-100
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-emerald-700
                        "
                      >
                        <CheckCircle2
                          size={14}
                        />

                        Confirmed
                      </span>
                    )}

                    {booking.status ===
                      "Pending" && (
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-yellow-100
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-yellow-700
                        "
                      >
                        <Clock3
                          size={14}
                        />

                        Pending
                      </span>
                    )}

                    {booking.status ===
                      "Cancelled" && (
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-red-100
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-red-700
                        "
                      >
                        <XCircle
                          size={14}
                        />

                        Cancelled
                      </span>
                    )}
                  </td>
                </motion.tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}