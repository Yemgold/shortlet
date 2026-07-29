


"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color = "bg-blue-100 text-blue-600",
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-2xl
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-blue-100/30
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div
        className={`
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          ${color}
          transition-transform
          duration-300
          group-hover:scale-110
          group-hover:rotate-3
        `}
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3 className="relative mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}

      <p className="relative mt-4 leading-8 text-slate-600">
        {description}
      </p>

      {/* Bottom */}

      <div className="relative mt-8 flex items-center justify-between">
        <div
          className="
            h-1
            w-16
            rounded-full
            bg-blue-600
            transition-all
            duration-300
            group-hover:w-28
          "
        />

        <ArrowUpRight
          size={22}
          className="
            text-blue-600
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>
    </motion.div>
  );
}