



"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import ApartmentGrid from "./ApartmentGrid";
import CategoryFilter from "./CategoryFilter";
import FeaturedHeader from "./FeaturedHeader";

import { apartments } from "@/data";

export default function FeaturedApartments() {
  const [category, setCategory] =
    useState("All");

  const filtered = useMemo(() => {
    if (category === "All")
      return apartments;

    return apartments.filter(
      (item) =>
        item.propertyType === category
    );
  }, [category]);

  return (
    <Section>
      <Container>
        <FeaturedHeader />

        <CategoryFilter
          active={category}
          onChange={setCategory}
        />

        <ApartmentGrid
          apartments={filtered}
        />
      </Container>
    </Section>
  );
}