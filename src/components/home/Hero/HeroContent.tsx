

"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="max-w-3xl text-white"
    >
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Find Your Perfect
        <span className="block text-blue-300">
          Short-Let Apartment
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
        Discover premium apartments, serviced homes,
        and vacation stays in the best locations.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur">
          ✓ Verified Apartments
        </div>

        <div className="rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur">
          ✓ Secure Booking
        </div>

        <div className="rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur">
          ✓ 24/7 Support
        </div>
      </div>
    </motion.div>
  );
}