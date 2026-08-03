
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Receipt,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface PaymentSuccessPageProps {
  searchParams: Promise<{
    reference?: string;
  }>;
}

export default async function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const { reference } = await searchParams;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            w-full
            max-w-2xl
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-10
            shadow-xl
          "
        >
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2
                size={60}
                className="text-green-600"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Payment Successful 🎉
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Thank you for choosing RH Luxury Homes.
              Your payment has been verified and your
              reservation has been confirmed.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-green-300 bg-green-50 p-6">
            <div className="flex items-center gap-3">
              <Receipt className="text-green-600" />
              <span className="font-semibold text-slate-700">
                Payment Reference
              </span>
            </div>

            <p className="mt-3 break-all font-mono text-green-700">
              {reference ?? "N/A"}
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-100 p-6">
            <h2 className="mb-4 text-lg font-semibold">
              What happens next?
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>✅ Your booking has been confirmed.</li>
              <li>✅ A confirmation email will be sent to you.</li>
              <li>✅ Our team may contact you with check-in instructions.</li>
              <li>✅ Keep your payment reference for future enquiries.</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="flex-1">
              <Button className="w-full">
                <Home size={18} className="mr-2" />
                Back to Home
              </Button>
            </Link>

            <Link href="/apartments" className="flex-1">
              <Button
                variant="outline"
                className="w-full"
              >
                Browse Apartments
                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}