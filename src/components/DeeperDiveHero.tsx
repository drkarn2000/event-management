"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HERO_IMAGE = "/a-deeper-dive%20hero%20section.png";
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
  compass:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M14.5 9.5l-2 5-5 2 2-5 5-2z",
  globe:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z",
  leaf: "M5 21c8 0 15-7 15-15V4h-2C10 4 3 11 3 19v2z M5 21c2-6 6-10 12-12",
  mouse: "M12 3a5 5 0 0 1 5 5v8a5 5 0 0 1-10 0V8a5 5 0 0 1 5-5z M12 7v4",
  mountains:
    "M2 20L8.5 9l4.5 7 3-4 6 8H2z M10 12l2.5-4 4 6.5",
};

const FEATURES = [
  {
    title: "Real Stories",
    subtitle: "FROM REAL PEOPLE",
    icon: ICONS.users,
  },
  {
    title: "Extraordinary Destinations",
    subtitle: "BEYOND THE USUAL",
    icon: ICONS.pin,
  },
  {
    title: "Meaningful Experiences",
    subtitle: "THAT LAST",
    icon: ICONS.compass,
  },
  {
    title: "A More Connected World",
    subtitle: "THROUGH TRAVEL",
    icon: ICONS.globe,
  },
];

const POLAROIDS = [
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
    alt: "Underwater ocean snorkelling and marine life",
    label: "New Perspectives",
    rotation: -6,
    zIndex: 1,
    offsetClass: "sm:-mr-3",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    alt: "Woman with straw hat on coastal rocks at sunset",
    label: "Deeper Connections",
    rotation: 2,
    zIndex: 3,
    offsetClass: "scale-105 z-10",
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
    alt: "Evening beach gathering under warm string lights",
    label: "Unforgettable Moments",
    rotation: 5,
    zIndex: 2,
    offsetClass: "sm:-ml-3",
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
                title="A Deeper Dive video"
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

function CircularExperienceBadge() {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="relative grid h-20 w-20 xl:h-[88px] xl:w-[88px] place-items-center select-none"
    >
      {/* Outer rotating circular text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 h-full w-full"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path
            id="travelDeeperCircle"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="none"
          />
          <text className="text-[7.5px] font-bold uppercase tracking-[0.26em] fill-white/80">
            <textPath href="#travelDeeperCircle" startOffset="0%">
              • TRAVEL DEEPER • TRAVEL DEEPER
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Central icon container */}
      <div className="grid h-10 w-10 xl:h-11 xl:w-11 place-items-center rounded-full border border-white/20 bg-[#071522]/40 backdrop-blur-md shadow-lg">
        <span className="text-[#FF8FB8]">
          <Icon d={ICONS.leaf} className="h-5 w-5 text-[#FF8FB8]" />
        </span>
      </div>
    </motion.div>
  );
}

