



"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPinned,
  Users,
  Star,
  CalendarCheck2,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const statistics = [
  {
    icon: Building2,
    value: "500+",
    label: "Luxury Apartments",
    description:
      "Premium serviced apartments and exclusive villas.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MapPinned,
    value: "12+",
    label: "Major Cities",
    description:
      "Available across Nigeria's top destinations.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Guests",
    description:
      "Business travellers, tourists and families served.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
    description:
      "Consistently rated excellent by our guests.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: CalendarCheck2,
    value: "10K+",
    label: "Successful Bookings",
    description:
      "Secure and seamless reservations completed.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Properties",
    description:
      "Every apartment is carefully verified before listing.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Statistics() {
  return (
    <Section className="relative overflow-hidden bg-slate-50">
      {/* Decorative Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              OUR IMPACT
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              Trusted By Thousands
              <br />
              Across Nigeria
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every booking represents our commitment to
              delivering exceptional hospitality, luxury
              accommodation and unforgettable guest
              experiences.
            </p>
          </motion.div>

          {/* Statistics Grid */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {statistics.map((item, index) => (
              <motion.div
                key={item.label}
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
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-2xl
                "
              >
                <div
                  className={`
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    ${item.color}
                  `}
                >
                  <item.icon size={32} />
                </div>

                <h3 className="text-5xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-2xl font-semibold text-slate-900">
                  {item.label}
                </h4>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-28" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.35,
            }}
            className="
              mt-24
              overflow-hidden
              rounded-[40px]
              bg-gradient-to-r
              from-slate-900
              via-blue-900
              to-slate-900
              p-12
              text-white
            "
          >
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="uppercase tracking-[0.25em] text-blue-300">
                  WHY OUR NUMBERS MATTER
                </span>

                <h3 className="mt-5 text-4xl font-bold">
                  Excellence Measured
                  <br />
                  By Guest Satisfaction
                </h3>

                <p className="mt-6 text-lg leading-8 text-white/80">
                  We continue to grow because our guests
                  trust us to provide exceptional luxury
                  accommodation, secure booking and
                  world-class hospitality every single time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                  <p className="text-4xl font-bold">
                    24/7
                  </p>

                  <p className="mt-2 text-white/70">
                    Customer Support
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                  <p className="text-4xl font-bold">
                    99%
                  </p>

                  <p className="mt-2 text-white/70">
                    Booking Success
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                  <p className="text-4xl font-bold">
                    100%
                  </p>

                  <p className="mt-2 text-white/70">
                    Secure Payments
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                  <p className="text-4xl font-bold">
                    365
                  </p>

                  <p className="mt-2 text-white/70">
                    Days Available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}