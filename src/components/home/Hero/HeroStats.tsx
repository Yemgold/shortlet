



"use client";

import { Home, Star, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Home,
    value: "1,500+",
    label: "Luxury Homes",
  },
  {
    icon: Users,
    value: "25K+",
    label: "Happy Guests",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Guest Rating",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/10
              p-5
              backdrop-blur-xl
            "
          >
            <Icon className="mb-3 h-6 w-6 text-yellow-400" />

            <h3 className="text-2xl font-bold text-white">
              {item.value}
            </h3>

            <p className="text-sm text-slate-300">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}