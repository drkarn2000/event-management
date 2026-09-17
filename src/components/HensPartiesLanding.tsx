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

const heroImage = "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2200&auto=format&fit=crop";

const highlights = [
  { title: "Unique Experiences", text: "Tailored to your group", tint: "bg-[#ffd0df]" },
  { title: "Any Group Size", text: "From small to large", tint: "bg-[#dbe7ff]" },
  { title: "Iconic Locations", text: "Australia, UK & Europe", tint: "bg-[#cdf8dc]" },
  { title: "Food & Drink Options", text: "Packages to suit all", tint: "bg-[#ffe2cf]" },
  { title: "Hassle-Free Planning", text: "We take care of the details", tint: "bg-[#ecd7ff]" },
];

const introImages = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=900&auto=format&fit=crop",
];

const ideas = [
  { title: "Boat Parties", text: "Sun, drinks and good vibes", image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=900&auto=format&fit=crop" },
  { title: "Wine Tours", text: "Sip and explore", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop" },
  { title: "Pamper & Wellness", text: "Relax and unwind", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop" },
  { title: "Food & Dining", text: "Delicious experiences", image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=900&auto=format&fit=crop" },
  { title: "Adventure Activities", text: "Something different", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=900&auto=format&fit=crop" },
  { title: "Nightlife", text: "Dance the night away", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=900&auto=format&fit=crop" },
];

const hensTestimonials = [
  {
    name: "Jess T.",
    quote: "Absolutely amazing experience. The team made our hens party so easy to plan and everything was perfect.",
  },
  {
    name: "Emily R.",
    quote: "Best hens party ever. From start to finish the communication was great and the day exceeded expectations.",
  },
];

function HensEnquiryForm() {
  return (
    <form className="rounded-[20px] bg-gradient-to-br from-[#fff4f8] to-[#ffe3ed] p-7 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.45em] text-[#8b7e76]">Get started</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight">Enquire About Your Hens Party</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Your Name *" />
        <select className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]">
          <option>Type of Experience</option>
          <option>Boat Party</option>
          <option>Wine Tour</option>
          <option>Nightlife</option>
        </select>
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Email Address *" type="email" />
        <select className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]">
          <option>Preferred Location</option>
          <option>Sydney</option>
          <option>Melbourne</option>
          <option>London</option>
        </select>
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Phone Number *" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Expected Number of Guests" />
        <textarea className="min-h-28 rounded-[12px] border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff8fb8] md:col-span-2" placeholder="Tell us more about your event..." />
      </div>
      <button className="mt-6 w-full rounded-full bg-[#ff8fb8] px-6 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white" type="submit">
        Submit Enquiry &rarr;
      </button>
    </form>
  );
}

const featureStrip = [
  {
    title: "Unique",
    subtitle: "Experiences",
    icon: "M8 22h8M12 15v7M16 8a4 4 0 0 0-8 0v2a4 4 0 0 0 8 0V8z",
  },
  {
    title: "Any Group",
    subtitle: "Size",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "Stunning",
    subtitle: "Locations",
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    title: "Lasting",
    subtitle: "Memories",
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  },
];

const guestAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
];

export function HensPartiesLanding() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      {/* Redesigned Luxury Editorial Hero Section */}
      <section className="relative min-h-[760px] lg:min-h-[820px] xl:min-h-[860px] overflow-hidden bg-[#070E16] text-white pt-20 sm:pt-22 lg:pt-24 pb-12 lg:pb-14 flex flex-col justify-between">
        
        {/* RIGHT ZONE: Existing Champagne Celebration Photograph */}
        <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
          <img
            src={heroImage}
            alt="Hens celebration champagne toast with friends"
            className="h-full w-full object-cover object-[75%_center] opacity-40 lg:opacity-100 transition-opacity duration-700"
          />
          {/* Subtle Contrast & Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070E16] via-[#070E16]/85 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent" />
        </div>

        {/* DESKTOP CURVED SPLIT & ARCHITECTURAL BOUNDARY */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900" fill="none">
            <defs>
              <linearGradient id="hensCurveStroke" x1="0" y1="0" x2="0.6" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="35%" stopColor="#FF8FB8" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF8FB8" stopOpacity="0.1" />
              </linearGradient>
              <filter id="hensCurveGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="1" dy="0" stdDeviation="4" floodColor="#FF8FB8" floodOpacity="0.35" />
              </filter>
            </defs>
            {/* Left Solid Dark Base */}
            <path
              d="M 0 0 L 480 0 C 570 220, 630 520, 510 900 L 0 900 Z"
              fill="#070E16"
            />
            {/* Delicate Architectural Boundary Arc */}
            <path
              d="M 480 0 C 570 220, 630 520, 510 900"
              stroke="url(#hensCurveStroke)"
              strokeWidth="2"
              filter="url(#hensCurveGlow)"
            />
          </svg>
        </div>

        {/* Subtle Botanical Line Art in Bottom-Left */}
        <div className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none opacity-15 overflow-hidden z-12 hidden lg:block">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-white">
            <path d="M 10 200 C 30 140, 60 110, 90 90 C 110 75, 140 70, 160 50 C 170 40, 175 25, 170 10 C 160 20, 150 40, 135 60 C 120 75, 95 90, 80 120 C 65 150, 50 180, 45 200 Z" strokeWidth="1" />
            <path d="M 60 130 C 80 100, 120 80, 150 90 C 170 95, 185 110, 195 125 C 180 125, 165 115, 145 110 C 125 105, 90 120, 75 145 Z" strokeWidth="1" />
            <path d="M 90 90 C 105 60, 130 40, 150 30" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 20 180 C 45 150, 70 140, 95 140" strokeWidth="1" />
          </svg>
        </div>

        {/* BOTTOM POLISHED CREAM FADE */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f4ee] via-[#f7f4ee]/80 via-[#f7f4ee]/25 to-transparent pointer-events-none z-15" />

        {/* MAIN CONTAINER CONTENT */}
        <div className="relative mx-auto w-full max-w-[1520px] px-5 sm:px-8 md:px-12 z-20 flex-1 flex flex-col justify-between">
          
          {/* Top Bar: Breadcrumb (Left) & Slogan/Categories (Right) */}
          <div className="flex items-center justify-between pt-1 sm:pt-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&gt;</span>
              <span className="text-white font-semibold">Hens Parties</span>
            </div>

            {/* Top Right Editorial Navigation Text Group */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.26em] text-white/85 leading-relaxed uppercase flex items-center gap-2">
                <span>GIRLS • ADVENTURE • CELEBRATION • FOREVER</span>
                <span className="w-8 h-px bg-[#FF8FB8]" />
              </div>
              <div className="mt-2.5 text-right">
                <p className="text-[10px] font-bold tracking-[0.28em] text-white/75 uppercase leading-tight">PLANS TODAY</p>
                <p className="text-[10px] font-bold tracking-[0.28em] text-white/75 uppercase leading-tight">CHERISHED</p>
                <p className="text-[10px] font-bold tracking-[0.28em] text-white/75 uppercase leading-tight">TOMORROW</p>
                <div className="w-12 h-0.5 bg-[#FF8FB8] ml-auto mt-1.5" />
              </div>
            </div>
          </div>

          {/* Core Grid Composition */}
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.2fr] py-4 sm:py-6">
            
            {/* LEFT SIDE: Editorial Content Block */}
            <div className="max-w-xl z-20">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
                <span className="h-0.5 w-6 bg-[#FF8FB8]" />
                <span>HENS PARTIES</span>
              </div>

              {/* Large Luxury Serif Headline: Celebrate Her Way */}
              <h1 className="mt-4 font-serif-luxury text-6xl sm:text-7xl lg:text-[84px] xl:text-[96px] font-normal leading-[0.9] tracking-tight text-white">
                Celebrate<br />
                <span className="text-[#FF8FB8]">Her Way</span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-lg text-sm sm:text-base font-normal leading-relaxed text-white/80">
                Unforgettable hens parties in amazing locations. Great vibes, unique experiences and memories that last a lifetime.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="#hens-enquiry"
                  className="group inline-flex items-center justify-center rounded-full bg-[#FF8FB8] px-8 py-3.5 text-sm sm:text-base font-bold text-[#070E16] shadow-[0_8px_25px_rgba(255,143,184,0.4)] transition-all duration-300 hover:bg-[#ff7aa8] hover:shadow-[0_12px_32px_rgba(255,143,184,0.55)] hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Enquire Now &rarr;</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/50 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-current transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-2.5 w-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Integrated Feature Strip */}
              <div className="mt-8 pt-5 border-t border-white/10 max-w-[530px]">
                <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:gap-x-3">
                  {featureStrip.map((item, idx) => (
                    <div
                      key={item.title}
                      className={`flex flex-col ${idx !== featureStrip.length - 1 ? "sm:border-r sm:border-white/15 sm:pr-3" : ""}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#FF8FB8]">
                        <path d={item.icon} />
                      </svg>
                      <p className="mt-2 text-xs sm:text-sm font-bold text-white leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-white/60 mt-0.5 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Photographic Area & Editorial Floating Elements */}
            <div className="relative min-h-[400px] sm:min-h-[480px] lg:min-h-[540px] flex flex-col justify-between py-1 mt-6 lg:mt-0">
              
              {/* Upper Section: Plan the Perfect Hens Party Glass Card */}
              <div className="flex justify-center sm:justify-end w-full">
                <a
                  href="#hens-enquiry"
                  className="group inline-flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-white/20 bg-[#101924]/75 p-3.5 sm:p-5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-[#101924]/85 cursor-pointer w-full sm:w-auto max-w-full sm:max-w-sm"
                >
                  {/* Calendar pink circular icon */}
                  <div className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-full bg-[#FF8FB8] text-[#070E16] shadow-[0_0_20px_rgba(255,143,184,0.45)] transition-transform duration-300 group-hover:scale-105">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif-luxury text-sm sm:text-base font-bold text-white leading-tight">
                      Plan the Perfect<br className="hidden sm:inline" /> Hens Party
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/70 mt-1 leading-snug truncate sm:overflow-visible">
                      Let our team create an unforgettable experience.
                    </p>
                  </div>
                  <div className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full border border-white/30 bg-white/5 text-white transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Center Artwork: Handwritten Script with Heart & Pink Swoosh */}
              <div className="flex flex-col items-start select-none -rotate-12 transform origin-top-left mx-auto sm:ml-auto sm:mr-16 lg:mr-28 my-auto py-3">
                <div className="flex items-center gap-2">
                  <span className="font-script-neon text-3xl sm:text-5xl lg:text-[54px] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-[0.88]">
                    Good Friends
                  </span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8FB8] fill-none stroke-current stroke-2 -rotate-12 mt-1" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <span className="font-script-neon text-3xl sm:text-5xl lg:text-[54px] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-[0.88] mt-1">
                  Great Memories
                </span>
                <svg className="w-32 sm:w-44 h-3.5 mt-0.5" viewBox="0 0 160 14" fill="none">
                  <path d="M 4 6 Q 80 14, 156 4" stroke="#FF8FB8" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Lower Section: Social Proof Card */}
              <div className="flex justify-center sm:justify-end pt-4 w-full">
                <div className="inline-flex items-center gap-3 sm:gap-3.5 rounded-2xl border border-white/20 bg-[#0c1420]/80 px-3.5 py-2.5 sm:px-5 sm:py-3 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] max-w-full">
                  <div className="flex -space-x-2">
                    {guestAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Guest"
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white/40 object-cover shadow-sm"
                      />
                    ))}
                    <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full border-2 border-white/40 bg-[#FF8FB8]/25 text-[10px] font-bold text-[#FF8FB8] shadow-sm">
                      +
                    </span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight">500+ Hens Parties</p>
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

          {/* Bottom Center: Scroll to Explore Indicator */}
          <div className="flex justify-center pt-2 pb-1">
            <a
              href="#hens-enquiry"
              className="flex flex-col items-center gap-1.5 select-none opacity-75 hover:opacity-100 transition-opacity cursor-pointer z-20"
            >
              <div className="w-5 h-8 rounded-full border border-white/40 flex justify-center pt-1.5">
                <span className="w-1 h-2 rounded-full bg-white animate-bounce" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/70">
                SCROLL TO EXPLORE
              </span>
            </a>
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
                  title="Hens Party Experience Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-5 md:px-12">
        {highlights.map((item, index) => (
          <motion.div {...reveal} key={item.title} className="text-center">
            <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${item.tint} text-sm font-black text-[#071119]`}>{index + 1}</div>
            <h3 className="mt-4 text-lg font-black">{item.title}</h3>
            <p className="mt-2 text-sm text-[#66717b]">{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 md:px-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Make it unforgettable</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">Hens Parties Done Differently</h2>
          <p className="mt-5 text-lg leading-8 text-[#59636d]">
            Whether you&apos;re planning a relaxed day out, a vibrant night on the town, or a completely unique experience, we&apos;ll help you create a hens party that&apos;s all about great company, amazing locations and unforgettable moments.
          </p>
          <a href="#hens-ideas" className="mt-8 inline-flex rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white">View Experiences &rarr;</a>
        </motion.div>
        <motion.div {...reveal} className="grid grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 min-h-[320px] rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${introImages[0]})` }} />
          {introImages.slice(1).map((image) => (
            <div key={image} className="min-h-[150px] rounded-[16px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </motion.div>
      </section>

      <section id="hens-ideas" className="relative overflow-hidden bg-[#071119] px-5 py-16 text-white md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="relative mx-auto max-w-[1440px]">
          <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/65">Popular experiences</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ideas for Your Hens Party</h2>
            </div>
            <Link href="/a-deeper-dive" className="text-sm font-black text-white">View All Experiences &rarr;</Link>
          </motion.div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {ideas.map((idea) => (
              <motion.article key={idea.title} whileHover={{ y: -8 }} className="relative min-h-56 overflow-hidden rounded-[18px] border border-white/30 bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${idea.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-black">{idea.title}</h3>
                  <p className="mt-1 text-sm text-white/74">{idea.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="hens-enquiry" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-12 lg:grid-cols-[1fr_0.95fr]">
        <motion.div {...reveal}>
          <HensEnquiryForm />
        </motion.div>
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Real stories</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">What Our Clients Say</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {hensTestimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[18px] bg-white p-6 shadow-sm">
                <p className="text-sm leading-6 text-[#59636d]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-black">{testimonial.name}</p>
                  <p className="text-[#ffb000]">★★★★★</p>
                </div>
              </article>
            ))}
          </div>
          <div className="relative mt-8 min-h-[190px] overflow-hidden rounded-[18px] bg-[#071119] p-7 text-white shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop)" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 to-[#071119]/25" />
            <div className="relative max-w-md">
              <h3 className="text-2xl font-black">Let&apos;s Plan Something Amazing</h3>
              <p className="mt-3 text-sm leading-6 text-white/78">Get in touch today and let&apos;s create an unforgettable hens party experience.</p>
              <a href="#hens-enquiry" className="mt-5 inline-flex rounded-full bg-[#ff8fb8] px-7 py-3 text-sm font-black text-[#071119] transition hover:bg-white">Enquire Now &rarr;</a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
