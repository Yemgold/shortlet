


"use client";

import { motion } from "framer-motion";

import { blogCategories } from "@/data/blogs";

interface BlogCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogCategories({
  selectedCategory,
  onCategoryChange,
}: BlogCategoriesProps) {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {blogCategories.map((category) => {
            const active =
              selectedCategory === category.slug;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  onCategoryChange(category.slug)
                }
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}