


"use client";

import { useEffect, useMemo, useState } from "react";

import { Drawer } from "vaul";

import { AnimatePresence, motion } from "framer-motion";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  
  Loader2,
  
  X,
} from "lucide-react";

import Button from "@/components/ui/Button";
import type { Apartment } from "@/types/apartment";


import DateRangePicker from "./DateRangePicker";
import GuestSelector from "./GuestSelector";
import GuestDetailsForm from "./GuestDetailsForm";
import BookingSummary from "./BookingSummary";

import type { DateRange } from "react-day-picker";
import { useCreateBooking } from "@/hooks/booking/useCreateBooking";


export type BookingStep =
  | "availability"
  | "summary"
  | "guest-details"
  | "payment"
  | "confirmation";

export interface AvailabilityData {
  available: boolean;

  totalNights: number;

  subtotal: number;

  cleaningFee: number;

  securityDeposit: number;

  total: number;

  message?: string;
}
interface CheckAvailabilityDrawerProps {
  open: boolean;

  apartment: Apartment;

  loading?: boolean;

  availability?: AvailabilityData | null;

  onOpenChange: (open: boolean) => void;

  onCheckAvailability: (payload: {
    apartmentId: string;
    checkInDate: string;
    checkOutDate: string;
    guests: number;
  }) => Promise<AvailabilityData>;
}

export default function CheckAvailabilityDrawer({
  open,
  apartment,
  loading = false,
  availability,
  onOpenChange,
  onCheckAvailability,
}: CheckAvailabilityDrawerProps) {


console.log("Drawer rendered");
console.log("open =", open);

  const [step, setStep] =
    useState<BookingStep>("availability");

  const [dateRange, setDateRange] =
  useState<DateRange>();

  const checkIn =
  dateRange?.from
    ?.toISOString()
    .split("T")[0] ?? "";

const checkOut =
  dateRange?.to
    ?.toISOString()
    .split("T")[0] ?? "";

  const [guests, setGuests] =
    useState(1);



const [guestDetails, setGuestDetails] =
  useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });


  const [error, setError] =
    useState("");

useEffect(() => {
  if (!open) {
    setStep("availability");

    setDateRange(undefined);

    setGuests(1);

    setGuestDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequest: "",
    });

    setError("");
  }
}, [open]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);

    const end = new Date(checkOut);

    const diff =
      end.getTime() - start.getTime();

    return Math.max(
      Math.ceil(
        diff / (1000 * 60 * 60 * 24)
      ),
      0
    );
  }, [checkIn, checkOut]);

  


  async function handleCheckAvailability() {
    setError("");

    if (!checkIn) {
      setError(
        "Please select a check-in date."
      );
      return;
    }

    if (!checkOut) {
      setError(
        "Please select a check-out date."
      );
      return;
    }

    if (
      new Date(checkOut) <=
      new Date(checkIn)
    ) {
      setError(
        "Check-out must be after check-in."
      );
      return;
    }

//     try {
//   const result =

//    await onCheckAvailability({
//   apartmentId: apartment._id,
//   checkInDate: checkIn,
//   checkOutDate: checkOut,
//   guests,
// });


//   if (result.available) {
//     setStep("summary");
//   } else {
//     setError(
//       result.message ??
//         "Apartment is not available for the selected dates."
//     );
//   }
// } catch {
//   setError(
//     "Unable to check availability."
//   );
// }
// }



try {
  setError("");

  const result = await onCheckAvailability({
    apartmentId: apartment._id,
    checkInDate: checkIn,
    checkOutDate: checkOut,
    guests,
  });

  console.log("Availability Result:", result);

  if (result.available) {
    setStep("summary");
  } else {
    setError(
      result.message ||
        "Apartment is not available for the selected dates."
    );
  }
} catch (error) {
  console.error(error);

  setError(
    "Unable to check availability."
  );
}
}

const {
  mutateAsync: createBooking,
  isPending,
} = useCreateBooking();

async function handlePayment() {
  try {
    const response = await createBooking({
      apartment: apartment._id,

      checkInDate: checkIn,

      checkOutDate: checkOut,

      firstName: guestDetails.firstName,

      lastName: guestDetails.lastName,

      email: guestDetails.email,

      phoneNumber: guestDetails.phone,
    });
  // Redirect to Paystack Checkout
    window.location.href =
      response.data.paymentDetail.paymentUrl;

  } catch (error) {
    console.error(error);
    setError("Unable to initialize payment.");
  }
}

  return (

    <>
    {console.log("Drawer JSX rendering")}
 

    <Drawer.Root
      open={open}
      onOpenChange={onOpenChange}
      direction="right"
    >


      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

        
        
        
        <Drawer.Content


 

          className="
            fixed
            right-0
            top-0
            z-50
            flex
            h-screen
            w-full
            max-w-xl
            flex-col
            bg-white
            shadow-2xl
            outline-none
          "
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-200
              px-6
              py-5
            "
          >
            <div>
              <h2 className="text-xl font-bold">
                Check Availability
              </h2>

                         <h1 className="text-5xl font-bold">
    DRAWER IS OPEN
  </h1>

              <p className="mt-1 text-sm text-slate-500">
                {apartment.name}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                onOpenChange(false)
              }
            >
              <X size={20} />
            </Button>
          </div>

          {/* Step Indicator */}

          <div className="border-b border-slate-100 px-6 py-4">
            <div className="flex items-center gap-3 text-sm">
              <span
                className={
                  step ===
                  "availability"
                    ? "font-semibold text-primary"
                    : "text-slate-400"
                }
              >
                1. Availability
              </span>

              <ChevronRight size={14} />

              <span
                className={
                  step === "summary"
                    ? "font-semibold text-primary"
                    : "text-slate-400"
                }
              >
                2. Summary
              </span>

              <ChevronRight size={14} />

              <span
                className={
                  step ===
                  "guest-details"
                    ? "font-semibold text-primary"
                    : "text-slate-400"
                }
              >
                3. Guest
              </span>

              <ChevronRight size={14} />

              <span
                className={
                  step === "payment"
                    ? "font-semibold text-primary"
                    : "text-slate-400"
                }
              >
                4. Payment
              </span>
            </div>
          </div>



          {/* Body */}

          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">

 <motion.div
  key={step}
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -30 }}
  transition={{ duration: 0.25 }}
