




"use client";

import Link from "next/link";
import { Home, ChevronRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";

import { apartments } from "@/data";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const totalProperties = apartments.length;

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
         "url('/images/apartments/hero-banner.png')",
           
        }}
      />

      {/* Overlay */}

      <div
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-slate-950
    via-slate-950/90
    via-40%
    to-slate-900/20
  "
/>

      {/* Decorative Glow */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <Container>
        <div className="relative z-10 flex min-h-[420px] flex-col justify-center py-20">
          {/* Breadcrumb */}

          <nav className="mb-8 flex items-center gap-2 text-sm text-white/80">
            <Link
              href="/"
              className="flex items-center gap-1 transition hover:text-white"
            >
              <Home size={15} />
              Home
            </Link>

            <ChevronRight size={14} />

            <span className="font-medium text-white">
              Apartments
            </span>
          </nav>

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md"
          >
            <Building2 size={16} />

            {totalProperties}+ Premium Apartments
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl"
          >
            Discover Rahannes Luxury Homes Across Nigeria
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/80"
          >
            Browse verified short-let apartments, villas,
            penthouses and serviced homes with secure
            booking, flexible stays and instant confirmation.
          </motion.p>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">
                {totalProperties}+
              </p>

              <span className="text-sm text-white/70">
                Properties
              </span>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                12
              </p>

              <span className="text-sm text-white/70">
                Cities
              </span>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                4.9★
              </p>

              <span className="text-sm text-white/70">
                Average Rating
              </span>
            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Button size="lg">
              Explore Properties
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}