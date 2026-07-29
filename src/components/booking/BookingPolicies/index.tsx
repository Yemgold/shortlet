


"use client";

import {
  CalendarX2,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
} from "lucide-react";

interface BookingPoliciesProps {
  checkInTime?: string;
  checkOutTime?: string;
  cancellationPolicy?: string;
  houseRules?: string[];
}

export default function BookingPolicies({
  checkInTime = "2:00 PM",
  checkOutTime = "11:00 AM",
  cancellationPolicy = "Free cancellation up to 48 hours before check-in.",
  houseRules = [
    "No smoking inside the apartment.",
    "No parties or events.",
    "Pets are not allowed.",
    "Government-issued ID may be required at check-in.",
  ],
}: BookingPoliciesProps) {
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
      <div className="flex items-center gap-3">
        <FileText
          size={22}
          className="text-primary"
        />

        <h2 className="text-xl font-bold">
          Booking Policies
        </h2>
      </div>

      <div className="mt-6 space-y-5">
        <div className="flex items-start gap-3">
          <Clock3
            size={18}
            className="mt-1 text-primary"
          />

          <div>
            <p className="font-semibold">
              Check-in
            </p>

            <p className="text-sm text-slate-600">
              From {checkInTime}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock3
            size={18}
            className="mt-1 text-primary"
          />

          <div>
            <p className="font-semibold">
              Check-out
            </p>

            <p className="text-sm text-slate-600">
              Before {checkOutTime}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CalendarX2
            size={18}
            className="mt-1 text-primary"
          />

          <div>
            <p className="font-semibold">
              Cancellation
            </p>

            <p className="text-sm text-slate-600">
              {cancellationPolicy}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck
            size={18}
            className="mt-1 text-primary"
          />

          <div>
            <p className="font-semibold">
              House Rules
            </p>

            <ul className="mt-2 space-y-2">
              {houseRules.map((rule) => (
                <li
                  key={rule}
                  className="
                    flex
                    items-start
                    gap-2
                    text-sm
                    text-slate-600
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="
                      mt-0.5
                      text-green-600
                    "
                  />

                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}