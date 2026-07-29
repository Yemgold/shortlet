


"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/cn";

import Logo from "./Logo";
import { navigation } from "./navigation";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileNav({
  open,
  onOpenChange,
}: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [onOpenChange]);

  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg lg:hidden">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Logo />

            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => onOpenChange(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onOpenChange(false)}
            />

            {/* Drawer */}

            <motion.aside
              className="fixed left-0 top-0 z-50 flex h-full w-80 max-w-[90%] flex-col bg-white shadow-2xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
            >
              <div className="flex items-center justify-between border-b p-5">
                <Logo />

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                >
                  <X size={20} />
                </Button>
              </div>

              <nav className="flex flex-1 flex-col p-5">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 font-medium transition-colors",
                      pathname === item.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="space-y-3 border-t p-5">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    fullWidth
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    variant="outline"
                    fullWidth
                  >
                    Register
                  </Button>
                </Link>

                <Link href="/apartments">
                  <Button fullWidth>
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}