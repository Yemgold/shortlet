


"use client";

import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl">
      <Sparkles
        size={18}
        className="text-yellow-400"
      />

      Premium Short-Let Experience
    </div>
  );
}