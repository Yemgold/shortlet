


"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Apartments",
        href: "/apartments",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },

  {
    title: "Apartments",
    links: [
      {
        label: "Studio Apartments",
        href: "/apartments?type=studio",
      },
      {
        label: "One Bedroom",
        href: "/apartments?type=one-bedroom",
      },
      {
        label: "Two Bedrooms",
        href: "/apartments?type=two-bedroom",
      },
      {
        label: "Luxury Villas",
        href: "/apartments?type=villa",
      },
      {
        label: "Penthouses",
        href: "/apartments?type=penthouse",
      },
    ],
  },

  {
    title: "Locations",
    links: [
      {
        label: "Victoria Island",
        href: "/apartments?location=victoria-island",
      },
      {
        label: "Lekki",
        href: "/apartments?location=lekki",
      },
      {
        label: "Ikoyi",
        href: "/apartments?location=ikoyi",
      },
      {
        label: "Abuja",
        href: "/apartments?location=abuja",
      },
      {
        label: "Port Harcourt",
        href: "/apartments?location=port-harcourt",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        label: "Help Centre",
        href: "/help",
      },
      {
        label: "FAQs",
        href: "/faq",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Terms & Conditions",
        href: "/terms",
      },
      {
        label: "Cancellation Policy",
        href: "/cancellation-policy",
      },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
      {footerSections.map(
        (section, sectionIndex) => (
          <motion.div
            key={section.title}
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
              delay: sectionIndex * 0.08,
              duration: 0.45,
            }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">
              {section.title}
            </h3>

            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )
      )}
    </div>
  );
}