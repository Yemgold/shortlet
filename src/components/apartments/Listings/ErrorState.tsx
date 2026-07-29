



"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Unable to Load Apartments",
  message = "Something went wrong while loading the apartments. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-red-200
        bg-red-50
        px-8
        py-14
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-red-100
        "
      >
        <AlertTriangle
          size={40}
          className="text-red-600"
        />
      </div>

      <h2
        className="
          mt-6
          text-2xl
          font-bold
          text-slate-900
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-3
          max-w-md
          text-slate-600
        "
      >
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-red-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-red-700
          "
        >
          <RefreshCw size={18} />
          Try Again
        </button>
      )}
    </div>
  );
}