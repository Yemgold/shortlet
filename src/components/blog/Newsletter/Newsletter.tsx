

"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

import  Button  from "@/components/ui/Button";
import  Input  from "@/components/ui/Input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] =
    useState(false);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!email.trim()) return;

    // TODO:
    // Replace with backend API call

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_45%)]" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl md:p-16"
        >
          {/* Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
            <Mail
              size={34}
              className="text-white"
            />
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
            Stay Inspired
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Get luxury travel ideas,
            exclusive apartment offers,
            staycation inspiration,
            and expert travel tips delivered
            straight to your inbox.
          </p>

          {/* Form */}

          {!subscribed ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                leftIcon={
                  <Mail className="h-5 w-5" />
                }
                className="flex-1"
              />

              <Button
                type="submit"
                size="lg"
                className="md:px-10"
              >
                Subscribe

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="mt-10 flex items-center justify-center gap-3 text-lg font-semibold text-green-400"
            >
              <CheckCircle2 size={24} />

              Subscription successful!
            </motion.div>
          )}

          {/* Benefits */}

          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-white">
                Weekly Travel Guides
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Discover new destinations
                and luxury experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-white">
                Exclusive Deals
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Receive early access to
                special discounts and offers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-white">
                Luxury Living Tips
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Learn how to enjoy premium
                travel and accommodation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}