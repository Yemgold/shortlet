


"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import AuthBanner from "../AuthBanner";
import AuthBackground from "./AuthBackground";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AuthLayout({
  children,
  title = "Luxury Living Begins Here",
  subtitle = "Book premium apartments across Nigeria with secure reservations, verified properties and exceptional hospitality.",
}: AuthLayoutProps) {
  return (
    <section className="min-h-screen bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT PANEL ================= */}

        <div className="hidden lg:block">
          <AuthBanner
            title={title}
            subtitle={subtitle}
          />
        </div>

        {/* ================= RIGHT PANEL ================= */}

        <div className="relative flex items-center justify-center overflow-hidden bg-slate-50 px-6 py-12 lg:px-12">
          {/* Decorative Background */}

          <AuthBackground />

          {/* Form Container */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative z-10 w-full max-w-md"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}










// "use client";

// import { ReactNode } from "react";
// import { motion } from "framer-motion";

// import AuthBanner from "../AuthBanner";

// interface AuthLayoutProps {
//   children: ReactNode;
//   title?: string;
//   subtitle?: string;
// }

// export default function AuthLayout({
//   children,
//   title = "Luxury Living Begins Here",
//   subtitle = "Book premium apartments across Nigeria with secure reservations, verified properties and exceptional hospitality.",
// }: AuthLayoutProps) {
//   return (
//     <section className="min-h-screen bg-slate-950">
//       <div className="grid min-h-screen lg:grid-cols-2">
//         {/* ================= LEFT PANEL ================= */}

//         <div className="hidden lg:block">
//           <AuthBanner
//             title={title}
//             subtitle={subtitle}
//           />
//         </div>

//         {/* ================= RIGHT PANEL ================= */}

//         <div className="relative flex items-center justify-center overflow-hidden bg-slate-50 px-6 py-12 lg:px-12">
//           {/* Decorative Background */}

//           <div className="absolute inset-0">
//             <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

//             <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
//           </div>

//           {/* Form Container */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className="relative z-10 w-full max-w-md"
//           >
//             {children}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

