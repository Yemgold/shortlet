


"use client";

import { useState } from "react";

import { galleryCategories } from "@/data/gallery";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoGallery from "@/components/gallery/VideoGallery";
import VirtualTour from "@/components/gallery/VirtualTour";
import InstagramSection from "@/components/gallery/InstagramSection";
import { GalleryCTA } from "@/components/gallery";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  return (
    <main className="bg-white">
      <GalleryHero />

      <GalleryFilter
        categories={galleryCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <GalleryGrid
        selectedCategory={selectedCategory}
      />

      <VideoGallery />

      <VirtualTour />

      <InstagramSection />

      <GalleryCTA />
    </main>
  );
}