


"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Clock3,
  Play,
} from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  location: string;
  onClick?: () => void;
  index?: number;
}

export default function VideoCard({
  title,
  thumbnail,
  duration,
  location,
  onClick,
  index = 0,
}: VideoCardProps) {
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
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
    >
      {/* Thumbnail */}

      <button
        type="button"
        onClick={onClick}
        className="relative block w-full overflow-hidden"
      >
        <Image
          src={thumbnail}
          alt={title}
          width={800}
          height={500}
          className="aspect-video w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

        {/* Play Button */}

        <motion.div
          whileHover={{
            scale: 1.12,
          }}
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl transition group-hover:bg-blue-600"
        >
          <Play
            size={34}
            fill="currentColor"
            className="ml-1 text-white"
          />
        </motion.div>

        {/* Duration */}

        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-lg">
          <Clock3 size={14} />
          {duration}
        </div>
      </button>

      {/* Content */}

      <div className="p-6">
        <h3 className="line-clamp-1 text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-500">
          {location}
        </p>
      </div>
    </motion.article>
  );
}