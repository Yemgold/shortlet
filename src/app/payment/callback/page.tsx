




"use client";

import { Suspense } from "react";
import PaymentCallbackContent from "./PaymentCallbackContent";

function LoadingFallback() {
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

export default function PaymentCallbackPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PaymentCallbackContent />
    </Suspense>
  );
}