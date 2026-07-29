

"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { motion } from "framer-motion";

import { blogPosts } from "@/data/blogs";

import BlogCard from "./BlogCard";
import Pagination from "../Pagination";

interface BlogGridProps {
  selectedCategory: string;
}

const POSTS_PER_PAGE = 6;

export default function BlogGrid({
  selectedCategory,
}: BlogGridProps) {
  const [currentPage, setCurrentPage] =
    useState(1);

  // Filter posts

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return blogPosts;
    }

    return blogPosts.filter(
      (post) =>
        post.category.slug === selectedCategory
    );
  }, [selectedCategory]);

  // Reset page when category changes

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Pagination

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );

  const paginatedPosts = useMemo(() => {
    const start =
      (currentPage - 1) * POSTS_PER_PAGE;

    return filteredPosts.slice(
      start,
      start + POSTS_PER_PAGE
    );
  }, [filteredPosts, currentPage]);

  return (
    <section
      id="articles"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

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
            duration: 0.45,
          }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Latest Articles
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore expert travel guides,
            luxury living inspiration,
            staycation ideas, and property
            insights.
          </p>
        </motion.div>

        {/* Empty State */}

        {filteredPosts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 py-24 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              No articles found
            </h3>

            <p className="mt-4 text-slate-600">
              Try selecting another category.
            </p>
          </div>
        ) : (
          <>
            {/* Blog Grid */}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map(
                (post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                  />
                )
              )}
            </div>

            {/* Pagination */}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </section>
  );
}