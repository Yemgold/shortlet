


"use client";

import { useMemo } from "react";

import {
  Mail,
  Phone,
  User,
  FileText,
} from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequest: string;
}

interface GuestDetailsFormProps {
  value: GuestDetails;

  loading?: boolean;

  onChange: (
    value: GuestDetails
  ) => void;

  onBack: () => void;

  onContinue: () => void;
}

export default function GuestDetailsForm({
  value,
  loading = false,
  onChange,
  onBack,
  onContinue,
}: GuestDetailsFormProps) {
  function updateField(
    field: keyof GuestDetails,
    fieldValue: string
  ) {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  }

  const isValid = useMemo(() => {
    return (
      value.firstName.trim() !== "" &&
      value.lastName.trim() !== "" &&
      value.email.trim() !== "" &&
      value.phone.trim() !== ""
    );
  }, [value]);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Guest Details
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Please provide your information so we
          can prepare your reservation.
        </p>
      </div>

      {/* Form */}

      <div className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="First Name"
            placeholder="John"
            value={value.firstName}
            leftIcon={<User size={18} />}
            onChange={(e) =>
              updateField(
                "firstName",
                e.target.value
              )
            }
          />

          <Input
            label="Last Name"
            placeholder="Doe"
            value={value.lastName}
            leftIcon={<User size={18} />}
            onChange={(e) =>
              updateField(
                "lastName",
                e.target.value
              )
            }
          />
        </div>

        <Input
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          value={value.email}
          leftIcon={<Mail size={18} />}
          onChange={(e) =>
            updateField(
              "email",
              e.target.value
            )
          }
        />

        <Input
          type="tel"
          label="Phone Number"
          placeholder="+234..."
          value={value.phone}
          leftIcon={<Phone size={18} />}
          onChange={(e) =>
            updateField(
              "phone",
              e.target.value
            )
          }
        />

        <Input
          label="Special Request"
          placeholder="Airport pickup, early check-in, birthday setup..."
          value={value.specialRequest}
          leftIcon={<FileText size={18} />}
          onChange={(e) =>
            updateField(
              "specialRequest",
              e.target.value
            )
          }
        />
      </div>

      {/* Information */}

      <div
        className="
          rounded-2xl
          border
          border-blue-100
          bg-blue-50
          p-4
        "
      >
        <p className="text-sm text-slate-600">
          Your details are used only for your
          reservation and check-in process. Payment
          will be completed securely through
          Paystack.
        </p>
      </div>

      {/* Footer */}

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={onBack}
        >
          Back
        </Button>

        <Button
          className="flex-1"
          disabled={!isValid}
          loading={loading}
          onClick={onContinue}
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}