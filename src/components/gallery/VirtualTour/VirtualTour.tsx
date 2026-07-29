



"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Compass,
  Expand,
  ScanEye,
} from "lucide-react";

export default function VirtualTour() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24">
      {/* Background */}

      <Image
        src="/images/gallery/virtual-tour.jpg"
        alt="Virtual Tour"
        fill
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Decorative Blur */}

      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

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
              <Compass size={18} />
              360° Virtual Experience
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
              Walk Through Our Luxury Apartments
              Without Leaving Your Home
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Explore every room, admire premium
              finishes, and experience the comfort
              of our apartments through immersive
              360° virtual tours before making
              your reservation.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">
              <Feature
                icon={<ScanEye size={22} />}
                title="360° Interactive Tour"
                text="Navigate freely through every room."
              />

              <Feature
                icon={<Expand size={22} />}
                title="High Resolution"
                text="Crystal-clear visuals from every angle."
              />

              <Feature
                icon={<Compass size={22} />}
                title="Immersive Experience"
                text="Feel like you're already inside."
              />
            </div>

            <div className="mt-12">
              <Link
                href="/virtual-tour"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Start Virtual Tour

                <ArrowRight size={20} />
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
                src="/images/gallery/virtual-preview.jpg"
                alt="Virtual Tour Preview"
                width={900}
                height={650}
                className="rounded-3xl"
              />

              {/* Play Overlay */}

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="flex h-28 w-28 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-xl"
                >
                  <Compass
                    size={46}
                    className="text-white"
                  />
                </motion.div>
              </div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -left-8 top-8 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl"
              >
                <p className="text-3xl font-bold text-white">
                  360°
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Interactive View
                </p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute -right-8 bottom-8 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl"
              >
                <p className="text-3xl font-bold text-white">
                  HD
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Ultra Quality
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Feature({
  icon,
  title,
  text,
}: FeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-2xl bg-blue-600/20 p-3 text-blue-400">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}