"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(92,26,43,0.08),0_8px_24px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-maroon hover:text-maroon-deep transition-colors"
          aria-label="SHE home"
        >
          <Logo variant="mark" size={36} />
          <span className="font-display uppercase tracking-[0.28em] text-sm text-maroon">
            SHE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.slice(0, -1).map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display uppercase tracking-[0.22em] text-[11px] transition-colors ${
                  active ? "text-maroon" : "text-ink/70 hover:text-maroon"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          {pathname !== "/donate" ? (
            <Button href="/donate" size="sm" variant="primary">
              Donate
            </Button>
          ) : (
            <div className="w-[96px]" aria-hidden />
          )}
        </div>

        <button
          type="button"
          className="md:hidden relative w-10 h-10 text-maroon flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`absolute w-6 h-[1.5px] bg-current transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute w-6 h-[1.5px] bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute w-6 h-[1.5px] bg-current transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-8 pt-2 bg-ivory/95 backdrop-blur-md border-t border-maroon/10">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-4 font-display uppercase tracking-[0.22em] text-sm border-b border-maroon/10 last:border-b-0 ${
                  active ? "text-maroon" : "text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
