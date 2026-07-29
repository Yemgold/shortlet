


"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { createApartment } from "@/services/apartment.service";

import type { ApartmentFormValues } from "@/schemas/apartment.schema";
import type { CreateApartmentResponse } from "@/types/apartment";

export function useCreateApartment() {
  const queryClient = useQueryClient();

  return useMutation<
    CreateApartmentResponse,
    Error,
    ApartmentFormValues
  >({
    mutationFn: createApartment,

    onSuccess(response) {
      queryClient.invalidateQueries({
        queryKey: ["apartments"],
      });

      console.log(
        "Apartment created successfully",
        response
      );
    },

    onError(error) {
      if (axios.isAxiosError(error)) {
        console.error(
          error.response?.data?.message ??
            error.message
        );
      } else {
        console.error(error.message);
      }
    },
  });
}