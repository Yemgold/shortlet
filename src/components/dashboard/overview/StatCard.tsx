


"use client";

import { motion } from "framer-motion";

import {
  ArrowDownRight,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

interface StatCardProps {
  title: string;

  value: string | number;

  icon: LucideIcon;

  change?: number;

  subtitle?: string;

  color?:
    | "blue"
    | "green"
    | "purple"
    | "orange"
    | "red";
}

const colorVariants = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-100",
  },

  green: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-100",
  },

  purple: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    border: "border-violet-100",
  },

  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    border: "border-orange-100",
  },

  red: {
    bg: "bg-red-50",
    icon: "text-red-600",
    border: "border-red-100",
  },
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  change,
  subtitle,
  color = "blue",
}: StatCardProps) {
  const variant = colorVariants[color];

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        rounded-3xl
        border
        ${variant.border}
        bg-white
        p-6
        shadow-sm
        transition
        hover:shadow-lg
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}

          {typeof change === "number" && (
            <div className="mt-5 flex items-center gap-2">
              {change >= 0 ? (
                <>
                  <ArrowUpRight
                    size={16}
                    className="text-emerald-600"
                  />

                  <span className="text-sm font-semibold text-emerald-600">
                    +{change}%
                  </span>
                </>
              ) : (
                <>
                  <ArrowDownRight
                    size={16}
                    className="text-red-600"
                  />

                  <span className="text-sm font-semibold text-red-600">
                    {change}%
                  </span>
                </>
              )}

              <span className="text-xs text-slate-400">
                vs last month
              </span>
            </div>
          )}
        </div>

        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            ${variant.bg}
          `}
        >
          <Icon
            size={30}
            className={variant.icon}
          />
        </div>
      </div>
    </motion.div>
  );
}