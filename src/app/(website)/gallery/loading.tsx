


"use client";

import { motion } from "framer-motion";

import {
  Camera,
  ImageIcon,
  PlayCircle,
} from "lucide-react";

export default function GalleryLoading() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= Hero Skeleton ================= */}

      <section className="relative h-[70vh] overflow-hidden bg-slate-900">
        {/* Animated Background */}

        <motion.div
          animate={{
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="h-10 w-44 animate-pulse rounded-full bg-white/10" />

            <div className="mt-8 h-16 w-full animate-pulse rounded-xl bg-white/10" />

            <div className="mt-4 h-16 w-3/4 animate-pulse rounded-xl bg-white/10" />

            <div className="mt-8 h-6 w-full animate-pulse rounded-lg bg-white/10" />

            <div className="mt-3 h-6 w-5/6 animate-pulse rounded-lg bg-white/10" />

            <div className="mt-12 flex gap-4">
              <div className="h-14 w-40 animate-pulse rounded-2xl bg-blue-500/30" />

              <div className="h-14 w-40 animate-pulse rounded-2xl bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Filter Skeleton ================= */}

      <section className="bg-slate-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">
          {Array.from({ length: 6 }).map(
            (_, index) => (
              <div
                key={index}
                className="h-12 w-32 animate-pulse rounded-full bg-slate-800"
              />
            )
          )}
        </div>
      </section>

      {/* ================= Gallery Grid ================= */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <div className="h-10 w-72 animate-pulse rounded-lg bg-slate-200" />

              <div className="mt-4 h-5 w-40 animate-pulse rounded-lg bg-slate-200" />
            </div>

            <div className="hidden h-10 w-32 animate-pulse rounded-full bg-slate-200 md:block" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map(
              (_, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="overflow-hidden rounded-3xl bg-white shadow-lg"
                >
                  <div className="aspect-[4/5] animate-pulse bg-slate-200" />

                  <div className="space-y-4 p-6">
                    <div className="h-6 w-2/3 animate-pulse rounded bg-slate-200" />

                    <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= Bottom Loading ================= */}

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <LoadingFeature
              icon={<Camera size={34} />}
              title="Loading Gallery"
            />

            <LoadingFeature
              icon={<ImageIcon size={34} />}
              title="Preparing Images"
            />

            <LoadingFeature
              icon={<PlayCircle size={34} />}
              title="Loading Videos"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

interface LoadingFeatureProps {
  icon: React.ReactNode;
  title: string;
}

function LoadingFeature({
  icon,
  title,
}: LoadingFeatureProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600"
      >
        {icon}
      </motion.div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mx-auto mt-6 h-3 w-40 animate-pulse rounded-full bg-slate-200" />

      <div className="mx-auto mt-3 h-3 w-28 animate-pulse rounded-full bg-slate-200" />
    </div>
  );
}