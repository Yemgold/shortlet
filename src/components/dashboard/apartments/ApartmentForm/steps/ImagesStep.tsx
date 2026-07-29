



"use client";

import { ImagePlus } from "lucide-react";
import { useFormContext } from "react-hook-form";

import ImageUploader from "../../ImageUploader";

import type { ApartmentFormValues } from "@/schemas/apartment.schema";

export default function ImagesStep() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ApartmentFormValues>();

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-start gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-50
            text-blue-600
          "
        >
          <ImagePlus size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Apartment Images
          </h2>

          <p className="mt-2 text-slate-500">
            Upload high-quality images of your apartment.
            The first image will be used as the cover photo.
          </p>
        </div>
      </div>

      {/* Image Uploader */}

      <ImageUploader
        value={watch("files")}
        onChange={(files) =>
          setValue("files", files, {
            shouldDirty: true,
            shouldValidate: true,
          })
        }
      />

      {errors.files && (
        <p className="mt-3 text-sm text-red-600">
          {errors.files.message}
        </p>
      )}

      {/* Upload Guidelines */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-blue-100
          bg-blue-50
          p-6
        "
      >
        <h3 className="font-semibold text-blue-900">
          Photo Guidelines
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-medium text-blue-800">
              Recommended
            </h4>

            <ul className="mt-2 space-y-2 text-sm text-blue-700">
              <li>✓ Bright, well-lit rooms</li>
              <li>✓ Landscape orientation</li>
              <li>✓ High-resolution images</li>
              <li>✓ Show every major room</li>
              <li>✓ Clean and tidy apartment</li>
              <li>✓ Exterior building photo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-blue-800">
              Avoid
            </h4>

            <ul className="mt-2 space-y-2 text-sm text-blue-700">
              <li>✗ Blurry photos</li>
              <li>✗ Dark rooms</li>
              <li>✗ Heavy filters</li>
              <li>✗ Watermarks</li>
              <li>✗ Duplicate images</li>
              <li>✗ Low-quality screenshots</li>
            </ul>
          </div>
        </div>

        <div
          className="
            mt-6
            rounded-xl
            border
            border-blue-200
            bg-white
            p-4
          "
        >
          <p className="text-sm text-slate-700">
            <strong>Tip:</strong> Listings with
            <strong> 10–15 professional photos</strong>
            typically receive significantly more views and
            bookings than listings with only a few images.
          </p>
        </div>
      </div>
    </div>
  );
}