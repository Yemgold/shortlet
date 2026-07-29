



"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Building2,
  CalendarDays,
  CreditCard,
  Eye,
  Plus,
  Settings,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "Create Apartment",
    description: "Add a new apartment",
    href: "/admin/dashboard/apartments/create",
    icon: Plus,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Manage Apartments",
    description: "Update your listings",
    href: "/admin/dashboard/apartments/manage",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Bookings",
    description: "View reservations",
    href: "/admin/dashboard/apartments/bookings",
    icon: CalendarDays,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Customers",
    description: "Manage guests",
    href: "/admin/dashboard/customers",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Payments",
    description: "Transactions & payouts",
    href: "/admin/dashboard/payments",
    icon: CreditCard,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "View Website",
    description: "Open public website",
    href: "/",
    icon: Eye,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Settings",
    description: "Application settings",
    href: "/admin/dashboard/settings",
    icon: Settings,
    color: "bg-slate-100 text-slate-700",
  },
];

export default function QuickActions() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used administrator tools.
        </p>
      </div>

      {/* Actions */}

      <div className="grid gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
            >
              <Link
                href={action.href}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-slate-50
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      ${action.color}
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {action.description}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="
                    text-slate-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-primary
                  "
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}