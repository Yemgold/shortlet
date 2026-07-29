

"use client";

import { useParams } from "next/navigation";

import { useApartment } from "@/hooks/apartment/useApartment";

import ApartmentDetails from "@/components/dashboard/apartments/ViewApartment";


export default function ViewApartmentPage() {
  const params = useParams();

  const id = params.id as string;

  const {
    data: apartment,
    isLoading,
    isError,
  } = useApartment(id);

  if (isLoading) {
    return (
      <div className="p-10 text-center">
        Loading apartment...
      </div>
    );
  }

  if (isError || !apartment) {
    return (
      <div className="p-10 text-center text-red-600">
        Apartment not found.
      </div>
    );
  }

  return (
    <ApartmentDetails apartment={apartment} />
  );
}