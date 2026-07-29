




"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const highlights = [
  "Premium serviced apartments across Nigeria",
  "Verified luxury properties",
  "Fast & secure online booking",
  "Professional guest support",
];

const milestones = [
  {
    year: "2022",
    title: "Our Journey Began",
    description:
      "Rahannes Luxury Homes was established with a vision of redefining luxury short-let accommodation in Nigeria.",
  },
  {
    year: "2023",
    title: "Growing Our Portfolio",
    description:
      "Expanded into multiple premium locations while maintaining exceptional hospitality standards.",
  },
  {
    year: "Today",
    title: "Trusted by Guests",
    description:
      "Serving business travellers, families and tourists with elegant apartments and unforgettable experiences.",
  },
];

export default function CompanyStory() {
  return (
    <Section className="overflow-hidden bg-white">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

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
              OUR STORY
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Creating Exceptional
              <br />

              Luxury Experiences
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Rahannes Luxury Homes was founded with one simple
              mission—to make finding premium accommodation easy,
              trustworthy and memorable.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              We believe luxury should never feel complicated.
              Whether you're travelling for business, relocating,
              planning a vacation or celebrating a special occasion,
              our carefully selected apartments provide comfort,
              elegance and complete peace of mind.
            </p>

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="rounded-full bg-green-100 p-2 text-green-600">
                    <CheckCircle2 size={18} />
                  </div>

                  <p className="text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">
                Explore Apartments
              </Button>

              <Button
                size="lg"
                variant="outline"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

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
                src="/images/about/company-story.png"
                alt="Rahannes Luxury Homes"
                width={900}
                height={1100}
                className="h-[700px] w-full object-cover"
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
                w-72
                rounded-3xl
                bg-white
                p-6
                shadow-2xl
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                  <Building2 size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Luxury
                  </h3>

                  <p className="text-slate-500">
                    Handpicked Homes
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
                bottom-12
                w-72
                rounded-3xl
                bg-slate-900
                p-6
                text-white
                shadow-2xl
              "
            >
              <div className="flex items-center gap-4">
                <Award
                  size={32}
                  className="text-yellow-400"
                />

                <div>
                  <h3 className="text-3xl font-bold">
                    Premium
                  </h3>

                  <p className="text-white/70">
                    Hospitality Experience
                  </p>
                </div>
              </div>
            </motion.div>

                        {/* Achievement Card */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.55,
              }}
              className="
                absolute
                left-10
                bottom-44
                rounded-3xl
                bg-white
                p-6
                shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <CalendarDays
                  size={26}
                  className="text-blue-600"
                />

                <div>
                  <p className="text-3xl font-bold text-slate-900">
                    3+
                  </p>

                  <p className="text-slate-500">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= Timeline ================= */}

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
            duration: 0.6,
          }}
          className="mt-32"
        >
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              OUR JOURNEY
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Milestones That Define Us
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Every milestone reflects our commitment to
              providing premium accommodation and creating
              memorable experiences for every guest.
            </p>
          </div>

          <div className="relative mt-20">
            {/* Timeline Line */}

            <div className="absolute left-6 top-0 h-full w-px bg-slate-200 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-16">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
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
                    delay: index * 0.15,
                  }}
                  className={`
                    relative
                    grid
                    gap-10
                    lg:grid-cols-2
                    ${
                      index % 2 === 1
                        ? "lg:[&>*:first-child]:order-2"
                        : ""
                    }
                  `}
                >
                  {/* Dot */}

                  <div
                    className="
                      absolute
                      left-3
                      top-8
                      h-7
                      w-7
                      rounded-full
                      border-4
                      border-white
                      bg-blue-600
                      shadow-lg
                      lg:left-1/2
                      lg:-translate-x-1/2
                    "
                  />

                  {/* Empty */}

                  <div />

                  {/* Card */}

                  <div
                    className="
                      ml-14
                      rounded-[30px]
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                      transition
                      hover:-translate-y-2
                      hover:shadow-xl
                      lg:ml-0
                    "
                  >
                    <span
                      className="
                        inline-flex
                        rounded-full
                        bg-blue-100
                        px-4
                        py-2
                        font-semibold
                        text-blue-700
                      "
                    >
                      {item.year}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= Statistics ================= */}

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
            delay: 0.25,
          }}
          className="
            mt-28
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-slate-900
            via-blue-900
            to-slate-900
            p-12
            text-white
          "
        >
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-5xl font-bold">
                500+
              </p>

              <p className="mt-3 text-white/70">
                Luxury Apartments
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold">
                12+
              </p>

              <p className="mt-3 text-white/70">
                Nigerian Cities
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold">
                5,000+
              </p>

              <p className="mt-3 text-white/70">
                Happy Guests
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold">
                4.9★
              </p>

              <p className="mt-3 text-white/70">
                Average Rating
              </p>
            </div>
          </div>
        </motion.div>



                {/* ================= CTA ================= */}

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
            mt-24
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-gradient-to-br
            from-blue-50
            via-white
            to-slate-50
            p-10
            shadow-xl
            lg:p-16
          "
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
                EXPERIENCE THE DIFFERENCE
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
                Luxury Living Starts
                <br />
                With Rahannes
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Whether you're travelling for business,
                relocating, planning a family vacation or
                celebrating a special occasion, our carefully
                selected luxury apartments deliver comfort,
                elegance and complete peace of mind.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Browse Apartments
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right */}

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <Building2
                  size={42}
                  className="text-blue-600"
                />

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Premium Homes
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Carefully selected serviced apartments,
                  villas and penthouses designed for
                  exceptional comfort.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <MapPin
                  size={42}
                  className="text-blue-600"
                />

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Prime Locations
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Stay in Nigeria's most vibrant cities,
                  prestigious neighbourhoods and business
                  districts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}