



"use client";

import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui";

interface FilterHeaderProps {
  results?: number;
  onReset?: () => void;
}

export default function FilterHeader({
  results = 245,
  onReset,
}: FilterHeaderProps) {
  return (
    <div className="space-y-5">
      {/* Results */}

      <div className="rounded-2xl bg-blue-50 p-4">
        <p className="text-sm text-slate-500">
          Available Apartments
        </p>

        <h3 className="mt-1 text-3xl font-bold text-slate-900">
          {results.toLocaleString()}
        </h3>

        <p className="mt-1 text-sm text-blue-600">
          Matching your search
        </p>
      </div>

      {/* Quick Actions */}

      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-slate-900">
            Refine Results
          </h4>

          <p className="text-sm text-slate-500">
            Adjust filters to narrow your search.
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          leftIcon={<RotateCcw size={16} />}
          onClick={onReset}
        >
          Reset
        </Button>
      </div>

      <div className="border-b border-slate-200" />
    </div>
  );
}