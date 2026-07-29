


"use client";

import { Search, Calendar, MapPin, Users } from "lucide-react";
import { Button, Card } from "@/components/ui";

export default function HeroSearch() {
  return (
    <Card
      className="w-full rounded-3xl bg-white p-4 shadow-2xl"
      padding="none"
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Destination */}

        <div className="rounded-2xl p-4 transition hover:bg-slate-50">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs font-semibold text-slate-500">
                Destination
              </p>

              <p className="text-sm font-medium">
                Where are you going?
              </p>
            </div>
          </div>
        </div>

        {/* Check In */}

        <div className="rounded-2xl p-4 transition hover:bg-slate-50">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs font-semibold text-slate-500">
                Check In
              </p>

              <p className="text-sm font-medium">
                Select date
              </p>
            </div>
          </div>
        </div>

        {/* Check Out */}

        <div className="rounded-2xl p-4 transition hover:bg-slate-50">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs font-semibold text-slate-500">
                Check Out
              </p>

              <p className="text-sm font-medium">
                Select date
              </p>
            </div>
          </div>
        </div>

        {/* Guests */}

        <div className="rounded-2xl p-4 transition hover:bg-slate-50">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs font-semibold text-slate-500">
                Guests
              </p>

              <p className="text-sm font-medium">
                2 Guests
              </p>
            </div>
          </div>
        </div>

        {/* Search */}

        <div className="flex items-center">
          <Button
            size="lg"
            fullWidth
            leftIcon={<Search size={20} />}
          >
            Search
          </Button>
        </div>
      </div>
    </Card>
  );
}