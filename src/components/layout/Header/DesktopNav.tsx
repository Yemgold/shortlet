


"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import { Container } from "@/components/ui";

export default function DesktopNav() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-slate-200 bg-white/90 backdrop-blur-lg lg:block">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <NavLinks />

          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}