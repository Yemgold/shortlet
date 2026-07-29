

"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
  AlertTriangle,
  Loader2,
  X,
  Ban,
} from "lucide-react";


interface CancelBookingDialogProps {
  open: boolean;

  bookingCode: string;

  guestName: string;

  apartmentName: string;

  loading?: boolean;

  onClose: () => void;

  onConfirm: () => void;
}


export default function CancelBookingDialog({
  open,
  bookingCode,
  guestName,
  apartmentName,
  loading = false,
  onClose,
  onConfirm,
}: CancelBookingDialogProps) {

  return (
    <AnimatePresence>

      {open && (

        <>

          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-40
              bg-black/50
              backdrop-blur-sm
            "
            onClick={onClose}
          />


          {/* Dialog */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-full
              max-w-lg
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              bg-white
              p-8
              shadow-2xl
            "
          >


            {/* Close */}

            <button
              onClick={onClose}
              disabled={loading}
              className="
                absolute
                right-5
                top-5
                rounded-xl
                p-2
                text-slate-500
                transition
                hover:bg-slate-100
              "
            >
              <X size={20} />
            </button>



            {/* Warning Icon */}

            <div
              className="
                mx-auto
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-red-100
              "
            >
              <AlertTriangle
                size={40}
                className="text-red-600"
              />
            </div>



            {/* Title */}

            <h2
              className="
                text-center
                text-2xl
                font-bold
                text-slate-900
              "
            >
              Cancel Booking?
            </h2>



            <p
              className="
                mt-3
                text-center
                text-slate-500
              "
            >
              This action will cancel the booking
              and cannot be easily reversed.
            </p>



            {/* Booking Details */}

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-red-100
                bg-red-50
                p-5
              "
            >

              <div className="space-y-3">

                <InfoRow
                  label="Booking Code"
                  value={bookingCode}
                />


                <InfoRow
                  label="Guest"
                  value={guestName}
                />


                <InfoRow
                  label="Apartment"
                  value={apartmentName}
                />

              </div>

            </div>



            {/* Buttons */}

            <div className="mt-8 flex gap-4">


              <button
                onClick={onClose}
                disabled={loading}
                className="
                  flex-1
                  rounded-2xl
                  border
                  border-slate-300
                  py-3
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-100
                "
              >
                Keep Booking
              </button>



              <button
                onClick={onConfirm}
                disabled={loading}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-red-600
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {loading ? (

                  <>

                    <Loader2
                      size={18}
                      className="animate-spin"
                    />

                    Cancelling...

                  </>

                ) : (

                  <>

                    <Ban size={18} />

                    Cancel Booking

                  </>

                )}

              </button>


            </div>


          </motion.div>


        </>

      )}

    </AnimatePresence>
  );
}



interface InfoRowProps {
  label: string;
  value: string;
}



function InfoRow({
  label,
  value,
}: InfoRowProps) {

  return (

    <div className="flex justify-between gap-4">

      <span className="text-slate-500">
        {label}
      </span>


      <span className="text-right font-semibold text-slate-900">
        {value}
      </span>

    </div>

  );
}