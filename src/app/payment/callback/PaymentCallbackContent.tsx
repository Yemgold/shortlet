



"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import api from "@/lib/axios";

export default function PaymentCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const reference = searchParams.get("reference");

    if (!reference) {
      router.replace("/booking/failed");
      return;
    }

    async function verifyPayment() {
      try {
        const response = await api.get(
          `/api/v1/bookings/verify-payment/${reference}`
        );

        if (response.data.success && response.data.data) {
          router.replace(
            `/booking/success?reference=${reference}`
          );
        } else {
          router.replace(
            `/booking/failed?reference=${reference}`
          );
        }
      } catch (error) {
        console.error(error);

        router.replace(
          `/booking/failed?reference=${reference}`
        );
      }
    }

    verifyPayment();
  }, [router, searchParams]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

        <h1 className="text-2xl font-bold">
          Verifying Payment...
        </h1>

        <p className="mt-2 text-slate-500">
          Please wait while we confirm your payment.
        </p>
      </div>
    </main>
  );
}