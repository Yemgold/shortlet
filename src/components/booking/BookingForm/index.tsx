




"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useCreateBooking } from "@/hooks/booking/useCreateBooking";

interface BookingFormProps {
  apartmentId: string;
}

export default function BookingForm({
  apartmentId,
}: BookingFormProps) {
  const { mutate, isPending } =
    useCreateBooking();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    mutate({
      apartment: apartmentId,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      checkInDate: form.checkInDate,
      checkOutDate: form.checkOutDate,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        space-y-5
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <h2 className="text-2xl font-bold">
        Book this Apartment
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <Input
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Phone Number"
        name="phoneNumber"
        value={form.phoneNumber}
        onChange={handleChange}
        required
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          label="Check-in Date"
          type="date"
          name="checkInDate"
          value={form.checkInDate}
          onChange={handleChange}
          required
        />

        <Input
          label="Check-out Date"
          type="date"
          name="checkOutDate"
          value={form.checkOutDate}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        loading={isPending}
      >
        Continue to Payment
      </Button>
    </form>
  );
}