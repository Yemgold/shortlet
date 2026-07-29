


"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Heading } from "@/components/ui";

export default function FeaturedHeader() {
  return (
    <div className="mb-14 flex flex-col items-center justify-between gap-6 lg:flex-row">
      <Heading
        title="Featured Apartments"
        subtitle="Discover carefully selected luxury apartments across Nigeria."
      />

      <Link href="/apartments">
        <Button
          variant="outline"
          rightIcon={<ArrowRight size={18} />}
        >
          View All Apartments
        </Button>
      </Link>
    </div>
  );
}