


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
  MapPinned,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { destinations } from "@/data";

export default function Hero() {
  const totalCities = destinations.length;

  const totalListings = destinations.reduce(
    (total, city) => total + city.apartments,
    0
  );

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/destinations/hero-banner.png')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/30" />

      {/* Decorative Glow */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <Container>
        <div className="relative z-10 flex min-h-[520px] items-center py-20">
          <div className="max-w-3xl">
            {/* Breadcrumb */}

            <nav className="mb-8 flex items-center gap-2 text-sm text-white/80">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-white"
              >
                <Home size={15} />
                Home
              </Link>

              <ChevronRight size={14} />

              <span className="font-medium text-white">
                Destinations
              </span>
            </nav>

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur-md
              "
            >
              <MapPinned size={16} />

              {totalCities} Premium Destinations
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="
                text-5xl
                font-extrabold
                leading-tight
                text-white
                md:text-6xl
              "
            >
              Discover Nigeria's
              <br />

              <span className="text-blue-400">
                Finest Destinations
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/80
              "
            >
              Explore vibrant cities, luxury
              neighbourhoods and exclusive
              short-let destinations across
              Nigeria. Find the perfect location
              for business, leisure or your next
              unforgettable getaway.
            </motion.p>

            {/* Statistics */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.45,
              }}
              className="
                mt-10
                flex
                flex-wrap
                gap-10
              "
            >
              <div>
                <p className="text-3xl font-bold text-white">
                  {totalCities}
                </p>

                <span className="text-white/70">
                  Cities
                </span>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  {totalListings.toLocaleString()}+
                </p>

                <span className="text-white/70">
                  Apartments
                </span>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  4.9★
                </p>

                <span className="text-white/70">
                  Guest Rating
                </span>
              </div>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
              }}
              className="mt-10"
            >
              <Button size="lg">
                Explore Destinations
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}