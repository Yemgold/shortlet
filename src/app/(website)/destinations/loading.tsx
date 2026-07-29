


import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container>
      <div className="animate-pulse py-20 space-y-8">
        <div className="h-80 rounded-3xl bg-slate-200" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border"
            >
              <div className="h-56 bg-slate-200" />

              <div className="space-y-3 p-6">
                <div className="h-6 w-3/4 rounded bg-slate-200" />
                <div className="h-4 rounded bg-slate-200" />
                <div className="h-4 w-2/3 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}