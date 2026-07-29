



"use client";

import Button from "@/components/ui/Button";

interface NavigationProps {
  currentStep: number;

  totalSteps: number;

  isSubmitting?: boolean;

  submitText?: string;

  loadingText?: string;

  onPrevious: () => void;

  onNext: () => void;
}

export default function Navigation({
  currentStep,
  totalSteps,
  isSubmitting = false,

  submitText = "Publish Apartment",

  loadingText = "Publishing...",

  onPrevious,
  onNext,
}: NavigationProps) {
  const isFirstStep = currentStep === 0;

  const isLastStep =
    currentStep === totalSteps - 1;

  return (
    <div
      className="
        mt-8
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        disabled={
          isFirstStep || isSubmitting
        }
      >
        Previous
      </Button>

      <div className="flex items-center gap-3">
        {!isLastStep ? (
          <Button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
          >
            Next
          </Button>
        ) : (
          <Button
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? loadingText
              : submitText}
          </Button>
        )}
      </div>
    </div>
  );
}