



"use client";

import { Search, CalendarDays, MapPin, Users } from "lucide-react";

import { Button, Card } from "@/components/ui";

export default function HeroSearch() {
  return (
    <Card className="mt-10 rounded-3xl bg-white p-3 shadow-2xl">
      <div className="grid gap-3 lg:grid-cols-5">
        <SearchItem
          icon={<MapPin size={18} />}
          title="Destination"
          value="Lagos, Nigeria"
        />

        <SearchItem
          icon={<CalendarDays size={18} />}
          title="Check In"
          value="Select Date"
        />

        <SearchItem
          icon={<CalendarDays size={18} />}
          title="Check Out"
          value="Select Date"
        />

        <SearchItem
          icon={<Users size={18} />}
          title="Guests"
          value="2 Guests"
        />

        <Button
          size="lg"
          className="h-full"
          leftIcon={<Search size={18} />}
        >
          Search
        </Button>
      </div>
    </Card>
  );
}

function SearchItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl p-4 transition hover:bg-slate-50">
      <div className="flex items-center gap-3">
        <div className="text-blue-600">{icon}</div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <p className="font-medium text-slate-900">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}