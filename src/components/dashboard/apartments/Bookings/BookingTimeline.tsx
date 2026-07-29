


"use client";

import {
  CalendarCheck2,
  CalendarClock,
  CreditCard,
  Home,
  LogIn,
  LogOut,
  XCircle,
} from "lucide-react";

export interface BookingTimelineEvent {
  id: string;

  title: string;

  description?: string;

  date: string;

  type:
    | "BOOKED"
    | "PAYMENT"
    | "CONFIRMED"
    | "CHECK_IN"
    | "CHECK_OUT"
    | "CANCELLED";
}

interface BookingTimelineProps {
  events: BookingTimelineEvent[];
}

export default function BookingTimeline({
  events,
}: BookingTimelineProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900">
          Booking Timeline
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Complete history of this reservation.
        </p>
      </div>

      <div className="relative ml-4">
        <div
          className="
            absolute
            left-[15px]
            top-0
            h-full
            w-px
            bg-slate-200
          "
        />

        <div className="space-y-8">
          {events.map((event) => (
            <TimelineItem
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  event: BookingTimelineEvent;
}

function TimelineItem({
  event,
}: TimelineItemProps) {
  const icon = getIcon(event.type);

  const color = getColor(event.type);

  return (
    <div className="relative flex gap-5">
      {/* Circle */}

      <div
        className={`
          z-10
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          ${color.bg}
          ${color.text}
        `}
      >
        {icon}
      </div>

      {/* Content */}

      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-semibold text-slate-900">
            {event.title}
          </h3>

          <span className="text-sm text-slate-500">
            {formatDate(event.date)}
          </span>
        </div>

        {event.description && (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}

function getIcon(type: BookingTimelineEvent["type"]) {
  switch (type) {
    case "BOOKED":
      return <CalendarClock size={16} />;

    case "PAYMENT":
      return <CreditCard size={16} />;

    case "CONFIRMED":
      return <CalendarCheck2 size={16} />;

    case "CHECK_IN":
      return <LogIn size={16} />;

    case "CHECK_OUT":
      return <LogOut size={16} />;

    case "CANCELLED":
      return <XCircle size={16} />;

    default:
      return <Home size={16} />;
  }
}

function getColor(type: BookingTimelineEvent["type"]) {
  switch (type) {
    case "BOOKED":
      return {
        bg: "bg-blue-100",
        text: "text-blue-600",
      };

    case "PAYMENT":
      return {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
      };

    case "CONFIRMED":
      return {
        bg: "bg-purple-100",
        text: "text-purple-600",
      };

    case "CHECK_IN":
      return {
        bg: "bg-orange-100",
        text: "text-orange-600",
      };

    case "CHECK_OUT":
      return {
        bg: "bg-slate-200",
        text: "text-slate-700",
      };

    case "CANCELLED":
      return {
        bg: "bg-red-100",
        text: "text-red-600",
      };

    default:
      return {
        bg: "bg-slate-100",
        text: "text-slate-600",
      };
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}