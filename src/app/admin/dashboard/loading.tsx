



export default function Loading() {
  return (
    <main className="space-y-8 animate-pulse">

      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <div className="h-8 w-64 rounded-lg bg-slate-200" />
          <div className="h-4 w-96 rounded-lg bg-slate-200" />
        </div>

        <div className="h-12 w-32 rounded-xl bg-slate-200" />
      </div>


      {/* Stats Skeleton */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              space-y-4
            "
          >
            <div className="h-4 w-24 rounded bg-slate-200" />

            <div className="h-8 w-32 rounded bg-slate-200" />

            <div className="h-3 w-20 rounded bg-slate-200" />
          </div>
        ))}

      </section>


      {/* Charts Skeleton */}
      <section className="grid gap-8 xl:grid-cols-3">

        <div
          className="
            xl:col-span-2
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            space-y-5
          "
        >
          <div className="h-6 w-48 rounded bg-slate-200" />

          <div className="h-[320px] rounded-xl bg-slate-200" />
        </div>


        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            space-y-5
          "
        >
          <div className="h-6 w-32 rounded bg-slate-200" />

          <div className="h-[320px] rounded-xl bg-slate-200" />
        </div>

      </section>


      {/* Recent Data Skeleton */}
      <section className="grid gap-8 xl:grid-cols-2">

        {[1, 2].map((item) => (
          <div
            key={item}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              space-y-5
            "
          >
            <div className="h-6 w-40 rounded bg-slate-200" />

            {[1, 2, 3, 4].map((row) => (
              <div
                key={row}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-slate-200" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-40 rounded bg-slate-200" />
                  <div className="h-3 w-24 rounded bg-slate-200" />
                </div>
              </div>
            ))}

          </div>
        ))}

      </section>


      {/* Bottom Cards Skeleton */}
      <section className="grid gap-8 xl:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 space-y-4">
          <div className="h-6 w-32 rounded bg-slate-200" />
          <div className="h-10 w-full rounded bg-slate-200" />
          <div className="h-10 w-full rounded bg-slate-200" />
        </div>


        <div className="xl:col-span-2 rounded-2xl border bg-white p-6 space-y-4">
          <div className="h-6 w-40 rounded bg-slate-200" />

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-12 rounded-lg bg-slate-200"
            />
          ))}

        </div>

      </section>

    </main>
  );
}