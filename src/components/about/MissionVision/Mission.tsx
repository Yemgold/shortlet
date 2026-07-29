



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const missionPoints = [
  "Provide premium serviced apartments with exceptional comfort.",
  "Deliver secure, transparent and hassle-free booking experiences.",
  "Offer outstanding hospitality with world-class customer service.",
  "Connect travellers with Nigeria's finest luxury accommodations.",
];

export default function Mission() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/about/mission.png"
                alt="Rahannes Luxury Mission"
                width={900}
                height={700}
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                -bottom-8
                left-8
                rounded-3xl
                bg-white
                p-6
                shadow-2xl
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                  <Target size={28} />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Our Mission
                  </h4>

                  <p className="text-sm text-slate-500">
                    Excellence in every stay.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-semibold uppercase tracking-[0.2em] text-blue-600">
              OUR MISSION
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Delivering Luxury,
              <br />
              Comfort & Trust
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At Rahannes Luxury Homes, our mission is to redefine
              short-let accommodation by offering carefully selected
              luxury apartments that combine elegance, convenience,
              security and outstanding hospitality.
            </p>

            <div className="mt-10 space-y-5">
              {missionPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 rounded-full bg-green-100 p-2 text-green-600">
                    <CheckCircle2 size={18} />
                  </div>

                  <p className="text-slate-700 leading-7">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight */}

            <div
              className="
                mt-10
                rounded-3xl
                border
                border-blue-100
                bg-blue-50
                p-8
              "
            >
              <h3 className="text-xl font-bold text-slate-900">
                Our Promise
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Every guest deserves a seamless experience—from
                discovering a property to check-out. We strive to
                exceed expectations by combining luxury living,
                secure technology and personalized hospitality in
                every booking.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}