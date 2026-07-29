



"use client";

import {
  CalendarDays,
  CreditCard,
  Hotel,
  Users,
} from "lucide-react";

interface BookingSummaryProps {
  apartmentName: string;

  checkInDate: string;

  checkOutDate: string;

  guests: number;

  nights: number;

  pricePerNight: number;

  cleaningFee: number;

  securityDeposit: number;

  discount?: number;
}

export default function BookingSummary({
  apartmentName,
  checkInDate,
  checkOutDate,
  guests,
  nights,
  pricePerNight,
  cleaningFee,
  securityDeposit,
  discount = 0,
}: BookingSummaryProps) {
  const accommodation =
    pricePerNight * nights;

  const total =
    accommodation +
    cleaningFee +
    securityDeposit -
    discount;

  return (
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
      <h2 className="text-xl font-bold">
        Booking Summary
      </h2>

      <div className="mt-6 space-y-5">

        {/* Apartment */}

        <div className="flex items-start gap-3">
          <Hotel
            size={20}
            className="text-primary"
          />

          <div>
            <p className="text-sm text-slate-500">
              Apartment
            </p>

            <p className="font-semibold">
              {apartmentName}
            </p>
          </div>
        </div>

        {/* Dates */}

        <div className="flex items-start gap-3">
          <CalendarDays
            size={20}
            className="text-primary"
          />

          <div>
            <p className="text-sm text-slate-500">
              Stay
            </p>

            <p className="font-semibold">
              {checkInDate}
            </p>

            <p className="font-semibold">
              {checkOutDate}
            </p>

            <p className="text-sm text-slate-500">
              {nights} night
              {nights !== 1 && "s"}
            </p>
          </div>
        </div>

        {/* Guests */}

        <div className="flex items-start gap-3">
          <Users
            size={20}
            className="text-primary"
          />

          <div>
            <p className="text-sm text-slate-500">
              Guests
            </p>

            <p className="font-semibold">
              {guests}
            </p>
          </div>
        </div>

        <hr />

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>
              ₦
              {pricePerNight.toLocaleString()}
              × {nights}
            </span>

            <span>
              ₦
              {accommodation.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span>
              Cleaning Fee
            </span>

            <span>
              ₦
              {cleaningFee.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span>
              Security Deposit
            </span>

            <span>
              ₦
              {securityDeposit.toLocaleString()}
            </span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>
                Discount
              </span>

              <span>
                -₦
                {discount.toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <hr />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard
              size={20}
              className="text-primary"
            />

            <span className="font-semibold">
              Total
            </span>
          </div>

          <span className="text-2xl font-bold text-primary">
            ₦{total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}