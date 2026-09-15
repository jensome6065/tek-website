"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/data/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu when the route changes (e.g. back/forward).
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  const closeMenu = useCallback(() => setOpen(false), []);

  // Keep a subtle dark scrim over the hero so white chrome stays readable
  // on lighter photo areas (right side of the hero wash).
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

  // Hide page content from assistive tech while the mobile dialog is open.
  useEffect(() => {
    if (!open) return;
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    return () => {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  // Trap within the header so theme toggle + close stay reachable.
  useFocusTrap(open, headerRef, closeMenu, "#mobile-nav a");

  return (
    <header
      ref={headerRef}
      className={cn(
        // Fixed height keeps nav chrome from shifting on scroll (CLS)
        "fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled || open
          ? "border-b border-border/60 bg-background shadow-soft"
          : overHero
            ? "border-b border-transparent bg-black/35 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative z-10 flex min-h-11 min-w-11 items-center gap-3"
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
                "rounded-full px-3 py-2.5 text-sm font-medium transition-colors",
                overHero
                  ? "text-white hover:text-white"
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
              overHero ? "text-white hover:bg-white/15" : undefined
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
              overHero ? "text-white hover:bg-white/15" : undefined
            }
          />
          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full",
              overHero ? "text-white" : "text-dark-neutral"
            )}
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            // top-16 clears the fixed header chrome so links never sit underneath it
            className="fixed inset-x-0 top-16 bottom-0 z-0 bg-background lg:hidden"
          >
            <nav
              className="container-page flex h-full flex-col gap-1 overflow-y-auto overscroll-contain py-6"
              aria-label="Mobile"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : index * 0.04,
                    duration: prefersReducedMotion ? 0 : 0.3,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "block min-h-12 rounded-xl px-4 py-3 text-2xl font-semibold tracking-tight",
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
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : navLinks.length * 0.04,
                  duration: prefersReducedMotion ? 0 : 0.3,
                }}
                className="mt-6 px-4 pb-4"
              >
                <Button asChild size="lg" className="w-full">
                  <Link href="/recruitment" onClick={closeMenu}>
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
