"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { hosts, getFeaturedHost } from "@/lib/data/hosts";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroImage =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2200&auto=format&fit=crop";

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons = {
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  heart: "M12 21s-7.5-4.8-10-9.3C0 8 2 4.5 5.6 4.5c2 0 3.6 1 4.4 2.6.8-1.6 2.4-2.6 4.4-2.6C18 4.5 20 8 20 11.7 17.5 16.2 12 21 12 21z",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3",
  filter: "M4 6h16 M7 12h10 M10 18h4",
  arrow: "M5 12h14 M13 6l6 6-6 6",
};

const stats = [
  { icon: icons.users, value: "50+", label: "Amazing Hosts" },
  { icon: icons.pin, value: "15+", label: "Destinations" },
  { icon: icons.star, value: "1000+", label: "Happy Guests" },
  { icon: icons.heart, value: "4.9", label: "Average Rating" },
];

const highlights = [
  { title: "Local Expertise", text: "Insider knowledge", icon: icons.pin, tint: "bg-[#d8f3ff]" },
  { title: "Unique Personalities", text: "Authentic experiences", icon: icons.users, tint: "bg-[#ffd0df]" },
  { title: "Diverse Locations", text: "Australia, UK & Europe", icon: icons.globe, tint: "bg-[#cdf8dc]" },
  { title: "Handpicked Hosts", text: "Quality you can trust", icon: icons.star, tint: "bg-[#fff0ce]" },
  { title: "Memorable Moments", text: "More than just events", icon: icons.heart, tint: "bg-[#ecd7ff]" },
];

export function TheVillageLanding() {
  const [query, setQuery] = useState("");
  const featuredHost = getFeaturedHost();

  const filteredHosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return hosts;
    return hosts.filter(
      (host) =>
        host.name.toLowerCase().includes(q) ||
        host.location.toLowerCase().includes(q) ||
        host.tags.some((tag) => tag.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      <section className="relative min-h-[62vh] overflow-hidden bg-[#071119] text-white">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/50 to-[#071119]/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[62vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.55em] text-white/80">The Village</p>
            <h1 className="mt-5 max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
              Meet Our Incredible Hosts
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/86">
              Passionate people. Unforgettable experiences. Our hosts bring destinations to life with their local
              knowledge, unique stories and infectious energy.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#hosts" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
                Meet the Hosts
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="absolute bottom-14 right-5 hidden items-center gap-3 rounded-[20px] border border-white/25 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl lg:flex"
          >
            <Icon path={icons.users} className="h-8 w-8 text-white/85" />
            <div>
              <p className="text-sm font-black">A Community</p>
              <p className="text-xs text-white/70">of Local Experts</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:grid-cols-2 md:px-12 lg:grid-cols-5">
        {highlights.map((item) => (
          <motion.div {...reveal} key={item.title} className="flex items-center gap-4">
            <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${item.tint} text-[#071119]`}>
              <Icon path={item.icon} className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-black">{item.title}</h3>
              <p className="text-xs text-[#66717b]">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section id="hosts" className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Our hosts</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              The People Behind The Experiences
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#59636d]">
              From lively event hosts to expert guides, our community of incredible people are here to make your
              experience truly special.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-4">
              <Icon path={icons.search} className="h-4 w-4 text-[#66717b]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search hosts by name or location..."
                className="w-56 bg-transparent text-sm outline-none placeholder:text-[#8b96a0] sm:w-64"
              />
            </div>
            <button type="button" className="flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-bold text-[#101b24] transition hover:bg-[#071119] hover:text-white">
              <Icon path={icons.filter} className="h-4 w-4" />
              Filter
            </button>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {filteredHosts.map((host) => (
            <motion.div {...reveal} key={host.slug}>
              <Link href={`/the-village/${host.slug}`} className="group block overflow-hidden rounded-[18px] bg-white shadow-sm transition hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${host.photo})` }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-black">{host.name}</p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-[#66717b]">
                        <Icon path={icons.pin} className="h-3.5 w-3.5" />
                        {host.location}
                      </p>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/10 text-[#101b24] transition group-hover:bg-[#071119] group-hover:text-white">
                      <Icon path={icons.arrow} className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {host.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#f1eee6] px-3 py-1 text-[11px] font-bold text-[#59636d]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {filteredHosts.length === 0 ? (
            <p className="col-span-full py-10 text-center text-sm text-[#66717b]">No hosts match your search.</p>
          ) : null}
        </div>
      </section>

      <section className="bg-[#071119] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-5 py-10 md:px-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <Icon path={stat.icon} className="h-6 w-6 text-white/75" />
              <div>
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="text-xs text-white/65">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <motion.div {...reveal} className="grid gap-8 lg:grid-cols-[0.6fr_1fr_0.8fr] lg:items-center">
          <div className="h-72 overflow-hidden rounded-[20px] shadow-xl lg:h-80">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${featuredHost.photo})` }} />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Featured host</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight">{featuredHost.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-[#66717b]">
              <Icon path={icons.pin} className="h-4 w-4" />
              {featuredHost.location}
            </p>
            <p className="mt-4 text-base leading-7 text-[#59636d]">{featuredHost.fullBio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredHost.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#f1eee6] px-3 py-1 text-xs font-bold text-[#59636d]">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/the-village/${featuredHost.slug}`}
              className="mt-6 inline-flex rounded-full bg-[#ff8fb8] px-7 py-3 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white"
            >
              View Full Profile &rarr;
            </Link>
          </div>
          <div className="rounded-[18px] bg-[#ffe3ed] p-7">
            <p className="text-4xl font-black text-[#ff8fb8]">&ldquo;</p>
            <p className="-mt-4 text-base italic leading-7 text-[#4c3a41]">{featuredHost.quote}</p>
            <p className="mt-5 font-black text-[#101b24]">{featuredHost.name}</p>
            <p className="text-xs text-[#8b7e76]">Host, {featuredHost.location.split(",")[0]}</p>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/55 to-[#071119]/20" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-5 py-16 text-white md:flex-row md:items-center md:px-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Become a host</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Join Our Community</h2>
            <p className="mt-3 max-w-md text-white/82">
              Are you passionate about people, experiences and your local area? We&apos;d love to hear from you.
            </p>
          </div>
          <Link href="/about" className="rounded-full border border-white/45 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">
            Learn More &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
