


"use client";

import {
  ShieldCheck,
  Star,
  Headphones,
} from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Verified Homes",
    description: "Quality checked apartments",
  },
  {
    icon: Star,
    title: "Top Rated",
    description: "Loved by guests",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always available",
  },
];

export default function TrustBadges() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {badges.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur"
          >
            <Icon className="h-7 w-7 text-blue-300" />

            <div>
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-white/70">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}