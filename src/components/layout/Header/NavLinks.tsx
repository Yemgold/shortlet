


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./navigation";
import { cn } from "@/lib/cn";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "font-medium transition-colors",
            pathname === item.href
              ? "text-blue-600"
              : "text-slate-700 hover:text-blue-600"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}