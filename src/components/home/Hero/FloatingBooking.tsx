



"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingBooking() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        z-30
        -right-10
        bottom-20
        rounded-3xl
        border
        border-white/20
        bg-white
        p-5
        shadow-2xl
      "
    >
      <div className="flex items-center gap-3">
        <CheckCircle2
          size={28}
          className="text-green-500"
        />

        <div>
          <h3 className="font-bold text-slate-900">
            Booking Confirmed
          </h3>

          <p className="text-sm text-slate-500">
            Victoria Island
          </p>
        </div>
      </div>
    </motion.div>
  );
}