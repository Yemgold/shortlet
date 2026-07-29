



"use client";

import { motion } from "framer-motion";

import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;

  description?: string;

  icon?: LucideIcon;

  action?: React.ReactNode;

  className?: string;
}

export default function SectionTitle({
  title,
  description,
  icon: Icon,
  action,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${className ?? ""}`}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-50
            "
          >
            <Icon
              size={28}
              className="text-blue-600"
            />
          </div>
        )}

        <div>
          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            {title}
          </h2>

          {description && (
            <p className="mt-2 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>

      {action && (
        <div className="flex shrink-0 items-center">
          {action}
        </div>
      )}
    </motion.div>
  );
}