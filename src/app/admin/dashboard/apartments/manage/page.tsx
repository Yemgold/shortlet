


"use client";

import { Building2 } from "lucide-react";

import ManageApartments from "@/components/dashboard/apartments/ManageApartments";

export default function ManageApartmentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <div className="flex items-start gap-5">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
            "
          >
            <Building2
              size={32}
              className="text-primary"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Manage Apartments
            </h1>

            <p className="mt-2 max-w-2xl text-slate-500">
              View, search, filter, edit and delete apartment
              listings from your property portfolio.

              {/* backHref = "/admin/dashboard", */}

            </p>
          </div>
        </div>
      </div>

      {/* Apartment List */}

      <ManageApartments />
    </div>
  );
}