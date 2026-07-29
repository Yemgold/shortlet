


"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { featuredPosts } from "@/data/blogs";

export default function FeaturedPost() {
  const post = featuredPosts[0];

  if (!post) return null;

  return (
    <section className="bg-white py-24">
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
            duration: 0.5,
          }}
          className="mb-16"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Editor's Pick
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Featured Article
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Carefully selected travel guides,
            luxury living inspiration and
            destination stories.
          </p>
        </motion.div>

        {/* Featured Card */}

        <motion.article
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}

            <div className="relative min-h-[420px]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute left-8 top-8">
                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  {post.category.name}
                </span>
              </div>
            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-10 lg:p-14">
              {/* Meta */}

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} />

                  {post.publishedAt}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={16} />

                  {post.readingTime}
                </span>
              </div>

              {/* Title */}

              <h3 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {post.title}
              </h3>

              {/* Excerpt */}

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {post.excerpt}
              </p>

              {/* Tags */}

              <div className="mt-8 flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author */}

              <div className="mt-10 flex items-center gap-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {post.author.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {post.author.role}
                  </p>
                </div>
              </div>

              {/* Button */}

              <Link
                href={`/blog/${post.slug}`}
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Read Full Article

                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}