




import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Destination Not Found
        </h2>

        <p className="mt-4 max-w-lg text-slate-600">
          The destination you're looking for
          doesn't exist or has been removed.
        </p>

        <Link
          href="/destinations"
          className="mt-8"
        >
          <Button>
            Browse Destinations
          </Button>
        </Link>
      </div>
    </Container>
  );
}