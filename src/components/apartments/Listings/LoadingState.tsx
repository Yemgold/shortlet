

"use client";

import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  title?: string;

  message?: string;

  fullHeight?: boolean;
}

export default function LoadingState({
  title = "Loading Apartments",
  message = "Please wait while we fetch the latest apartments...",
  fullHeight = false,
}: LoadingStateProps) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-slate-200
        bg-white
        px-8
        py-16
        text-center
        ${
          fullHeight
            ? "min-h-[500px]"
            : "min-h-[320px]"
        }
      `}
    >
      {/* Loading Icon */}

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-blue-50
        "
      >
        <Loader2
          size={42}
          className="
            animate-spin
            text-blue-600
          "
        />
      </div>

      {/* Title */}

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

      {/* Message */}

      <p
        className="
          mt-3
          max-w-md
          text-slate-500
        "
      >
        {message}
      </p>

      {/* Skeleton Bars */}

      <div
        className="
          mt-10
          w-full
          max-w-xl
          space-y-4
        "
      >
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="
              h-4
              animate-pulse
              rounded-full
              bg-slate-200
            "
            style={{
              width: `${100 - index * 15}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}