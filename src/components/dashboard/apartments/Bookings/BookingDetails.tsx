


"use client";

import {
  CalendarDays,
  Clock3,
  CreditCard,
  Home,
  Mail,
  MapPin,
  Phone,
  User,
  Users,
} from "lucide-react";

interface BookingDetailsProps {
  booking: {
    _id: string;

    apartment: {
      name: string;
      location: string;
    };

    guest: {
      name: string;
      email: string;
      phone: string;
    };

    checkIn: string;

    checkOut: string;

    nights: number;

    guests: number;

    amount: number;

    paymentStatus:
      | "PAID"
      | "PENDING"
      | "FAILED"
      | "REFUNDED";

    bookingStatus:
      | "CONFIRMED"
      | "PENDING"
      | "CHECKED_IN"
      | "CHECKED_OUT"
      | "CANCELLED";

    createdAt: string;
  };
}

export default function BookingDetails({
  booking,
}: BookingDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Apartment */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-slate-900">
          Apartment
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Home className="text-blue-600" size={20} />

            <div>
              <p className="text-sm text-slate-500">
                Apartment
              </p>

              <p className="font-semibold">
                {booking.apartment.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              className="text-emerald-600"
              size={20}
            />

            <div>
              <p className="text-sm text-slate-500">
                Location
              </p>

              <p>{booking.apartment.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Guest */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-slate-900">
          Guest Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <Info
            icon={<User size={18} />}
            label="Guest"
            value={booking.guest.name}
          />

          <Info
            icon={<Mail size={18} />}
            label="Email"
            value={booking.guest.email}
          />

          <Info
            icon={<Phone size={18} />}
            label="Phone"
            value={booking.guest.phone}
          />

          <Info
            icon={<Users size={18} />}
            label="Guests"
            value={`${booking.guests}`}
          />
        </div>
      </div>

      {/* Stay */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-slate-900">
          Stay Details
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <Info
            icon={<CalendarDays size={18} />}
            label="Check In"
            value={new Date(
              booking.checkIn
            ).toLocaleDateString()}
          />

          <Info
            icon={<CalendarDays size={18} />}
            label="Check Out"
            value={new Date(
              booking.checkOut
            ).toLocaleDateString()}
          />

          <Info
            icon={<Clock3 size={18} />}
            label="Nights"
            value={`${booking.nights}`}
          />

          <Info
            icon={<CreditCard size={18} />}
            label="Amount"
            value={`₦${booking.amount.toLocaleString()}`}
          />
        </div>
      </div>

      {/* Status */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-slate-900">
          Booking Status
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          <Info
            label="Booking"
            value={booking.bookingStatus}
          />

          <Info
            label="Payment"
            value={booking.paymentStatus}
          />

          <Info
            label="Booked On"
            value={new Date(
              booking.createdAt
            ).toLocaleString()}
          />
        </div>
      </div>
    </div>
  );
}

interface InfoProps {
  icon?: React.ReactNode;

  label: string;

  value: string;
}

function Info({
  icon,
  label,
  value,
}: InfoProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4">
      {icon && (
        <div className="mt-1 text-slate-500">
          {icon}
        </div>
      )}

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="mt-1 font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}