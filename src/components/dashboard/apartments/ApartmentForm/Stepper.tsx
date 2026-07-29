

"use client";

import { Check } from "lucide-react";

const steps = [
  "Basic Info",
  "Location",
  "Pricing",
  "Amenities",
  "Images",
  "Review",
];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({
  currentStep,
}: StepperProps) {
  return (
    <div className="w-full">
      {/* Desktop */}

      <div className="hidden md:flex items-center">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              {/* Step */}

              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    text-sm
                    font-bold
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-green-600 bg-green-600 text-white"
                        : active
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white text-slate-500"
                    }
                  `}
                >
                  {completed ? (
                    <Check size={18} />
                  ) : (
                    index + 1
                  )}
                </div>

                <span
                  className={`
                    mt-3
                    text-sm
                    font-medium
                    whitespace-nowrap

                    ${
                      active
                        ? "text-blue-600"
                        : completed
                        ? "text-green-600"
                        : "text-slate-500"
                    }
                  `}
                >
                  {step}
                </span>
              </div>

              {/* Connector */}

              {index < steps.length - 1 && (
                <div
                  className={`
                    mx-4
                    h-1
                    flex-1
                    rounded-full
                    transition-all

                    ${
                      completed
                        ? "bg-green-600"
                        : "bg-slate-200"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}

      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-blue-600">
            Step {currentStep + 1} of {steps.length}
          </span>

          <span className="text-sm text-slate-500">
            {Math.round(
              ((currentStep + 1) / steps.length) *
                100
            )}
            %
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-blue-600 transition-all duration-300"
            style={{
              width: `${
                ((currentStep + 1) /
                  steps.length) *
                100
              }%`,
            }}
          />
        </div>

        <p className="mt-3 text-center font-semibold text-slate-700">
          {steps[currentStep]}
        </p>
      </div>
    </div>
  );
}