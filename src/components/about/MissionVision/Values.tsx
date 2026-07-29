


"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gem,
  HeartHandshake,
  Sparkles,
  Clock3,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with honesty, transparency and professionalism in every booking and guest interaction.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Gem,
    title: "Luxury",
    description:
      "Every apartment is carefully selected to meet exceptional standards of comfort and elegance.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: HeartHandshake,
    title: "Hospitality",
    description:
      "We believe every guest deserves warmth, respect and personalized service from check-in to check-out.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We continually improve our services to exceed guest expectations and create unforgettable stays.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Clock3,
    title: "Reliability",
    description:
      "Fast responses, secure bookings and dependable support whenever our guests need assistance.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We connect travelers with premium homes while supporting local property owners and communities.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Values() {
  return (
    <Section className="bg-white">
      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            OUR VALUES
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            The Principles That
            <br />
            Guide Everything We Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Rahannes Luxury Homes, our success is built on a
            foundation of trust, excellence and a commitment to
            delivering remarkable experiences for every guest.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.45,
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
                  ${value.color}
                `}
              >
                <value.icon size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {value.description}
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
            delay: 0.3,
          }}
          className="
            mt-20
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-slate-900
            via-blue-900
            to-slate-900
            p-10
            text-white
          "
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold">
                Luxury is More Than Beautiful Spaces
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/80">
                It is about trust, consistency, exceptional service
                and creating memorable experiences that guests will
                cherish long after their stay.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-4xl font-bold">500+</h4>
                <p className="mt-2 text-white/70">
                  Premium Homes
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold">12</h4>
                <p className="mt-2 text-white/70">
                  Cities
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold">4.9★</h4>
                <p className="mt-2 text-white/70">
                  Guest Rating
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}