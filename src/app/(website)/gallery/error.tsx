



"use client";

import Link from "next/link";
import { useEffect } from "react";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Home,
  ImageOff,
  RefreshCw,
} from "lucide-react";

interface GalleryErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function GalleryError({
  error,
  reset,
}: GalleryErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          {/* Icon */}

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-red-50">
            <ImageOff
              size={54}
              className="text-red-500"
            />
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-bold text-slate-900">
            Gallery Failed to Load
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Something went wrong while loading the
            gallery. Please try again or return to
            the homepage.
          </p>

          {/* Error message (development only) */}

          {process.env.NODE_ENV ===
            "development" && (
            <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-left">
              <p className="font-semibold text-red-700">
                Development Error
              </p>

              <p className="mt-2 break-words text-sm text-red-600">
                {error.message}
              </p>
            </div>
          )}

          {/* Actions */}

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <RefreshCw size={20} />

              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <Home size={20} />

              Home
            </Link>

            <Link
              href="/apartments"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <ArrowLeft size={20} />

              Apartments
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}