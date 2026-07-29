



"use client";

import {
  Building2,
  MapPinned,
  Star,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { destinations } from "@/data";

export default function Statistics() {
  const totalCities = destinations.length;

  const totalApartments = destinations.reduce(
    (sum, city) => sum + city.apartments,
    0
  );

  const stats = [
    {
      icon: Building2,
      value: `${totalApartments.toLocaleString()}+`,
      label: "Luxury Apartments",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: MapPinned,
      value: `${totalCities}`,
      label: "Major Cities",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Users,
      value: "25K+",
      label: "Happy Guests",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Star,
      value: "4.9★",
      label: "Average Rating",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div
          className="
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-900
            px-8
            py-12
            shadow-2xl
            lg:px-14
          "
        >
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-blue-300">
              OUR IMPACT
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Trusted By Thousands Of Guests
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
              From business travellers to family vacations,
              Rahannes Luxury connects guests with premium
              apartments in Nigeria's most desirable locations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    text-center
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:bg-white/10
                  "
                >
                  <div
                    className={`
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      ${stat.color}
                    `}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-4xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-3 text-white/70">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}