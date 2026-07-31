


"use client";

import Hero from "@/components/apartments/Hero";
import { SearchBar } from "@/components/apartments/SearchBar";
import ListingsSection from "@/components/apartments/Listings/ListingsSection";

export default function ApartmentsPage() {
  return (
    <>
      <Hero />

      <SearchBar />

      <ListingsSection />
    </>
  );
}