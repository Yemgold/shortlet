


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Sparkles, Globe2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Vision() {
  const visions = [
    {
      icon: Globe2,
      title: "National Presence",
      description:
        "Expand our portfolio across Nigeria's major cities while maintaining exceptional quality and hospitality.",
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description:
        "Deliver memorable stays through thoughtfully designed apartments and premium guest experiences.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description:
        "Leverage modern technology to make discovering, booking and managing luxury stays effortless.",
    },
  ];

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              OUR VISION
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Becoming Nigeria's
              <br />

              <span className="text-blue-600">
                Most Trusted Luxury
              </span>

              <br />
              Accommodation Brand
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We envision a future where finding premium accommodation
              is effortless, secure and inspiring. Our goal is to
              become the first choice for travellers seeking luxury,
              comfort and peace of mind across Nigeria.
            </p>

            <div className="mt-10 space-y-6">
              {visions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="
                    flex
                    gap-5
                    rounded-3xl
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                    <item.icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] shadow-2xl">
              <Image
                src="/images/about/vision.png"
                alt="Our Vision"
                width={900}
                height={1100}
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-10
                left-10
                rounded-3xl
                border
                border-white/20
                bg-white/95
                p-6
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                  <Eye size={28} />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Future Focused
                  </h4>

                  <p className="text-slate-500">
                    Premium hospitality for everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Card */}

            <div
              className="
                absolute
                -right-6
                top-10
                rounded-3xl
                bg-slate-900
                p-5
                text-white
                shadow-xl
              "
            >
              <p className="text-sm text-white/70">
                Guest Satisfaction
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                98%
              </h3>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}