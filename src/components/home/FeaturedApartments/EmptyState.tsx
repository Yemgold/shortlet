




"use client";

import { Home } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="py-24 text-center">
      <Home
        className="mx-auto text-slate-300"
        size={80}
      />

      <h3 className="mt-6 text-2xl font-bold">
        No Apartments Found
      </h3>

      <p className="mt-3 text-slate-500">
        Try changing your search filters.
      </p>
    </div>
  );
}