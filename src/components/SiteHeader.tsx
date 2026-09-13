"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/product-1", label: "Products" },
  { href: "/private-bookings", label: "Private" },
  { href: "/hens-parties", label: "Hens" },
  { href: "/corporate-organisational", label: "Corporate" },
  { href: "/the-village", label: "Village" },
  { href: "/a-deeper-dive", label: "A Deeper Dive" },
  { href: "/galleries", label: "Galleries" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071119]/35 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-10 md:py-4">
        <Link href="/" className="min-w-0 leading-none" onClick={closeMenu}>
          <span className="block text-3xl font-black uppercase tracking-[0.14em]">VIBE</span>
          <span className="block text-[8px] font-black uppercase tracking-[0.24em] text-white/70">Events & Experiences</span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white/12 hover:text-white ${
                pathname === item.href ? "bg-white/12 text-white" : "text-white/82"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/private-bookings"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-[#071119] shadow-sm transition hover:bg-[#ff8fb8] sm:inline-flex"
            onClick={closeMenu}
          >
            Get in Touch
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white transition hover:bg-white/18 xl:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
              <span className={`h-0.5 w-full rounded-full bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full rounded-full bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>
      <div
        id="mobile-navigation"
        className={`border-t border-white/10 bg-[#071119]/95 px-4 pb-5 pt-2 shadow-2xl backdrop-blur-xl xl:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto grid max-w-[1440px] gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-3 text-sm font-bold transition hover:bg-white/12 ${
                pathname === item.href ? "bg-white/12 text-white" : "text-white/82"
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/private-bookings"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-[#071119] shadow-sm transition hover:bg-[#ff8fb8] sm:hidden"
            onClick={closeMenu}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
