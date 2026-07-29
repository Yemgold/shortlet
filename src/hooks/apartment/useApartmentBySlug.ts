




"use client";

import { useQuery } from "@tanstack/react-query";

import { getApartmentBySlug } from "@/services/apartment.service";

export function useApartmentBySlug(
  slug: string
) {
  return useQuery({
    queryKey: ["apartment", slug],
    queryFn: () => getApartmentBySlug(slug),
    enabled: !!slug,
  });
}