function PolaroidCards() {
  return (
    <div className="relative flex items-end justify-center select-none">
      {POLAROIDS.map((card, idx) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 24, rotate: card.rotation * 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: card.rotation }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.9 + idx * 0.15 }}
          whileHover={{
            y: -10,
            rotate: 0,
            scale: 1.06,
            zIndex: 40,
            boxShadow: "0 25px 50px -12px rgba(7, 21, 34, 0.75)",
          }}
          className={`relative rounded-md bg-white p-2 pb-3 shadow-[0_16px_36px_rgba(7,21,34,0.45)] transition-all duration-300 w-[122px] sm:w-[136px] xl:w-[152px] ${card.offsetClass}`}
          style={{ zIndex: card.zIndex }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-neutral-900">
            <img
              src={card.src}
              alt={card.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <p className="font-script-neon mt-2 text-center text-xs xl:text-[13px] font-bold tracking-wide text-[#101b24]">
            {card.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function DeeperDiveHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-[#071522] text-white select-none min-h-[100svh] lg:min-h-[820px] lg:max-h-[920px] xl:max-h-[960px] flex flex-col justify-between"
      aria-label="A Deeper Dive hero"
    >
      {/* ────────────────── Background Sunset Ocean Image ────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HERO_IMAGE}
          alt="Cinematic sunset over ocean with woman in straw hat sitting on rocks at coastline"
          className="h-full w-full object-cover object-[center_35%]"
        />
      </motion.div>

      {/* ────────────────── Art-directed Vignette & Gradient Overlays ────────────────── */}
      {/* Left side text gradient: darkens behind text, fades out smoothly towards sunset and ocean */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,21,34,0.92) 0%, rgba(7,21,34,0.80) 30%, rgba(7,21,34,0.45) 50%, rgba(7,21,34,0.1) 70%, transparent 84%)",
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
        <path
          d="M-40 250 C 80 210, 160 300, 280 250 C 380 200, 420 120, 520 150"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.2"
        />
        <path
          d="M-30 290 C 90 250, 170 340, 290 290 C 390 240, 430 160, 530 190"
          stroke="rgba(255,143,184,0.22)"
          strokeWidth="1.2"
        />
        <path
          d="M60 760 C 360 480, 680 320, 1060 360 C 1220 380, 1340 480, 1420 620"
          stroke={ACCENT}
          strokeWidth="1.2"
          strokeOpacity="0.22"
        />
      </svg>

      {/* ────────────────── Content Container ────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-1 flex-col px-5 pb-6 sm:pb-7 lg:pb-8 pt-20 sm:px-8 md:px-12 lg:pt-24 xl:pt-28">
        {/* ────── Top Row: Breadcrumb & Sky Editorial Branding ────── */}
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
            <span className="font-semibold text-white/95">A Deeper Dive</span>
          </motion.nav>

          {/* Top-right brand vertical layout matching reference */}
          <motion.div
            {...fade(0.25, -10)}
            className="flex items-center gap-3 text-left select-none"
          >
            <span className="h-12 w-px bg-white/30" />
            <div className="leading-[1.4]">
              <p className="text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.32em] text-white/70">
                DISCOVER
              </p>
              <p className="text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.32em] text-white/70">
                LEARN
              </p>
              <p className="text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.32em] text-white/70">
                CONNECT
              </p>
              <p className="text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.32em] text-white/85">
                BELONG
              </p>
            </div>
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
                A DEEPER DIVE
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl lg:text-[4.4rem] xl:text-[5.3rem] font-semibold leading-[0.94] tracking-[-0.03em] text-white">
              <motion.span {...fade(0.38, 20)} className="block">
                More Than Just
              </motion.span>
              <motion.span {...fade(0.52, 20)} className="mt-1 xl:mt-2 block whitespace-nowrap">
                an{" "}
                <span className="relative inline-block font-serif-luxury font-normal italic text-[#FF8FB8]">
                  Event
                  {/* Subtle hand-drawn pink underline */}
                  <svg
                    viewBox="0 0 160 16"
                    fill="none"
                    className="absolute -bottom-2 left-0 h-3 w-full"
                  >
                    <path
                      d="M3 10 C45 3, 105 2, 157 9"
                      stroke="#FF8FB8"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                  </svg>
                </span>
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              {...fade(0.72, 16)}
              className="mt-5 xl:mt-6 max-w-[440px] xl:max-w-[460px] text-[14px] xl:text-[15.5px] leading-relaxed text-white/80 font-normal"
            >
              Go beyond the ordinary with immersive experiences that connect you to people,
              places and new perspectives.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div {...fade(0.86, 14)} className="mt-6 xl:mt-7 flex flex-wrap items-center gap-3.5">
              <motion.a
                href="#experiences"
                whileHover={{
                  y: -2,
                  boxShadow: "0 12px 30px rgba(255,143,184,0.45)",
                }}
                transition={{ duration: 0.3 }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF8FB8] px-6 py-3 xl:px-7 xl:py-3.5 text-xs xl:text-sm font-extrabold text-[#071522] shadow-[0_8px_24px_rgba(255,143,184,0.3)] select-none"
              >
                <span>Explore Experiences</span>
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

          {/* Right side floating editorial elements over photograph */}
          <div className="relative min-h-[380px] xl:min-h-[440px]">
            {/* Handwritten text & circular experience badge */}
            <motion.div
              {...fade(1.05, 16)}
              className="absolute right-[4%] top-[12%] xl:right-[8%] xl:top-[14%] flex items-center gap-5 select-none"
            >
              <div>
                <p className="font-script-neon text-[2rem] xl:text-[2.35rem] font-bold leading-[1.08] text-white drop-shadow-[0_4px_16px_rgba(7,21,34,0.8)]">
                  Stories
                  <br />
                  Experiences
                  <br />
                  Connections
                </p>
                <svg viewBox="0 0 160 16" fill="none" className="mt-1 w-36 xl:w-40">
                  <path
                    d="M4 10 Q60 2 110 8 T 156 4"
                    stroke="#FF8FB8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Circular Experience Badge */}
              <CircularExperienceBadge />
            </motion.div>

            {/* Overlapping Polaroid Memory Cards at lower-right over rocks */}
            <div className="absolute bottom-[8%] right-2 xl:right-6">
              <PolaroidCards />
            </div>
          </div>
        </div>

        {/* ────── Bottom Strip (Desktop) ────── */}
        <motion.div
          {...fade(0.95, 12)}
          className="relative z-10 mt-auto hidden pt-2 pb-1 lg:block"
        >
          <div className="flex items-end justify-between gap-6 xl:gap-8">
            {/* Left: Feature strip & editorial signature with mountain icon */}
            <div className="min-w-0 max-w-[740px] flex-1">
              <FeatureStrip />
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[#FF8FB8] shrink-0">
                  <Icon d={ICONS.mountains} className="h-4 w-4 text-[#FF8FB8]" />
                </span>
                <p className="text-[9.5px] xl:text-[10px] font-bold uppercase tracking-[0.32em] text-white/55 whitespace-nowrap">
                  PEOPLE <span className="text-[#FF8FB8]">•</span> PLACES{" "}
                  <span className="text-[#FF8FB8]">•</span> PERSPECTIVES{" "}
                  <span className="text-[#FF8FB8]">•</span> A BRIGHTER TOMORROW
                </p>
                <span className="ml-4 h-px flex-1 max-w-[180px] bg-white/20" />
              </div>
            </div>

            {/* Right: Scroll indicator */}
            <div className="flex items-end gap-5 xl:gap-6 pb-1">
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
              A DEEPER DIVE
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif-luxury mt-3 text-4xl sm:text-5xl font-semibold leading-[0.95] tracking-tight text-white">
            <motion.span {...fade(0.35, 14)} className="block">
              More Than Just
            </motion.span>
            <motion.span {...fade(0.48, 14)} className="mt-1 block">
              an{" "}
              <span className="relative inline-block font-serif-luxury font-normal italic text-[#FF8FB8]">
                Event
                <svg
                  viewBox="0 0 160 16"
                  fill="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full"
                >
                  <path
                    d="M3 10 C45 3, 105 2, 157 9"
                    stroke="#FF8FB8"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            {...fade(0.62, 14)}
            className="mt-3.5 max-w-lg text-[14px] leading-relaxed text-white/80"
          >
            Go beyond the ordinary with immersive experiences that connect you to people,
            places and new perspectives.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fade(0.74, 12)} className="mt-5 flex flex-wrap gap-3">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF8FB8] px-6 py-3 text-sm font-extrabold text-[#071522] shadow-[0_8px_20px_rgba(255,143,184,0.3)] transition duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Experiences</span>
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

          {/* Handwritten message & circular badge on mobile */}
          <motion.div {...fade(0.88, 14)} className="mt-7 flex items-center justify-between gap-4">
            <div>
              <p className="font-script-neon text-2xl font-bold leading-tight text-white">
                Stories
                <br />
                Experiences
                <br />
                Connections
              </p>
              <svg viewBox="0 0 160 16" fill="none" className="mt-1 w-28">
                <path
                  d="M4 10 Q60 2 110 8 T 156 4"
                  stroke="#FF8FB8"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <CircularExperienceBadge />
          </motion.div>

          {/* Polaroid cards */}
          <motion.div {...fade(1.0, 14)} className="mt-7 flex justify-center">
            <PolaroidCards />
          </motion.div>

          {/* Feature strip */}
          <motion.div {...fade(1.1, 12)} className="mt-7 overflow-hidden">
            <FeatureStrip compact />
            <div className="mt-3.5 flex items-center gap-2.5">
              <span className="text-[#FF8FB8]">
                <Icon d={ICONS.mountains} className="h-3.5 w-3.5 text-[#FF8FB8]" />
              </span>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/50 whitespace-nowrap">
                PEOPLE <span className="text-[#FF8FB8]">•</span> PLACES{" "}
                <span className="text-[#FF8FB8]">•</span> PERSPECTIVES{" "}
                <span className="text-[#FF8FB8]">•</span> A BRIGHTER TOMORROW
              </p>
              <span className="ml-3 h-px flex-1 bg-white/20" />
            </div>
          </motion.div>

          {/* Scroll indicator on mobile */}
          <motion.div {...fade(1.2, 10)} className="mt-6 flex justify-end items-center gap-2">
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
