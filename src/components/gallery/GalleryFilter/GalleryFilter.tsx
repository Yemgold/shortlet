


"use client";

import { motion } from "framer-motion";

import { galleryCategories } from "@/data/gallery";
import type { GalleryCategory } from "@/data/gallery";

interface GalleryFilterProps {
  categories: GalleryCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilter({
  selectedCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <section className="relative bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-10 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Browse Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Explore Every Space
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Browse beautifully designed interiors,
            luxury amenities, and premium short-let
            apartments across Nigeria.
          </p>
        </motion.div>

        {/* Filter Buttons */}

        <div className="flex flex-wrap items-center justify-center gap-4">
          {galleryCategories.map((category) => {
            const active =
              selectedCategory === category;

            return (
              <motion.button
                key={category}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.2,
                }}
                onClick={() =>
                  onCategoryChange(category)
                }
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-blue-500/40 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}