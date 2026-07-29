



"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  active?: boolean;
  onClick?: () => void;
}

export default function ApartmentWishlist({
  active = false,
  onClick,
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.08 }}
      onClick={onClick}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-white/90
        shadow-lg
        backdrop-blur-md
        transition
      "
      aria-label="Add to wishlist"
    >
      <Heart
        className={
          active
            ? "fill-red-500 text-red-500"
            : "text-slate-700"
        }
        size={20}
      />
    </motion.button>
  );
}