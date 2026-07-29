



"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Save,
  Building2,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface FormHeaderProps {
  title?: string;

  subtitle?: string;

  badge?: string;

  backHref?: string;

  saveButtonText?: string;

  isSubmitting?: boolean;

  onSaveDraft?: () => void;
}

export default function FormHeader({
  title = "Create Apartment",

  subtitle =
    "Add a new apartment to your portfolio. Complete the information below, upload high-quality images, and publish your listing when ready.",

  badge = "Draft",

  backHref = "/admin/dashboard",

  saveButtonText = "Save Draft",

  isSubmitting = false,

  onSaveDraft,
}: FormHeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        mb-8
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-start gap-4">
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
            <Building2 size={28} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold text-slate-900">
                {title}
              </h1>

              <span
                className="
                  rounded-full
                  bg-amber-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-amber-700
                "
              >
                {badge}
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">
          <Link href={backHref}>
            <Button variant="outline">
              <ArrowLeft
                size={18}
                className="mr-2"
              />
              Back
            </Button>
          </Link>

          {onSaveDraft && (
            <Button
              type="button"
              variant="secondary"
              onClick={onSaveDraft}
              disabled={isSubmitting}
            >
              <Save
                size={18}
                className="mr-2"
              />

              {saveButtonText}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}