"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

interface Props {
  onView?: () => void;
  onBook?: () => void;
}

export default function ApartmentActions({
  onView,
  onBook,
}: Props) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
  <Button
    variant="outline"
    className="w-full"
    onClick={onView}
  >
    View Details
  </Button>

  <Button
    className="w-full"
    rightIcon={<ArrowRight size={18} />}
    onClick={onBook}
  >
    Book Now
  </Button>
</div>
    
  );
}

