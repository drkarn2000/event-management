"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const storyImage =
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop";
const journeyImage =
  "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1200&auto=format&fit=crop";
const heroBgImage = "/about_hero.png";
const missionBgImage =
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2200&auto=format&fit=crop";
const teamBgImage =
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2200&auto=format&fit=crop";

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons = {
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  calendar: "M7 3v4 M17 3v4 M4 8h16 M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1z M8 12h3 M8 16h3 M14 12h2 M14 16h2",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z",
  leaf: "M5 21c8 0 15-7 15-15V4h-2C10 4 3 11 3 19v2z M5 21c2-6 6-10 12-12",
  gem: "M6 3h12l3 5-9 13L3 8l3-5z M3 8h18 M9 3l3 5 3-5 M12 8l-3 13 3-13 3 13-3-13",
  play: "M8 5.5v13l11-6.5-11-6.5z",
  linkedin: "M4 4h16v16H4z M8 10v6 M8 7.5v.01 M12 10v6 M12 13c0-2 3-3 4-1v4",
  instagram: "M4 4h16v16H4z M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M16 7h.01",
  mail: "M4 6h16v12H4z M4 6l8 7 8-7",
  arrowRight: "M5 12h14 M13 6l6 6-6 6",
};

const storyStats = [
  { icon: icons.users, value: "50K+", label: "Happy Guests" },
  { icon: icons.pin, value: "100+", label: "Unique Locations" },
  { icon: icons.star, value: "4.9", label: "Average Rating" },
  { icon: icons.globe, value: "8+", label: "Years of Experience" },
];

const missionPoints = [
  { title: "Authenticity", text: "Real people, real experiences", icon: icons.leaf, tint: "bg-[#cdf8dc]" },
  { title: "Community", text: "Bringing people together", icon: icons.users, tint: "bg-[#ecd7ff]" },
  { title: "Sustainability", text: "Positive impact on local areas", icon: icons.globe, tint: "bg-[#d8f3ff]" },
  { title: "Quality", text: "Exceptional experiences always", icon: icons.gem, tint: "bg-[#ffd0df]" },
];

const milestones = [
  { year: "2017", title: "The Idea", text: "A passion for travel sparked the vision." },
  { year: "2018", title: "First Experiences", text: "Launched our initial local experiences." },
  { year: "2020", title: "Growing Community", text: "Expanded to new destinations." },
  { year: "2022", title: "Global Reach", text: "Welcomed 50,000+ happy guests." },
  { year: "2024", title: "Bigger Impact", text: "More experiences, more communities, more unforgettable moments." },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sophie Carter",
    role: "Head of Experiences",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Liam Brooks",
    role: "Community Manager",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
];

const heroCollageImages = [
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop",
];

const heroStrip = [
  { icon: icons.users, value: "50K+", label: "Happy Guests" },
  { icon: icons.calendar, value: "100+", label: "Unique Experiences" },
  { icon: icons.pin, value: "40+", label: "Incredible Locations" },
  { icon: icons.globe, value: "A Global", label: "Community" },
];

const archPhoto = "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2200&auto=format&fit=crop";

const editorialCards = [
  {
    title: "Extraordinary Locations",
    subtitle: "From hidden gems to iconic destinations.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    icon: icons.pin,
    alt: "Santorini coastal Mediterranean architecture",
  },
  {
    title: "Unforgettable Events",
    subtitle: "Curated experiences in stunning locations.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
    icon: icons.calendar,
    alt: "Celebration crowd at curated event",
  },
  {
    title: "Passionate Locals",
    subtitle: "Authentic experiences guided by real people.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    icon: icons.leaf,
    alt: "Passionate local hosts and travelers",
  },
];

const communityAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
];

