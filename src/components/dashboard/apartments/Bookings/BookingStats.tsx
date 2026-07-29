


"use client";

import { motion } from "framer-motion";

import {
  CalendarCheck2,
  Wallet,
  Hotel,
  Clock3,
} from "lucide-react";

interface BookingStatsProps {
  totalBookings: number;

  totalRevenue: number;

  activeBookings: number;

  pendingBookings: number;
}

export default function BookingStats({
  totalBookings,
  totalRevenue,
  activeBookings,
  pendingBookings,
}: BookingStatsProps) {
  const stats = [
    {
      title: "Total Bookings",
      value: totalBookings.toLocaleString(),
      icon: CalendarCheck2,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      border: "border-blue-100",
    },

    {
      title: "Revenue",
      value: `₦${totalRevenue.toLocaleString()}`,
      icon: Wallet,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      border: "border-emerald-100",
    },

    {
      title: "Active Stays",
      value: activeBookings.toLocaleString(),
      icon: Hotel,
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
      border: "border-violet-100",
    },

    {
      title: "Pending",
      value: pendingBookings.toLocaleString(),
      icon: Clock3,
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      border: "border-amber-100",
    },
  ];

  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -4,
            }}
            className={`
              rounded-3xl
              border
              ${stat.border}
              bg-white
              p-6
              shadow-sm
              transition
              hover:shadow-lg
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${stat.bg}
                `}
              >
                <Icon
                  size={30}
                  className={stat.iconColor}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}