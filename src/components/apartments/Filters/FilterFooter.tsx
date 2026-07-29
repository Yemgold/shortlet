


"use client";

import {
  RotateCcw,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui";

interface FilterFooterProps {
  results?: number;
  loading?: boolean;
  onReset?: () => void;
  onApply?: () => void;
}

export default function FilterFooter({
  results = 245,
  loading = false,
  onReset,
  onApply,
}: FilterFooterProps) {
  return (
    <div className="space-y-5">
      {/* Results */}

      <div className="rounded-2xl bg-slate-100 p-4 text-center">
        <p className="text-sm text-slate-500">
          Matching Apartments
        </p>

        <h3 className="mt-1 text-3xl font-bold text-slate-900">
          {results.toLocaleString()}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Ready to explore
        </p>
      </div>

      {/* Buttons */}

      <div className="flex gap-3">
        <Button
          variant="outline"
          fullWidth
          leftIcon={<RotateCcw size={18} />}
          onClick={onReset}
        >
          Reset
        </Button>

        <Button
          fullWidth
          loading={loading}
          leftIcon={<Search size={18} />}
          onClick={onApply}
        >
          Show {results.toLocaleString()}
        </Button>
      </div>
    </div>
  );
}