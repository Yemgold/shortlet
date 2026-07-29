



// "use client";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// import { updateApartment } from "@/services/apartment.service";

// import type {
//   CreateApartmentPayload,
//   CreateApartmentResponse,
// } from "@/types/apartment";

// interface UpdateApartmentVariables {
//   id: string;
//   payload: CreateApartmentPayload;
// }

// export function useUpdateApartment() {
//   const queryClient = useQueryClient();

//   return useMutation<
//     CreateApartmentResponse,
//     Error,
//     UpdateApartmentVariables
//   >({
//     mutationFn: ({ id, payload }) => {
//   console.log("Mutation id:", id);

//   return updateApartment(id, payload);
// },

//     onSuccess: (_, variables) => {
//       /**
//        * Refresh apartment list
//        */
//       queryClient.invalidateQueries({
//         queryKey: ["apartments"],
//       });

//       /**
//        * Refresh the updated apartment
//        */
//       queryClient.invalidateQueries({
//         queryKey: [
//           "apartment",
//           variables.id,
//         ],
//       });

//       console.log(
//         "Apartment updated successfully."
//       );
//     },

//     onError: (error) => {
//       if (axios.isAxiosError(error)) {
//         console.error(
//           error.response?.data?.message ??
//             error.message
//         );
//       } else {
//         console.error(error.message);
//       }
//     },
//   });
// }





"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

import { updateApartment } from "@/services/apartment.service";

import type {
  CreateApartmentPayload,
  CreateApartmentResponse,
} from "@/types/apartment";

interface UpdateApartmentVariables {
  id: string;
  payload: CreateApartmentPayload;
}

export function useUpdateApartment() {
  const queryClient = useQueryClient();

  return useMutation<
    CreateApartmentResponse,
    Error,
    UpdateApartmentVariables
  >({
    mutationFn: ({ id, payload }) =>
      updateApartment(id, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["apartments"],
      });

      queryClient.invalidateQueries({
        queryKey: ["apartment", variables.id],
      });

      toast.success("Apartment updated successfully.");
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ??
            "Failed to update apartment."
        );
      } else {
        toast.error(error.message);
      }
    },
  });
}