



"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface BookingPaginationProps {
  page: number;

  totalPages: number;

  totalItems: number;

  pageSize: number;

  onPageChange: (
    page: number
  ) => void;
}

export default function BookingPagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: BookingPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const start =
    (page - 1) * pageSize + 1;

  const end = Math.min(
    page * pageSize,
    totalItems
  );

  return (
    <div
      className="
        mt-8
        flex
        flex-col
        items-center
        justify-between
        gap-4
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        md:flex-row
      "
    >
      {/* Result Count */}

      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-900">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-slate-900">
          {end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-900">
          {totalItems}
        </span>{" "}
        bookings
      </p>

      {/* Pagination */}

      <div className="flex items-center gap-2">
        {/* Previous */}

        <button
          disabled={page === 1}
          onClick={() =>
            onPageChange(page - 1)
          }
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            text-slate-600
            transition
            hover:bg-slate-100
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Pages */}

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() =>
              onPageChange(pageNumber)
            }
            className={`
              h-10
              w-10
              rounded-xl
              border
              text-sm
              font-semibold
              transition
              ${
                pageNumber === page
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 text-slate-700 hover:bg-slate-100"
              }
            `}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next */}

        <button
          disabled={
            page === totalPages
          }
          onClick={() =>
            onPageChange(page + 1)
          }
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            text-slate-600
            transition
            hover:bg-slate-100
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}