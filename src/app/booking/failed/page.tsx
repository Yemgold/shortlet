



"use client";

import { Suspense } from "react";
import BookingFailedContent from "./BookingFailedContent";

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Loading...
    </div>
  );
}

export default function BookingFailedPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BookingFailedContent />
    </Suspense>
  );
}