


"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

export default function AuthButtons() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Link href="/auth/login">
        <Button variant="ghost">
          Login
        </Button>
      </Link>

      <Link href="/auth/register">
        <Button variant="outline">
          Register
        </Button>
      </Link>

      <Link href="/apartments">
        <Button>
          Book Now
        </Button>
      </Link>
    </div>
  );
}