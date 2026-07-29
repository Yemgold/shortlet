


"use client";

import Image from "next/image";
import Link from "next/link";

import { Search, Tag } from "lucide-react";

import TableOfContents from "../TableOfContents";

import {
  blogCategories,
  blogPosts,
} from "@/data/blogs";

import  Input from "@/components/ui/Input";

export default function Sidebar() {
  const recentPosts = blogPosts.slice(0, 5);

  const popularTags = Array.from(
    new Set(
      blogPosts.flatMap((post) => post.tags)
    )
  ).slice(0, 12);

  return (
    <aside className="space-y-8">


     <>
  <TableOfContents />

  {/* Search */}

  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    ...
  </div>
</>

      {/* Search */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-xl font-bold text-slate-900">
          Search
        </h3>

        <Input
          placeholder="Search articles..."
          leftIcon={<Search className="h-5 w-5" />}
        />
      </div>

      {/* Recent Posts */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-xl font-bold text-slate-900">
          Recent Posts
        </h3>

        <div className="space-y-5">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex gap-4"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex-1">
                <h4 className="line-clamp-2 font-semibold text-slate-900 transition group-hover:text-blue-600">
                  {post.title}
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  {post.publishedAt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-xl font-bold text-slate-900">
          Categories
        </h3>

        <div className="space-y-3">
          {blogCategories
            .filter((c) => c.slug !== "all")
            .map((category) => {
              const count = blogPosts.filter(
                (post) =>
                  post.category.slug ===
                  category.slug
              ).length;

              return (
                <Link
                  key={category.id}
                  href={`/blog?category=${category.slug}`}
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-slate-100"
                >
                  <span className="font-medium text-slate-700">
                    {category.name}
                  </span>

                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    {count}
                  </span>
                </Link>
              );
            })}
        </div>
      </div>

      {/* Popular Tags */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
          <Tag size={20} />

          Popular Tags
        </h3>

        <div className="flex flex-wrap gap-3">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-600 hover:text-white"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}