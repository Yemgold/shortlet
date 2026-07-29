


"use client";

import { useState } from "react";

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

import { useCreateApartment } from "@/hooks/apartment/useCreateApartment";

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
    fields: [
      "amenities",
    ] as const,
  },

  {
    title: "Images",
    component: ImagesStep,
    fields: [
      "files",
    ] as const,
  },

  {
    title: "Review",
    component: ReviewStep,
    fields: [] as const,
  },
];

export default function CreateApartmentForm() {
  const [currentStep, setCurrentStep] =
    useState(0);

  const methods =
    useForm<ApartmentFormValues>({
      resolver: zodResolver(apartmentSchema ) as any,
      
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

  const createApartment =
    useCreateApartment();

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
    createApartment.mutate(values, {
      onSuccess() {
        methods.reset();

        setCurrentStep(0);
      },
    });
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          onSubmit
        )}
        className="space-y-8"
      >
        <FormHeader />

        <Stepper
          currentStep={currentStep}
        />

        <div
          className="
            grid
            gap-8
            xl:grid-cols-[1fr_380px]
          "
        >
          {/* Form */}

          <div className="space-y-8">
            <CurrentStep />

            <Navigation
              currentStep={currentStep}
              totalSteps={
                STEPS.length
              }
              isSubmitting={
                createApartment.isPending
              }
              onNext={nextStep}
              onPrevious={
                previousStep
              }
            />
          </div>

          {/* Preview */}

          <div className="hidden xl:block">
            <LivePreview />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}