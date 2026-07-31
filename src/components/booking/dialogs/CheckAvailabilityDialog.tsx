



"use client";

import { useState } from "react";

import {
  CalendarDays,
  Users,
  X,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface CheckAvailabilityDialogProps {
  open: boolean;

  apartmentName: string;

  maxGuests: number;

  loading?: boolean;

  onClose: () => void;

  onCheckAvailability: (data: {
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => void;
}

export default function CheckAvailabilityDialog({
  open,
  apartmentName,
  maxGuests,
  loading = false,
  onClose,
  onCheckAvailability,
}: CheckAvailabilityDialogProps) {
  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState(1);

  if (!open) return null;

  const handleSubmit = () => {
    if (!checkIn || !checkOut) {
      alert("Please select your check-in and check-out dates.");

      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert(
        "Check-out date must be after check-in date."
      );

      return;
    }

    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-2xl font-bold">
              Check Availability
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {apartmentName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-6 p-6">
          <Input
            type="date"
            label="Check-in Date"
            value={checkIn}
            onChange={(e) =>
              setCheckIn(e.target.value)
            }
            leftIcon={
              <CalendarDays size={18} />
            }
          />

          <Input
            type="date"
            label="Check-out Date"
            value={checkOut}
            onChange={(e) =>
              setCheckOut(e.target.value)
            }
            leftIcon={
              <CalendarDays size={18} />
            }
          />

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Users size={18} />
              Guests
            </label>

            <div className="flex items-center justify-between rounded-xl border p-3">
              <Button
                variant="outline"
                disabled={guests <= 1}
                onClick={() =>
                  setGuests((prev) =>
                    Math.max(1, prev - 1)
                  )
                }
              >
                -
              </Button>

              <span className="text-lg font-semibold">
                {guests}
              </span>

              <Button
                variant="outline"
                disabled={
                  guests >= maxGuests
                }
                onClick={() =>
                  setGuests((prev) =>
                    Math.min(
                      maxGuests,
                      prev + 1
                    )
                  )
                }
              >
                +
              </Button>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Maximum {maxGuests} guests
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="flex gap-3 border-t p-6">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            className="flex-1"
            loading={loading}
            onClick={handleSubmit}
          >
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
}