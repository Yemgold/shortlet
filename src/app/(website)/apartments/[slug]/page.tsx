





"use client";

import { useParams } from "next/navigation";

import { useApartmentBySlug } from "@/hooks/apartment/useApartmentBySlug";

export default function ApartmentPage() {
  const { slug } = useParams<{
    slug: string;
  }>();

  const {
    data: apartment,
    isLoading,
    isError,
  } = useApartmentBySlug(slug);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !apartment) {
    return <div>Apartment not found.</div>;
  }

  return (
    <div>
      <h1>{apartment.name}</h1>

      <p>{apartment.description}</p>
    </div>
  );
}