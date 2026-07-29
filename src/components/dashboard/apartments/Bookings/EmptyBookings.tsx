


"use client";

import { motion } from "framer-motion";

import {
  CalendarDays,
  SearchX,
} from "lucide-react";


interface EmptyBookingsProps {
  title?: string;

  description?: string;
}


export default function EmptyBookings({
  title = "No bookings found",
  description = "There are currently no reservations for your apartments.",
}: EmptyBookingsProps) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        flex
        min-h-[350px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-sm
      "
    >

      {/* Icon */}

      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-slate-100
        "
      >
        <CalendarDays
          size={40}
          className="text-slate-400"
        />
      </div>


      {/* Title */}

      <h3
        className="
          text-xl
          font-bold
          text-slate-900
        "
      >
        {title}
      </h3>


      {/* Description */}

      <p
        className="
          mt-3
          max-w-md
          text-sm
          leading-6
          text-slate-500
        "
      >
        {description}
      </p>


      {/* Secondary Icon */}

      <div
        className="
          mt-6
          flex
          items-center
          gap-2
          rounded-full
          bg-slate-50
          px-4
          py-2
          text-sm
          text-slate-500
        "
      >
        <SearchX size={16} />

        Waiting for reservations

      </div>


    </motion.div>
  );
}