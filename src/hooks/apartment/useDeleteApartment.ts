

"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  deleteApartment,
  type DeleteApartmentResponse,
} from "@/services/apartment.service";

import { useAuthStore } from "@/store/authStore";

interface ApiError {
  success: boolean;
  message: string;
}

export function useDeleteApartment() {
  const queryClient = useQueryClient();

  return useMutation<
    DeleteApartmentResponse,
    AxiosError<ApiError>,
    string
  >({
    mutationFn: (id: string) => deleteApartment(id),

    

    onSuccess: (response, id) => {
      console.log("Apartment deleted:", id);

      console.log(
    "Mutation token:",
    useAuthStore.getState().accessToken
  );

      // Refresh apartment lists
      queryClient.invalidateQueries({
        queryKey: ["apartments"],
      });

      // Refresh dashboard statistics if applicable
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });

      console.log(response.message);
    },

    onError: (error) => {
      console.error(
        error.response?.data?.message ??
          "Failed to delete apartment."
      );
    },
  });
}