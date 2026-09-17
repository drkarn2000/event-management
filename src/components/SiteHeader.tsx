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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071119]/80 text-white backdrop-blur-xl transition-all">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-10 md:py-3.5">
        <Link href="/" className="flex items-center min-w-0 group" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="VEYORA Events & Experiences"
            className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200 hover:bg-white/12 hover:text-white hover:scale-105 ${
                pathname === item.href ? "bg-white/15 text-white font-bold" : "text-white/82"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link
            href="/private-bookings"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#FF8FB8] hover:bg-white text-[#071119] font-black px-5 py-2.5 text-xs md:text-sm shadow-md transition-all hover:shadow-[0_0_20px_rgba(255,143,184,0.45)] hover:scale-105"
            onClick={closeMenu}
          >
            <span>Plan Your Event</span>
            <span className="text-sm">→</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white transition hover:bg-white/20 hover:scale-105 xl:hidden"
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
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FF8FB8] hover:bg-white px-5 py-3 text-sm font-black text-[#071119] shadow-sm transition sm:hidden"
            onClick={closeMenu}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