export function AboutLanding() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#FAF7F2] text-[#111827]">
      {/* Editorial Luxury Hero Section */}
      <section className="relative min-h-[920px] lg:min-h-screen overflow-hidden bg-[#FAF7F2] pt-24 sm:pt-28 md:pt-30 pb-16 lg:pb-20 flex flex-col justify-between">
        {/* Subtle Warm Photographic Atmosphere & Background Gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.98)_0%,rgba(250,247,242,0.9)_35%,rgba(245,240,233,0.7)_100%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-[650px] w-[600px] bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.9)_0%,transparent_75%)] opacity-85" />

        {/* Ambient Warm Tone & Pink Accent Glows */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#FFEBF2]/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-[#FFF2EA]/35 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1520px] px-5 sm:px-8 md:px-12 flex-1 flex flex-col justify-center">
          {/* Main Editorial Composition */}
          <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] xl:grid-cols-[0.9fr_1.1fr] xl:gap-12 pt-2 sm:pt-4">

            {/* LEFT SIDE: Editorial Typography & Information Block */}
            <div className="z-20 flex flex-col justify-between pr-0 lg:pr-4">
              {/* Eyebrow: 01 / 05 — OUR STORY */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 text-xs font-semibold tracking-wider text-[#4B5563]"
              >
                <span className="flex items-baseline">
                  <span className="font-bold text-[#FF8FB8] border-b-2 border-[#FF8FB8] pb-0.5 leading-none">01</span>
                  <span className="text-[#9CA3AF] mx-1">/</span>
                  <span className="text-[#9CA3AF]">05</span>
                </span>
                <span className="h-px w-10 sm:w-14 bg-[#D1D5DB]" />
                <span className="uppercase tracking-[0.35em] text-xs font-bold text-[#4B5563]">OUR STORY</span>
              </motion.div>

              {/* Large Luxury Serif Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 sm:mt-8 font-serif-luxury text-5xl sm:text-6xl md:text-7xl xl:text-[84px] font-normal leading-[0.95] tracking-[-0.02em] text-[#111827]"
              >
                <span className="block">Real People.</span>
                <span className="block text-[#FF8FB8] font-normal">Extraordinary</span>
                <span className="block">Experiences.</span>
              </motion.h1>

              {/* Editorial Description */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.35 }}
                className="mt-6 max-w-xl text-base sm:text-lg font-normal leading-relaxed text-[#4B5563]"
              >
                We connect people with unique experiences, incredible locations and passionate locals &ndash; creating
                moments that last a lifetime.
              </motion.p>

              {/* Minimal Luxury Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="#our-story"
                  className="group inline-flex items-center justify-center rounded-full bg-[#FF8FB8] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_10px_25px_rgba(255,143,184,0.38)] transition-all duration-300 hover:bg-[#ff7aa8] hover:shadow-[0_15px_32px_rgba(255,143,184,0.52)] hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Our Story &rarr;</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-full border border-neutral-800/80 bg-white/40 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#111827] backdrop-blur-sm transition-all duration-300 hover:bg-[#111827] hover:text-white hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-current transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-2.5 w-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span>Watch Video</span>
                </button>
              </motion.div>

              {/* BOTTOM AREA: Horizontal Information Strip */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="mt-10 sm:mt-12 pt-7 border-t border-black/10"
              >
                <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-2 lg:gap-x-3">
                  {heroStrip.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={`flex flex-col ${idx !== heroStrip.length - 1 ? "sm:border-r sm:border-black/10 sm:pr-3" : ""}`}
                    >
                      <Icon path={stat.icon} className="h-5 w-5 text-[#FF8FB8]" />
                      <p className="mt-2.5 text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-[#6B7280]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Community Avatars & Description */}
                <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 pt-5 border-t border-black/5">
                  <div className="flex items-center">
                    <div className="flex -space-x-2.5">
                      {communityAvatars.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt="Community explorer"
                          className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                        />
                      ))}
                    </div>
                    <span className="ml-2 grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#FF8FB8]/20 text-xs font-bold text-[#111827] shadow-sm">
                      +
                    </span>
                  </div>
                  <span className="hidden sm:block h-8 w-px bg-neutral-200 mx-2" />
                  <p className="text-xs text-[#6B7280] leading-snug max-w-xs font-normal">
                    A global community of explorers, creators and dreamers just like you.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Large Architectural Photo Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full pb-6 lg:pb-0"
            >
              {/* Handwritten script flourish above cards: More Than Places */}
              <div className="relative mb-2 flex justify-end pr-6 sm:pr-12 lg:pr-16">
                <div className="flex flex-col items-end">
                  <span className="font-script-neon text-4xl sm:text-5xl lg:text-[54px] text-neutral-800 leading-none select-none tracking-normal -rotate-6">
                    More Than Places
                  </span>
                  <svg className="w-28 sm:w-36 h-3 -mt-1 mr-1" viewBox="0 0 120 12" fill="none">
                    <path d="M4 6 Q 60 12, 116 4" stroke="#FF8FB8" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Main Architectural Rounded Arch Portal Container */}
              <div className="relative mx-auto w-full lg:w-[94%] xl:w-[96%] h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[680px]">
                {/* Outer Architectural Curved Plaster Surround */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-tl-[260px] sm:rounded-tl-[360px] rounded-tr-[50px] sm:rounded-tr-[60px] rounded-br-[140px] sm:rounded-br-[180px] rounded-bl-[60px] sm:rounded-bl-[70px] bg-[#EDE6DC]/70 shadow-[0_30px_70px_rgba(20,25,30,0.12)] border border-white/60 pointer-events-none" />

                {/* Main Photo Window */}
                <div className="relative w-full h-full rounded-tl-[250px] sm:rounded-tl-[345px] rounded-tr-[42px] sm:rounded-tr-[52px] rounded-br-[130px] sm:rounded-br-[168px] rounded-bl-[52px] sm:rounded-bl-[62px] overflow-hidden border-[8px] sm:border-[12px] border-[#F5EFE7] bg-[#121921] shadow-2xl">
                  {/* Twilight Sydney Opera House and Harbor Party Photograph */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{
                      backgroundImage: `url(${archPhoto})`,
                      filter: "contrast(1.06) saturate(1.18) brightness(0.96)",
                    }}
                  />

                  {/* Warm Sunset Amber/Golden Hour Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/35 via-transparent to-pink-500/15 mix-blend-color-dodge pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15 pointer-events-none" />

                  {/* Inner Arch Navigation Label: PEOPLE · PLACES · EXPERIENCES */}
                  <div className="absolute top-9 sm:top-12 left-28 sm:left-36 lg:left-40 z-20 flex items-center gap-3 sm:gap-4 text-white drop-shadow-md">
                    <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase leading-relaxed text-white/95">
                      <div>PEOPLE</div>
                      <div>PLACES</div>
                      <div>EXPERIENCES</div>
                    </div>
                    <div className="w-16 sm:w-24 h-px bg-white/60" />
                  </div>

                  {/* Bottom Right Terrace Warm Candle Lantern Glow */}
                  <div className="pointer-events-none absolute right-4 bottom-4 z-10 hidden sm:flex items-center gap-3 rounded-2xl bg-black/45 backdrop-blur-md px-4 py-2 border border-white/15 text-white/90">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                    </span>
                    <span className="text-[11px] font-medium tracking-wide">Sunset Candlelight Terrace</span>
                  </div>
                </div>

                {/* SPECIAL FEATURE: Circular Frosted Quote Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.75, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03 }}
                  className="absolute bottom-8 -left-4 sm:bottom-10 sm:-left-8 lg:bottom-12 lg:-left-10 z-30 w-56 h-56 sm:w-68 sm:h-68 lg:w-72 lg:h-72 rounded-full bg-black/55 backdrop-blur-xl border border-white/25 p-6 sm:p-7 flex flex-col justify-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] select-none"
                >
                  <span className="font-serif text-3xl sm:text-4xl text-white/40 leading-none">“</span>
                  <p className="font-serif-luxury italic text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white/95 mt-1 sm:mt-1.5">
                    &ldquo;It&apos;s not just about places, it&apos;s about the people who make them special.&rdquo;
                  </p>
                  <svg className="w-16 sm:w-20 h-3 mt-2 sm:mt-3" viewBox="0 0 80 12" fill="none">
                    <path d="M4 4 Q 40 12, 76 4" stroke="#FF8FB8" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </motion.div>

                {/* 3 ASYMMETRIC FLOATING FEATURE CARDS (Stacked on the right, overlapping arch) */}
                <div className="relative mt-8 lg:mt-0 lg:absolute lg:right-[-20px] xl:right-[-32px] lg:top-1/2 lg:-translate-y-1/2 z-30 flex flex-col gap-3.5 sm:gap-4 w-full max-w-[340px] sm:max-w-[360px] mx-auto lg:mx-0">
                  {editorialCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                      whileHover={{ scale: 1.03, x: -4 }}
                      className={`group flex items-center gap-3 sm:gap-4 rounded-[26px] sm:rounded-[30px] bg-white/95 backdrop-blur-md p-2.5 sm:p-3 pr-5 sm:pr-6 shadow-[0_12px_32px_rgba(0,0,0,0.09)] border border-white/95 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.13)] cursor-pointer ${
                        index === 1 ? "lg:translate-x-3" : index === 2 ? "lg:-translate-x-1" : ""
                      }`}
                    >
                      {/* Rounded thumbnail image */}
                      <div className="relative w-20 sm:w-24 h-14 sm:h-16 rounded-[20px] overflow-hidden shrink-0 shadow-inner bg-neutral-100">
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Circular Icon Badge */}
                      <div className="relative -ml-5 -mb-4 shrink-0 z-10">
                        <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-white shadow-md border border-neutral-100">
                          <Icon path={card.icon} className="h-4 w-4 text-[#FF8FB8]" />
                        </span>
                      </div>

                      {/* Text Details */}
                      <div className="min-w-0 pr-1">
                        <p className="text-xs sm:text-sm font-bold text-[#111827] leading-tight group-hover:text-[#FF8FB8] transition-colors">
                          {card.title}
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#6B7280] mt-0.5 leading-snug">
                          {card.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scroll Indicator in the bottom right */}
              <div className="hidden lg:flex items-center gap-3 justify-end mt-4 pr-6 xl:pr-10">
                <div className="w-5 h-8 rounded-full border border-neutral-400/80 flex items-start justify-center p-1">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-[#FF8FB8]"
                  />
                </div>
                <div className="text-[10px] font-bold tracking-[0.25em] text-neutral-600 uppercase leading-snug">
                  SCROLL TO<br />DISCOVER OUR JOURNEY
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-[#FF8FB8] hover:text-black shadow-lg"
                aria-label="Close video"
              >
                ✕
              </button>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/LXb3EKWsInQ?autoplay=1"
                  title="Our Story Video Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <section id="our-story" className="relative overflow-hidden px-5 py-20 md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${storyImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ee]/98 via-[#f7f4ee]/82 to-[#f7f4ee]/50" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f4ee] to-transparent" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <motion.div {...reveal}>
            <p className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.28em] text-[#4d5660]">
              <span className="h-0.5 w-12 bg-[#ff5c8d]" />
              Our Story
              <span className="h-0.5 w-12 bg-[#ff5c8d]" />
            </p>
            <h2 className="mt-8 max-w-2xl text-5xl font-black leading-[0.98] tracking-tight text-[#101b24] md:text-7xl">
              It Started with a <span className="block text-[#c69275]">Simple Idea</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#59636d]">
              VIBE was born from a love of travel, people and unforgettable moments. We saw an opportunity to bring
              together locals, unique experiences and like-minded people in some of the world&apos;s most incredible
              destinations.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#59636d]">
              What started as a small idea has grown into a global platform that connects thousands of people to
              extraordinary experiences across Australia, the UK and Europe.
            </p>
            <a href="#journey" className="mt-9 inline-flex rounded-full bg-[#ff5c93] px-10 py-4 text-base font-black text-[#071119] shadow-lg shadow-[#ff5c93]/20 transition hover:bg-[#071119] hover:text-white">
              Our Journey &rarr;
            </a>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {team.map((member) => (
                    <span
                      key={member.name}
                      className="h-12 w-12 rounded-full border-2 border-white bg-cover bg-center shadow-md"
                      style={{ backgroundImage: `url(${member.photo})` }}
                    />
                  ))}
                </div>
                <p className="max-w-48 text-base leading-6 text-[#66717b]">A global community of experience seekers</p>
              </div>
              <span className="hidden h-14 w-px bg-black/15 sm:block" />
              <button type="button" className="flex items-center gap-4 text-left">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#071119] shadow-lg">
                  <Icon path={icons.play} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-lg font-black text-[#101b24]">Watch</span>
                  <span className="block text-base text-[#66717b]">Our Story</span>
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div {...reveal} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[360px] overflow-hidden rounded-[24px] bg-cover bg-center shadow-2xl md:h-[500px]"
              style={{ backgroundImage: `url(${storyImage})` }}
            >
              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 text-sm font-bold text-[#101b24] shadow-xl backdrop-blur-md">
                <Icon path={icons.pin} className="h-5 w-5 text-[#c69275]" />
                Extraordinary Locations
              </div>
            </motion.div>

            <div className="absolute right-4 top-1/2 hidden w-80 -translate-y-1/2 gap-5 rounded-[24px] bg-white/94 p-6 shadow-2xl backdrop-blur-xl md:grid">
              {storyStats.map((stat) => (
                <motion.div key={stat.label} whileHover={{ x: 4 }} className="flex items-center gap-5 border-b border-black/5 pb-4 last:border-b-0 last:pb-0">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#fff0f4]">
                    <Icon path={stat.icon} className="h-7 w-7 text-[#ff6a98]" />
                  </span>
                  <span>
                    <span className="block text-2xl font-black leading-none text-[#101b24]">{stat.value}</span>
                    <span className="mt-1 block text-base text-[#66717b]">{stat.label}</span>
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[heroCollageImages[0], heroCollageImages[1], heroCollageImages[2]].map((image, index) => (
                <motion.div
                  key={image}
                  whileHover={{ y: -5 }}
                  className="h-28 overflow-hidden rounded-[14px] bg-cover bg-center shadow-lg md:h-32"
                  style={{ backgroundImage: `url(${index === 0 ? storyImage : image})` }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${missionBgImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/94 via-[#071119]/88 to-[#071119]/80" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 text-white md:px-12">
          <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/60">Our mission</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Creating a More Connected World
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/80">
                We believe in the power of experiences to bring people together, inspire new perspectives and create a
                more connected, open-minded world. Our mission is to make extraordinary experiences accessible to
                everyone &mdash; while supporting local communities and sustainable travel.
              </p>
              <a href="#journey" className="mt-8 inline-flex rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
                Our Mission &rarr;
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {missionPoints.map((point) => (
                <motion.div key={point.title} whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="group cursor-default rounded-[16px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className={`grid h-12 w-12 place-items-center rounded-full ${point.tint} text-[#071119] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon path={point.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-black">{point.title}</h3>
                  <p className="mt-1 text-xs text-white/70">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-[1440px] px-5 pb-20 md:px-12">
        <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Our journey</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              From an Idea to a Global Community
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-5">
              {milestones.map((milestone, index) => (
                <motion.div key={milestone.year} whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="group relative cursor-default">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff8fb8] transition-transform duration-300 group-hover:scale-150" />
                    {index < milestones.length - 1 ? <span className="hidden h-px flex-1 bg-black/10 sm:block" /> : null}
                  </div>
                  <p className="mt-3 text-sm font-black text-[#8b7e76]">{milestone.year}</p>
                  <p className="mt-1 text-base font-black transition-colors duration-300 group-hover:text-[#ff5c8d]">{milestone.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#66717b]">{milestone.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-64 overflow-hidden rounded-[20px] shadow-xl"
            style={{ backgroundImage: `url(${journeyImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </motion.div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${teamBgImage})` }} />
        <div className="absolute inset-0 bg-[#f7f4ee]/94" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-12">
          <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Meet the team</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">The People Behind VIBE</h2>
              <p className="mt-5 text-lg leading-8 text-[#59636d]">
                Our team is made up of travel lovers, experience creators and community builders who are passionate
                about making a difference through unforgettable events and experiences.
              </p>
              <Link href="/about" className="mt-8 inline-flex rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white">
                Meet The Team &rarr;
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {team.map((member) => (
                <motion.article
                  key={member.name}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-[18px] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="h-44 overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${member.photo})` }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-black">{member.name}</p>
                    <p className="mt-1 text-xs text-[#66717b]">{member.role}</p>
                    <div className="mt-4 flex gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-[#101b24] transition-colors duration-300 hover:bg-[#0c1524] hover:text-white">
                        <Icon path={icons.linkedin} className="h-3.5 w-3.5" />
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-[#101b24] transition-colors duration-300 hover:bg-[#0c1524] hover:text-white">
                        <Icon path={icons.instagram} className="h-3.5 w-3.5" />
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-[#101b24] transition-colors duration-300 hover:bg-[#0c1524] hover:text-white">
                        <Icon path={icons.mail} className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${journeyImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/65 to-[#071119]/30" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-5 py-16 text-white md:flex-row md:items-center md:px-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Be part of our story</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Let&apos;s Create More Unforgettable Moments
            </h2>
            <p className="mt-3 max-w-md text-white/82">
              Join our community and be the first to know about new experiences, exclusive events and exciting
              destinations.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="w-fit">
            <Link href="/private-bookings" className="flex items-center gap-2 rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
              Get in Touch <Icon path={icons.arrowRight} className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
