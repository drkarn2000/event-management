"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/types";

type ProductLandingProps = {
  product: Product;
  label: string;
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

function Icon({ path, className = "h-5 w-5" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons = {
  diamond: "M6 3h12l4 6-10 12L2 9l4-6z M2 9h20 M12 21L8 9l4-6 4 6-4 12",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  play: "M8 5v14l11-7z",
};

const featureHighlights = [
  { title: "Premium", subtitle: "Experience", icon: icons.diamond },
  { title: "Available in", subtitle: "Multiple Cities", icon: icons.pin },
  { title: "Perfect", subtitle: "for Groups", icon: icons.users },
  { title: "Unforgettable", subtitle: "Memories", icon: icons.star },
];

const heroThumbnails = [
  {
    id: 0,
    image: "/product_hero_concert.jpg",
    alt: "Main event stage crowd celebration",
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
    alt: "Friends socializing with drinks",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
    alt: "Live DJ music performance",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=900&auto=format&fit=crop",
    alt: "Party atmosphere and confetti crowd",
  },
];

const guestAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
];

const storyImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
];

const benefitChips = ["Live Music", "Great People", "Iconic Locations", "Unforgettable Atmosphere"];

const bookingBenefits = [
  { title: "Multiple Dates", text: "Across Major Cities", mark: "CAL" },
  { title: "Individual & Group", text: "Bookings", mark: "VIP" },
  { title: "Safe & Secure", text: "Booking Process", mark: "OK" },
  { title: "Dedicated", text: "Customer Support", mark: "24" },
];

const expectations = ["Amazing Locations", "Quality Entertainment", "Food & Drink Options", "Great Community"];

const gallery = [
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=900&auto=format&fit=crop",
];

const faqs = [
  "Where is Product available?",
  "What is included in the ticket?",
  "Can I book for a group?",
  "What is the refund policy?",
];

export function ProductLanding({ product, label }: ProductLandingProps) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const customFaqs = faqs.map((faq) => faq.replace("Product", label));

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      {/* Redesigned Cinematic Editorial Hero Section */}
      <section className="relative min-h-[760px] lg:min-h-[820px] xl:min-h-[860px] overflow-hidden bg-[#060B11] text-white pt-20 sm:pt-22 lg:pt-24 pb-10 lg:pb-12 flex flex-col justify-between">
        
        {/* RIGHT ZONE: Large Immersive Concert Photograph */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-[68%] xl:w-[72%] overflow-hidden pointer-events-none">
          <img
            key={activeThumb}
            src={heroThumbnails[activeThumb].image || "/product_hero_concert.jpg"}
            alt={heroThumbnails[activeThumb].alt}
            className="h-full w-full object-cover object-center transition-opacity duration-700 opacity-35 lg:opacity-100"
          />
          {/* Subtle Stage Lighting & Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B11] via-[#060B11]/90 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B11] via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,143,184,0.15)_0%,transparent_70%)]" />
        </div>

        {/* DESKTOP CURVED SPLIT & METALLIC BOUNDARY */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900" fill="none">
            <defs>
              <linearGradient id="curveRimGlow" x1="0.2" y1="0" x2="0.6" y2="1">
                <stop offset="0%" stopColor="#d5a578" stopOpacity="0.9" />
                <stop offset="25%" stopColor="#FF8FB8" stopOpacity="1" />
                <stop offset="60%" stopColor="#d5a578" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF8FB8" stopOpacity="0.4" />
              </linearGradient>
              <filter id="rimGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="0" stdDeviation="5" floodColor="#FF8FB8" floodOpacity="0.5" />
              </filter>
            </defs>
            {/* Left Solid Dark Base */}
            <path
              d="M 0 0 L 540 0 C 620 220, 650 520, 520 900 L 0 900 Z"
              fill="#060B11"
            />
            {/* Rose-Gold & Pink Metallic Glowing Boundary Stroke */}
            <path
              d="M 540 0 C 620 220, 650 520, 520 900"
              stroke="url(#curveRimGlow)"
              strokeWidth="2.8"
              filter="url(#rimGlowFilter)"
            />
          </svg>
        </div>

        {/* BOTTOM DARK SILK / SATIN WAVE RIBBON */}
        <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-15 overflow-hidden">
          <svg className="absolute bottom-0 right-0 w-full h-28" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none">
            <defs>
              <linearGradient id="bottomRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#060B11" stopOpacity="1" />
                <stop offset="35%" stopColor="#2e142b" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#1a0f24" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#060B11" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M 0 120 C 420 30, 860 85, 1440 25 L 1440 120 Z" fill="url(#bottomRibbonGrad)" />
            <path d="M 0 120 C 420 30, 860 85, 1440 25" stroke="#FF8FB8" strokeWidth="1.8" strokeOpacity="0.45" />
          </svg>
        </div>

        {/* MAIN CONTAINER CONTENT */}
        <div className="relative mx-auto w-full max-w-[1520px] px-5 sm:px-8 md:px-12 z-20 flex-1 flex flex-col justify-between">
          
          {/* Top Bar: Breadcrumb (Left) & Navigation Slogan (Right) */}
          <div className="flex items-center justify-between pt-1 sm:pt-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&gt;</span>
              <Link href="/product-1" className="hover:text-white transition-colors">Products</Link>
              <span className="text-white/30">&gt;</span>
              <span className="text-white font-semibold">{label}</span>
            </div>

            {/* Top Right Navigation-Style Slogan */}
            <div className="hidden sm:flex items-center gap-3 text-xs font-semibold tracking-[0.35em] text-white/85 uppercase">
              <span>LAUGH</span>
              <span className="text-[#FF8FB8]">•</span>
              <span>CONNECT</span>
              <span className="text-[#FF8FB8]">•</span>
              <span>CELEBRATE</span>
              <span className="w-8 h-px bg-[#FF8FB8]" />
            </div>
          </div>

          {/* Core Grid Composition: Left Content & Right Visuals */}
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.2fr] py-4 sm:py-6">
            
            {/* LEFT SIDE: Editorial Content Block */}
            <div className="max-w-xl z-20">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/75">
                <span className="h-0.5 w-6 bg-[#FF8FB8]" />
                <span>FEATURED EXPERIENCE</span>
              </div>

              {/* Large Luxury Serif Headline: Product 1 */}
              <h1 className="mt-4 font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[92px] font-normal leading-[0.92] tracking-tight text-white">
                Product <span className="text-[#FF8FB8]">1</span>
              </h1>

              {/* Narrative Copy */}
              <p className="mt-4 max-w-lg text-sm sm:text-base font-normal leading-relaxed text-white/80">
                A hosted social night built for big laughs, easy mingling, and zero awkward standing around.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/events"
                  className="group inline-flex items-center justify-center rounded-full bg-[#FF8FB8] px-8 py-3 text-sm sm:text-base font-bold text-[#071119] shadow-[0_8px_25px_rgba(255,143,184,0.4)] transition-all duration-300 hover:bg-[#ff7aa8] hover:shadow-[0_12px_32px_rgba(255,143,184,0.55)] hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Book Now &rarr;</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/50 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-current transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-2.5 w-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* FEATURE HIGHLIGHTS: Premium Glass Information Panel */}
              <div className="mt-7 rounded-[22px] border border-white/10 bg-white/[0.04] p-3.5 sm:p-4 backdrop-blur-xl shadow-2xl max-w-[530px]">
                <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-x-2">
                  {featureHighlights.map((item, idx) => (
                    <div
                      key={item.title}
                      className={`flex flex-col ${idx !== featureHighlights.length - 1 ? "sm:border-r sm:border-white/10 sm:pr-2.5" : ""}`}
                    >
                      <Icon path={item.icon} className="h-4 w-4 text-[#FF8FB8]" />
                      <p className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-white/60 mt-0.5 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Left Editorial Tag */}
              <div className="mt-5 flex items-center gap-2.5 sm:gap-3 text-[9px] sm:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.28em] uppercase text-white/45">
                <span className="h-0.5 w-4 sm:w-6 bg-[#FF8FB8] shrink-0" />
                <span className="truncate sm:overflow-visible">SOCIAL NIGHTS • REAL CONNECTIONS • LASTING MEMORIES</span>
              </div>
            </div>

            {/* RIGHT SIDE: Visual Composition with Artful Overlays */}
            <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex flex-col justify-between py-1 mt-6 lg:mt-0">
              
              {/* Upper Section: Handwritten Script & Tagline */}
              <div className="flex items-start justify-between">
                {/* Handwritten Script Artwork: Good People Great Nights */}
                <div className="flex flex-col items-start select-none -rotate-12 transform origin-top-left ml-2 sm:ml-4">
                  <span className="font-script-neon text-3xl sm:text-5xl lg:text-[54px] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-[0.88]">
                    Good
                  </span>
                  <span className="font-script-neon text-3xl sm:text-5xl lg:text-[54px] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-[0.88] mt-1">
                    People
                  </span>
                  <span className="font-script-neon text-3xl sm:text-5xl lg:text-[54px] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-[0.88] mt-1">
                    Great Nights
                  </span>
                  <svg className="w-28 sm:w-40 h-3.5 mt-0.5" viewBox="0 0 140 14" fill="none">
                    <path d="M4 6 Q 70 14, 136 4" stroke="#FF8FB8" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Right Side Tagline */}
                <div className="hidden sm:flex flex-col items-end text-right text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-white/85 leading-relaxed uppercase pr-1 sm:pr-3">
                  <span>IT&apos;S MORE</span>
                  <span>THAN AN EVENT</span>
                  <span className="text-[#FF8FB8]">IT&apos;S A FEELING</span>
                  <span className="h-0.5 w-10 bg-[#FF8FB8] mt-1.5" />
                </div>
              </div>

              {/* Lower Section: Play Control + Gallery Thumbnails + Social Proof */}
              <div className="flex flex-col items-start sm:items-end gap-3.5 mt-auto pt-6">
                
                {/* Play Experience Circular Button */}
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group flex items-center gap-3 cursor-pointer select-none"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FF8FB8] text-[#071119] shadow-[0_0_20px_rgba(255,143,184,0.6)] transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-3.5 w-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-white group-hover:text-[#FF8FB8] transition-colors">
                    See It In Action
                  </span>
                  <span className="w-16 sm:w-28 h-px bg-white/40 group-hover:bg-[#FF8FB8] transition-colors" />
                </button>

                {/* Mini-Gallery Thumbnails Row */}
                <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto max-w-full pb-1">
                  {heroThumbnails.map((thumb, index) => {
                    const isActive = activeThumb === index;
                    return (
                      <button
                        key={thumb.id}
                        type="button"
                        onClick={() => setActiveThumb(index)}
                        className={`relative w-[76px] h-[54px] sm:w-[92px] sm:h-[64px] overflow-hidden rounded-xl transition-all duration-300 cursor-pointer shrink-0 ${
                          isActive
                            ? "ring-2 ring-[#FF8FB8] shadow-[0_0_20px_rgba(255,143,184,0.6)] scale-105"
                            : "border border-white/20 opacity-75 hover:opacity-100 hover:scale-102"
                        }`}
                      >
                        <img src={thumb.image} alt={thumb.alt} className="h-full w-full object-cover" />
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setActiveThumb((prev) => (prev + 1) % heroThumbnails.length)}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
                    aria-label="Next image"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

                {/* Social Proof Floating Rating Card */}
                <div className="inline-flex items-center gap-3.5 rounded-[20px] border border-white/15 bg-[#080d16]/85 px-4 py-2.5 backdrop-blur-xl shadow-2xl">
                  <div className="flex -space-x-2">
                    {guestAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Guest"
                        className="h-7 w-7 rounded-full border-2 border-white/40 object-cover shadow-sm"
                      />
                    ))}
                    <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white/40 bg-[#FF8FB8]/25 text-[10px] font-bold text-[#FF8FB8] shadow-sm">
                      +
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Join Thousands</p>
                    <p className="mt-0.5 flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-amber-300">
                      <span>★ 5 star</span>
                      <span className="font-bold text-white">4.9</span>
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/50 leading-tight">Rated by our guests</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md"
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
                  title="Product Experience Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-16 md:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div {...reveal} className="grid grid-cols-[1.1fr_0.75fr] gap-4">
          <div className="min-h-[420px] rounded-[20px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${storyImages[0]})` }} />
          <div className="grid gap-4">
            <div className="rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${storyImages[1]})` }} />
            <div className="rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${storyImages[2]})` }} />
          </div>
        </motion.div>

        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#8b7e76]">About {label}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            More Than Just an Event. It&apos;s an Experience.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#59636d]">
            {label} brings people together through music, culture and incredible locations. Whether you&apos;re joining with friends,
            celebrating a special occasion or just looking for something different, this experience is designed to create memories that last.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-4">
            {benefitChips.map((chip) => (
              <div key={chip} className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8edf0] text-lg font-black text-[#071119]">+</div>
                <p className="mt-3 text-sm font-black">{chip}</p>
              </div>
            ))}
          </div>
          <Link href="/events" className="mt-9 inline-flex rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white">
            Book Your Experience →
          </Link>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="grid gap-0 overflow-hidden rounded-[18px] bg-white/78 shadow-sm md:grid-cols-4">
          {bookingBenefits.map((item, index) => (
            <div key={item.title} className={`flex items-center gap-5 p-7 ${index > 0 ? "border-t border-black/10 md:border-l md:border-t-0" : ""}`}>
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#e8edf0] text-xs font-black text-[#071119]">{item.mark}</div>
              <div>
                <p className="font-black">{item.title}</p>
                <p className="mt-1 text-sm text-[#59636d]">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#071119] px-5 py-20 text-white md:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/62">The experience</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">What to Expect</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/78">
              From the moment you arrive, every detail is designed to give you an incredible time. Here&apos;s what&apos;s included in your experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {expectations.map((item) => (
                <motion.div key={item} whileHover={{ y: -6 }} className="rounded-[16px] border border-white/8 bg-white/10 p-5 shadow-sm">
                  <p className="text-sm font-black text-[#ff8fb8]">+</p>
                  <h3 className="mt-8 max-w-32 text-base font-black">{item}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...reveal} className="relative min-h-[340px] overflow-hidden rounded-[20px] bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(${storyImages[2]})` }}>
            <div className="absolute inset-0 bg-black/22" />
            <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xl font-black text-[#071119]" type="button">
              Play
            </button>
            <p className="absolute bottom-14 left-0 right-0 text-center text-lg font-black">Watch Experience Video</p>
            <p className="absolute bottom-6 right-7 text-sm font-bold">02:28</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Gallery</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Moments from {label}</h2>
          </div>
          <Link href="/galleries" className="text-sm font-black text-[#071119]">View Full Gallery →</Link>
        </motion.div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {gallery.map((image) => (
            <motion.div key={image} whileHover={{ y: -6 }} className="h-36 rounded-[12px] bg-cover bg-center shadow-sm" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-20 md:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Frequently asked questions</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Have Questions?</h2>
          <div className="mt-7 grid gap-3">
            {customFaqs.map((faq) => (
              <details key={faq} className="group rounded-[12px] border border-black/10 bg-white px-5 py-4 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">
                  {faq}
                  <span className="text-xl leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-[#59636d]">
                  Full answer content can be edited from the product CMS module when the backend is connected.
                </p>
              </details>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-[#071119] p-8 text-white shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-62" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/95 via-[#071119]/70 to-transparent" />
          <div className="relative max-w-md">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Ready to join?</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight">Book Your Experience Today</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              Spots fill fast. Don&apos;t miss out on an unforgettable time with amazing people.
            </p>
            <Link href="/events" className="mt-8 inline-flex rounded-full bg-[#ff8fb8] px-9 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
              Book Now →
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
