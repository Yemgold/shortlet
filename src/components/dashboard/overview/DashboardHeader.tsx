






"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Bell,
  CalendarDays,
  Search,
} from "lucide-react";

import Input from "@/components/ui/Input";

export default function DashboardHeader() {
  const currentDate =
    new Intl.DateTimeFormat("en-NG", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        flex
        flex-col
        gap-6
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left */}

      <div>
        <motion.h1
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="
            text-3xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          {greeting}, Admin 👋
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
          }}
          className="
            mt-2
            max-w-xl
            text-slate-500
          "
        >
          Welcome back to your RH Luxury
          Homes dashboard. Here's what's
          happening today.
        </motion.p>

        <div
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-sm
            font-medium
            text-slate-600
          "
        >
          <CalendarDays
            size={16}
          />

          {currentDate}
        </div>
      </div>

      {/* Right */}

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="
          flex
          flex-col
          gap-4
          lg:w-[420px]
        "
      >
        <Input
          placeholder="Search apartments, bookings..."
          leftIcon={
            <Search size={18} />
          }
        />

        <div className="flex items-center justify-between">
          {/* Notifications */}

          <button
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              transition
              hover:border-primary
              hover:bg-primary/5
            "
          >
            <Bell
              size={20}
            />

            <span
              className="
                absolute
                right-3
                top-3
                h-2.5
                w-2.5
                rounded-full
                bg-red-500
              "
            />
          </button>

          {/* Profile */}

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p
                className="
                  font-semibold
                  text-slate-900
                "
              >
                Administrator
              </p>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                RH Luxury Homes
              </p>
            </div>

            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
              "
            >
              <Image
                src="/images/avatar.png"
                alt="Admin"
                width={56}
                height={56}
                className="
                  h-14
                  w-14
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}