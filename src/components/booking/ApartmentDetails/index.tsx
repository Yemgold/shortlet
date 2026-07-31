



"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import type { Apartment } from "@/types/apartment";

import { useCheckAvailability } from "@/hooks/apartment/useCheckAvailability"; 

import ApartmentGallery from "@/components/booking/ApartmentGallery";
import ApartmentInfo from "@/components/booking/ApartmentInfo";
import ApartmentLocation from "@/components/booking/ApartmentLocation";
import ApartmentMeta from "@/components/booking/ApartmentMeta";
import ApartmentAmenities from "@/components/booking/ApartmentAmenities";
import BookingSidebar from "@/components/booking/BookingSidebar";
import BookingPolicies from "@/components/booking/BookingPolicies";
import BookingContact from "@/components/booking/BookingContact";

import CheckAvailabilityDrawer, {
  type AvailabilityData,
} from "@/components/booking/CheckAvailability/CheckAvailabilityDrawer";

interface ApartmentDetailsProps {
  apartment: Apartment;
}

export default function ApartmentDetails({
  apartment,
}: ApartmentDetailsProps) {
  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const {
  mutateAsync: checkAvailability,
  isPending,
} = useCheckAvailability();

  const [availability, setAvailability] =
    useState<AvailabilityData | null>(
      null
    );

  
async function handleCheckAvailability(payload: {
  apartmentId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
})
{

  const response =
    await checkAvailability(
      payload
    );


  setAvailability(response);


  return response;
}
console.log("drawerOpen =", drawerOpen);
  return (
    <>
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
                price={
                  apartment.pricePerNight
                }
                bedrooms={
                  apartment.bedrooms
                }
                bathrooms={
                  apartment.bathrooms
                }
                guests={apartment.guests}
                amenities={
                  apartment.amenities
                }

                onCheckAvailability={() => {
  console.log("Opening drawer...");
  setDrawerOpen(true);
}}

// onCheckAvailability={() => {
//   console.log("Opening drawer...");
//   alert("Opening Drawer");
//   setDrawerOpen(true);
// }}


              />

              <ApartmentLocation
                location={
                  apartment.location
                }
              />

              <ApartmentMeta
                apartment={apartment}
              />

              <ApartmentAmenities
                amenities={
                  apartment.amenities
                }
              />

              <BookingPolicies />

              <BookingContact />
            </div>

            {/* Right */}
            <BookingSidebar
              apartment={apartment}
            />
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