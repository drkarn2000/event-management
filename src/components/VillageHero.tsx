"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hosts } from "@/lib/data/hosts";

const HERO_IMAGE = "/the-village%20Hero%20section.png";
const ACCENT = "#FF8FB8";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Icon({
  d,
  className = "h-5 w-5",
}: {
  d: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  users:
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  heart:
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  mouse: "M12 3a5 5 0 0 1 5 5v8a5 5 0 0 1-10 0V8a5 5 0 0 1 5-5z M12 7v4",
};

const FEATURES = [
  {
    title: "Real People",
    subtitle: "REAL STORIES",
    icon: ICONS.users,
  },
  {
    title: "Unique Destinations",
    subtitle: "LOCAL KNOWLEDGE",
    icon: ICONS.pin,
  },
  {
    title: "Unforgettable Experiences",
    subtitle: "LASTING MEMORIES",
    icon: ICONS.star,
  },
  {
    title: "A Global Community",
    subtitle: "LIKE-MINDED TRAVELLERS",
    icon: ICONS.heart,
  },
];

const fade = (delay = 0, y = 18) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay },
});

function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white transition hover:bg-[#FF8FB8] hover:text-[#071522]"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/LXb3EKWsInQ?autoplay=1"
                title="The Village hosts video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function FeatureStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex ${compact ? "w-full flex-wrap gap-y-3" : "items-center"}`}>
      {FEATURES.map((item, index) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25 }}
          className={`group flex min-w-0 flex-1 items-start gap-2.5 py-1 ${
            compact ? "min-w-[140px] px-2" : "px-3 xl:px-4"
          } first:pl-0 last:pr-0`}
          style={{
            borderRight:
              !compact && index < FEATURES.length - 1
                ? "1px solid rgba(255,255,255,0.15)"
                : "none",
          }}
        >
          <span className="mt-0.5 shrink-0 text-[#FF8FB8] transition-transform duration-300 group-hover:scale-110">
            <Icon d={item.icon} className={compact ? "h-4 w-4" : "h-[18px] w-[18px] xl:h-[20px] xl:w-[20px]"} />
          </span>
          <div className="min-w-0">
            <p
              className={`font-semibold leading-tight text-white drop-shadow-[0_2px_10px_rgba(7,21,34,0.6)] transition-colors duration-300 group-hover:text-[#FF8FB8] ${
                compact ? "text-[11px]" : "text-[12px] xl:text-[13px]"
              }`}
            >
              {item.title}
            </p>
            <p
              className={`mt-0.5 font-bold uppercase tracking-[0.16em] text-white/50 ${
                compact ? "text-[8px]" : "text-[8.5px] xl:text-[9px]"
              }`}
            >
              {item.subtitle}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CommunityCard({
  avatars,
}: {
  avatars: { name: string; photo: string }[];
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow:
          "0 24px 50px rgba(7,21,34,0.65), 0 0 0 1px rgba(255,143,184,0.45)",
      }}
      transition={{ duration: 0.35, ease: EASE }}
      className="w-full max-w-[325px] rounded-2xl border border-white/15 bg-[#071522]/82 px-4 py-3.5 shadow-[0_20px_50px_rgba(7,21,34,0.55)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-3.5">
        {/* Overlapping circular avatars */}
        <div className="flex items-center shrink-0">
          {avatars.map((host, index) => (
            <motion.img
              key={host.name}
              src={host.photo}
              alt={host.name}
              whileHover={{ scale: 1.15, zIndex: 30 }}
              transition={{ duration: 0.25 }}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-[#071522]"
              style={{
                marginLeft: index === 0 ? 0 : -9,
                zIndex: avatars.length - index,
              }}
            />
          ))}
          <span
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-white/20 bg-[#071522] text-xs font-bold text-[#FF8FB8] ring-2 ring-[#071522]"
            style={{ marginLeft: -9, zIndex: 0 }}
          >
            +
          </span>
        </div>

        {/* Text */}
        <div>
          <p className="font-serif-luxury text-[14px] xl:text-[15px] font-semibold leading-tight text-white">
            A Community
            <br />
            of Local Experts
          </p>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-[11px] tracking-wider text-[#FFB800]">★★★★★</span>
            <span className="text-[11px] font-black text-white">4.9</span>
          </div>
          <p className="text-[9.5px] font-medium text-white/55">Rated by our travellers</p>
        </div>
      </div>
    </motion.div>
  );
}

function GalleryStrip({
  thumbs,
  active,
  onPrev,
  onNext,
  onSelect,
}: {
  thumbs: { src: string; alt: string }[];
  active: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous image"
        className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-[#071522]/60 text-white/80 backdrop-blur-md transition duration-300 hover:border-[#FF8FB8] hover:text-white"
      >
        ←
      </button>

      <div className="flex gap-2">
        {thumbs.map((thumb, index) => (
          <button
            key={thumb.src}
            type="button"
            onClick={() => onSelect(index)}
            className="group relative h-[46px] w-[70px] sm:h-[52px] sm:w-[82px] overflow-hidden rounded-xl border transition duration-300"
            style={{
              borderColor: index === active ? ACCENT : "rgba(255,255,255,0.22)",
              boxShadow:
                index === active
                  ? "0 0 14px rgba(255,143,184,0.5), 0 0 0 1px #FF8FB8"
                  : "none",
            }}
          >
            <img
              src={thumb.src}
              alt={thumb.alt}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <span
              className={`absolute inset-0 transition duration-300 ${
                index === active ? "bg-transparent" : "bg-[#071522]/30 group-hover:bg-[#071522]/10"
              }`}
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-[#071522]/60 text-white/80 backdrop-blur-md transition duration-300 hover:border-[#FF8FB8] hover:text-white"
      >
        →
      </button>
    </div>
  );
}

export function VillageHero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  // 4 curated avatars matching reference image
  const avatars = useMemo(
    () => [
      { name: hosts[1]?.name || "Liam", photo: hosts[1]?.photo || "" },
      { name: hosts[2]?.name || "Emily", photo: hosts[2]?.photo || "" },
      { name: hosts[3]?.name || "Jack", photo: hosts[3]?.photo || "" },
      { name: hosts[4]?.name || "Olivia", photo: hosts[4]?.photo || "" },
    ],
    [],
  );

  const thumbs = useMemo(
    () => [
      { src: HERO_IMAGE, alt: "Festival night stage with hosts and crowd" },
      {
        src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop",
        alt: "Tropical sunset beach gathering with torches",
      },
      {
        src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
        alt: "Evening open-air lantern gathering",
      },
    ],
    [],
  );

  const cycle = (direction: -1 | 1) => {
    setActiveThumb((current) => (current + direction + thumbs.length) % thumbs.length);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#071522] text-white select-none min-h-[100svh] lg:min-h-[820px] lg:max-h-[920px] xl:max-h-[960px] flex flex-col justify-between"
      aria-label="The Village hero"
    >
      {/* ────────────────── Background Festival Image ────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HERO_IMAGE}
          alt="Atmospheric festival night stage, illuminated crowd and evening sky at The Village"
          className="h-full w-full object-cover object-[center_35%]"
        />
      </motion.div>

      {/* ────────────────── Art-directed Vignette & Gradient Overlays ────────────────── */}
      {/* Left side text gradient: darkens behind text, fades out towards stage and heart gesture */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,21,34,0.92) 0%, rgba(7,21,34,0.82) 30%, rgba(7,21,34,0.45) 50%, rgba(7,21,34,0.1) 70%, transparent 84%)",
        }}
      />

      {/* Top subtle fade for navbar readability */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,21,34,0.65) 0%, rgba(7,21,34,0.2) 60%, transparent 100%)",
        }}
      />

      {/* ────────────────── Decorative Luxury Curves ────────────────── */}
      <svg
        className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full lg:block"
        viewBox="0 0 1440 900"
        fill="none"
        aria-hidden
      >
        {/* Top left subtle topographic/contour waves */}
        <path
          d="M-30 240 C 90 210, 160 300, 260 260 C 350 220, 390 140, 480 160"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.2"
        />
        <path
          d="M-40 280 C 80 250, 150 340, 250 300 C 340 260, 380 180, 470 200"
          stroke="rgba(255,143,184,0.22)"
          strokeWidth="1.2"
        />
        <path
          d="M-20 320 C 100 290, 170 380, 270 340 C 360 300, 400 220, 490 240"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        {/* Connecting luxury arc across center */}
        <path
          d="M60 760 C 360 480, 680 320, 1060 360 C 1220 380, 1340 480, 1420 620"
          stroke={ACCENT}
          strokeWidth="1.2"
          strokeOpacity="0.25"
        />
      </svg>

      {/* ────────────────── Stage Pediment Artwork (The Village Neon) ────────────────── */}
      <motion.div
        {...fade(0.8, -10)}
        className="pointer-events-none absolute left-[67%] top-[13%] xl:top-[14%] z-[3] hidden -translate-x-1/2 text-center lg:block select-none"
      >
        <span
          className="font-script-neon text-[2.5rem] xl:text-[2.75rem] font-bold leading-none text-[#ffe3a8]"
          style={{
            textShadow:
              "0 0 12px rgba(255,220,150,0.85), 0 0 28px rgba(255,143,184,0.65)",
          }}
        >
          The Village
        </span>
        <div className="mt-0.5 flex items-center justify-center gap-2 text-[8.5px] xl:text-[9px] font-extrabold uppercase tracking-[0.38em] text-white/90 drop-shadow-[0_2px_8px_rgba(7,21,34,0.9)]">
          <span>PEOPLE</span>
          <span className="text-[#FF8FB8]">•</span>
          <span>PLACES</span>
          <span className="text-[#FF8FB8]">•</span>
          <span>STORIES</span>
        </div>
      </motion.div>

      {/* ────────────────── Content Container ────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-1 flex-col px-5 pb-6 pt-20 sm:px-8 md:px-12 lg:pt-24 xl:pt-28">
        {/* ────── Top Row: Breadcrumb & Sky Brand Language ────── */}
        <div className="flex items-start justify-between gap-6">
          <motion.nav
            {...fade(0.15, 10)}
            className="flex items-center gap-2 text-xs font-medium text-white/60"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors duration-300 hover:text-white">
              Home
            </Link>
            <span className="text-white/35">&gt;</span>
            <span className="font-semibold text-white/95">The Village</span>
          </motion.nav>

          {/* Top-right brand text matching reference */}
          <motion.div
            {...fade(0.25, -10)}
            className="text-right leading-tight select-none"
          >
            <p className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.32em] text-white/70">
              GOOD
            </p>
            <p className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.32em] text-white/70">
              PEOPLE
            </p>
            <p className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.32em] text-white/70">
              BRIGHTER
            </p>
            <p className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.32em] text-white/80">
              JOURNEYS
            </p>
          </motion.div>
        </div>

        {/* ────── Main Body Grid (Desktop) ────── */}
        <div className="mt-4 xl:mt-6 hidden flex-1 grid-cols-[minmax(420px,1fr)_1.25fr] gap-6 lg:grid xl:grid-cols-[minmax(480px,1fr)_1.3fr] xl:gap-10">
          {/* Left editorial content */}
          <div className="flex flex-col justify-center pb-2 xl:pb-6">
            {/* Eyebrow */}
            <motion.div {...fade(0.28, 14)} className="mb-3 xl:mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#FF8FB8]" />
              <span className="text-[10.5px] xl:text-[11px] font-extrabold uppercase tracking-[0.36em] text-white/90">
                THE VILLAGE
              </span>
            </motion.div>

            {/* Main Headline + Sketched Badge */}
            <div className="relative">
              <h1 className="font-serif-luxury text-5xl sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem] font-semibold leading-[0.94] tracking-[-0.03em] text-white">
                <motion.span {...fade(0.38, 20)} className="block">
                  Meet Our
                </motion.span>
                <motion.span {...fade(0.52, 20)} className="mt-1 xl:mt-2 block whitespace-nowrap">
                  <span className="italic font-normal text-[#FF8FB8] mr-3 sm:mr-4 font-serif-luxury">
                    Incredible
                  </span>
                  Hosts
                </motion.span>
              </h1>

              {/* Hand-sketched editorial stamp badge */}
              <motion.div
                {...fade(0.7, 16)}
                className="absolute left-[300px] top-[-14px] lg:left-[320px] xl:left-[370px] xl:top-[-10px] hidden sm:flex -rotate-6 select-none pointer-events-none"
              >
                <div className="relative flex flex-col items-center justify-center px-3.5 py-2 xl:px-4 xl:py-2.5 rounded-[50%] border border-dashed border-white/40 bg-[#071522]/35 shadow-lg backdrop-blur-xs">
                  <p className="font-script-neon text-[11px] xl:text-xs leading-[1.08] tracking-widest text-white/95 font-bold uppercase text-center">
                    LOCAL
                    <br />
                    PEOPLE
                    <br />
                    <span className="text-[#FF8FB8]">EXTRAORDINARY</span>
                    <br />
                    EXPERIENCES
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              {...fade(0.72, 16)}
              className="mt-4 xl:mt-6 max-w-[440px] xl:max-w-[460px] text-[14px] xl:text-[15.5px] leading-relaxed text-white/80 font-normal"
            >
              Passionate people. Unforgettable experiences. Our hosts bring destinations to life
              with their local knowledge, unique stories and infectious energy.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div {...fade(0.86, 14)} className="mt-6 xl:mt-7 flex flex-wrap items-center gap-3.5">
              <motion.a
                href="#hosts"
                whileHover={{
                  y: -2,
                  boxShadow: "0 12px 30px rgba(255,143,184,0.45)",
                }}
                transition={{ duration: 0.3 }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF8FB8] px-6 py-3 xl:px-7 xl:py-3.5 text-xs xl:text-sm font-extrabold text-[#071522] shadow-[0_8px_24px_rgba(255,143,184,0.3)] select-none"
              >
                <span>Meet the Hosts</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </motion.a>

              <motion.button
                type="button"
                onClick={() => setVideoOpen(true)}
                whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.55)" }}
                transition={{ duration: 0.3 }}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-[#071522]/55 px-5 py-3 xl:px-6 xl:py-3.5 text-xs xl:text-sm font-bold text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#071522]/75"
              >
                <span className="grid h-5 w-5 xl:h-6 xl:w-6 place-items-center rounded-full border border-white/40 bg-white/10 text-[8px] xl:text-[9px] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF8FB8] group-hover:text-[#071522] group-hover:border-[#FF8FB8]">
                  ▶
                </span>
                <span>Watch Video</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right side floating elements over stage/crowd */}
          <div className="relative min-h-[380px] xl:min-h-[440px]">
            {/* Floating community card positioned over crowd */}
            <motion.div
              {...fade(1.15, 20)}
              className="absolute bottom-[20%] right-0 xl:right-4 z-20"
            >
              <CommunityCard avatars={avatars} />
            </motion.div>
          </div>
        </div>

        {/* ────── Bottom Strip (Desktop) ────── */}
        <motion.div
          {...fade(0.95, 12)}
          className="relative z-10 mt-auto hidden pt-2 pb-1 lg:block"
        >
          <div className="flex items-end justify-between gap-6 xl:gap-8">
            {/* Left: Feature strip & editorial signature */}
            <div className="min-w-0 max-w-[740px] flex-1">
              <FeatureStrip />
              <div className="mt-4 flex items-center">
                <p className="text-[9.5px] xl:text-[10px] font-bold uppercase tracking-[0.32em] text-white/55 whitespace-nowrap">
                  PEOPLE <span className="text-[#FF8FB8]">•</span> PLACES{" "}
                  <span className="text-[#FF8FB8]">•</span> CULTURE{" "}
                  <span className="text-[#FF8FB8]">•</span> REAL IMPACT
                </p>
                <span className="ml-5 h-px flex-1 max-w-[180px] bg-white/20" />
              </div>
            </div>

            {/* Right: Gallery thumbnails & scroll indicator */}
            <div className="flex items-end gap-5 xl:gap-6 pb-1">
              <motion.div {...fade(1.25, 14)}>
                <GalleryStrip
                  thumbs={thumbs}
                  active={activeThumb}
                  onPrev={() => cycle(-1)}
                  onNext={() => cycle(1)}
                  onSelect={setActiveThumb}
                />
              </motion.div>

              <motion.div
                {...fade(1.35, 10)}
                className="mb-1 flex items-center gap-2 select-none"
              >
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon d={ICONS.mouse} className="h-5 w-5 text-white/50" />
                </motion.span>
                <span className="text-[8.5px] font-bold uppercase leading-tight tracking-[0.22em] text-white/50">
                  SCROLL
                  <br />
                  TO EXPLORE
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ────── Mobile / Tablet Recomposition ────── */}
        <div className="flex flex-1 flex-col lg:hidden mt-3 pb-6">
          {/* Eyebrow */}
          <motion.div {...fade(0.25, 12)} className="flex items-center gap-3">
            <span className="h-[2px] w-7 rounded-full bg-[#FF8FB8]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.36em] text-white/90">
              THE VILLAGE
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif-luxury mt-3 text-4xl sm:text-5xl font-semibold leading-[0.95] tracking-tight text-white">
            <motion.span {...fade(0.35, 14)} className="block">
              Meet Our
            </motion.span>
            <motion.span {...fade(0.48, 14)} className="mt-1 block">
              <span className="italic font-normal text-[#FF8FB8] mr-2.5 font-serif-luxury">
                Incredible
              </span>
              Hosts
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            {...fade(0.62, 14)}
            className="mt-3.5 max-w-lg text-[14px] leading-relaxed text-white/80"
          >
            Passionate people. Unforgettable experiences. Our hosts bring destinations to life
            with their local knowledge, unique stories and infectious energy.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fade(0.74, 12)} className="mt-5 flex flex-wrap gap-3">
            <a
              href="#hosts"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF8FB8] px-6 py-3 text-sm font-extrabold text-[#071522] shadow-[0_8px_20px_rgba(255,143,184,0.3)] transition duration-300 hover:-translate-y-0.5"
            >
              <span>Meet the Hosts</span>
              <span>→</span>
            </a>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-[#071522]/50 px-5 py-3 text-sm font-bold text-white backdrop-blur-md"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full border border-white/40 bg-white/10 text-[8px]">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </motion.div>

          {/* Community card */}
          <motion.div {...fade(0.88, 14)} className="mt-6">
            <CommunityCard avatars={avatars} />
          </motion.div>

          {/* Feature strip */}
          <motion.div {...fade(1.0, 12)} className="mt-6 overflow-hidden">
            <FeatureStrip compact />
            <div className="mt-3.5 flex items-center">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/50 whitespace-nowrap">
                PEOPLE <span className="text-[#FF8FB8]">•</span> PLACES{" "}
                <span className="text-[#FF8FB8]">•</span> CULTURE{" "}
                <span className="text-[#FF8FB8]">•</span> REAL IMPACT
              </p>
              <span className="ml-4 h-px flex-1 bg-white/20" />
            </div>
          </motion.div>

          {/* Gallery strip & scroll indicator */}
          <motion.div
            {...fade(1.12, 14)}
            className="mt-6 flex flex-wrap items-center justify-between gap-4"
          >
            <GalleryStrip
              thumbs={thumbs}
              active={activeThumb}
              onPrev={() => cycle(-1)}
              onNext={() => cycle(1)}
              onSelect={setActiveThumb}
            />

            <div className="flex items-center gap-2">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon d={ICONS.mouse} className="h-5 w-5 text-white/50" />
              </motion.span>
              <span className="text-[8px] font-bold uppercase leading-tight tracking-[0.22em] text-white/50">
                SCROLL
                <br />
                TO EXPLORE
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ────────────────── Cinematic Warm Ivory/Cream Bottom Glow ────────────────── */}
      {/* Seamless transition into #f7f4ee of page below, with zero hard edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 sm:h-36"
        style={{
          background:
            "linear-gradient(to top, #f7f4ee 0%, rgba(247,244,238,0.92) 18%, rgba(247,244,238,0.5) 42%, rgba(247,244,238,0.12) 75%, transparent 100%)",
        }}
      />

      {/* Video Modal */}
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
