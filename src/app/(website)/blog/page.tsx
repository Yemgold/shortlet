


"use client";

import { useState } from "react";

import {
  BlogCategories,
  BlogGrid,
  BlogHero,
  FeaturedPost,
  Newsletter,
} from "@/components/blog";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  return (
    <main className="bg-white">
      {/* Hero */}

      <BlogHero />

      {/* Featured Article */}

      <FeaturedPost />

      {/* Category Filter */}

      <BlogCategories
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Articles */}

      <BlogGrid
        selectedCategory={selectedCategory}
      />

      {/* Newsletter */}

      <Newsletter />
    </main>
  );
}