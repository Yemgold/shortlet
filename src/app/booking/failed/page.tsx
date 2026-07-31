


"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  XCircle,
  RefreshCw,
  Home,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function BookingFailedPage() {
  const searchParams = useSearchParams();

  const reference =
    searchParams.get("reference") ??
    "Not Available";

  const reason =
    searchParams.get("reason") ??
    "Your payment could not be completed.";

  return (
    <Section className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

          {/* Failed Icon */}

          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
              <XCircle
                size={60}
                className="text-red-600"
              />
            </div>
          </div>

          {/* Heading */}

          <div className="mt-8 text-center">

            <h1 className="text-4xl font-bold text-slate-900">
              Payment Failed
            </h1>

            <p className="mt-4 text-lg text-slate-500">
              Unfortunately we couldn't complete
              your booking payment.
            </p>

          </div>

          {/* Failure Details */}

          <div className="mt-10 rounded-2xl bg-slate-50 p-6">

            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <AlertTriangle size={20} />
              Payment Details
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Payment Status
                </span>

                <span className="font-semibold text-red-600">
                  Failed
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Booking Status
                </span>

                <span className="font-semibold">
                  Pending
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-slate-500">
                  Reference
                </span>

                <span className="break-all text-right font-mono text-sm font-semibold">
                  {reference}
                </span>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-red-600">
                  {reason}
                </p>
              </div>

            </div>

          </div>

          {/* Notice */}

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">

            <div className="flex gap-3">

              <AlertTriangle
                size={24}
                className="mt-1 text-amber-600"
              />

              <div>

                <h3 className="font-semibold text-amber-700">
                  What can you do?
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-700">
                  <li>
                    Ensure your card has sufficient
                    funds.
                  </li>

                  <li>
                    Check that your internet
                    connection is stable.
                  </li>

                  <li>
                    Retry the payment.
                  </li>

                  <li>
                    Contact support if the problem
                    persists.
                  </li>
                </ul>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 md:flex-row">

            <Link
              href="/apartments"
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full"
              >
                <ArrowLeft
                  size={18}
                  className="mr-2"
                />
                Back to Apartments
              </Button>
            </Link>

            <Link
              href="/apartments"
              className="flex-1"
            >
              <Button className="w-full">
                <RefreshCw
                  size={18}
                  className="mr-2"
                />
                Try Again
              </Button>
            </Link>

            <Link
              href="/"
              className="flex-1"
            >
              <Button
                variant="secondary"
                className="w-full"
              >
                <Home
                  size={18}
                  className="mr-2"
                />
                Home
              </Button>
            </Link>

          </div>

        </div>
      </Container>
    </Section>
  );
}