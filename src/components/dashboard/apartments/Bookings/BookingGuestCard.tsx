



"use client";

import {
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";

interface BookingGuestCardProps {
  guest: {
    name: string;
    email: string;
    phone: string;
  };

  guests: number;
}

export default function BookingGuestCard({
  guest,
  guests,
}: BookingGuestCardProps) {
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
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Guest Information
      </h2>

      <div className="space-y-5">
        {/* Name */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              text-blue-600
            "
          >
            <User size={22} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Guest Name
            </p>

            <h3 className="font-semibold text-slate-900">
              {guest.name}
            </h3>
          </div>
        </div>

        {/* Email */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-emerald-100
              text-emerald-600
            "
          >
            <Mail size={22} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email Address
            </p>

            <p className="font-medium text-slate-900">
              {guest.email}
            </p>
          </div>
        </div>

        {/* Phone */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-orange-100
              text-orange-600
            "
          >
            <Phone size={22} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Phone Number
            </p>

            <p className="font-medium text-slate-900">
              {guest.phone}
            </p>
          </div>
        </div>

        {/* Guests */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-purple-100
              text-purple-600
            "
          >
            <Users size={22} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Number of Guests
            </p>

            <p className="font-medium text-slate-900">
              {guests}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}