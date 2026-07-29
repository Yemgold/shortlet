


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Star,
  MapPin,
} from "lucide-react";

interface AuthBannerProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function AuthBanner({
  title = "Luxury Living Begins Here",
  subtitle = "Discover premium short-let apartments across Nigeria with secure bookings, verified properties and exceptional hospitality.",
  image = "/images/auth/auth-banner.png",
}: AuthBannerProps) {
  return (
    <div className="relative hidden min-h-screen overflow-hidden lg:block">
      {/* Background */}

      <motion.div
  className="absolute inset-0"
  animate={{
    scale: [1, 1.06, 1],
  }}
  transition={{
    duration: 28,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src={image}
    alt={title}
    fill
    priority
    sizes="50vw"
    className="object-cover"
  />
</motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/25" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_45%)]" />

<div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,.65)]" />

      {/* Decorative Blobs */}

  <div className="absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-[160px]" />

<div className="absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-[160px]" />

<div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-[170px]" />



{Array.from({ length: 18 }).map((_, index) => (
  <motion.span
    key={index}
    className="absolute h-1.5 w-1.5 rounded-full bg-amber-300"
    style={{
      left: `${(index * 97) % 100}%`,
      top: `${(index * 37) % 100}%`,
    }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      duration: 4 + (index % 4),
      repeat: Infinity,
    }}
  />
))}


{/* Floating Trust Card */}

<motion.div
  initial={{
    opacity: 0,
    x: 40,
  }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -8, 0],
  }}
  transition={{
    delay: 0.5,
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
  }}
  className="
    absolute
    right-10
    top-10
    rounded-3xl
    border
    border-white/20
    bg-white/10
    p-6
    shadow-2xl
    backdrop-blur-2xl
  "
>
  <div className="flex items-center gap-4">
    <div className="rounded-2xl bg-green-500/20 p-3">
      <ShieldCheck
        className="text-green-400"
        size={28}
      />
    </div>

    <div>
      <p className="font-semibold text-white">
        Secure Booking
      </p>

      <p className="text-sm text-white/70">
        SSL Protected • Verified Payments
      </p>
    </div>
  </div>
</motion.div>

      {/* Main Content */}

      <div className="relative z-10 flex h-full flex-col justify-between p-16 text-white">

        {/* Brand */}

        <motion.div
  initial={{
    opacity: 0,
    x: -30,
  }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -5, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  className="flex items-center gap-4"
>
    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 text-slate-900 shadow-[0_20px_60px_rgba(251,191,36,0.45)]">
    <Building2 size={30} strokeWidth={2.2} />
          </div>

          <div>
           <h2 className="text-3xl font-extrabold tracking-wide">
              Rahannes Luxury Homes
            </h2>

            <p className="mt-1 text-white/70 tracking-widest uppercase text-sm">
              Premium Apartment Booking
            </p>
          </div>
        </motion.div>

        {/* Hero */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <motion.div
  initial={{
    opacity: 0,
    y: 10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.4,
  }}
  className="mb-6"
>
  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-300 backdrop-blur-xl">
    ⭐ Premium Collection
  </div>
</motion.div>


          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium shadow-lg backdrop-blur-2xl"
          
          >
            <MapPin size={16} />

            12 Cities Across Nigeria
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight xl:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            {subtitle}
          </p>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold">
                500+
              </p>

              <span className="text-white/70">
                Apartments
              </span>
            </div>

            <div>
              <p className="text-4xl font-bold">
                12
              </p>

              <span className="text-white/70">
                Cities
              </span>
            </div>

            <div>
              <p className="text-4xl font-bold">
                4.9★
              </p>

              <span className="text-white/70">
                Rating
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Testimonial */}

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
            delay: 0.9,
          }}
          className="
            rounded-3xl
            border
            border-white/20
            bg-white/10
            p-6
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={18}
                fill="currentColor"
              />
            ))}
          </div>

          <p className="mt-4 text-lg leading-7 text-white/90">
            "Booking was effortless and the apartment
            exceeded every expectation. Luxury,
            comfort and outstanding service."
          </p>

          <div className="mt-5">
            <p className="font-semibold">
              Sarah Johnson
            </p>

            <span className="text-sm text-white/70">
              Verified Guest
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}