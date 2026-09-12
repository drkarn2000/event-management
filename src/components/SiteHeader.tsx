import Link from "next/link";

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
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071119]/35 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 md:px-10">
        <Link href="/" className="leading-none">
          <span className="block text-3xl font-black uppercase tracking-[0.14em]">VIBE</span>
          <span className="block text-[8px] font-black uppercase tracking-[0.24em] text-white/70">Events & Experiences</span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/82 transition hover:bg-white/12 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/private-bookings"
          className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#071119] shadow-sm transition hover:bg-[#ff8fb8]"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
