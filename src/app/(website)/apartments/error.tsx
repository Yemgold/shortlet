


"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-600">
          We couldn't load the apartments page.
          Please try again.
        </p>

        <button
          onClick={reset}
          className="
            mt-8
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          Try Again
        </button>
      </div>
    </div>
  );
}