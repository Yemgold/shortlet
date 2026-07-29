



"use client";

import Link from "next/link";
import {
  MapPinOff,
  RefreshCw,
  Search,
  Home,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  showReset?: boolean;
  onReset?: () => void;
}

export default function EmptyState({
  title = "No destinations found",
  description = "We couldn't find any destinations matching your search. Try adjusting your filters or explore all available cities.",
  showReset = true,
  onReset,
}: EmptyStateProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm md:p-16">
          {/* Icon */}

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <MapPinOff size={42} />
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-3xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>

          {/* Suggestions */}

          <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-left">
            <h3 className="mb-4 font-semibold text-slate-900">
              Try one of these:
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-3">
                <Search
                  size={18}
                  className="text-blue-600"
                />
                Search another city.
              </li>

              <li className="flex items-center gap-3">
                <Search
                  size={18}
                  className="text-blue-600"
                />
                Remove some filters.
              </li>

              <li className="flex items-center gap-3">
                <Search
                  size={18}
                  className="text-blue-600"
                />
                Browse all destinations.
              </li>
            </ul>
          </div>

          {/* Actions */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {showReset && (
              <Button
                variant="outline"
                leftIcon={<RefreshCw size={18} />}
                onClick={onReset}
              >
                Reset Filters
              </Button>
            )}

            <Link href="/apartments">
              <Button leftIcon={<Home size={18} />}>
                Browse Apartments
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}