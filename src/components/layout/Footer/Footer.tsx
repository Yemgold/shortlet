


"use client";

import { motion } from "framer-motion";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_45%)]" />

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Top */}

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
            className="grid gap-16 border-b border-slate-800 py-20 lg:grid-cols-[1.2fr_2fr]"
          >
            {/* Brand */}

            <FooterBrand />

            {/* Links */}

            <FooterLinks />
          </motion.div>

          {/* Newsletter */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.15,
            }}
            className="border-b border-slate-800 py-16"
          >
            <FooterNewsletter />
          </motion.div>

          {/* Bottom */}

          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}