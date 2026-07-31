



"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { useApartmentBySlug } from "@/hooks/apartment/useApartmentBySlug";
import { useCheckAvailability } from "@/hooks/apartment/useCheckAvailability";

import ApartmentGallery from "@/components/booking/ApartmentGallery";
import ApartmentInfo from "@/components/booking/ApartmentInfo";
import ApartmentLocation from "@/components/booking/ApartmentLocation";
import ApartmentMeta from "@/components/booking/ApartmentMeta";
import ApartmentAmenities from "@/components/booking/ApartmentAmenities";
import BookingSidebar from "@/components/booking/BookingSidebar";
import BookingPolicies from "@/components/booking/BookingPolicies";
import BookingContact from "@/components/booking/BookingContact";

import type { CheckAvailabilityPayload } from "@/services/booking.service";

import CheckAvailabilityDrawer, {
  type AvailabilityData,
} from "@/components/booking/CheckAvailability/CheckAvailabilityDrawer";

export default function ApartmentPage() {
  const { slug } = useParams<{
    slug: string;
  }>();

  const {
    data: apartment,
    isLoading,
    isError,
  } = useApartmentBySlug(slug);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const [availability, setAvailability] =
    useState<AvailabilityData | null>(
      null
    );

  const {
    mutateAsync: checkAvailability,
    isPending,
  } = useCheckAvailability();



async function handleCheckAvailability(
  payload: CheckAvailabilityPayload
) {
  const response = await checkAvailability(payload);

  setAvailability(response);

  return response;
}

  if (isLoading) {
    return (
      <Section className="py-20">
        <Container>
          <p>Loading apartment...</p>
        </Container>
      </Section>
    );
  }

  if (isError || !apartment) {
    notFound();
  }

  return (
    <>
      <Section className="py-14">
  <Container>
    <div className="mx-auto max-w-6xl space-y-10">

      <ApartmentGallery
        media={apartment.media}
        title={apartment.name}
      />

      <ApartmentInfo
        title={apartment.name}
        location={apartment.location}
        price={apartment.pricePerNight}
        bedrooms={apartment.bedrooms}
        bathrooms={apartment.bathrooms}
        guests={apartment.guests}
        amenities={apartment.amenities}
        onCheckAvailability={() =>
          setDrawerOpen(true)
        }
      />

      <ApartmentLocation
        location={apartment.location}
      />

      <ApartmentMeta
        apartment={apartment}
      />

      <ApartmentAmenities
        amenities={apartment.amenities}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <BookingPolicies />

        <BookingContact />
      </div>

    </div>
  </Container>
</Section>

      <CheckAvailabilityDrawer
        open={drawerOpen}
        apartment={apartment}
        loading={isPending}
        availability={availability}
        onOpenChange={setDrawerOpen}
        onCheckAvailability={
          handleCheckAvailability
        }
      />
    </>
  );
}