>
  {/* STEP 1 */}
  {step === "availability" && (
    <div className="space-y-6">
      <DateRangePicker
        value={dateRange}
        onChange={setDateRange}
        disabledDates={[]}
      />

      <GuestSelector
        value={guests}
        maxGuests={apartment.guests}
        onChange={setGuests}
      />
    </div>
  )}

  {/* STEP 2 */}
  {step === "summary" && availability && (
    <BookingSummary
      apartmentName={apartment.name}
      checkIn={checkIn}
      checkOut={checkOut}
      guests={guests}
      totalNights={availability.totalNights}
      pricePerNight={apartment.pricePerNight}
      subtotal={availability.subtotal}
      cleaningFee={availability.cleaningFee}
      securityDeposit={availability.securityDeposit}
      total={availability.total}
      onContinue={() =>
        setStep("guest-details")
      }
    />
  )}

  {/* STEP 3 */}
  {step === "guest-details" && (
    <GuestDetailsForm
      value={guestDetails}
      onChange={setGuestDetails}
      onBack={() =>
        setStep("summary")
      }
      onContinue={() =>
        setStep("payment")
      }
    />
  )}
</motion.div>


{/* STEP 4 */}

{step === "payment" && (
  <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6">
    <h3 className="text-xl font-bold">
      Payment
    </h3>

    <p className="text-slate-500">
      Review your booking before proceeding to Paystack.
    </p>

    <div className="space-y-4 rounded-xl bg-slate-50 p-5">

      <div className="flex justify-between">
        <span className="text-slate-500">Apartment</span>

        <span className="font-semibold">
          {apartment.name}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Guest
        </span>

        <span className="font-semibold">
          {guestDetails.firstName}{" "}
          {guestDetails.lastName}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Email
        </span>

        <span className="font-semibold">
          {guestDetails.email}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Phone
        </span>

        <span className="font-semibold">
          {guestDetails.phone}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Check-in
        </span>

        <span className="font-semibold">
          {new Date(checkIn).toLocaleDateString()}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Check-out
        </span>

        <span className="font-semibold">
          {new Date(checkOut).toLocaleDateString()}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">
          Guests
        </span>

        <span className="font-semibold">
          {guests}
        </span>
      </div>

      <hr />

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>

        <span className="text-primary">
          ₦{availability?.total.toLocaleString()}
        </span>
      </div>

    </div>
  </div>
)}

              
            </AnimatePresence>
          </div>

{/* Footer */}

<div className="border-t border-slate-200 bg-white p-6">
  {/* STEP 1 */}

  {step === "availability" && (
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={() =>
          onOpenChange(false)
        }
      >
        Cancel
      </Button>

      <Button
        className="flex-1"
        loading={loading}
        onClick={
          handleCheckAvailability
        }
      >
        {loading ? (
          <>
            <Loader2
              size={18}
              className="mr-2 animate-spin"
            />
            Checking...
          </>
        ) : (
          <>
            <CalendarDays
              size={18}
              className="mr-2"
            />
            Check Availability
          </>
        )}
      </Button>
    </div>
  )}

  {/* STEP 2 */}

  {step === "summary" && (
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={() =>
          setStep("availability")
        }
      >
        <ChevronLeft
          size={18}
          className="mr-2"
        />
        Back
      </Button>

      <Button
        className="flex-1"
        onClick={() =>
          setStep("guest-details")
        }
      >
        Continue
      </Button>
    </div>
  )}

  {/* STEP 3 */}

  {step === "guest-details" && (
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={() =>
          setStep("summary")
        }
      >
        <ChevronLeft
          size={18}
          className="mr-2"
        />
        Back
      </Button>

      <Button
        className="flex-1"
        onClick={() =>
          setStep("payment")
        }
      >
        Continue to Payment
      </Button>
    </div>
  )}

  {/* STEP 4 */}

  {step === "payment" && (
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={() =>
          setStep("guest-details")
        }
      >
        <ChevronLeft
          size={18}
          className="mr-2"
        />
        Back
      </Button>

      <Button
 loading={isPending}
  disabled={isPending}
  className="flex-1"
  onClick={handlePayment}
>
  Pay with Paystack
</Button>

{/* 
<Button
  className="flex-1"
  onClick={handlePayment}
>
  Pay with Paystack
</Button> */}

    </div>
  )}

  {error && (
    <p className="mt-4 text-sm text-red-500">
      {error}
    </p>
  )}
</div>
          
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
    </>
  );





}





