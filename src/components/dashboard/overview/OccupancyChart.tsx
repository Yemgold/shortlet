


"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { motion } from "framer-motion";

import {
  Calendar,
  TrendingUp,
} from "lucide-react";

const occupancyData = [
  {
    month: "Jan",
    occupancy: 62,
  },
  {
    month: "Feb",
    occupancy: 68,
  },
  {
    month: "Mar",
    occupancy: 74,
  },
  {
    month: "Apr",
    occupancy: 82,
  },
  {
    month: "May",
    occupancy: 87,
  },
  {
    month: "Jun",
    occupancy: 91,
  },
  {
    month: "Jul",
    occupancy: 95,
  },
  {
    month: "Aug",
    occupancy: 89,
  },
  {
    month: "Sep",
    occupancy: 84,
  },
  {
    month: "Oct",
    occupancy: 88,
  },
  {
    month: "Nov",
    occupancy: 93,
  },
  {
    month: "Dec",
    occupancy: 97,
  },
];

export default function OccupancyChart() {
  const currentOccupancy =
    occupancyData[
      occupancyData.length - 1
    ].occupancy;

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
        duration: 0.4,
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
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Occupancy Rate
          </h2>

          <p className="mt-2 text-slate-500">
            Monthly apartment occupancy
            performance.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-2">
          <TrendingUp
            size={18}
            className="text-emerald-600"
          />

          <span className="font-semibold text-emerald-700">
            {currentOccupancy}%
          </span>
        </div>
      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            Average
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            84%
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            Highest
          </p>

          <h3 className="mt-2 text-2xl font-bold text-emerald-600">
            97%
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            Lowest
          </p>

          <h3 className="mt-2 text-2xl font-bold text-orange-500">
            62%
          </h3>
        </div>
      </div>

      {/* Chart */}

      <div className="mt-10 h-[360px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={occupancyData}
          >
            <defs>
              <linearGradient
                id="occupancyGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) =>
                `${value}%`
              }
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "none",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.12)",
              }}
              formatter={(value) => [
                `${value}%`,
                "Occupancy",
              ]}
            />

            <Area
              type="monotone"
              dataKey="occupancy"
              stroke="#2563eb"
              strokeWidth={4}
              fill="url(#occupancyGradient)"
              activeDot={{
                r: 7,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <Calendar
            size={18}
            className="text-primary"
          />

          <span className="text-sm text-slate-600">
            Updated Monthly
          </span>
        </div>

        <span className="text-sm font-medium text-slate-500">
          Last Updated: Today
        </span>
      </div>
    </motion.section>
  );
}