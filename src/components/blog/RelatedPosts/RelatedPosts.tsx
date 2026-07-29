

"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import { blogPosts } from "@/data/blogs";

interface RelatedPostsProps {
  currentSlug: string;
  categorySlug: string;
}

export default function RelatedPosts({
  currentSlug,
  categorySlug,
}: RelatedPostsProps) {
  const relatedPosts = blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.category.slug === categorySlug
    )
    .slice(0, 3);

  if (!relatedPosts.length) return null;

  return (
    <section className="mt-24 border-t border-slate-200 pt-20">
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
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-slate-900">
          Related Articles
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Continue reading more travel
          inspiration, luxury living tips,
          and destination guides.
        </p>
      </motion.div>

      {/* Grid */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{
              opacity: 0,
              y: 30,
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
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
          >
            {/* Image */}

            <Link
              href={`/blog/${post.slug}`}
              className="relative block aspect-[16/10]"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white">
                {post.category.name}
              </span>
            </Link>

            {/* Content */}

            <div className="p-6">
              <p className="text-sm text-slate-500">
                {post.publishedAt} • {post.readingTime}
              </p>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="mt-4 line-clamp-2 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>

              <p className="mt-4 line-clamp-3 text-slate-600">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
              >
                Read Article

                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}