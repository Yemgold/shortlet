


"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  Sparkles,
  TrendingUp,
  Home,
  ChevronRight,
} from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/blog/blog-hero.png')",
        }}
      />

      

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />

      

      {/* Decorative Blur */}

      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-3xl">

        
        <nav
  aria-label="Breadcrumb"
  className="mb-8 flex items-center gap-2 text-sm"
>
  <Link
    href="/"
    className="flex items-center gap-1 text-slate-400 transition-colors duration-300 hover:text-white"
  >
    <Home size={15} />
    <span>Home</span>
  </Link>

  <ChevronRight
    size={14}
    className="text-slate-600"
  />

  <span className="font-semibold text-white">
    Blog
  </span>
</nav>


            
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300"
          >
            <Sparkles size={16} />

            Luxury Travel & Lifestyle
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl"
          >
            Stories,
            <br />

            Travel Guides
            <span className="text-blue-400">
              {" "}
              & Luxury Living
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            Discover premium travel inspiration,
            apartment guides, staycation ideas,
            business travel tips, and everything
            you need to enjoy exceptional shortlet
            experiences.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#articles"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <BookOpen size={20} />

              Explore Articles
            </Link>

            <Link
              href="/apartments"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Browse Apartments

              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            <div>
              <h3 className="text-4xl font-black text-white">
                50+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Expert Articles
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                15K+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Monthly Readers
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <TrendingUp
                  size={20}
                  className="text-green-400"
                />

                <span className="text-4xl font-black text-white">
                  98%
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-400">
                Reader Satisfaction
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}