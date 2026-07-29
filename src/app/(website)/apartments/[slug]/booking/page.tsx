



"use client";

import { notFound, useParams } from "next/navigation";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { useApartmentBySlug } from "@/hooks/apartment/useApartmentBySlug";

import ApartmentGallery from "@/components/booking/ApartmentGallery";
import ApartmentInfo from "@/components/booking/ApartmentInfo";
import ApartmentLocation from "@/components/booking/ApartmentLocation";
import ApartmentMeta from "@/components/booking/ApartmentMeta";
import ApartmentAmenities from "@/components/booking/ApartmentAmenities";
import BookingSidebar from "@/components/booking/BookingSidebar";
import BookingPolicies from "@/components/booking/BookingPolicies";
import BookingContact from "@/components/booking/BookingContact";

export default function BookingPage() {
  const { slug } = useParams<{
    slug: string;
  }>();

  const {
    data: apartment,
    isLoading,
    isError,
  } = useApartmentBySlug(slug);

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
    <Section className="py-14">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.7fr_500px]">
          {/* Left */}
          <div className="space-y-10">
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
            />

            <ApartmentLocation
              location={apartment.location}
            />

            <ApartmentMeta apartment={apartment} />

            <ApartmentAmenities
              amenities={apartment.amenities}
            />

            <BookingPolicies />

            <BookingContact />
          </div>

          {/* Right */}
          <BookingSidebar apartment={apartment} />
        </div>
      </Container>
    </Section>
  );
}