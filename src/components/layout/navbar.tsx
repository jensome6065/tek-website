"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  // Close the mobile menu when the route changes (e.g. back/forward).
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        // Fixed height keeps nav chrome from shifting on scroll (CLS)
        "fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled || open
          ? "border-b border-border/60 bg-background/90 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative z-10 flex items-center gap-3"
        >
          <Image
            src="/logos/tek-circle.png"
            alt="TEK at UMass Amherst"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span
            className={cn(
              "hidden text-sm font-semibold tracking-tight sm:block",
              overHero ? "text-white" : "text-dark-neutral"
            )}
          >
            TEK
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                overHero
                  ? "text-white/70 hover:text-white"
                  : pathname === link.href
                    ? "text-dark-blue"
                    : "text-muted hover:text-dark-neutral"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle
            className={
              overHero
                ? "text-white hover:bg-white/10"
                : undefined
            }
          />
          <Button
            asChild
            size="sm"
            className={
              overHero
                ? "bg-surface-inverse text-brand hover:bg-surface-inverse/90"
                : undefined
            }
          >
            <Link href="/recruitment">Join TEK</Link>
          </Button>
        </div>

        <div className="relative z-10 flex items-center gap-1 lg:hidden">
          <ThemeToggle
            className={
              overHero
                ? "text-white hover:bg-white/10"
                : undefined
            }
          />
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full",
              overHero ? "text-white" : "text-dark-neutral"
            )}
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-background/95 backdrop-blur-md lg:hidden"
          >
            <nav
              className="container-page flex h-full flex-col justify-center gap-2 pt-16"
              aria-label="Mobile"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-2xl font-semibold tracking-tight",
                      pathname === link.href
                        ? "text-dark-blue"
                        : "text-dark-neutral"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="mt-6 px-4"
              >
                <Button asChild size="lg" className="w-full">
                  <Link href="/recruitment" onClick={() => setOpen(false)}>
                    Join TEK
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
