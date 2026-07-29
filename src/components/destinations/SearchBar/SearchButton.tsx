


"use client";

import { Search } from "lucide-react";

import Button from "@/components/ui/Button";

export default function SearchButton() {
  return (
    <div className="flex items-end">
      <Button
        className="h-[60px] w-full rounded-2xl"
        leftIcon={<Search size={18} />}
      >
        Explore
      </Button>
    </div>
  );
}