



"use client";

import { Skeleton } from "@/components/ui";

export default function LoadingSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index}>
          <Skeleton className="h-80 rounded-3xl" />

          <Skeleton className="mt-5 h-6 w-2/3" />

          <Skeleton className="mt-3 h-4 w-full" />

          <Skeleton className="mt-2 h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}