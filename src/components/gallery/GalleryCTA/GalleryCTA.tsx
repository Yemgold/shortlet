



"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Home,
  ShieldCheck,
} from "lucide-react";

const features = [
  "Instant Booking",
  "Verified Luxury Apartments",
  "Secure Online Payment",
  "24/7 Guest Support",
];

export default function GalleryCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}

      <Image
        src="/images/gallery/gallery-cta.jpg"
        alt="Luxury Apartment"
        fill
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/85" />

      {/* Decorative Blurs */}

      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= Left ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-400">
              <Home size={18} />
              Ready To Stay?
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
              Book Your Luxury Apartment
              Today
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              You've explored the photos,
              watched the videos, and experienced
              our virtual tour. Now it's time to
              enjoy exceptional comfort in person.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-400"
                  />

                  <span className="text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/apartments"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                <CalendarDays size={20} />

                Book Now

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* ================= Right ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
              <Image
                src="/images/gallery/gallery-cta-card.jpg"
                alt="Luxury Apartment"
                width={900}
                height={700}
                className="rounded-3xl"
              />

              {/* Floating Trust Card */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -left-8 top-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
              >
                <ShieldCheck
                  size={34}
                  className="text-green-400"
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  Secure Booking
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Safe payments and verified
                  luxury apartments.
                </p>
              </motion.div>

              {/* Floating Rating */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute -right-8 bottom-10 rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl"
              >
                <p className="text-4xl font-bold text-white">
                  4.9★
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Guest Satisfaction
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}