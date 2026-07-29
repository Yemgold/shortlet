



"use client";

import {
  Building2,
  CalendarCheck2,
  Wallet,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      <StatCard
        title="Total Revenue"
        value="₦12.5M"
        subtitle="Revenue this month"
        icon={Wallet}
        change={18.4}
        color="green"
      />

      <StatCard
        title="Apartments"
        value={48}
        subtitle="Active listings"
        icon={Building2}
        change={6.8}
        color="blue"
      />

      <StatCard
        title="Bookings"
        value={286}
        subtitle="Confirmed bookings"
        icon={CalendarCheck2}
        change={14.1}
        color="purple"
      />

      <StatCard
        title="Occupancy"
        value="87%"
        subtitle="Current occupancy rate"
        icon={Users}
        change={-2.3}
        color="orange"
      />
    </section>
  );
}