


"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface LightboxProps {
  images: string[];

  currentIndex: number;

  open: boolean;

  onClose: () => void;

  onPrevious: () => void;

  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  open,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  if (!images.length) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            backdrop-blur-sm
          "
        >
          {/* Close */}

          <button
            onClick={onClose}
            className="
              absolute
              right-6
              top-6
              rounded-full
              bg-white/10
              p-3
              text-white
              transition
              hover:bg-white/20
            "
          >
            <X size={24} />
          </button>

          {/* Previous */}

          {images.length > 1 && (
            <button
              onClick={onPrevious}
              className="
                absolute
                left-6
                rounded-full
                bg-white/10
                p-3
                text-white
                transition
                hover:bg-white/20
              "
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* Image */}

          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              h-[85vh]
              w-[90vw]
              max-w-7xl
            "
          >
            <Image
              src={images[currentIndex]}
              alt={`Apartment Image ${currentIndex + 1}`}
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </motion.div>

          {/* Next */}

          {images.length > 1 && (
            <button
              onClick={onNext}
              className="
                absolute
                right-6
                rounded-full
                bg-white/10
                p-3
                text-white
                transition
                hover:bg-white/20
              "
            >
              <ChevronRight size={30} />
            </button>
          )}

          {/* Counter */}

          <div
            className="
              absolute
              bottom-8
              rounded-full
              bg-black/60
              px-4
              py-2
              text-sm
              font-medium
              text-white
            "
          >
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}