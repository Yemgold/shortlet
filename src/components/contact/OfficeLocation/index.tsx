

"use client";

import { motion } from "framer-motion";
import {
  MapPinned,
  Navigation,
  Clock3,
  Car,
} from "lucide-react";

export default function OfficeLocation() {
  return (
    <section className="space-y-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span
          className="
            inline-flex
            rounded-full
            bg-primary/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-primary
          "
        >
          Visit Our Office
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Our Office Location
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
          We'd love to welcome you. Visit our office for
          property enquiries, reservations, partnerships,
          or customer support.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid gap-10 lg:grid-cols-[1.4fr_420px]">
        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Lekki+Phase+1,+Lagos,+Nigeria&output=embed"
            loading="lazy"
            className="h-[500px] w-full border-0"
          />
        </motion.div>

        {/* Office Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Address */}
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
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                "
              >
                <MapPinned size={24} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Office Address
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  RH Luxury Homes
                  <br />
                  Lekki Phase 1
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
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
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-100
                  text-emerald-600
                "
              >
                <Clock3 size={24} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Opening Hours
                </h3>

                <div className="mt-3 space-y-2 text-slate-600">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Parking */}
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
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                "
              >
                <Car size={24} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Parking Available
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Free and secure parking is available for
                  customers visiting our office.
                </p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <a
            href="https://maps.google.com/?q=Lekki+Phase+1,+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-primary
              px-6
              py-4
              font-semibold
              text-white
              transition
              hover:opacity-90
            "
          >
            <Navigation size={20} />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}