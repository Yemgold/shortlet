




"use client";


import {
  useMutation,
} from "@tanstack/react-query";


import { bookingService, type CheckAvailabilityPayload,} from "@/services/booking.service";
  



export function useCheckAvailability(){

  return useMutation({

    mutationFn:
      (
        payload: CheckAvailabilityPayload
      ) =>
        bookingService.checkAvailability(
          payload
        ),

  });

}