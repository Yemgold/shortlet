



"use client";

import { useState } from "react";
import {
  Building2,
  Landmark,
  Trees,
  Waves,
  Briefcase,
  Mountain,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const categories = [
  {
    id: "all",
    title: "All Destinations",
    icon: Building2,
    count: 24,
  },
  {
    id: "business",
    title: "Business Hubs",
    icon: Briefcase,
    count: 8,
  },
  {
    id: "luxury",
    title: "Luxury Living",
    icon: Landmark,
    count: 6,
  },
  {
    id: "beach",
    title: "Beach Cities",
    icon: Waves,
    count: 5,
  },
  {
    id: "nature",
    title: "Nature Escapes",
    icon: Trees,
    count: 4,
  },
  {
    id: "highlands",
    title: "Highlands",
    icon: Mountain,
    count: 3,
  },
];

interface CategorySectionProps {
  onCategoryChange?: (category: string) => void;
}

export default function CategorySection({
  onCategoryChange,
}: CategorySectionProps) {
  const [active, setActive] = useState("all");

  const handleSelect = (category: string) => {
    setActive(category);
    onCategoryChange?.(category);
  };

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            EXPLORE BY CATEGORY
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Choose Your Perfect Destination
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you're travelling for business, vacation,
            family holidays or luxury experiences, we've curated
            the best destinations across Nigeria.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            const activeCard = active === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleSelect(category.id)}
                className={`
                  group
                  rounded-3xl
                  border
                  p-6
                  text-center
                  transition-all
                  duration-300
                  ${
                    activeCard
                      ? "border-blue-600 bg-blue-600 text-white shadow-xl"
                      : "border-slate-200 bg-white hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                  }
                `}
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
                    transition-all
                    ${
                      activeCard
                        ? "bg-white text-blue-600"
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }
                  `}
                >
                  <Icon size={30} />
                </div>

                <h3
                  className={`mt-6 text-lg font-bold ${
                    activeCard
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {category.title}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    activeCard
                      ? "text-white/80"
                      : "text-slate-500"
                  }`}
                >
                  {category.count} Destinations
                </p>
              </button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}