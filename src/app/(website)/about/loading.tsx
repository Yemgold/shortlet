


import Container from "@/components/ui/Container";

export default function AboutLoading() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <Container>
        <div className="animate-pulse">
          {/* Hero */}

          <div className="overflow-hidden rounded-[40px] bg-white shadow-lg">
            <div className="h-[520px] w-full bg-slate-200" />

            <div className="space-y-6 p-10">
              <div className="h-4 w-40 rounded-full bg-slate-200" />

              <div className="h-12 w-3/4 rounded-xl bg-slate-200" />

              <div className="h-5 w-full rounded bg-slate-200" />
              <div className="h-5 w-5/6 rounded bg-slate-200" />
              <div className="h-5 w-2/3 rounded bg-slate-200" />

              <div className="mt-8 h-12 w-44 rounded-xl bg-slate-200" />
            </div>
          </div>

          {/* Mission / Vision / Values */}

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-[32px] bg-white p-8 shadow-md"
              >
                <div className="mb-6 h-14 w-14 rounded-2xl bg-slate-200" />

                <div className="h-8 w-40 rounded bg-slate-200" />

                <div className="mt-6 h-4 w-full rounded bg-slate-200" />
                <div className="mt-3 h-4 w-5/6 rounded bg-slate-200" />
                <div className="mt-3 h-4 w-2/3 rounded bg-slate-200" />
              </div>
            ))}
          </div>

          {/* Statistics */}

          <div className="mt-24 grid gap-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-[28px] bg-white p-8 text-center shadow-md"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-slate-200" />

                <div className="mx-auto mt-6 h-10 w-24 rounded bg-slate-200" />

                <div className="mx-auto mt-4 h-4 w-32 rounded bg-slate-200" />
              </div>
            ))}
          </div>

          {/* Team */}

          <div className="mt-24">
            <div className="mx-auto mb-12 h-10 w-72 rounded bg-slate-200" />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[32px] bg-white shadow-md"
                >
                  <div className="h-[340px] bg-slate-200" />

                  <div className="space-y-5 p-8">
                    <div className="h-8 w-40 rounded bg-slate-200" />

                    <div className="h-4 w-28 rounded bg-slate-200" />

                    <div className="h-4 w-full rounded bg-slate-200" />
                    <div className="h-4 w-5/6 rounded bg-slate-200" />
                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}

          <div className="mt-24 rounded-[40px] bg-slate-200 p-16">
            <div className="mx-auto h-10 w-80 rounded bg-slate-300" />

            <div className="mx-auto mt-6 h-5 w-2/3 rounded bg-slate-300" />

            <div className="mx-auto mt-10 h-12 w-48 rounded-xl bg-slate-300" />
          </div>
        </div>
      </Container>
    </section>
  );
}