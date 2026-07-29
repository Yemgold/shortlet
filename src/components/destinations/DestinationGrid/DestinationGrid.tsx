


"use client";

import { useMemo, useState } from "react";

import { destinations } from "@/data";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import DestinationCard from "./DestinationCard";
import EmptyState from "../EmptyState";

interface DestinationGridProps {
  search?: string;
  category?: string;
}

export default function DestinationGrid({
  search = "",
  category = "all",
}: DestinationGridProps) {
  const [visible, setVisible] = useState(8);

  const filteredDestinations = useMemo(() => {
    let result = [...destinations];

    // Search
    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter(
        (city) =>
          city.name.toLowerCase().includes(keyword) ||
          city.description.toLowerCase().includes(keyword)
      );
    }

    // Category filtering (future-ready)
    if (category !== "all") {
      result = result.filter(
        (city: any) => city.category === category
      );
    }

    return result;
  }, [search, category]);

  if (!filteredDestinations.length) {
    return <EmptyState />;
  }

  return (
    <Section className="pt-10">
      <Container>
        {/* Header */}

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Explore Destinations
            </h2>

            <p className="mt-2 text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredDestinations.length}
              </span>{" "}
              destination
              {filteredDestinations.length > 1 && "s"}
            </p>
          </div>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredDestinations
            .slice(0, visible)
            .map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
        </div>

        {/* Load More */}

        {visible < filteredDestinations.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisible((prev) => prev + 6)}
              className="
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Load More Destinations
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}