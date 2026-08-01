




"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  CalendarDays,
  Home,
  ArrowRight,
  Receipt,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function BookingSuccessContent() {
  const searchParams = useSearchParams();

  const reference = searchParams.get("reference") ?? "Not Available";

  return (
    <Section className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2
                size={60}
                className="text-green-600"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Booking Confirmed 🎉
            </h1>

            <p className="mt-4 text-lg text-slate-500">
              Your payment was successful and your apartment reservation has
              been created.
            </p>
          </div>

          {/* Booking Details */}
          <div className="mt-10 rounded-2xl bg-slate-50 p-6">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <Receipt size={20} />
              Booking Details
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Status</span>

                <span className="font-semibold text-green-600">Paid</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Booking Status</span>

                <span className="font-semibold">Confirmed</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Payment Reference</span>

                <span className="break-all text-right font-mono text-sm font-semibold">
                  {reference}
                </span>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
            <div className="flex gap-3">
              <CalendarDays
                size={24}
                className="mt-1 text-green-600"
              />

              <div>
                <h3 className="font-semibold text-green-700">
                  What's Next?
                </h3>

                <p className="mt-2 text-sm leading-7 text-green-700">
                  Your booking has been received. You'll receive a confirmation
                  email shortly with your booking details, payment receipt and
                  check-in instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <Link
              href="/"
              className="flex-1"
            >
              <Button
                className="w-full"
                variant="outline"
              >
                <Home
                  size={18}
                  className="mr-2"
                />
                Back to Home
              </Button>
            </Link>

            <Link
              href="/apartments"
              className="flex-1"
            >
              <Button className="w-full">
                Browse Apartments
                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}