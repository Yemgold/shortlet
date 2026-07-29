


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// import FloatingBooking from "./FloatingBooking";
// import FloatingGuests from "./FloatingGuests";
// import FloatingReview from "./FloatingReview";

// export default function HeroRight() {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         x: 80,
//       }}
//       animate={{
//         opacity: 1,
//         x: 0,
//       }}
//       transition={{
//         duration: 0.9,
//       }}
//       className="relative hidden lg:flex justify-center"
//     >
//       {/* Glow */}

//       <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[120px]" />

//       {/* Image */}

//       <div className="relative">
//         <Image
//           src="/hero-apartment.png"
//           alt="Luxury Apartment"
//           width={600}
//           height={750}
//           priority
//           className="
//             relative
//             z-10
//             rounded-[40px]
//             border
//             border-white/20
//             shadow-[0_40px_80px_rgba(0,0,0,0.35)]
//           "
//         />

//         <FloatingReview />

//         <FloatingBooking />

//         <FloatingGuests />
//       </div>
//     </motion.div>
//   );
// }






"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import FloatingBooking from "./FloatingBooking";
import FloatingGuests from "./FloatingGuests";
import FloatingReview from "./FloatingReview";

/* ================= Animation Variants ================= */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    rotate: 2,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroRight() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative hidden justify-center lg:flex"
    >
      {/* ================= Animated Background Glow ================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.4, 0.18],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[540px] w-[540px] rounded-full bg-blue-500/20 blur-[130px]"
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.3, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-12 right-12 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]"
      />

      {/* ================= Image Container ================= */}

      <motion.div
        variants={imageVariants}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.02,
          y: -6,
        }}
        className="relative"
      >
        {/* Luxury Shine */}

        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[40px]">
          <motion.div
            animate={{
              x: ["-160%", "220%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-full w-24 rotate-12 bg-white/15 blur-2xl"
          />
        </div>

        {/* Image */}

        <motion.div
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/hero-apartment.png"
            alt="Luxury Apartment"
            width={600}
            height={750}
            priority
            className="
              relative
              z-10
              rounded-[40px]
              border
              border-white/20
              shadow-[0_45px_100px_rgba(0,0,0,0.38)]
              object-cover
            "
          />
        </motion.div>

        {/* Floating Cards */}

        <FloatingReview />

        <FloatingBooking />

        <FloatingGuests />
      </motion.div>
    </motion.div>
  );
}