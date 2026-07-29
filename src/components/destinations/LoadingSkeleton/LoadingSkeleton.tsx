


"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function LoadingSkeleton() {
  return (
    <>
      {/* Hero Skeleton */}

      <section className="relative h-[500px] animate-pulse overflow-hidden bg-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300" />

        <Container>
          <div className="relative z-10 flex h-[500px] flex-col justify-center">
            <div className="mb-6 h-5 w-40 rounded-full bg-slate-300" />

            <div className="h-16 w-full max-w-3xl rounded-xl bg-slate-300" />

            <div className="mt-6 h-6 w-full max-w-2xl rounded-lg bg-slate-300" />

            <div className="mt-3 h-6 w-3/4 rounded-lg bg-slate-300" />

            <div className="mt-10 flex gap-4">
              <div className="h-12 w-44 rounded-xl bg-slate-300" />
              <div className="h-12 w-44 rounded-xl bg-slate-300" />
            </div>
          </div>
        </Container>
      </section>

      {/* Search Bar */}

      <Container>
        <div className="-mt-12 relative z-20 animate-pulse rounded-3xl border bg-white p-6 shadow-2xl">
          <div className="grid gap-4 md:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-16 rounded-2xl bg-slate-200"
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Statistics */}

      <Section>
        <Container>
          <div className="animate-pulse rounded-[2rem] bg-slate-900 p-10">
            <div className="mx-auto mb-10 h-10 w-72 rounded bg-slate-700" />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white/10 p-8"
                >
                  <div className="h-14 w-14 rounded-2xl bg-slate-600" />

                  <div className="mt-6 h-10 w-24 rounded bg-slate-600" />

                  <div className="mt-4 h-4 w-32 rounded bg-slate-700" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Destination Cards */}

      <Section className="pt-0">
        <Container>
          <div className="mb-12 text-center">
            <div className="mx-auto h-5 w-40 rounded bg-slate-200" />

            <div className="mx-auto mt-6 h-12 w-96 rounded bg-slate-200" />

            <div className="mx-auto mt-5 h-5 w-[500px] rounded bg-slate-200" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse overflow-hidden rounded-3xl border bg-white shadow-sm"
              >
                <div className="h-64 bg-slate-200" />

                <div className="space-y-4 p-6">
                  <div className="h-7 w-40 rounded bg-slate-200" />

                  <div className="h-4 rounded bg-slate-200" />
                  <div className="h-4 w-5/6 rounded bg-slate-200" />

                  <div className="h-px bg-slate-200" />

                  <div className="flex justify-between">
                    <div>
                      <div className="h-4 w-20 rounded bg-slate-200" />
                      <div className="mt-3 h-6 w-24 rounded bg-slate-200" />
                    </div>

                    <div className="h-8 w-24 rounded-full bg-slate-200" />
                  </div>

                  <div className="flex gap-2">
                    <div className="h-7 w-20 rounded-full bg-slate-200" />
                    <div className="h-7 w-20 rounded-full bg-slate-200" />
                    <div className="h-7 w-20 rounded-full bg-slate-200" />
                  </div>

                  <div className="h-12 rounded-xl bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}