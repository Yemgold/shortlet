



"use client";

import { motion } from "framer-motion";

const ROWS = 8;

export default function LoadingSkeleton() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-200
          bg-slate-50
          px-8
          py-5
        "
      >
        <div className="h-6 w-48 animate-pulse rounded bg-slate-200" />

        <div className="h-10 w-36 animate-pulse rounded-xl bg-slate-200" />
      </div>

      {/* Table Header */}

      <div
        className="
          grid
          grid-cols-[2.5fr_1fr_1fr_1fr_180px]
          gap-6
          border-b
          border-slate-200
          bg-slate-50
          px-8
          py-4
        "
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-4 w-24 animate-pulse rounded bg-slate-200"
          />
        ))}
      </div>

      {/* Rows */}

      <div>
        {Array.from({ length: ROWS }).map(
          (_, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-[2.5fr_1fr_1fr_1fr_180px]
                items-center
                gap-6
                border-b
                border-slate-100
                px-8
                py-6
              "
            >
              {/* Apartment */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    h-20
                    w-24
                    animate-pulse
                    rounded-2xl
                    bg-slate-200
                  "
                />

                <div className="space-y-3">
                  <div className="h-5 w-48 animate-pulse rounded bg-slate-200" />

                  <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />

                  <div className="h-4 w-20 animate-pulse rounded-full bg-slate-100" />
                </div>
              </div>

              {/* Price */}

              <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />

              {/* Capacity */}

              <div className="flex gap-3">
                <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />

                <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />

                <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />
              </div>

              {/* Status */}

              <div className="h-8 w-28 animate-pulse rounded-full bg-slate-200" />

              {/* Actions */}

              <div className="flex justify-end gap-3">
                <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-200" />

                <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-200" />

                <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-200" />
              </div>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
}