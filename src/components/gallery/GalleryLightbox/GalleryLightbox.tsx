


"use client";

import { useEffect, useMemo } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";

import type { GalleryItem } from "@/data/gallery";



interface GalleryLightboxProps {
  images: GalleryItem[];
  selectedImage: GalleryItem | null;
  onClose: () => void;
  onImageChange: (image: GalleryItem) => void;
}

export default function GalleryLightbox({
  images,
  selectedImage,
  onClose,
  onImageChange,
}: GalleryLightboxProps) {


  const currentIndex = useMemo(() => {
    
    if (!selectedImage) return -1;

    return images.findIndex(
      (image) => image.id === selectedImage.id
    );
  }, [images, selectedImage]);

  const previousImage =
    currentIndex > 0
      ? images[currentIndex - 1]
      : null;

  const nextImage =
    currentIndex < images.length - 1
      ? images[currentIndex + 1]
      : null;

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        onClose();
      }

      if (
        event.key === "ArrowLeft" &&
        previousImage
      ) {
        window.dispatchEvent(
          new CustomEvent(
            "gallery-change-image",
            {
              detail: previousImage,
            }
          )
        );
      }

      if (
        event.key === "ArrowRight" &&
        nextImage
      ) {
        window.dispatchEvent(
          new CustomEvent(
            "gallery-change-image",
            {
              detail: nextImage,
            }
          )
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [
    nextImage,
    previousImage,
    selectedImage,
    onClose,
  ]);

  useEffect(() => {
    document.body.style.overflow =
      selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    const listener = (
      event: Event
    ) => {
      // handled by parent
    };

    window.addEventListener(
      "gallery-change-image",
      listener
    );

    return () =>
      window.removeEventListener(
        "gallery-change-image",
        listener
      );
  }, []);

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/95 backdrop-blur-lg"
        >
          {/* Close */}

          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {/* Previous */}

          {previousImage && (
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent(
                    "gallery-change-image",
                    {
                      detail: previousImage,
                    }
                  )
                )
              }
              className="absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next */}

          {nextImage && (
            <button
             onClick={() =>
  previousImage &&
  onImageChange(previousImage)
}
              className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {nextImage && (
  <button
    onClick={() =>
      nextImage &&
      onImageChange(nextImage)
    }
    className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
  >
    <ChevronRight size={28} />
  </button>
)}

          {/* Image */}

          <motion.div
            key={selectedImage.id}
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative mx-6 w-full max-w-6xl"
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={selectedImage.width}
              height={selectedImage.height}
              className="max-h-[80vh] w-full rounded-3xl object-contain"
            />

            {/* Caption */}

            <div className="mt-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedImage.title}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-white/70">
                  <MapPin size={18} />

                  {selectedImage.location}
                </div>
              </div>

              <div className="rounded-full bg-white/10 px-5 py-2 text-sm text-white">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}