

"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowLeft,
  CameraOff,
  Home,
  Search,
} from "lucide-react";

export default function GalleryNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        {/* Icon */}

        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.45,
          }}
          className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-blue-50 shadow-lg"
        >
          <CameraOff
            size={58}
            className="text-blue-600"
          />
        </motion.div>

        {/* 404 */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="mt-10 text-7xl font-black tracking-tight text-slate-900"
        >
          404
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl"
        >
          Gallery Not Found
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600"
        >
          The gallery you're looking for doesn't
          exist, may have been moved, or is no
          longer available.
        </motion.p>

        {/* Search Card */}

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
            delay: 0.45,
          }}
          className="mx-auto mt-12 flex max-w-lg items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
        >
          <div className="rounded-2xl bg-blue-100 p-4">
            <Search
              size={28}
              className="text-blue-600"
            />
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-slate-900">
              Looking for apartments?
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Browse our premium listings or
              return to the homepage.
            </p>
          </div>
        </motion.div>

        {/* Buttons */}

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
            delay: 0.6,
          }}
          className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <Home size={20} />
            Go Home
          </Link>

          <Link
            href="/apartments"
            className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <ArrowLeft size={20} />
            Browse Apartments
          </Link>
        </motion.div>
      </div>
    </main>
  );
}