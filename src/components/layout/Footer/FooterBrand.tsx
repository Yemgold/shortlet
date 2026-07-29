


"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function FooterBrand() {
  const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "#",
    label: "X",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
];

  return (
    <div>
      {/* Logo */}

      <Link
        href="/"
        className="inline-flex items-center gap-4"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
          <Building2
            size={28}
            className="text-white"
          />
        </div>

        <div>
          <h2 className="text-2xl font-black tracking-tight">
            RH Luxury Homes
          </h2>

          <p className="text-sm text-slate-400">
            Premium Shortlet Apartments
          </p>
        </div>
      </Link>

      {/* Description */}

      <p className="mt-8 max-w-md text-base leading-8 text-slate-400">
        Discover beautifully furnished
        luxury apartments designed for
        business travellers, vacationers,
        families, and anyone seeking
        comfort, elegance, and an
        unforgettable stay.
      </p>

      {/* Contact */}

      <div className="mt-10 space-y-5">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-slate-900 p-3">
            <MapPin
              size={18}
              className="text-blue-400"
            />
          </div>

          <div>
            <h4 className="font-semibold">
              Office Address
            </h4>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Victoria Island,
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-slate-900 p-3">
            <Phone
              size={18}
              className="text-blue-400"
            />
          </div>

          <a
            href="tel:+2348000000000"
            className="text-slate-300 transition hover:text-white"
          >
            +234 800 000 0000
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-slate-900 p-3">
            <Mail
              size={18}
              className="text-blue-400"
            />
          </div>

          <a
            href="mailto:info@rhluxuryhomes.com"
            className="text-slate-300 transition hover:text-white"
          >
            info@rhluxuryhomes.com
          </a>
        </div>
      </div>

      {/* Social */}

      <div className="mt-10">
        <h4 className="mb-5 font-semibold">
          Follow Us
        </h4>

        <div className="flex gap-4">
          {socialLinks.map(
            (
              {
                icon: Icon,
                href,
                label,
              },
              index
            ) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Icon size={20} />
              </motion.a>
            )
          )}
        </div>
      </div>

      {/* Trust Badges */}

      <div className="mt-12 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="text-3xl font-black text-white">
            4.9★
          </h4>

          <p className="mt-2 text-sm text-slate-400">
            Guest Rating
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="text-3xl font-black text-white">
            12K+
          </h4>

          <p className="mt-2 text-sm text-slate-400">
            Happy Guests
          </p>
        </div>
      </div>
    </div>
  );
}