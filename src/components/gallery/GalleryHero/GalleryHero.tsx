

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ChevronRight,
  Camera,
  ImageIcon,
} from "lucide-react";

const stats = [
  {
    label: "Luxury Photos",
    value: "500+",
  },
  {
    label: "Premium Apartments",
    value: "80+",
  },
  {
    label: "Cities",
    value: "12",
  },
];

export default function GalleryHero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-950">


{/* ================= Background Image ================= */}

<div className="absolute inset-0 z-0">
  <Image
    src="/images/gallery/gallery-hero.png"
    alt="Luxury Apartment Gallery"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
</div>

      {/* ================= Dark Overlay ================= */}

    <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/50" />

      {/* ================= Bottom Fade ================= */}

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      {/* ================= Decorative Blur ================= */}

      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* ================= Floating Particles ================= */}

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* ================= Content Container ================= */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* ================= Breadcrumb ================= */}

        <motion.nav
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-12 flex items-center gap-2 text-sm text-white/70"
        >
          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="font-medium text-white">
            Gallery
          </span>
        </motion.nav>

                {/* ================= Hero Content ================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <div>
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
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl"
            >
              <Camera
                size={18}
                className="text-blue-400"
              />

              <span className="text-sm font-medium text-white">
                Premium Apartment Collection
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
              }}
              className="mt-8 max-w-3xl text-5xl font-extrabold leading-tight text-white md:text-6xl xl:text-7xl"
            >
              Discover Our
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Luxury Gallery
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/75"
            >
              Browse breathtaking interiors,
              luxurious amenities, premium
              bedrooms, elegant living spaces,
              and exceptional short-let
              experiences across Nigeria.
            </motion.p>

            {/* Statistics */}

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
                delay: 0.65,
              }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-4xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}

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
                delay: 0.8,
              }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link
                href="#gallery-grid"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Gallery
              </Link>

              <Link
                href="/apartments"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View Apartments
              </Link>
            </motion.div>
          </div>

                    {/* ================= Right Content ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main Glass Card */}

            <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
              <Image
                src="/images/gallery/gallery-featured.png"
                alt="Luxury Apartment"
                width={700}
                height={900}
                className="h-[520px] w-full rounded-3xl object-cover"
              />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-slate-950/65 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Presidential Suite
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      Victoria Island, Lagos
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-600 p-3">
                    <ImageIcon
                      size={22}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - Photos */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -left-10 top-16 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl"
            >
              <p className="text-3xl font-bold text-white">
                500+
              </p>

              <p className="mt-1 text-sm text-white/70">
                Luxury Photos
              </p>
            </motion.div>

            {/* Floating Card - Rating */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -right-8 bottom-16 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl"
            >
              <p className="text-3xl font-bold text-white">
                4.9★
              </p>

              <p className="mt-1 text-sm text-white/70">
                Guest Rating
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= Scroll Indicator ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="#gallery-grid"
            className="flex flex-col items-center gap-3 text-white/60 transition hover:text-white"
          >
            <span className="text-sm tracking-[0.3em] uppercase">
              Scroll
            </span>

            <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">
              <motion.div
                animate={{
                  y: [4, 22, 4],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
                className="mt-2 h-3 w-3 rounded-full bg-white"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}