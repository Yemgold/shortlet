




// "use client";

// import { useDeleteApartment } from "@/hooks/apartments/useDeleteApartment";

// interface DeleteDialogProps {
//   apartmentId: string;
//   apartmentName: string;
//   open: boolean;
//   onClose: () => void;
// }

// export default function DeleteDialog({
//   apartmentId,
//   apartmentName,
//   open,
//   onClose,
// }: DeleteDialogProps) {
//   const { mutate, isPending } = useDeleteApartment();

//   const handleDelete = () => {
//     mutate(apartmentId, {
//       onSuccess: () => {
//         onClose();
//       },
//     });
//   };

//   if (!open) return null;

//   return (
//     <div>
//       <h2>Delete Apartment</h2>

//       <p>
//         Are you sure you want to delete{" "}
//         <strong>{apartmentName}</strong>?
//       </p>

//       <button
//         onClick={onClose}
//         disabled={isPending}
//       >
//         Cancel
//       </button>

//       <button
//         onClick={handleDelete}
//         disabled={isPending}
//       >
//         {isPending ? "Deleting..." : "Delete"}
//       </button>
//     </div>
//   );
// }




"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Loader2,
  Trash2,
  X,
} from "lucide-react";

import { useDeleteApartment } from "@/hooks/apartment/useDeleteApartment";

import { useAuthStore } from "@/store/authStore";

interface DeleteDialogProps {
  open: boolean;
  apartmentId: string;
  apartmentName?: string;
  onClose: () => void;
}

export default function DeleteDialog({
  open,
  apartmentId,
  apartmentName,
  onClose,
}: DeleteDialogProps) {
  const { mutate, isPending } = useDeleteApartment();

  const handleDelete = () => {

    console.log(
    "DeleteDialog token:",
    useAuthStore.getState().accessToken
  );

    mutate(apartmentId, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-50
              bg-black/50
              backdrop-blur-sm
            "
          />

          {/* Dialog */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{ duration: 0.2 }}
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
              border
              border-slate-200
              bg-white
              shadow-2xl
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-start
                justify-between
                border-b
                border-slate-100
                p-8
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-100
                    text-red-600
                  "
                >
                  <AlertTriangle size={28} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Delete Apartment
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                disabled={isPending}
                className="
                  rounded-xl
                  p-2
                  text-slate-500
                  transition
                  hover:bg-slate-100
                  disabled:opacity-50
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 p-8">
              <p className="leading-7 text-slate-600">
                Are you sure you want to permanently delete this apartment?
              </p>

              <div
                className="
                  rounded-2xl
                  border
                  border-red-200
                  bg-red-50
                  p-5
                "
              >
                <h3 className="font-semibold text-red-700">
                  {apartmentName ?? "Selected Apartment"}
                </h3>

                <p className="mt-2 text-sm text-red-600">
                  All bookings, images, reviews and related information may be
                  permanently removed.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              className="
                flex
                items-center
                justify-end
                gap-4
                border-t
                border-slate-100
                p-6
              "
            >
              <button
                type="button"
                onClick={onClose}
                disabled={isPending}
                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  disabled:opacity-50
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={isPending}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-700
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {isPending ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={18} />
                    Delete Apartment
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