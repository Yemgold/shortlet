



"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  active?: boolean;

  disabled?: boolean;

  size?: number;

  onClick?: () => void;
}

export default function FavoriteButton({
  active = false,
  disabled = false,
  size = 20,
  onClick,
}: FavoriteButtonProps) {
  return (
    <motion.button
      type="button"
      whileTap={{
        scale: 0.9,
      }}
      whileHover={{
        scale: 1.08,
      }}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        onClick?.();
      }}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-white/90
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-200
        hover:bg-white
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      <Heart
        size={size}
        className={
          active
            ? "fill-red-500 text-red-500"
            : "text-slate-700"
        }
      />
    </motion.button>
  );
}