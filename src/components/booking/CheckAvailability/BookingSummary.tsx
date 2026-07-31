


"use client";

import {
  CalendarDays,
  Home,
  Users,
  CreditCard,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface BookingSummaryProps {
  apartmentName: string;

  checkIn: string;

  checkOut: string;

  guests: number;

  totalNights: number;

  pricePerNight: number;

  subtotal: number;

  cleaningFee: number;

  securityDeposit: number;

  total: number;

  onContinue: () => void;
}

export default function BookingSummary({
  apartmentName,
  checkIn,
  checkOut,
  guests,
  totalNights,
  pricePerNight,
  subtotal,
  cleaningFee,
  securityDeposit,
  total,
  onContinue,
}: BookingSummaryProps) {
  const formatDate = (
    date: string
  ) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-NG",
      {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  const money = (
    amount: number
  ) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          Booking Summary
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Review your reservation before
          continuing.
        </p>
      </div>

      {/* Availability */}

      <div
        className="
          rounded-3xl
          border
          border-emerald-200
          bg-emerald-50
          p-5
        "
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            size={24}
            className="mt-0.5 text-emerald-600"
          />

          <div>
            <h4 className="font-semibold text-emerald-700">
              Apartment Available
            </h4>

            <p className="mt-1 text-sm text-emerald-600">
              Great news! Your selected
              dates are available for
              booking.
            </p>
          </div>
        </div>
      </div>

      {/* Apartment */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="flex items-start gap-4">
          <Home
            size={22}
            className="mt-1 text-primary"
          />

          <div>
            <h4 className="text-lg font-semibold text-slate-900">
              {apartmentName}
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              {money(pricePerNight)} per
              night
            </p>
          </div>
        </div>
      </div>

      {/* Reservation */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <h4 className="mb-5 text-lg font-semibold">
          Reservation Details
        </h4>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <CalendarDays
              size={20}
              className="text-primary"
            />

            <div>
              <p className="text-sm text-slate-500">
                Check-in
              </p>

              <p className="font-medium">
                {formatDate(checkIn)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays
              size={20}
              className="text-primary"
            />

            <div>
              <p className="text-sm text-slate-500">
                Check-out
              </p>

              <p className="font-medium">
                {formatDate(checkOut)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users
              size={20}
              className="text-primary"
            />

            <div>
              <p className="text-sm text-slate-500">
                Guests
              </p>

              <p className="font-medium">
                {guests}
              </p>
            </div>
          </div>

          <div className="flex justify-between border-t pt-4">
            <span className="text-slate-500">
              Stay Duration
            </span>

            <span className="font-semibold">
              {totalNights}{" "}
              {totalNights === 1
                ? "Night"
                : "Nights"}
            </span>
          </div>
        </div>
      </div>

      {/* Payment */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="mb-6 flex items-center gap-2">
          <CreditCard
            size={20}
            className="text-primary"
          />

          <h4 className="text-lg font-semibold">
            Payment Breakdown
          </h4>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-slate-500">
              {money(pricePerNight)} ×{" "}
              {totalNights}{" "}
              {totalNights === 1
                ? "night"
                : "nights"}
            </span>

            <span className="font-medium">
              {money(subtotal)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">
              Cleaning Fee
            </span>

            <span className="font-medium">
              {money(cleaningFee)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">
              Security Deposit
            </span>

            <span className="font-medium">
              {money(
                securityDeposit
              )}
            </span>
          </div>

          <div className="flex items-start gap-2 rounded-xl bg-blue-50 p-3">
            <ShieldCheck
              size={18}
              className="mt-0.5 text-blue-600"
            />

            <p className="text-xs leading-5 text-blue-700">
              Your security deposit is
              refundable after checkout,
              provided no damages are
              reported.
            </p>
          </div>

          <div className="border-t pt-5">
            <div
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-primary/5
                p-5
              "
            >
              <span className="text-lg font-semibold">
                Total
              </span>

              <span className="text-3xl font-bold text-primary">
                {money(total)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue */}

      {/* <Button
        className="w-full"
        size="lg"
        onClick={onContinue}
      >
        Continue to Guest Details
      </Button> */}
    </div>
  );
}