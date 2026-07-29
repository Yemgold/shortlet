


"use client";

import { useState } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <>
      <DesktopNav />

      <MobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      />
    </>
  );
}