


"use client";

import { useMutation } from "@tanstack/react-query";

import { createBooking } from "@/services/apartment.service";
import { CreateBookingPayload,CreateBookingResponse } from "@/types/booking";


export function useCreateBooking() {
  return useMutation<
    CreateBookingResponse,
    Error,
    CreateBookingPayload
  >({
    mutationFn: createBooking,
  });
}