

"use client";

interface BookingStatusBadgeProps {
  status:
    | "PENDING"
    | "CONFIRMED"
    | "CHECKED_IN"
    | "CHECKED_OUT"
    | "CANCELLED";
}

export default function BookingStatusBadge({
  status,
}: BookingStatusBadgeProps) {
  const styles = {
    PENDING: {
      label: "Pending",
      className:
        "bg-yellow-100 text-yellow-800 border border-yellow-200",
    },

    CONFIRMED: {
      label: "Confirmed",
      className:
        "bg-blue-100 text-blue-800 border border-blue-200",
    },

    CHECKED_IN: {
      label: "Checked In",
      className:
        "bg-emerald-100 text-emerald-800 border border-emerald-200",
    },

    CHECKED_OUT: {
      label: "Checked Out",
      className:
        "bg-slate-100 text-slate-800 border border-slate-200",
    },

    CANCELLED: {
      label: "Cancelled",
      className:
        "bg-red-100 text-red-800 border border-red-200",
    },
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${styles[status].className}
      `}
    >
      {styles[status].label}
    </span>
  );
}