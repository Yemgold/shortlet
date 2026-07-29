


"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-slate-900">
        Something went wrong
      </h2>

      <p className="text-slate-500">
        We could not load the dashboard.
      </p>

      <button
        onClick={() => reset()}
        className="
          rounded-lg
          bg-blue-600
          px-5
          py-2
          text-white
          hover:bg-blue-700
        "
      >
        Try Again
      </button>
    </div>
  );
}