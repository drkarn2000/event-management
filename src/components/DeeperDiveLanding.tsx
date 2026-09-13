"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  deeperDiveTestimonials,
  experienceCategories,
  experiences,
  getFeaturedExperience,
} from "@/lib/data/site";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroImage =
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2200&auto=format&fit=crop";

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons: Record<string, string> = {
  leaf: "M5 21c8 0 15-7 15-15V4h-2C10 4 3 11 3 19v2z M5 21c2-6 6-10 12-12",
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  gem: "M6 3h12l3 5-9 13L3 8l3-5z M3 8h18 M9 3l3 5 3-5 M12 8l-3 13 3-13 3 13-3-13",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M14.5 9.5l-2 5-5 2 2-5 5-2z",
  utensils: "M6 3v7a2 2 0 0 0 2 2v9 M6 3v7 M9 3v7 M9 10v9 M17 3c-1.5 1.5-2 3-2 5s.5 3.5 2 5v9",
  landmark: "M4 21h16 M5 21V10 M19 21V10 M3 10l9-6 9 6 M9 21v-7 M15 21v-7",
  lotus: "M12 4c1.5 2 2 4 2 6a2 2 0 1 1-4 0c0-2 .5-4 2-6z M6 10c1 1.5 2.5 2.5 4 3 M18 10c-1 1.5-2.5 2.5-4 3 M4 15c3 1 5 3 8 3s5-2 8-3",
  palette: "M12 21a9 9 0 1 1 0-18c4 0 8 2.5 8 6.5 0 2-1.5 3.5-3.5 3.5H15a1.5 1.5 0 0 0-1 2.6c.3.3.5.8.5 1.2 0 1-1 2.2-2.5 2.2z M7.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M10.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M15 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  heart: "M12 21c-1-1-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-7 10-8 11z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z",
  shield: "M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z",
  play: "M8 5.5v13l11-6.5-11-6.5z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
};

const highlights = [
  { title: "Authentic Experiences", text: "Real connections, not tourist traps", icon: icons.leaf, tint: "bg-[#cdf8dc]" },
  { title: "Led by Locals", text: "Passionate and knowledgeable hosts", icon: icons.users, tint: "bg-[#dbe7ff]" },
  { title: "Small Groups", text: "More meaningful moments", icon: icons.gem, tint: "bg-[#ffd0df]" },
  { title: "Sustainable Travel", text: "Positive impact on communities", icon: icons.leaf, tint: "bg-[#cdf8dc]" },
];

const purposePoints = [
  { title: "Support Local Communities", text: "Your experience makes a difference", icon: icons.globe, tint: "bg-[#dbe7ff]" },
  { title: "Small Group Impact", text: "More connection, less footprint", icon: icons.users, tint: "bg-[#cdf8dc]" },
  { title: "Sustainable Travel", text: "Respecting people and places", icon: icons.leaf, tint: "bg-[#ffd0df]" },
  { title: "Safe & Trusted", text: "Your experience, our priority", icon: icons.shield, tint: "bg-[#fff0ce]" },
];

