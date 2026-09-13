"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { galleryCategories, galleryItems } from "@/lib/data/site";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroImage =
  "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2200&auto=format&fit=crop";

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons = {
  image: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M4 17l5-5 3 3 4-5 5 6",
  play: "M8 5.5v13l11-6.5-11-6.5z",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  heart: "M12 21c-1-1-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-7 10-8 11z",
  chevron: "M6 9l6 6 6-6",
};

const stats = [
  { icon: icons.image, value: "10K+", label: "Photos & Videos" },
  { icon: icons.pin, value: "50+", label: "Destinations" },
  { icon: icons.star, value: "1000+", label: "Happy Guests" },
  { icon: icons.heart, value: "200+", label: "Events Captured" },
];

type MediaFilter = "all" | "photo" | "video";

export function GalleriesLanding() {
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>("all");
  const [category, setCategory] = useState("All Categories");

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesMedia = mediaFilter === "all" || item.type === mediaFilter;
      const matchesCategory = category === "All Categories" || item.category === category;
      return matchesMedia && matchesCategory;
    });
  }, [mediaFilter, category]);

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      <section className="relative min-h-[58vh] overflow-hidden bg-[#071119] text-white">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/50 to-[#071119]/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.55em] text-white/80">Galleries</p>
            <h1 className="mt-5 max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
              Moments That Matter
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/86">
              Explore real experiences, incredible people and unforgettable destinations through our photo and
              video galleries.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#gallery" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
                View Photos &rarr;
              </a>
              <button type="button" className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">
                <Icon path={icons.play} className="h-4 w-4" /> Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-[1440px] px-5 py-10 md:px-12">
        <motion.div {...reveal} className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 rounded-full border border-black/10 bg-white p-1">
            {(["all", "photo", "video"] as MediaFilter[]).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setMediaFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-black capitalize transition ${
                  mediaFilter === filter ? "bg-[#ff8fb8] text-[#071119]" : "text-[#66717b] hover:text-[#101b24]"
                }`}
              >
                {filter === "all" ? "All" : filter === "photo" ? "Photos" : "Videos"}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-11 appearance-none rounded-full border border-black/10 bg-white pl-4 pr-9 text-sm font-bold text-[#101b24] outline-none"
              >
                <option>All Categories</option>
                {galleryCategories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <Icon path={icons.chevron} className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#66717b]" />
            </div>
            <div className="hidden h-6 w-px bg-black/10 md:block" />
            <div className="hidden flex-wrap gap-2 md:flex">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat === category ? "All Categories" : cat)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                    category === cat
                      ? "border-[#071119] bg-[#071119] text-white"
                      : "border-black/10 bg-white text-[#66717b] hover:border-[#071119] hover:text-[#101b24]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item, index) => (
            <motion.article
              {...reveal}
              key={item.id}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-[16px] bg-cover bg-center shadow-lg ${
                index < 3 ? "sm:col-span-1 lg:col-span-1 min-h-72" : "min-h-48"
              }`}
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition group-hover:from-black/85" />
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/85 text-[#071119]">
                <Icon path={item.type === "video" ? icons.play : icons.image} className="h-4 w-4" />
              </span>
              {item.type === "video" ? (
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[#071119] shadow-lg transition group-hover:scale-110">
                    <Icon path={icons.play} className="h-5 w-5" />
                  </span>
                </span>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-black text-white">{item.caption}</p>
              </div>
            </motion.article>
          ))}
          {filteredItems.length === 0 ? (
            <p className="col-span-full py-10 text-center text-sm text-[#66717b]">No media matches this filter yet.</p>
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

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1800&auto=format&fit=crop)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/65 to-[#071119]/30" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-5 py-16 text-white md:flex-row md:items-center md:px-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Share your moments</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Be Part of Our Story</h2>
            <p className="mt-3 max-w-md text-white/82">
              Tag us in your photos and videos for a chance to be featured in our gallery.
            </p>
          </div>
          <a href="#gallery" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
            Share Your Experience &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
