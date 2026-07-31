


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Headphones,
  Phone,
  MessageCircle,
} from "lucide-react";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/contact/contact-hero.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/60" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative z-10">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-2 text-sm text-white/80"
            >
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="font-medium text-white">
                Contact
              </span>
            </motion.nav>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur"
            >
              <Headphones size={18} />

              Customer Support Available
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl"
            >
              We'd Love to
              <span className="block text-primary">
                Hear From You
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
            >
              Whether you have questions about reservations,
              luxury apartments, long-term stays, or
              partnerships, our dedicated team is always
              ready to assist you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="tel:+2348000000000">
                <Button size="lg">
                  <Phone
                    size={18}
                    className="mr-2"
                  />
                  Call Us
                </Button>
              </Link>

              <Link
                href="https://wa.me/2348000000000"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/10 text-white backdrop-blur hover:bg-white hover:text-slate-900"
                >
                  <MessageCircle
                    size={18}
                    className="mr-2"
                  />
                  WhatsApp
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            >
              <div>
                <h3 className="text-3xl font-bold text-white">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  Customer Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  100+
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  Luxury Apartments
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  5★
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  Guest Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  Fast
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  Response Time
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}