




"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { useApartments } from "@/hooks/apartment/useApartments";

import { FilterSidebar } from "@/components/apartments/Filters";
import ActiveFilters from "@/components/apartments/Filters/ActiveFilters";

import ListingsHeader from "./ListingsHeader";
import ListingsContent from "./ListingsContent";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

import { Pagination } from "@/components/apartments/Pagination";

import type { ViewType } from "@/components/apartments/ViewSwitcher";
import type { SortOption } from "@/components/apartments/SortDropdown";
import type { Apartment } from "@/types/apartment";

export default function ListingsSection() {
  const [view, setView] = useState<ViewType>("grid");
  const [sort, setSort] = useState<SortOption>("recommended");

  const {
  data: apartments = [],
  isLoading,
  isError,
  refetch,
} = useApartments();
 

  const activeFilters = [
    { key: "city", label: "Lagos" },
    { key: "type", label: "Apartment" },
    { key: "guests", label: "2 Guests" },
  ];

  return (
    <Section className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          <main>
            {isLoading && <LoadingState />}

            {isError && (
              <ErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && (
              <>
                <ListingsHeader
                  apartmentCount={apartments.length}
                  view={view}
                  onViewChange={setView}
                  sort={sort}
                  onSortChange={setSort}
                />

                <ActiveFilters
                  filters={activeFilters}
                  onRemove={(key) => console.log("Remove filter:", key)}
                  onClearAll={() => console.log("Clear all filters")}
                />

                <ListingsContent
                  apartments={apartments}
                  view={view}
                />

                <div className="mt-16 flex justify-center">
                  <Pagination />
                </div>
              </>
            )}
          </main>
        </div>
      </Container>
    </Section>
  );
}








