


"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
        RH
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Rahannes
        </h2>

        <p className="-mt-1 text-xs text-slate-500">
          Luxury Homes
        </p>
      </div>
    </Link>
  );
}