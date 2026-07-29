



"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  Plus,
  X,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface AmenitiesInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

const SUGGESTED_AMENITIES = [
  "WiFi",
  "Air Conditioning",
  "Smart TV",
  "Netflix",
  "Kitchen",
  "Refrigerator",
  "Microwave",
  "Washing Machine",
  "Swimming Pool",
  "Gym",
  "Parking",
  "24/7 Electricity",
  "Backup Generator",
  "Water Heater",
  "Security",
  "Balcony",
  "Workspace",
  "Elevator",
  "Garden",
  "Housekeeping",
];

export default function AmenitiesInput({
  value,
  onChange,
  error,
}: AmenitiesInputProps) {
  const [input, setInput] =
    useState("");

  const addAmenity = (
    amenity: string
  ) => {
    const formatted =
      amenity.trim();

    if (!formatted) return;

    const exists = value.some(
      (item) =>
        item.toLowerCase() ===
        formatted.toLowerCase()
    );

    if (exists) return;

    onChange([
      ...value,
      formatted,
    ]);

    setInput("");
  };

  const removeAmenity = (
    amenity: string
  ) => {
    onChange(
      value.filter(
        (item) =>
          item !== amenity
      )
    );
  };

  const availableSuggestions =
    SUGGESTED_AMENITIES.filter(
      (item) =>
        !value.includes(item)
    );

  return (
    <div className="space-y-5">
      <div>
        <Input
          label="Amenities"
          placeholder="e.g. WiFi"
          value={input}
          onChange={(e) =>
            setInput(
              e.target.value
            )
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter"
            ) {
              e.preventDefault();

              addAmenity(
                input
              );
            }
          }}
          error={error}
        />

        <Button
          type="button"
          variant="secondary"
          onClick={() =>
            addAmenity(
              input
            )
          }
          className="mt-3"
        >
          <Plus
            size={16}
          />

          Add Amenity
        </Button>
      </div>

      {/* Selected Amenities */}

      {value.length > 0 && (
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-900">
            Selected Amenities
          </h4>

          <div className="flex flex-wrap gap-3">
            <AnimatePresence>
              {value.map(
                (
                  amenity
                ) => (
                  <motion.div
                    key={
                      amenity
                    }
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-blue-50
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-blue-700
                    "
                  >
                    {
                      amenity
                    }

                    <button
                      type="button"
                      onClick={() =>
                        removeAmenity(
                          amenity
                        )
                      }
                      className="
                        rounded-full
                        p-0.5
                        transition
                        hover:bg-blue-100
                      "
                    >
                      <X
                        size={
                          14
                        }
                      />
                    </button>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Suggestions */}

      {availableSuggestions.length >
        0 && (
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Sparkles
              size={16}
              className="text-amber-500"
            />

            <h4 className="text-sm font-semibold text-slate-900">
              Suggested Amenities
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {availableSuggestions.map(
              (
                amenity
              ) => (
                <button
                  key={
                    amenity
                  }
                  type="button"
                  onClick={() =>
                    addAmenity(
                      amenity
                    )
                  }
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-3
                    py-2
                    text-sm
                    text-slate-700
                    transition
                    hover:border-blue-500
                    hover:bg-blue-50
                    hover:text-blue-700
                  "
                >
                  +{" "}
                  {
                    amenity
                  }
                </button>
              )
            )}
          </div>
        </div>
      )}

      <p className="text-xs text-slate-500">
        Press{" "}
        <strong>
          Enter
        </strong>{" "}
        or click{" "}
        <strong>
          Add Amenity
        </strong>{" "}
        to include a custom
        amenity.
      </p>
    </div>
  );
}