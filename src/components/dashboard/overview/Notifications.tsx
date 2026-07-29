



"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
  Bell,
  CalendarClock,
  CheckCircle2,
  Home,
  Wallet,
  X,
} from "lucide-react";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "booking" | "payment" | "apartment";
  read: boolean;
}

const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "New Booking",
    message:
      "Luxury Ocean View Apartment has just been booked.",
    time: "2 min ago",
    type: "booking",
    read: false,
  },

  {
    id: "2",
    title: "Payment Received",
    message:
      "₦180,000 payment has been confirmed.",
    time: "15 min ago",
    type: "payment",
    read: false,
  },

  {
    id: "3",
    title: "Apartment Approved",
    message:
      "Executive Studio Suite is now live.",
    time: "1 hour ago",
    type: "apartment",
    read: true,
  },

  {
    id: "4",
    title: "Upcoming Check-in",
    message:
      "A guest will check in tomorrow at 2:00 PM.",
    time: "Yesterday",
    type: "booking",
    read: true,
  },
];

function getIcon(type: NotificationItem["type"]) {
  switch (type) {
    case "booking":
      return (
        <CalendarClock
          size={20}
          className="text-blue-600"
        />
      );

    case "payment":
      return (
        <Wallet
          size={20}
          className="text-green-600"
        />
      );

    case "apartment":
      return (
        <Home
          size={20}
          className="text-purple-600"
        />
      );

    default:
      return (
        <Bell
          size={20}
          className="text-slate-600"
        />
      );
  }
}

export default function Notifications() {
  const unread = notifications.filter(
    (item) => !item.read
  ).length;

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
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
        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-100
          p-6
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
            "
          >
            <Bell
              className="text-primary"
              size={22}
            />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Notifications
            </h2>

            <p className="text-sm text-slate-500">
              {unread} unread notification
              {unread !== 1 && "s"}
            </p>
          </div>
        </div>

        <button
          className="
            rounded-xl
            px-4
            py-2
            text-sm
            font-medium
            text-primary
            transition
            hover:bg-primary/10
          "
        >
          Mark all read
        </button>
      </div>

      {/* Body */}

      <div className="max-h-[520px] overflow-y-auto">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 20,
              }}
              whileHover={{
                backgroundColor:
                  "#f8fafc",
              }}
              className="
                relative
                flex
                gap-4
                border-b
                border-slate-100
                p-6
                transition
              "
            >
              {!notification.read && (
                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    rounded-r-full
                    bg-primary
                  "
                />
              )}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-100
                  shrink-0
                "
              >
                {getIcon(
                  notification.type
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {notification.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {
                        notification.message
                      }
                    </p>

                    <p className="mt-3 text-xs text-slate-400">
                      {
                        notification.time
                      }
                    </p>
                  </div>

                  <button
                    className="
                      rounded-lg
                      p-2
                      text-slate-400
                      transition
                      hover:bg-slate-100
                      hover:text-slate-600
                    "
                  >
                    <X size={16} />
                  </button>
                </div>

                {notification.read ? (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    <CheckCircle2
                      size={14}
                    />
                    Read
                  </div>
                ) : (
                  <div className="mt-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    New
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}