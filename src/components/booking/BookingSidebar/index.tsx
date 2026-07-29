



"use client";

import { useMemo, useState } from "react";

import type { Apartment } from "@/types/apartment";

import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingGuests from "@/components/booking/BookingGuests";
import BookingForm from "@/components/booking/BookingForm";

interface BookingSidebarProps {
  apartment: Apartment;
}

export default function BookingSidebar({
  apartment,
}: BookingSidebarProps) {
  const [checkIn, setCheckIn] =
    useState("");

  const [checkOut, setCheckOut] =
    useState("");

  const [guests, setGuests] =
    useState(1);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff =
      end.getTime() - start.getTime();

    return Math.max(
      0,
      Math.ceil(
        diff /
          (1000 * 60 * 60 * 24)
      )
    );
  }, [checkIn, checkOut]);

  const subtotal =
    apartment.pricePerNight * nights;

  const cleaningFee =
    apartment.cleaningFee;

  const securityDeposit =
    apartment.securityDeposit;

  const discount =
    apartment.discount;

  const total =
    subtotal +
    cleaningFee +
    securityDeposit -
    discount;

  return (
    <aside
      className="
        sticky
        top-24
        space-y-6
      "
    >
      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-lg
        "
      >
        <div className="mb-6">
          <p className="text-sm text-slate-500">
            Price
          </p>

          <h2 className="text-4xl font-bold text-primary">
            ₦
            {apartment.pricePerNight.toLocaleString()}
          </h2>

          <p className="text-slate-500">
            per night
          </p>
        </div>

        <BookingCalendar
  checkInDate={checkIn}
  checkOutDate={checkOut}
  onCheckInChange={setCheckIn}
  onCheckOutChange={setCheckOut}
/>

        <div className="mt-6">
          <BookingGuests
            value={guests}
            maxGuests={
              apartment.guests
            }
            onChange={setGuests}
          />
        </div>

        <div className="mt-8 border-t pt-6 space-y-3">
          <div className="flex justify-between">
            <span>
              ₦
              {apartment.pricePerNight.toLocaleString()}
              × {nights} night
              {nights !== 1 && "s"}
            </span>

            <span>
              ₦
              {subtotal.toLocaleString()}
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
                −₦
                {discount.toLocaleString()}
              </span>
            </div>
          )}

          <div
            className="
              flex
              justify-between
              border-t
              pt-4
              text-xl
              font-bold
            "
          >
            <span>Total</span>

            <span>
              ₦
              {total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <BookingForm
        apartmentId={apartment._id}
      />
    </aside>
  );
}