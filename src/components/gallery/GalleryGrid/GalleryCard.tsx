


"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Expand,
  MapPin,
  Star,
} from "lucide-react";

import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
  index?: number;
  onClick?: (item: GalleryItem) => void;
}

export default function GalleryCard({
  item,
  index = 0,
  onClick,
}: GalleryCardProps) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80" />

        {/* Featured Badge */}

        {item.featured && (
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
            <Star
              size={16}
              fill="currentColor"
            />
            Featured
          </div>
        )}

        {/* Category */}

        <div className="absolute right-5 top-5 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
          {item.category}
        </div>

        {/* Expand */}

        <button
          type="button"
          onClick={() => onClick?.(item)}
          className="absolute right-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100 hover:bg-blue-600"
        >
          <Expand size={20} />
        </button>
      </div>

      {/* Content */}

      <div className="p-6">
        <h3 className="line-clamp-1 text-xl font-bold text-slate-900">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin
            size={16}
            className="text-blue-600"
          />

          <span>{item.location}</span>
        </div>
      </div>
    </motion.article>
  );
}