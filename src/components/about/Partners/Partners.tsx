



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Handshake,
  Building2,
  Globe2,
  ShieldCheck,
  Award,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

interface Partner {
  id: number;
  name: string;
  logo: string;
  category: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Rahannes Luxury Homes",
    logo: "/images/partners/partner-1.png",
    category: "Hospitality",
  },
  {
    id: 2,
    name: "Prime Residences",
    logo: "/images/partners/partner-2.png",
    category: "Luxury Apartments",
  },
  {
    id: 3,
    name: "Elite Suites",
    logo: "/images/partners/partner-3.png",
    category: "Short-let",
  },
  {
    id: 4,
    name: "Skyline Towers",
    logo: "/images/partners/partner-4.png",
    category: "Real Estate",
  },
  {
    id: 5,
    name: "Prestige Living",
    logo: "/images/partners/partner-5.png",
    category: "Property Management",
  },
  {
    id: 6,
    name: "Blue Horizon",
    logo: "/images/partners/partner-6.png",
    category: "Hospitality",
  },
];

export default function Partners() {
  return (
    <Section className="relative overflow-hidden bg-slate-50">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <Container>
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
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            TRUSTED PARTNERS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Working With
            <br />
            Nigeria's Finest Brands
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We collaborate with leading property owners,
            hospitality providers and technology companies
            to deliver an exceptional booking experience.
          </p>
        </motion.div>

        {/* Featured Partnership */}

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
          className="
            mb-24
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-white
            shadow-xl
          "
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* Image */}

            <div className="relative h-[560px]">
              <Image
                src="/images/about/partners.jpg"
                alt="Partners"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-8 left-8 rounded-full bg-white px-6 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <Handshake
                    className="text-blue-600"
                    size={22}
                  />

                  <span className="font-semibold">
                    Strategic Partnership
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}

            <div className="p-10 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                <Award size={18} />

                Trusted Network
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                Building Strong Partnerships
              </h3>

              <p className="mt-8 leading-8 text-slate-600">
                Our success is built on long-term
                relationships with trusted property owners,
                hospitality brands and technology providers
                who share our commitment to excellence.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Every partnership strengthens our ability to
                deliver premium accommodation, secure
                bookings and exceptional guest experiences.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <Building2
                    className="mb-3 text-blue-600"
                  />

                  <p className="text-3xl font-bold">
                    200+
                  </p>

                  <span className="text-sm text-slate-500">
                    Property Owners
                  </span>
                </div>

                <div>
                  <ShieldCheck
                    className="mb-3 text-emerald-600"
                  />

                  <p className="text-3xl font-bold">
                    100%
                  </p>

                  <span className="text-sm text-slate-500">
                    Verified
                  </span>
                </div>

                <div>
                  <Globe2
                    className="mb-3 text-cyan-600"
                  />

                  <p className="text-3xl font-bold">
                    12
                  </p>

                  <span className="text-sm text-slate-500">
                    Cities
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-10"
              >
                Become A Partner
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Logo Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />

              <h4 className="mt-6 text-center font-semibold text-slate-900">
                {partner.name}
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                {partner.category}
              </p>
            </motion.div>
          ))}
        </div>


                {/* ================= PARTNERSHIP BENEFITS ================= */}

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
          className="mt-24"
        >
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              WHY PARTNER WITH US
            </span>

            <h3 className="mt-4 text-4xl font-bold text-slate-900">
              Grow Together
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We help property owners, hospitality brands and
              corporate organizations reach more guests,
              increase occupancy and deliver exceptional
              experiences through our premium booking platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "More Visibility",
                description:
                  "Expose your apartments to thousands of local and international guests.",
              },
              {
                title: "Secure Payments",
                description:
                  "Receive fast and secure online payments through trusted payment gateways.",
              },
              {
                title: "Verified Guests",
                description:
                  "Benefit from secure bookings and identity verification for peace of mind.",
              },
              {
                title: "Business Growth",
                description:
                  "Increase occupancy rates with marketing, promotions and premium exposure.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  hover:border-blue-200
                  hover:shadow-xl
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Handshake
                    className="text-blue-600"
                    size={24}
                  />
                </div>

                <h4 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            delay: 0.2,
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="font-semibold uppercase tracking-[0.25em] text-blue-300">
                PARTNER WITH US
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                Let's Build Something
                <br />
                Exceptional Together
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                Whether you're a property owner, developer,
                hospitality brand or corporate organization,
                we'd love to collaborate and create
                outstanding accommodation experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Become A Partner
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-slate-900"
                >
                  Contact Partnership Team
                </Button>
              </div>
            </div>

            {/* Right Stats */}

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  200+
                </p>

                <p className="mt-2 text-white/70">
                  Partner Properties
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  12
                </p>

                <p className="mt-2 text-white/70">
                  Major Cities
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  50K+
                </p>

                <p className="mt-2 text-white/70">
                  Happy Guests
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  4.9★
                </p>

                <p className="mt-2 text-white/70">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}