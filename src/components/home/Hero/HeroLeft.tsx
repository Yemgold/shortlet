


// "use client";

// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// import { Button } from "@/components/ui";

// import HeroBadge from "./HeroBadge";
// import HeroStats from "./HeroStats";
// import HeroSearch from "./HeroSearch";

// export default function HeroLeft() {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         x: -50,
//       }}
//       animate={{
//         opacity: 1,
//         x: 0,
//       }}
//       transition={{
//         duration: 0.8,
//       }}
//       className="text-white"
//     >
//       <HeroBadge />

//       <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
//         Find Your Perfect
//         <span className="block text-blue-400">
//           Short-Let Apartment
//         </span>
//       </h1>

//       <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
//         Stay in carefully selected luxury apartments,
//         serviced homes, and vacation rentals with
//         trusted hosts across Nigeria.
//       </p>

//       <div className="mt-8 flex flex-wrap gap-4">
//         <Button size="lg">
//           Book Your Stay
//         </Button>

//         <Button
//           variant="outline"
//           size="lg"
//           rightIcon={<ArrowRight size={18} />}
//         >
//           Explore Apartments
//         </Button>
//       </div>

//       <HeroStats />

//       <div className="mt-10">
//         <HeroSearch />
//       </div>
//     </motion.div>
//   );
// }





"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui";

import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";
import HeroSearch from "./HeroSearch";

/* ================= Animation Variants ================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroLeft() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative text-white"
    >
      {/* ================= Background Glow ================= */}

      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-8 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* ================= Badge ================= */}

      <motion.div
        variants={itemVariants}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeroBadge />
      </motion.div>

      {/* ================= Heading ================= */}

      <motion.h1
        variants={itemVariants}
        className="mt-8 text-5xl font-black leading-tight lg:text-7xl"
      >
        Find Your Perfect

        <motion.span
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            block
            bg-gradient-to-r
            from-blue-400
            via-cyan-300
            to-sky-500
            bg-[length:200%_200%]
            bg-clip-text
            text-transparent
          "
        >
          Short-Let Apartment
        </motion.span>
      </motion.h1>

      {/* ================= Description ================= */}

      <motion.p
        variants={itemVariants}
        className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
      >
        Stay in carefully selected luxury apartments,
        serviced homes, and vacation rentals with
        trusted hosts across Nigeria.
      </motion.p>

      {/* ================= CTA Buttons ================= */}

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-wrap gap-4"
      >
        <motion.div
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 18,
          }}
        >
          <Button size="lg">
            Book Your Stay
          </Button>
        </motion.div>

        <motion.div
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 18,
          }}
        >
          <Button
            variant="outline"
            size="lg"
            rightIcon={
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={18} />
              </motion.div>
            }
          >
            Explore Apartments
          </Button>
        </motion.div>
      </motion.div>

      {/* ================= Stats ================= */}

      <motion.div
        variants={itemVariants}
        className="mt-10"
      >
        <HeroStats />
      </motion.div>

      {/* ================= Search ================= */}

      <motion.div
        variants={itemVariants}
        whileHover={{
          y: -3,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="mt-10"
      >
        <HeroSearch />
      </motion.div>
    </motion.div>
  );
}