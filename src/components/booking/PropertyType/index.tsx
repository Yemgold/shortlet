



"use client";

import {
  Building2,
  Building,
  Home,
  Hotel,
  Landmark,
} from "lucide-react";

interface PropertyTypeProps {
  type: string;

  className?: string;
}

function getIcon(type: string) {
  switch (type.toLowerCase()) {
    case "apartment":
      return Building2;

    case "duplex":
      return Home;

    case "villa":
      return Landmark;

    case "hotel":
      return Hotel;

    case "penthouse":
      return Building;

    case "studio":
      return Building2;

    default:
      return Home;
  }
}

export default function PropertyType({
  type,
  className = "",
}: PropertyTypeProps) {
  const Icon = getIcon(type);

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-indigo-50
        px-3
        py-1.5
        text-sm
        font-medium
        text-indigo-700
        ${className}
      `}
    >
      <Icon size={15} />

      <span>{type}</span>
    </div>
  );
}