export function DeeperDiveLanding() {
  const featured = getFeaturedExperience();
  const popular = experiences.filter((experience) => !experience.featured).slice(0, 4);
  const [likedSlugs, setLikedSlugs] = useState<string[]>([]);

  const toggleLike = (slug: string) => {
    setLikedSlugs((current) => (current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug]));
  };

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/45 to-[#071119]/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[62vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.55em] text-white/80">A Deeper Dive</p>
            <h1 className="mt-5 max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
              More Than Just an Event
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/86">
              Go beyond the ordinary with immersive experiences that connect you to people, places and new
              perspectives.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#experiences" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
                Explore Experiences &rarr;
              </a>
              <button type="button" className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">
                <Icon path={icons.play} className="h-4 w-4" /> Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:grid-cols-2 md:px-12 lg:grid-cols-4">
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

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Explore</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">Deeper Experiences</h2>
          <p className="mt-5 text-lg leading-8 text-[#59636d]">
            From hands-on workshops to cultural immersion, our Deeper Dive experiences are designed for curious
            minds and open hearts. Discover a new side of every destination through unique activities and local
            insights.
          </p>
        </motion.div>
        <motion.div {...reveal} className="relative min-h-64 overflow-hidden rounded-[20px] shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${featured.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#071119]/95" />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col justify-center p-7 text-white">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-white/65">Featured experience</p>
            <h3 className="mt-3 text-2xl font-black">{featured.title}</h3>
            <p className="mt-2 flex items-center gap-1 text-xs text-white/70">
              <Icon path={icons.pin} className="h-3.5 w-3.5" /> {featured.location}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/80">{featured.tagline}</p>
            <a
              href="#experiences"
              className="mt-5 grid h-10 w-10 place-items-center rounded-full bg-[#ff8fb8] text-[#071119] transition hover:bg-white"
            >
              <Icon path={icons.arrow} className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="experiences" className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black tracking-tight">Experience Categories</h2>
          <Link href="/a-deeper-dive" className="text-sm font-black text-[#101b24]">View All Experiences &rarr;</Link>
        </motion.div>
        <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {experienceCategories.map((category) => (
            <motion.article
              {...reveal}
              key={category.slug}
              whileHover={{ y: -6 }}
              className="relative min-h-40 overflow-hidden rounded-[16px] bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <Icon path={icons[category.icon] ?? icons.compass} className="h-5 w-5" />
                <h3 className="mt-2 text-sm font-black leading-tight">{category.title}</h3>
                <p className="mt-0.5 text-[11px] text-white/75">{category.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black tracking-tight">Popular Experiences</h2>
          <Link href="/a-deeper-dive" className="text-sm font-black text-[#101b24]">View All Experiences &rarr;</Link>
        </motion.div>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((experience) => {
            const liked = likedSlugs.includes(experience.slug);
            return (
              <motion.div {...reveal} key={experience.slug} className="group overflow-hidden rounded-[18px] bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${experience.image})` }}
                  />
                  <button
                    type="button"
                    aria-label="Save experience"
                    onClick={() => toggleLike(experience.slug)}
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#101b24] shadow"
                  >
                    <Icon path={icons.heart} className={`h-4 w-4 ${liked ? "fill-[#ff8fb8] text-[#ff8fb8]" : ""}`} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-black leading-tight">{experience.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-[#66717b]">
                    <Icon path={icons.pin} className="h-3.5 w-3.5" /> {experience.location}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="flex items-center gap-1 text-sm font-bold text-[#101b24]">
                      <span className="text-[#ffb000]">★</span> {experience.rating}
                      <span className="font-normal text-[#8b96a0]">({experience.reviewCount})</span>
                    </p>
                    <p className="text-sm font-black text-[#101b24]">From ${experience.price}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="grid gap-8 rounded-[24px] bg-[#f1eee6] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative h-64 overflow-hidden rounded-[18px] shadow-lg lg:h-72">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1200&auto=format&fit=crop)" }}
            />
            <div className="absolute inset-0 grid place-items-center bg-black/30">
              <div className="text-center text-white">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[#071119]">
                  <Icon path={icons.play} className="h-5 w-5" />
                </div>
                <p className="mt-3 font-black">Watch Our Story</p>
                <p className="text-xs text-white/80">A glimpse into our Deeper Dive experiences</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#8b7e76]">Why go deeper?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Travel with Purpose</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#59636d]">
              Our Deeper Dive experiences are designed to create meaningful connections &mdash; with local people,
              unique places and new perspectives. It&apos;s travel that leaves a positive impact, on you and the
              communities you visit.
            </p>
            <Link href="/about" className="mt-6 inline-flex rounded-full bg-[#ff8fb8] px-7 py-3 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white">
              Our Philosophy &rarr;
            </Link>
            <div className="mt-7 grid grid-cols-2 gap-5">
              {purposePoints.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${point.tint} text-[#071119]`}>
                    <Icon path={point.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-black leading-tight">{point.title}</p>
                    <p className="text-[11px] text-[#66717b]">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#8b7e76]">What our guests say</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Life-Changing Moments</h2>
          </div>
          <Link href="/galleries" className="text-sm font-black text-[#101b24]">View More Testimonials &rarr;</Link>
        </motion.div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {deeperDiveTestimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[18px] bg-white p-6 shadow-sm">
              <p className="text-sm leading-6 text-[#59636d]">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${testimonial.avatar})` }} />
                <div>
                  <p className="font-black">{testimonial.name}</p>
                  <p className="text-[#ffb000] text-sm">{"★".repeat(testimonial.rating)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/70 to-[#071119]/40" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-5 py-16 text-white md:flex-row md:items-center md:px-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Ready to explore?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Start Your Deeper Dive</h2>
            <p className="mt-3 max-w-md text-white/82">Discover experiences that go beyond the ordinary.</p>
          </div>
          <a href="#experiences" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
            Explore Experiences &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
