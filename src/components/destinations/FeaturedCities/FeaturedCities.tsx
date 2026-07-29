




"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Building2 } from "lucide-react";

import { destinations } from "@/data";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function FeaturedCities() {
  const featuredCities = destinations.slice(0, 6);

  return (
    <Section>
      <Container>
        {/* Header */}

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              FEATURED DESTINATIONS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Stay In Nigeria's Finest Cities
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Discover premium serviced apartments, luxury penthouses,
              villas and short-let homes in Nigeria's most vibrant
              business and leisure destinations.
            </p>
          </div>

          <Link href="/apartments">
  <Button>
    Browse All Apartments
  </Button>
</Link>
        </div>

        {/* Cities */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredCities.map((city) => (
            <Link
              key={city.id}
              href={`/apartments?city=${city.slug}`}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-72 overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Rating */}

                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-900 backdrop-blur">
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  4.9
                </div>

                {/* City */}

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold">
                    {city.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-white/90">
                    <MapPin size={16} />

                    Nigeria
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <p className="line-clamp-3 leading-7 text-slate-600">
                  {city.description}
                </p>

                {/* Stats */}

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
                      <Building2 size={18} />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-slate-900">
                        {city.apartments.toLocaleString()}
                      </p>

                      <span className="text-sm text-slate-500">
                        Apartments
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-blue-600">
                    Explore

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Tags */}

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Luxury
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Short Stay
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Verified
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}