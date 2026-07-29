


"use client";

import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating: number;
  reviews: number;
}

export default function RatingBadge({
  rating,
  reviews,
}: RatingBadgeProps) {
  return (
    <div
      className="
        flex items-center gap-1
        rounded-full
        bg-white/95
        px-3 py-2
        shadow-lg
        backdrop-blur-md
      "
    >
      <Star
        className="fill-yellow-400 text-yellow-400"
        size={16}
      />

      <span className="font-semibold text-slate-900">
        {rating.toFixed(1)}
      </span>

      <span className="text-sm text-slate-500">
        ({reviews})
      </span>
    </div>
  );
}