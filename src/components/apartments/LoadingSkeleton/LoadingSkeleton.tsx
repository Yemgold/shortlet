



"use client";

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Toolbar */}

      <div
        className="
          mb-8
          flex
          flex-col
          gap-4
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
        "
      >
        <div className="h-4 w-40 rounded bg-slate-200" />

        <div className="h-8 w-72 rounded bg-slate-200" />

        <div className="h-4 w-96 max-w-full rounded bg-slate-200" />

        <div className="mt-4 flex gap-3">
          <div className="h-11 w-44 rounded-xl bg-slate-200" />
          <div className="h-11 w-40 rounded-xl bg-slate-200" />
        </div>
      </div>

      {/* Apartment Cards */}

      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-sm
            "
          >
            {/* Image */}

            <div className="h-64 w-full bg-slate-200" />

            {/* Content */}

            <div className="space-y-4 p-6">
              <div className="h-6 w-3/4 rounded bg-slate-200" />

              <div className="h-4 w-1/2 rounded bg-slate-200" />

              <div className="space-y-2">
                <div className="h-4 rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
              </div>

              <div className="flex gap-2">
                <div className="h-8 w-16 rounded-full bg-slate-200" />
                <div className="h-8 w-20 rounded-full bg-slate-200" />
                <div className="h-8 w-16 rounded-full bg-slate-200" />
              </div>

              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2 h-4 w-20 rounded bg-slate-200" />
                  <div className="h-7 w-28 rounded bg-slate-200" />
                </div>

                <div className="h-12 w-32 rounded-xl bg-slate-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}