import Link from "next/link";

function FooterIcon({ path, className = "h-4 w-4" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons = {
  instagram: "M4 4h16v16H4z M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M16 7h.01",
  facebook: "M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z",
  youtube: "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z M10 9.5v5l4.5-2.5z",
  tiktok: "M14 3v10.5a2.5 2.5 0 1 1-2.5-2.5 M14 3c0 2.5 2 4.5 4.5 4.5",
  linkedin: "M4 4h16v16H4z M8 10v6 M8 7.5v.01 M12 10v6 M12 13c0-2 3-3 4-1v4",
  mail: "M4 6h16v12H4z M4 6l8 7 8-7",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  phone: "M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2C11.5 20 4 12.5 4 5a2 2 0 0 1 2-2z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
};

const exploreLinks = [
  { href: "/events", label: "Events" },
  { href: "/product-1", label: "Products" },
  { href: "/the-village", label: "The Village" },
  { href: "/a-deeper-dive", label: "A Deeper Dive" },
  { href: "/galleries", label: "Galleries" },
];

const experienceLinks = [
  { href: "/private-bookings", label: "Private Bookings" },
  { href: "/hens-parties", label: "Hens Parties" },
  { href: "/corporate-organisational", label: "Corporate & Organisational" },
  { href: "/about", label: "About / Our Story" },
];

const socials = [
  { label: "Instagram", icon: icons.instagram, href: "https://instagram.com" },
  { label: "Facebook", icon: icons.facebook, href: "https://facebook.com" },
  { label: "YouTube", icon: icons.youtube, href: "https://youtube.com" },
  { label: "TikTok", icon: icons.tiktok, href: "https://tiktok.com" },
  { label: "LinkedIn", icon: icons.linkedin, href: "https://linkedin.com" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#071119] text-white">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#ff8fb8]/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-block leading-none">
              <span className="block text-3xl font-black uppercase tracking-[0.14em]">VIBE</span>
              <span className="block text-[9px] font-black uppercase tracking-[0.24em] text-white/55">Events & Experiences</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              Unforgettable experiences around the world &mdash; hosted events, private celebrations, hens parties,
              corporate experiences and deeper travel, across Australia, the UK and Europe.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-[#ff8fb8] hover:bg-[#ff8fb8] hover:text-[#071119]"
                >
                  <FooterIcon path={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/45">Explore</p>
            <div className="mt-4 grid gap-2.5 text-sm">
              <Link href="/" className="text-white/75 transition hover:text-white">Home</Link>
              {exploreLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/45">Experiences</p>
            <div className="mt-4 grid gap-2.5 text-sm">
              {experienceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/45">Stay in the loop</p>
            <p className="mt-4 text-sm leading-6 text-white/70">Get first access to new events, cities and experiences.</p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5 focus-within:border-[#ff8fb8]">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/40"
              />
              <button type="submit" aria-label="Subscribe" className="grid w-12 shrink-0 place-items-center bg-[#ff8fb8] text-[#071119] transition hover:bg-white">
                <FooterIcon path={icons.arrow} className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a href="mailto:hello@vibe.example" className="flex items-center gap-2 transition hover:text-white">
                <FooterIcon path={icons.mail} className="h-4 w-4 shrink-0" /> hello@vibe.example
              </a>
              <p className="flex items-center gap-2">
                <FooterIcon path={icons.pin} className="h-4 w-4 shrink-0" /> Sydney &middot; London &middot; Berlin
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-4 border-t border-white/10 pt-7 text-center text-xs text-white/50 md:grid-cols-3">
          <p className="md:text-left">© {new Date().getFullYear()} VIBE. All rights reserved.</p>
          <a
            href="https://reinsoft.tech/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white/70 transition hover:text-[#ff8fb8]"
          >
            Designed &amp; Developed by <span className="text-[#ff8fb8]">ReinSoft IT SOLUTIONS</span>
          </a>
          <span className="font-bold text-white/70 md:text-right">Good People, Better Experiences</span>
        </div>
      </div>
    </footer>
  );
}

