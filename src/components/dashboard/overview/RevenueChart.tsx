



"use client";

import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  {
    month: "Jan",
    revenue: 2800000,
  },
  {
    month: "Feb",
    revenue: 3400000,
  },
  {
    month: "Mar",
    revenue: 4100000,
  },
  {
    month: "Apr",
    revenue: 3900000,
  },
  {
    month: "May",
    revenue: 4700000,
  },
  {
    month: "Jun",
    revenue: 5600000,
  },
  {
    month: "Jul",
    revenue: 6200000,
  },
];

function formatCurrency(value: number) {
  if (value >= 1000000) {
    return `₦${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `₦${(value / 1000).toFixed(0)}K`;
  }

  return `₦${value}`;
}

export default function RevenueChart() {
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
        p-8
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Revenue Overview
          </h2>

          <p className="mt-2 text-slate-500">
            Monthly apartment revenue.
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-emerald-50
            px-5
            py-3
          "
        >
          <p className="text-xs uppercase tracking-wide text-emerald-600">
            Total Revenue
          </p>

          <p className="mt-1 text-xl font-bold text-emerald-700">
            ₦30.3M
          </p>
        </div>
      </div>

      <div className="mt-10 h-[360px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={revenueData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{
                fontSize: 12,
              }}
            />

            <YAxis
              tickFormatter={formatCurrency}
              tick={{
                fontSize: 12,
              }}
            />

            <Tooltip
  formatter={(value) => {
    const amount =
      typeof value === "number"
        ? value
        : Number(value ?? 0);

    return [
      `₦${amount.toLocaleString()}`,
      "Revenue",
    ];
  }}
/>

            <Bar
              dataKey="revenue"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}