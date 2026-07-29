


"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  galleryItems,
  type GalleryItem,
} from "@/data/gallery";

import GalleryCard from "./GalleryCard";
import GalleryLightbox from "../GalleryLightbox/GalleryLightbox";

interface GalleryGridProps {
  selectedCategory: string;
}

export default function GalleryGrid({
  selectedCategory,
}: GalleryGridProps) {
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) =>
        item.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <>
      <section
        id="gallery-grid"
        className="bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Result Count */}

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
            className="mb-10 flex items-center justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Gallery Collection
              </h2>

              <p className="mt-2 text-slate-500">
                {filteredImages.length} Images
                Available
              </p>
            </div>

            <div className="hidden rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 md:block">
              {selectedCategory}
            </div>
          </motion.div>

          {/* Grid */}

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredImages.map(
                (item, index) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={
                      setSelectedImage
                    }
                  />
                )
              )}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}

          {filteredImages.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="rounded-3xl border border-dashed border-slate-300 bg-white py-24 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                No Images Found
              </h3>

              <p className="mt-4 text-slate-500">
                There are currently no
                gallery images in this
                category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}

      <GalleryLightbox
  images={filteredImages}
  selectedImage={selectedImage}
  onImageChange={setSelectedImage}
  onClose={() => setSelectedImage(null)}
/>
    </>
  );
}