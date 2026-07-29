




"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  CreditCard,
  Heart,
  ShieldCheck,
} from "lucide-react";

export default function FooterBottom() {
  const legalLinks = [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Cookies",
      href: "/cookies",
    },
    {
      label: "Sitemap",
      href: "/sitemap",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
      className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Left */}

      <div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            RH Luxury Homes
          </span>
          . All rights reserved.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <Heart
              size={15}
              className="text-red-500"
            />
            Made in Nigeria
          </span>

          <span className="inline-flex items-center gap-2">
            <ShieldCheck
              size={15}
              className="text-green-500"
            />
            Secure Booking
          </span>

          <span className="inline-flex items-center gap-2">
            <CreditCard
              size={15}
              className="text-blue-500"
            />
            Secure Payments
          </span>
        </div>
      </div>

      {/* Center */}

      <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {legalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right */}

      <div className="text-right">
        <p className="text-sm text-slate-500">
          Trusted by thousands of guests
        </p>

        <div className="mt-2 flex items-center justify-end gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-5 w-5 fill-yellow-400"
              viewBox="0 0 20 20"
            >
              <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
            </svg>
          ))}

          <span className="ml-2 text-sm font-semibold text-white">
            4.9/5
          </span>
        </div>
      </div>
    </motion.div>
  );
}