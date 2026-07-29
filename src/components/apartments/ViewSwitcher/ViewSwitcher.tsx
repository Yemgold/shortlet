



"use client";

import {
  Grid2X2,
  List,
  Map,
} from "lucide-react";

export type ViewType =
  | "grid"
  | "list"
  | "map";

interface ViewSwitcherProps {
  value: ViewType;
  onChange: (view: ViewType) => void;
}

const views = [
  {
    value: "grid" as const,
    label: "Grid",
    icon: Grid2X2,
  },
  {
    value: "list" as const,
    label: "List",
    icon: List,
  },
  {
    value: "map" as const,
    label: "Map",
    icon: Map,
  },
];

export default function ViewSwitcher({
  value,
  onChange,
}: ViewSwitcherProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-1
        shadow-sm
      "
    >
      {views.map((view) => {
        const Icon = view.icon;
        const active = value === view.value;

        return (
          <button
            key={view.value}
            type="button"
            onClick={() => onChange(view.value)}
            className={`
              flex
              items-center
              gap-2
              rounded-xl
              px-5
              py-3
              text-sm
              font-semibold
              transition-all
              duration-200

              ${
                active
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100"
              }
            `}
          >
            <Icon size={18} />

            <span>{view.label}</span>
          </button>
        );
      })}
    </div>
  );
}