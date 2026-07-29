




"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
  Building2,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/about/hero-banner.png')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate-950/75 to-transparent" />

      {/* Decorative Blur */}

      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <Container>
        <div className="relative z-10 flex min-h-[620px] items-center">
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

              <ChevronRight size={15} />

              <span className="font-medium text-white">
                About Us
              </span>
            </nav>

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-2
                text-sm
                text-white
                backdrop-blur-md
              "
            >
              <Building2 size={16} />

              Rahannes Luxury Homes
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl font-extrabold leading-tight text-white md:text-6xl"
            >
              Luxury Living
              <br />

              <span className="text-blue-400">
                Starts With Trust
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/80"
            >
              Rahannes Luxury Homes provides carefully selected
              serviced apartments, luxury villas and premium
              short-let accommodations designed for comfort,
              convenience and unforgettable experiences across
              Nigeria.
            </motion.p>

            {/* Trust Badges */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur">
                ✓ Verified Properties
              </div>

              <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur">
                ✓ Secure Booking
              </div>

              <div className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur">
                ✓ 24/7 Support
              </div>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg">
                Explore Apartments
              </Button>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side */}

          <div className="ml-auto hidden xl:block">
            <div className="space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Verified Homes",
                  value: "100%",
                },
                {
                  icon: Award,
                  title: "Luxury Standard",
                  value: "Premium",
                },
                {
                  icon: Users,
                  title: "Happy Guests",
                  value: "5,000+",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-3xl
                    border
                    border-white/15
                    bg-white/10
                    p-6
                    text-white
                    backdrop-blur-lg
                  "
                >
                  <div className="rounded-2xl bg-blue-500 p-4">
                    <item.icon size={26} />
                  </div>

                  <div>
                    <p className="text-3xl font-bold">
                      {item.value}
                    </p>

                    <p className="text-white/70">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}