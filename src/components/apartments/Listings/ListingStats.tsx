

"use client";

interface ListingStatsProps {
  apartmentCount: number;

  verifiedPercentage?: string;

  guestRating?: string;

  supportHours?: string;
}

interface StatCardProps {
  title: string;

  value: string;
}

export default function ListingStats({
  apartmentCount,
  verifiedPercentage = "98%",
  guestRating = "4.9★",
  supportHours = "24/7",
}: ListingStatsProps) {
  return (
    <div
      className="
        grid
        gap-4
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      <StatCard
        title="Properties"
        value={`${apartmentCount}+`}
      />

      <StatCard
        title="Verified"
        value={verifiedPercentage}
      />

      <StatCard
        title="Guest Rating"
        value={guestRating}
      />

      <StatCard
        title="Support"
        value={supportHours}
      />
    </div>
  );
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-5
        transition
        hover:border-blue-200
        hover:bg-blue-50/40
      "
    >
      <p
        className="
          text-sm
          font-medium
          text-slate-500
        "
      >
        {title}
      </p>

      <h3
        className="
          mt-2
          text-2xl
          font-bold
          text-slate-900
        "
      >
        {value}
      </h3>
    </div>
  );
}