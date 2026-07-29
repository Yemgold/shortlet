




"use client";

import { Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingGuests() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: [0, 6, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        z-30
        bottom-8
        left-10
        rounded-full
        bg-blue-600
        px-6
        py-3
        text-white
        shadow-2xl
      "
    >
      <div className="flex items-center gap-3">
        <Users size={18} />

        <span className="font-semibold">
          25,000+ Happy Guests
        </span>
      </div>
    </motion.div>
  );
}