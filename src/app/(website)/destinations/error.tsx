



"use client";

import { useEffect } from "react";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface Props {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-4 max-w-xl text-slate-600">
          We couldn't load the destinations.
          Please try again.
        </p>

        <div className="mt-8 flex gap-4">
          <Button onClick={reset}>
            Try Again
          </Button>

          <Link href="/">
            <Button variant="outline">
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}