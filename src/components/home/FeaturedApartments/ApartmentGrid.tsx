


"use client";

import { motion } from "framer-motion";

import ApartmentCard from "@/components/booking/ApartmentCard";
import type { Apartment } from "@/types/apartment";

interface Props {
  apartments: Apartment[];
}

export default function ApartmentGrid({
  apartments,
}: Props) {
  return (
    <motion.div
      layout
      className="
        grid
        gap-8

        md:grid-cols-2

        xl:grid-cols-3

        2xl:grid-cols-4
      "
    >
      {apartments.map((apartment) => (
        <motion.div
          key={apartment.id}
          layout
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <ApartmentCard apartment={apartment} />
        </motion.div>
      ))}
    </motion.div>
  );
}