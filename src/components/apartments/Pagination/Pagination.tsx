





"use client";

import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 12,
  onPageChange,
}: PaginationProps) {
  function changePage(page: number) {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    onPageChange?.(page);
  }

  function renderPages() {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  }

  return (
    <div
      className="
        mt-16
        flex
        flex-col
        items-center
        gap-5
      "
    >
      <p className="text-sm text-slate-500">
        Page{" "}
        <span className="font-semibold text-slate-900">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-900">
          {totalPages}
        </span>
      </p>

      <nav
        className="
          flex
          items-center
          gap-2
        "
      >
        {/* Previous */}

        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() =>
            changePage(currentPage - 1)
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            transition
            hover:border-blue-500
            hover:bg-blue-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Pages */}

        {renderPages().map((page, index) => {
          if (page === "...") {
            return (
              <div
                key={`ellipsis-${index}`}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                "
              >
                <MoreHorizontal
                  size={18}
                  className="text-slate-400"
                />
              </div>
            );
          }

          const active = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() =>
                changePage(page)
              }
              className={`
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                font-semibold
                transition-all

                ${
                  active
                    ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                    : "border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}

        <button
          type="button"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            changePage(currentPage + 1)
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            transition
            hover:border-blue-500
            hover:bg-blue-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronRight size={18} />
        </button>
      </nav>
    </div>
  );
}