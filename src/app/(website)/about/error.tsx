


"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function AboutError({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error("About Page Error:", error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-xl md:p-14">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle
              size={42}
              className="text-red-600"
            />
          </div>

          <h1 className="mt-8 text-4xl font-bold text-slate-900">
            Something Went Wrong
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            We couldn't load the About page at the
            moment. Please try again or return to the
            homepage.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={reset}
              leftIcon={<RefreshCw size={18} />}
            >
              Try Again
            </Button>

            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                leftIcon={<ArrowLeft size={18} />}
              >
                Back Home
              </Button>
            </Link>
          </div>

          {process.env.NODE_ENV === "development" &&
            error.message && (
              <div className="mt-10 rounded-2xl bg-slate-100 p-5 text-left">
                <p className="mb-2 font-semibold text-slate-800">
                  Development Error
                </p>

                <pre className="overflow-auto whitespace-pre-wrap text-sm text-red-600">
                  {error.message}
                </pre>
              </div>
            )}
        </div>
      </Container>
    </section>
  );
}