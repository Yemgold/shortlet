



"use client";

import ApartmentRow from "./ApartmentRow";

import type { Apartment } from "@/types/apartment";


interface ApartmentTableProps {
  apartments: Apartment[];
  onDelete: (id: string) => void;
}

export default function ApartmentTable({
  apartments,
  onDelete,

}: ApartmentTableProps) {
  if (apartments.length === 0) {
    return (
      <div
        className="
          flex
          h-72
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white
        "
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-900">
            No Apartments Found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Create your first apartment listing to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Apartment
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Location
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Price / Night
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Capacity
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Featured
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Availability
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-right
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {apartments.map((apartment) => (
              <ApartmentRow
                key={apartment._id}
                apartment={apartment}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}