



"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  BellRing,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

type NewsletterFormData = z.infer<
  typeof newsletterSchema
>;

export default function FooterNewsletter() {
  const [subscribed, setSubscribed] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(
      newsletterSchema
    ),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (
    data: NewsletterFormData
  ) => {
    try {
      setLoading(true);

      console.log(data);

      /**
       * TODO
       *
       * await newsletterMutation.mutateAsync(data)
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setSubscribed(true);

      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left */}

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-400">
          <BellRing size={16} />
          Newsletter
        </div>

        <h2 className="mt-6 text-4xl font-black leading-tight text-white">
          Stay Updated With Luxury Living
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          Subscribe to receive exclusive
          offers, travel inspiration,
          apartment launches, and special
          discounts available only to our
          subscribers.
        </p>

        {/* Features */}

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <Sparkles
              size={22}
              className="text-blue-400"
            />

            <span className="text-sm font-medium">
              Exclusive Offers
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <ShieldCheck
              size={22}
              className="text-green-400"
            />

            <span className="text-sm font-medium">
              No Spam
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <CheckCircle2
              size={22}
              className="text-amber-400"
            />

            <span className="text-sm font-medium">
              Weekly Updates
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right */}

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      >
        {subscribed ? (
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600/10">
              <CheckCircle2
                size={42}
                className="text-green-500"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              You're Subscribed!
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Thank you for joining our
              newsletter. Watch your inbox
              for exclusive luxury offers.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white">
              Subscribe Now
            </h3>

            <p className="mt-3 text-slate-400">
              Enter your email address
              below.
            </p>

            <form
              onSubmit={handleSubmit(
                onSubmit
              )}
              className="mt-8 space-y-5"
            >
              <Input
                label="Email Address"
                placeholder="you@example.com"
                type="email"
                autoComplete="email"
                error={
                  errors.email?.message
                }
                {...register("email")}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading
                  ? "Subscribing..."
                  : "Subscribe"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              By subscribing you agree to
              receive marketing emails.
              You can unsubscribe anytime.
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}