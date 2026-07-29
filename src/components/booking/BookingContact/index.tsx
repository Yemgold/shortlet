



"use client";

import Link from "next/link";

import {
  Phone,
  Mail,
  MessageCircle,
  Headphones,
} from "lucide-react";

interface BookingContactProps {
  phone?: string;

  email?: string;

  whatsapp?: string;
}

export default function BookingContact({
  phone = "+234 800 000 0000",
  email = "support@rhluxuryhomes.com",
  whatsapp = "+2348000000000",
}: BookingContactProps) {
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
        <div
          className="
            rounded-xl
            bg-primary/10
            p-3
            text-primary
          "
        >
          <Headphones size={22} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Need Help?
          </h3>

          <p className="text-sm text-slate-500">
            Our team is available to assist you with your booking.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {/* Phone */}

        <Link
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            p-4
            transition
            hover:border-primary
            hover:bg-primary/5
          "
        >
          <Phone
            size={20}
            className="text-primary"
          />

          <div>
            <p className="text-xs text-slate-500">
              Call Us
            </p>

            <p className="font-semibold text-slate-900">
              {phone}
            </p>
          </div>
        </Link>

        {/* WhatsApp */}

        <Link
          href={`https://wa.me/${whatsapp.replace(
            /\D/g,
            ""
          )}`}
          target="_blank"
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            p-4
            transition
            hover:border-green-500
            hover:bg-green-50
          "
        >
          <MessageCircle
            size={20}
            className="text-green-600"
          />

          <div>
            <p className="text-xs text-slate-500">
              WhatsApp
            </p>

            <p className="font-semibold text-slate-900">
              Chat with us
            </p>
          </div>
        </Link>

        {/* Email */}

        <Link
          href={`mailto:${email}`}
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            p-4
            transition
            hover:border-blue-500
            hover:bg-blue-50
          "
        >
          <Mail
            size={20}
            className="text-blue-600"
          />

          <div>
            <p className="text-xs text-slate-500">
              Email
            </p>

            <p className="font-semibold text-slate-900">
              {email}
            </p>
          </div>
        </Link>
      </div>

      <div
        className="
          mt-6
          rounded-2xl
          bg-slate-50
          p-4
          text-sm
          text-slate-600
        "
      >
        Our customer support team is available daily to
        help with reservations, payments, cancellations,
        and any questions about your stay.
      </div>
    </div>
  );
}