



"use client";

import DashboardHeader from "@/components/dashboard/overview/DashboardHeader";

import StatsGrid from "@/components/dashboard/overview/StatsGrid";

import RevenueChart from "@/components/dashboard/overview/RevenueChart";
import OccupancyChart from "@/components/dashboard/overview/OccupancyChart";

import RecentBookings from "@/components/dashboard/overview/RecentBookings";
import RecentApartments from "@/components/dashboard/overview/RecentApartments";

import Notifications from "@/components/dashboard/overview/Notifications";
import QuickActions from "@/components/dashboard/overview/QuickActions";

import DashboardCard from "@/components/dashboard/shared/DashboardCard";

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      {/* Header */}

      <DashboardHeader />

      {/* Statistics */}

      <StatsGrid />

      {/* Charts */}

      <section className="grid gap-8 xl:grid-cols-3">
        <DashboardCard
          title="Revenue Overview"
          description="Monthly booking revenue"
          className="xl:col-span-2"
          contentClassName="p-0"
        >
          <RevenueChart />
        </DashboardCard>

        <DashboardCard
          title="Occupancy"
          description="Current apartment occupancy"
          contentClassName="p-0"
        >
          <OccupancyChart />
        </DashboardCard>
      </section>

      {/* Recent Data */}

      <section className="grid gap-8 xl:grid-cols-2">
        <DashboardCard
          title="Recent Bookings"
          description="Latest reservations"
          contentClassName="p-0"
        >
          <RecentBookings />
        </DashboardCard>

        <DashboardCard
          title="Recently Added Apartments"
          description="Newest apartments"
          contentClassName="p-0"
        >
          <RecentApartments />
        </DashboardCard>
      </section>

      {/* Bottom */}

      <section className="grid gap-8 xl:grid-cols-3">
        <DashboardCard
          title="Quick Actions"
          description="Common administrator tasks"
        >
          <QuickActions />
        </DashboardCard>

        <DashboardCard
          title="Notifications"
          description="Recent activities"
          className="xl:col-span-2"
        >
          <Notifications />
        </DashboardCard>
      </section>
    </main>
  );
}








// import DashboardHeader from "@/components/dashboard/overview/DashboardHeader";
// import StatsGrid from "@/components/dashboard/overview/StatsGrid";
// import RevenueChart from "@/components/dashboard/overview/RevenueChart";
// import RecentBookings from "@/components/dashboard/overview/RecentBookings";
// import RecentApartments from "@/components/dashboard/overview/RecentApartments";
// import QuickActions from "@/components/dashboard/overview/QuickActions";

// export default function DashboardPage() {
//   return (
//     <div className="space-y-8">
//       <DashboardHeader />

//       <StatsGrid />

//       <RevenueChart />

//       <div className="grid gap-8 xl:grid-cols-2">
//         <RecentBookings />

//         <RecentApartments />
//       </div>

//       <QuickActions />
//     </div>
//   );
// }