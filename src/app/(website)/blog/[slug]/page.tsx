


import { notFound } from "next/navigation";
import Image from "next/image";

import { RelatedPosts,Sidebar } from "@/components/blog";

import {
  CalendarDays,
  Clock3,
  Eye,
  ArrowLeft,
} from "lucide-react";

import Link from "next/link";

import {
  blogPosts,
} from "@/data/blogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | RH Luxury Homes`,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-white transition hover:text-blue-300"
            >
              <ArrowLeft size={18} />

              Back to Blog
            </Link>

            <span className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              {post.category.name}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
              {post.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-8 text-white/90">
              <span className="flex items-center gap-2">
                <CalendarDays size={18} />

                {post.publishedAt}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={18} />

                {post.readingTime}
              </span>

              <span className="flex items-center gap-2">
                <Eye size={18} />

                {post.views.toLocaleString()} views
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}

      <section className="py-24">
  <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_340px] lg:px-8">
    {/* LEFT COLUMN */}

    <article>
      {/* Author */}

      <div className="mb-12 flex items-center gap-4 border-b border-slate-200 pb-8">
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={70}
          height={70}
          className="rounded-full"
        />

        <div>
          <h3 className="font-bold text-slate-900">
            {post.author.name}
          </h3>

          <p className="text-slate-600">
            {post.author.role}
          </p>
        </div>
      </div>

      {/* Content */}

     <article className="prose prose-lg prose-slate max-w-none">
  {post.content
    .split("\n")
    .filter(Boolean)
    .map((line, index) => {
      if (line.startsWith("# ")) {
        const title = line.replace("# ", "");
        const id = title
          .toLowerCase()
          .replace(/[^\w]+/g, "-");

        return (
          <h1 id={id} key={index}>
            {title}
          </h1>
        );
      }

      if (line.startsWith("## ")) {
        const title = line.replace("## ", "");
        const id = title
          .toLowerCase()
          .replace(/[^\w]+/g, "-");

        return (
          <h2 id={id} key={index}>
            {title}
          </h2>
        );
      }

      if (line.startsWith("### ")) {
        const title = line.replace("### ", "");
        const id = title
          .toLowerCase()
          .replace(/[^\w]+/g, "-");

        return (
          <h3 id={id} key={index}>
            {title}
          </h3>
        );
      }

      return <p key={index}>{line}</p>;
    })}
</article>

      {/* Tags */}

      <div className="mt-16 flex flex-wrap gap-3 border-t border-slate-200 pt-10">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related */}

      <RelatedPosts
        currentSlug={post.slug}
        categorySlug={post.category.slug}
      />

      {/* CTA */}

      <div className="mt-16 rounded-3xl bg-slate-950 p-10 text-center">
        <h3 className="text-3xl font-bold text-white">
          Ready for Your Next Luxury Stay?
        </h3>

        <p className="mt-5 text-slate-300">
          Explore our premium apartments and
          enjoy comfort beyond expectations.
        </p>

        <Link
          href="/apartments"
          className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Apartments
        </Link>
      </div>
    </article>

    {/* RIGHT COLUMN */}

    <aside className="lg:sticky lg:top-28 lg:self-start">
      <Sidebar />
    </aside>
  </div>
</section>
      

    </main>
  );
}