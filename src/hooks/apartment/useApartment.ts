


"use client";

import { useQuery } from "@tanstack/react-query";

import { getApartmentById } from "@/services/apartment.service";

export function useApartment(id?: string) {
  return useQuery({
    queryKey: ["apartment", id],

    queryFn: () => {
      if (!id) {
        throw new Error("Apartment ID is required");
      }

      return getApartmentById(id);
    },

    enabled: !!id,

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 30,

    retry: 1,
  });
}


