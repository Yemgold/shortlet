



"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface DashboardCardProps {
  title?: string;

  description?: string;

  children: React.ReactNode;

  className?: string;

  contentClassName?: string;

  action?: React.ReactNode;

  footer?: React.ReactNode;
}

export default function DashboardCard({
  title,
  description,
  children,
  className,
  contentClassName,
  action,
  footer,
}: DashboardCardProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        `
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:shadow-lg
        `,
        className
      )}
    >
      {(title || description || action) && (
        <div
          className="
            flex
            flex-col
            gap-4
            border-b
            border-slate-100
            px-8
            py-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            {title && (
              <h2 className="text-xl font-bold text-slate-900">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-2 text-sm text-slate-500">
                {description}
              </p>
            )}
          </div>

          {action && (
            <div className="flex shrink-0 items-center">
              {action}
            </div>
          )}
        </div>
      )}

      <div
        className={cn(
          "p-8",
          contentClassName
        )}
      >
        {children}
      </div>

      {footer && (
        <div
          className="
            border-t
            border-slate-100
            bg-slate-50
            px-8
            py-5
          "
        >
          {footer}
        </div>
      )}
    </motion.section>
  );
}