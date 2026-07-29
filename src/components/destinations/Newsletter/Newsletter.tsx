



"use client";

import { Mail, Send, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Newsletter() {
  return (
    <Section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb22,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d422,transparent_35%)]" />

      <Container>
        <div className="relative z-10">
          <div
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-gradient-to-r
              from-slate-900
              via-slate-800
              to-slate-900
              px-8
              py-16
              shadow-2xl
              lg:px-16
            "
          >
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-400/30
                  bg-blue-500/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-blue-300
                "
              >
                <Sparkles size={16} />

                Stay Updated
              </div>

              {/* Heading */}

              <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
                Never Miss the Best Luxury Deals
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Subscribe to receive exclusive apartment offers,
                weekend getaway deals, travel inspiration, and new
                destination updates across Nigeria.
              </p>

              {/* Form */}

              <form
                className="
                  mx-auto
                  mt-12
                  flex
                  max-w-3xl
                  flex-col
                  gap-4
                  rounded-3xl
                  bg-white
                  p-4
                  shadow-2xl
                  md:flex-row
                "
              >
                <div className="relative flex-1">
                  <Mail
                    size={20}
                    className="
                      pointer-events-none
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-14 border-0 pl-14 shadow-none focus:ring-0"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-14 px-8"
                  rightIcon={<Send size={18} />}
                >
                  Subscribe
                </Button>
              </form>

              {/* Bottom */}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                <span>✓ Weekly travel inspiration</span>

                <span>✓ Exclusive discounts</span>

                <span>✓ New luxury apartments</span>

                <span>✓ No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}