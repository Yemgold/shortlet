


"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "@/components/ui/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <section className="mt-20 flex items-center justify-center">
      <nav className="flex items-center gap-2">
        {/* Previous */}

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Page Numbers */}

        {pages.map((page) => (

          <Button
            key={page}
            variant={
              currentPage === page
                ? "primary"
                : "outline"
            }
            onClick={() =>
              onPageChange(page)
            }
            className="min-w-11"
          >
            {page}
          </Button>
        ))}

        {/* Next */}

        <Button
          variant="outline"
          size="icon"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </nav>
    </section>
  );
}