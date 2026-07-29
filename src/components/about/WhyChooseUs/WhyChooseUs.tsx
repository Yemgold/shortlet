




"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  Clock3,
  Building2,
  MapPinned,
  Headset,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every apartment undergoes a strict verification process, ensuring you only book genuine, premium-quality homes.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Protected online payments with instant confirmation and industry-standard security for every reservation.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Clock3,
    title: "Instant Booking",
    description:
      "Reserve your apartment within minutes with real-time availability and immediate booking confirmation.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Building2,
    title: "Luxury Apartments",
    description:
      "Handpicked serviced apartments, villas and penthouses that meet premium hospitality standards.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: MapPinned,
    title: "Prime Locations",
    description:
      "Stay close to business districts, airports, entertainment hubs and the city's best attractions.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Our hospitality team is always available to assist before, during and after your stay.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="relative overflow-hidden bg-slate-50">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

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
            <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              WHY CHOOSE US
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Premium Hospitality
              <br />

              You Can Trust
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              We combine luxury accommodation, modern
              technology and exceptional customer service
              to create an unforgettable booking
              experience.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              From verified apartments and secure online
              payments to instant confirmation and
              professional guest support, every detail is
              carefully designed to give you complete
              confidence when booking your next stay.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">
                Book Your Stay
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                Browse Apartments
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}

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
            }}
            className="relative"
          >
            {/* Main Image */}

            <div className="overflow-hidden rounded-[36px] shadow-2xl">
              <Image
                src="/images/about/why-choose-us.jpg"
                alt="Luxury Apartment"
                width={900}
                height={1100}
                className="h-[720px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                absolute
                -left-8
                top-10
                rounded-3xl
                bg-white
                p-6
                shadow-2xl
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    100%
                  </h3>

                  <p className="text-slate-500">
                    Verified Listings
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="
                absolute
                -right-8
                bottom-10
                rounded-3xl
                bg-slate-900
                p-6
                text-white
                shadow-2xl
              "
            >
              <p className="text-4xl font-bold">
                4.9★
              </p>

              <p className="mt-2 text-white/70">
                Average Guest Rating
              </p>
            </motion.div>



                      </motion.div>
        </div>

        {/* ================= FEATURES ================= */}

        <div className="mt-28 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={index * 0.08}
            />
          ))}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
          }}
          className="
            mt-28
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-slate-900
            via-blue-900
            to-slate-900
            p-12
            text-white
            lg:p-16
          "
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="font-semibold uppercase tracking-[0.25em] text-blue-300">
                READY TO EXPERIENCE LUXURY?
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                Your Perfect Stay
                <br />
                Starts Here
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                Browse our carefully selected luxury apartments,
                book instantly with secure online payments and
                enjoy a premium hospitality experience anywhere
                in Nigeria.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Browse Apartments
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-slate-900"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  500+
                </p>

                <p className="mt-2 text-white/70">
                  Luxury Apartments
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  12+
                </p>

                <p className="mt-2 text-white/70">
                  Major Cities
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  5K+
                </p>

                <p className="mt-2 text-white/70">
                  Happy Guests
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  24/7
                </p>

                <p className="mt-2 text-white/70">
                  Guest Support
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}