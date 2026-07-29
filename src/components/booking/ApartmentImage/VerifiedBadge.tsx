



"use client";

import { ShieldCheck } from "lucide-react";

export default function VerifiedBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-emerald-600
        px-3
        py-2
        text-sm
        font-semibold
        text-white
        shadow-lg
      "
    >
      <ShieldCheck size={16} />

      Verified Host
    </div>
  );
}