



"use client";

import {
  useQuery,
} from "@tanstack/react-query";

import {
  getApartments,
} from "@/services/apartment.service";

import type {
  ApartmentFilters,
} from "@/types/apartment";


export function useApartments(
  filters?: ApartmentFilters
) {

  return useQuery({

    queryKey: [
      "apartments",
      filters,
    ],


    queryFn: () =>
      getApartments(filters),


    staleTime:
      1000 * 60 * 5,


    gcTime:
      1000 * 60 * 30,


    retry: 1,

  });

}