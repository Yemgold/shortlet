


"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Building2,
  Plus,
  Search,
} from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  searchTerm?: string;
  createHref?: string;
}

export default function EmptyState({
  title = "No Apartments Found",
  description = "There are currently no apartments available. Start by creating your first apartment listing.",
  searchTerm = "",
  createHref = "/admin/dashboard/apartments/create",
}: EmptyStateProps) {
  const isSearching =
    searchTerm.trim().length > 0;

  return (
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
        duration: 0.35,
      }}
      className="
        flex
        min-h-[500px]
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-8
        py-16
        text-center
      "
    >
      <div className="mx-auto max-w-xl">
        {/* Icon */}

        <div
          className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-blue-50
          "
        >
          {isSearching ? (
            <Search
              size={42}
              className="text-blue-600"
            />
          ) : (
            <Building2
              size={42}
              className="text-blue-600"
            />
          )}
        </div>

        {/* Heading */}

        <h2 className="mt-8 text-3xl font-bold text-slate-900">
          {isSearching
            ? "No Matching Apartments"
            : title}
        </h2>

        {/* Description */}

        <p className="mt-4 text-lg leading-8 text-slate-500">
          {isSearching
            ? `No apartment matches "${searchTerm}". Try another keyword or clear your filters.`
            : description}
        </p>

        {/* Actions */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {isSearching ? (
            <button
              onClick={() =>
                window.location.reload()
              }
              className="
                rounded-2xl
                border
                border-slate-300
                px-6
                py-3
                font-semibold
                text-slate-700
                transition
                hover:bg-slate-100
              "
            >
              Clear Search
            </button>
          ) : (
            <>
              <Link
                href={createHref}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-primary
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                <Plus size={18} />

                Create Apartment
              </Link>

              <Link
                href="/admin/dashboard"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-100
                "
              >
                Back to Dashboard

                <ArrowRight size={18} />
              </Link>
            </>
          )}
        </div>

        {/* Tip */}

        {!isSearching && (
          <div
            className="
              mt-12
              rounded-2xl
              border
              border-blue-100
              bg-blue-50
              p-5
            "
          >
            <p className="text-sm leading-7 text-blue-700">
              <strong>Tip:</strong> Add high-quality
              images, accurate pricing and detailed
              amenities to increase booking
              conversions.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}