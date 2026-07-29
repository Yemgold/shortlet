



"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingReview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        z-30
        -left-10
        top-14
        rounded-3xl
        border
        border-white/20
        bg-white/90
        p-5
        shadow-2xl
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-yellow-100 p-2">
          <Star
            size={22}
            className="fill-yellow-500 text-yellow-500"
          />
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            4.9 / 5.0
          </h3>

          <p className="text-sm text-slate-500">
            2,347 Reviews
          </p>
        </div>
      </div>
    </motion.div>
  );
}