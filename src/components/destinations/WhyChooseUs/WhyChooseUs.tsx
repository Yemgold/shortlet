



"use client";

import {
  ShieldCheck,
  CreditCard,
  Building2,
  MapPinned,
  Headphones,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every apartment is carefully inspected and verified to ensure quality, comfort, and safety.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Book with confidence using secure payment methods backed by trusted payment gateways.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Building2,
    title: "Luxury Standards",
    description:
      "Discover premium serviced apartments, villas and penthouses designed for exceptional stays.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MapPinned,
    title: "Prime Locations",
    description:
      "Stay close to business districts, airports, entertainment hubs and major attractions across Nigeria.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Headphones,
    title: "24/7 Guest Support",
    description:
      "Our hospitality team is always available to assist you before, during and after your stay.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "Enjoy a fast booking experience with quick confirmations and hassle-free reservations.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-slate-50">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            WHY CHOOSE RAHANNES LUXURY
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Luxury Stays You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We combine carefully selected apartments, secure bookings,
            premium hospitality and dedicated support to deliver an
            exceptional accommodation experience across Nigeria.
          </p>
        </div>

        {/* Features */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-3xl
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
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    ${feature.color}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div
          className="
            mt-20
            rounded-[2rem]
            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-900
            px-10
            py-12
            text-center
            text-white
            shadow-2xl
          "
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Your Comfort Is Our Priority
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Whether you're travelling for business, leisure or a family
            getaway, Rahannes Luxury provides verified accommodations,
            seamless booking and premium hospitality tailored to every
            guest.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div>
              <p className="text-4xl font-bold">4.9★</p>
              <span className="text-white/70">
                Guest Rating
              </span>
            </div>

            <div>
              <p className="text-4xl font-bold">100%</p>
              <span className="text-white/70">
                Verified Listings
              </span>
            </div>

            <div>
              <p className="text-4xl font-bold">24/7</p>
              <span className="text-white/70">
                Customer Support
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}