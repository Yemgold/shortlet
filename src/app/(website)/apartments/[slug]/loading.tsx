



export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 animate-pulse">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_500px]">
          {/* Left */}
          <div className="space-y-8">
            {/* Gallery */}
            <div className="h-[550px] rounded-3xl bg-slate-200" />

            {/* Title */}
            <div className="space-y-4">
              <div className="h-8 w-3/4 rounded bg-slate-200" />
              <div className="h-5 w-1/2 rounded bg-slate-200" />
            </div>

            {/* Meta */}
            <div className="flex gap-4">
              <div className="h-10 w-28 rounded-xl bg-slate-200" />
              <div className="h-10 w-28 rounded-xl bg-slate-200" />
              <div className="h-10 w-28 rounded-xl bg-slate-200" />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-4/5 rounded bg-slate-200" />
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-12 rounded-xl bg-slate-200"
                />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="mb-6 h-10 w-40 rounded bg-slate-200" />

            <div className="space-y-4">
              <div className="h-14 rounded-xl bg-slate-200" />
              <div className="h-14 rounded-xl bg-slate-200" />
              <div className="h-14 rounded-xl bg-slate-200" />
            </div>

            <div className="my-8 border-t pt-6 space-y-3">
              <div className="h-5 rounded bg-slate-200" />
              <div className="h-5 rounded bg-slate-200" />
              <div className="h-5 rounded bg-slate-200" />
              <div className="h-6 rounded bg-slate-300" />
            </div>

            <div className="h-14 rounded-xl bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
}