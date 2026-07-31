



"use client";

import { useState } from "react";

import Image from "next/image";

import type { ApartmentMedia } from "@/types/apartment";

import Thumbnail from "./Thumbnail";
import Lightbox from "./Lightbox";

interface ApartmentGalleryProps {
  media: ApartmentMedia[];
  title: string;
}

export default function ApartmentGallery({
  media,
  title,
}: ApartmentGalleryProps) {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  // Only use image media
  const images = media
    .filter(
      (item) => item.type === "image"
    )
    .map((item) => item.url);

    console.log("Gallery media:", media);
  console.log("Images:", images);
  console.log("Selected image:", images[selectedIndex]);

  if (images.length === 0) {
    return (
      <div
        className="
          relative
          h-[500px]
          overflow-hidden
          rounded-3xl
          bg-slate-200
        "
      >
        <Image
          src="/images/apartment-placeholder.jpg"
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  const previousImage = () => {
    setSelectedIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <>
      <div className="space-y-5">
        {/* Main Image */}
        <div
          onClick={() =>
            setLightboxOpen(true)
          }
          className="
            relative
            h-[550px]
            cursor-pointer
            overflow-hidden
            rounded-3xl
            bg-slate-100
          "
        >
         <img
  src={images[selectedIndex]}
  alt={title}
  className="h-full w-full object-cover"
/>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-2
            "
          >
            {images.map(
              (image, index) => (
                <Thumbnail
                  key={index}
                  src={image}
                  alt={`${title} ${index + 1}`}
                  active={
                    selectedIndex === index
                  }
                  onClick={() =>
                    setSelectedIndex(index)
                  }
                />
              )
            )}
          </div>
        )}
      </div>

      <Lightbox
        images={images}
        currentIndex={selectedIndex}
        open={lightboxOpen}
        onClose={() =>
          setLightboxOpen(false)
        }
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </>
  );
}