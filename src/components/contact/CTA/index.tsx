



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
} from "lucide-react";

import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        bg-gradient-to-br
        from-primary
        via-blue-700
        to-slate-900
        px-8
        py-16
        text-white
        shadow-2xl
        lg:px-16
      "
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          -left-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -right-20
          h-80
          w-80
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
      />

      <div className="relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              mx-auto
              mb-6
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-white/15
              backdrop-blur
            "
          >
            <Building2 size={38} />
          </div>

          <span
            className="
              inline-flex
              rounded-full
              bg-white/15
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              backdrop-blur
            "
          >
            Luxury Living Awaits
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              lg:text-5xl
            "
          >
            Find Your Perfect Luxury Apartment
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-blue-100
            "
          >
            Experience premium comfort, elegant interiors,
            secure locations, and exceptional hospitality.
            Book your stay today and enjoy a seamless
            reservation experience.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <Link href="/apartments">
              <Button
                size="lg"
                className="
                  bg-white
                  text-primary
                  hover:bg-slate-100
                "
              >
                <Building2
                  size={20}
                  className="mr-2"
                />
                Browse Apartments
              </Button>
            </Link>

            <Link href="/booking">
              <Button
                variant="outline"
                size="lg"
                className="
                  border-white
                  bg-transparent
                  text-white
                  hover:bg-white/10
                "
              >
                <CalendarDays
                  size={20}
                  className="mr-2"
                />
                Book Your Stay

                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Button>
            </Link>
          </div>

          <div
            className="
              mt-12
              grid
              gap-6
              text-center
              sm:grid-cols-3
            "
          >
            <div>
              <h3 className="text-3xl font-bold">
                100+
              </h3>

              <p className="mt-2 text-blue-100">
                Premium Apartments
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                5★
              </h3>

              <p className="mt-2 text-blue-100">
                Guest Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                24/7
              </h3>

              <p className="mt-2 text-blue-100">
                Customer Support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}