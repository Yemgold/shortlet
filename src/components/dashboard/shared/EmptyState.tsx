



"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
  ArrowRight,
  LucideIcon,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface EmptyStateProps {
  title: string;

  description: string;

  icon: LucideIcon;

  actionLabel?: string;

  actionHref?: string;

  secondaryAction?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  icon: Icon,
  actionLabel,
  actionHref,
  secondaryAction,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-slate-50
        px-8
        py-20
        text-center
      "
    >
      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-sm
        "
      >
        <Icon
          size={42}
          className="text-slate-400"
        />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-4 max-w-xl text-slate-500">
        {description}
      </p>

      {(actionLabel || secondaryAction) && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {actionLabel && actionHref && (
            <Button size="lg">
              <Link href={actionHref}>
                {actionLabel}

                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Link>
            </Button>
          )}

          {secondaryAction}
        </div>
      )}
    </motion.div>
  );
}