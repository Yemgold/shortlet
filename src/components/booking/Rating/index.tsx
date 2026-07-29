


"use client";

import { Star } from "lucide-react";

interface RatingProps {
  rating?: number;

  reviews?: number;

  size?: number;

  showReviews?: boolean;

  className?: string;
}

export default function Rating({
  rating = 0,
  reviews = 0,
  size = 16,
  showReviews = true,
  className = "",
}: RatingProps) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        ${className}
      `}
    >
      <Star
        size={size}
        className="
          fill-yellow-400
          text-yellow-400
        "
      />

      <span className="font-semibold text-slate-900">
        {rating.toFixed(1)}
      </span>

      {showReviews && (
        <span className="text-sm text-slate-500">
          ({reviews} review{reviews !== 1 ? "s" : ""})
        </span>
      )}
    </div>
  );
}