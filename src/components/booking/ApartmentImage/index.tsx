




"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ApartmentWishlist from "../ApartmentWishlist";
import RatingBadge from "./RatingBadge";
import VerifiedBadge from "./VerifiedBadge";

interface ApartmentImageProps {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  verified?: boolean;
  favorite?: boolean;
  onFavorite?: () => void;
}

export default function ApartmentImage({
  image,
  title,
  rating,
  reviews,
  verified,
  favorite,
  onFavorite,
}: ApartmentImageProps) {

  console.log("Apartment image:", image);

  return (
    <div className="relative overflow-hidden rounded-t-3xl">
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <Image
  src={image}
  alt={title}
  width={700}
  height={500}
  priority
  className="h-72 w-full object-cover"
/>
      </motion.div>

      {/* Wishlist */}

      <div className="absolute left-4 top-4 z-20">
        <ApartmentWishlist
          active={favorite}
          onClick={onFavorite}
        />
      </div>

      {/* Rating */}

      <div className="absolute right-4 top-4 z-20">
        <RatingBadge
          rating={rating}
          reviews={reviews}
        />
      </div>

      {/* Verified */}

      {verified && (
        <div className="absolute bottom-4 left-4 z-20">
          <VerifiedBadge />
        </div>
      )}

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/30
          via-transparent
          to-transparent
        "
      />
    </div>
  );
}