


import Hero from "@/components/destinations/Hero";
import SearchBar from "@/components/destinations/SearchBar";


import Statistics from "@/components/destinations/Statistics";
import CategorySection from "@/components/destinations/CategorySection";
import FeaturedCities from "@/components/destinations/FeaturedCities";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import WhyChooseUs from "@/components/destinations/WhyChooseUs";
import Newsletter from "@/components/destinations/Newsletter";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

import { destinations } from "@/data";

import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  ArrowRight,
  Star,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}

      <Hero />

      {/* Search */}

      <Container>
        <SearchBar />
      </Container>


    <Statistics />

    <CategorySection />

    <FeaturedCities />

    <DestinationGrid />

    <WhyChooseUs />

    <Newsletter />

      {/* Destinations */}

      <Section>
        <Container>
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              Explore Nigeria
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Discover Nigeria's Finest Destinations
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Stay in carefully selected serviced apartments,
              luxury villas, penthouses and premium homes across
              Nigeria's most vibrant cities.
            </p>
          </div>

          {/* Premium Info */}

          <div
            className="
              mb-14
              rounded-3xl
              border
              bg-gradient-to-r
              from-slate-900
              via-slate-800
              to-slate-900
              p-8
              text-white
              shadow-2xl
            "
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Premium Collection
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Luxury stays across Nigeria
                </h3>

                <p className="mt-4 max-w-2xl text-white/75">
                  Every destination features carefully verified
                  apartments with secure bookings, premium
                  hospitality and flexible stay options.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <Building2 className="mx-auto mb-2 text-blue-400" />

                  <p className="text-3xl font-bold">
                    {destinations.length}
                  </p>

                  <span className="text-sm text-white/70">
                    Cities
                  </span>
                </div>

                <div>
                  <Star className="mx-auto mb-2 fill-yellow-400 text-yellow-400" />

                  <p className="text-3xl font-bold">
                    4.9
                  </p>

                  <span className="text-sm text-white/70">
                    Guest Rating
                  </span>
                </div>

                <div>
                  <ShieldCheck className="mx-auto mb-2 text-emerald-400" />

                  <p className="text-3xl font-bold">
                    100%
                  </p>

                  <span className="text-sm text-white/70">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((city) => (
              <Link
                key={city.id}
                href={`/apartments?city=${city.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  bg-gradient-to-b
                  from-white
                  to-slate-50
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Image */}

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="
                      (max-width:768px) 100vw,
                      (max-width:1200px) 50vw,
                      25vw
                    "
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Badge */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      bg-white/15
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-lg
                    "
                  >
                    ⭐ Featured Destination
                  </div>

                  {/* Rating */}

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      items-center
                      gap-1
                      rounded-full
                      bg-black/40
                      px-3
                      py-1
                      text-sm
                      text-white
                      backdrop-blur
                    "
                  >
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    4.9
                  </div>

                  {/* Bottom */}

                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold">
                      {city.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-white/90">
                      <MapPin size={16} />

                      {city.apartments.toLocaleString()} Apartments
                    </div>
                  </div>
                </div>

                {/* Content */}

                <div className="p-6">
                  <p className="leading-7 text-slate-600">
                    {city.description}
                  </p>

                  {/* Stats */}

                  <div className="mt-6 flex items-center justify-between border-t pt-5">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Starting From
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-900">
                        ₦65,000
                        <span className="text-sm font-normal text-slate-500">
                          {" "}
                          / night
                        </span>
                      </p>
                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                      Available
                    </div>
                  </div>

                  {/* Tags */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Luxury
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Serviced
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Verified
                    </span>
                  </div>

                  {/* Button */}

                  <Button
                    className="mt-6 w-full justify-center"
                    rightIcon={<ArrowRight size={18} />}
                  >
                    View Apartments
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}