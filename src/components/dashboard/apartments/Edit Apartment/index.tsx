

// src\components\dashboard\apartments\Edit Apartment\index.tsx

"use client";

import { useEffect, useState } from "react";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormHeader from "../ApartmentForm/FormHeader";
import Stepper from "../ApartmentForm/Stepper";
import Navigation from "../ApartmentForm/Navigation";
import LivePreview from "../ApartmentForm/LivePreview";

import BasicInfoStep from "../ApartmentForm/steps/BasicInfoStep";
import LocationStep from "../ApartmentForm/steps/LocationStep";
import PricingStep from "../ApartmentForm/steps/PricingStep";
import AmenitiesStep from "../ApartmentForm/steps/AmenitiesStep";
import ImagesStep from "../ApartmentForm/steps/ImagesStep";
import ReviewStep from "../ApartmentForm/steps/ReviewStep";

import {
  apartmentSchema,
  type ApartmentFormValues,
} from "@/schemas/apartment.schema";

import { useApartment } from "@/hooks/apartment/useApartment";
import { useUpdateApartment } from "@/hooks/apartment/useUpdateApartment";

interface EditApartmentProps {
  apartmentId: string;
}

const STEPS = [
  {
    title: "Basic Information",
    component: BasicInfoStep,
    fields: [
      "name",
      "description",
      "propertyType",
      "isFeatured",
    ] as const,
  },

  {
    title: "Location",
    component: LocationStep,
    fields: [
      "country",
      "state",
      "city",
      "area",
      "address",
      "landmark",
      "googleMapsUrl",
    ] as const,
  },

  {
    title: "Pricing",
    component: PricingStep,
    fields: [
      "pricePerNight",
      "cleaningFee",
      "securityDeposit",
      "discount",
      "bedrooms",
      "bathrooms",
      "guests",
      "totalUnits",
    ] as const,
  },

  {
    title: "Amenities",
    component: AmenitiesStep,
    fields: ["amenities"] as const,
  },

  {
    title: "Images",
    component: ImagesStep,
    fields: ["files"] as const,
  },

  {
    title: "Review",
    component: ReviewStep,
    fields: [] as const,
  },
];

export default function EditApartment({
  apartmentId,
}: EditApartmentProps) {

    console.log("EditApartment received:", apartmentId);

  const [currentStep, setCurrentStep] =
    useState(0);

  const {
    data: apartment,
    isLoading,
  } = useApartment(apartmentId);

  const updateApartment =
    useUpdateApartment();

  const methods =
    useForm<ApartmentFormValues>({
      resolver:
        zodResolver(
          apartmentSchema
        ) as any,

      mode: "onTouched",

      defaultValues: {
        files: [],

        name: "",
        description: "",
        propertyType: "",

        isFeatured: false,

        country: "Nigeria",
        state: "",
        city: "",
        area: "",
        address: "",
        landmark: "",
        googleMapsUrl: "",

        pricePerNight: 0,
        cleaningFee: 0,
        securityDeposit: 0,
        discount: 0,

        bedrooms: 1,
        bathrooms: 1,
        guests: 1,
        totalUnits: 1,

        amenities: [],
      },
    });

  useEffect(() => {
    if (!apartment) return;

    methods.reset({
      files: [],

      name: apartment.name,
      description:
        apartment.description,

      propertyType:
        apartment.propertyType,

      isFeatured:
        apartment.isFeatured,

      country: apartment.location.country,
      state: apartment.location.state,
      city: apartment.location.city,
      area: apartment.location.area,

      address: apartment.location.address,

      landmark:
        apartment.location.landmark,

      googleMapsUrl:
        apartment.location.googleMapsUrl,

      pricePerNight:
        apartment.pricePerNight,

      cleaningFee:
        apartment.cleaningFee,

      securityDeposit:
        apartment.securityDeposit,

      discount:
        apartment.discount,

      bedrooms:
        apartment.bedrooms,

      bathrooms:
        apartment.bathrooms,

      guests: apartment.guests,

      totalUnits:
        apartment.totalUnits,

      amenities:
        apartment.amenities,
    });
  }, [apartment, methods]);

  const CurrentStep =
    STEPS[currentStep].component;

  async function nextStep() {
    const valid =
      await methods.trigger(
        STEPS[currentStep].fields
      );

    if (!valid) return;

    setCurrentStep((step) =>
      Math.min(
        step + 1,
        STEPS.length - 1
      )
    );
  }

  function previousStep() {
    setCurrentStep((step) =>
      Math.max(step - 1, 0)
    );
  }

  function onSubmit(
    values: ApartmentFormValues
  ) {

    console.log("Submitting with id:", apartmentId);

    updateApartment.mutate({
      id: apartmentId,
      payload: values,
    });
  }

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading apartment...
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          onSubmit
        )}
        className="space-y-8"
      >
        <FormHeader
          title="Edit Apartment"
          subtitle="Update apartment information."
        />

        <Stepper
          currentStep={currentStep}
        />

        <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <CurrentStep />

            <Navigation
              currentStep={currentStep}
              totalSteps={
                STEPS.length
              }
              isSubmitting={
                updateApartment.isPending
              }
              submitText="Save Changes"
              onNext={nextStep}
              onPrevious={
                previousStep
              }
            />
          </div>

          <div className="hidden xl:block">
            <LivePreview />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}