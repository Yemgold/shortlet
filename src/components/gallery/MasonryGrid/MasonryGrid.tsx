


"use client";

import { motion } from "framer-motion";

import type { GalleryItem } from "@/data/gallery";

import GalleryCard from "../GalleryGrid/GalleryCard";

interface MasonryGridProps {
  images: GalleryItem[];
  onImageClick?: (image: GalleryItem) => void;
}

export default function MasonryGrid({
  images,
  onImageClick,
}: MasonryGridProps) {
  if (images.length === 0) {
    return (
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-24 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              No Images Available
            </h3>

            <p className="mt-4 text-slate-500">
              There are currently no gallery
              images to display.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
          }}
          className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="mb-6 break-inside-avoid"
            >
              <GalleryCard
                item={image}
                index={index}
                onClick={onImageClick}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}