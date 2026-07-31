


"use client";

import { useMutation } from "@tanstack/react-query";

import {
  bookingService,
  type CreateBookingPayload,
} from "@/services/booking.service";

export function useCreateBooking() {
  return useMutation({
    mutationFn: (
      payload: CreateBookingPayload
    ) => bookingService.createBooking(payload),
  });
}