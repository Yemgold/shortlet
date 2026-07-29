

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Eye,
} from "lucide-react";

import type { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({
  post,
  index = 0,
}: BlogCardProps) {
  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}

      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
          {post.category.name}
        </span>
      </Link>

      {/* Content */}

      <div className="p-7">
        {/* Meta */}

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={15} />
            {post.publishedAt}
          </span>

          <span className="flex items-center gap-2">
            <Clock3 size={15} />
            {post.readingTime}
          </span>

          <span className="flex items-center gap-2">
            <Eye size={15} />
            {post.views.toLocaleString()}
          </span>
        </div>

        {/* Title */}

        <Link href={`/blog/${post.slug}`}>
          <h3 className="mt-5 line-clamp-2 text-2xl font-bold leading-tight text-slate-900 transition group-hover:text-blue-600">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}

        <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600">
          {post.excerpt}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />

            <div>
              <p className="font-semibold text-slate-900">
                {post.author.name}
              </p>

              <p className="text-sm text-slate-500">
                {post.author.role}
              </p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
          >
            Read

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}