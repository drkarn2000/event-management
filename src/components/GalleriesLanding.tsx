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
  video: "M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z",
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

const heroSlides = [
  {
    id: 1,
    title: "Sydney Opera House",
    location: "Sydney Harbour",
    image: heroImage,
    alt: "Sydney Opera House at Night",
  },
  {
    id: 2,
    title: "Tropical Waters",
    location: "Whitsunday Islands",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "Tropical turquoise beach",
  },
  {
    id: 3,
    title: "Alpine Peaks",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    alt: "Scenic mountain peaks",
  },
  {
    id: 4,
    title: "Ancient Architecture",
    location: "Kyoto Heritage",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    alt: "Ancient temple architecture",
  },
];

type MediaFilter = "all" | "photo" | "video";

export function GalleriesLanding() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>("all");
  const [category, setCategory] = useState("All Categories");

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesMedia = mediaFilter === "all" || item.type === mediaFilter;
      const matchesCategory = category === "All Categories" || item.category === category;
      return matchesMedia && matchesCategory;
    });
  }, [mediaFilter, category]);

  function nextSlide() {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }

  function prevSlide() {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }

  function handleWatchVideo() {
    setIsVideoModalOpen(true);
  }

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      {/* Luxury Cinematic Editorial Hero Section */}
      <section className="relative min-h-[96vh] lg:min-h-screen w-full overflow-hidden bg-[#071119] text-white flex flex-col justify-between pt-28 pb-10 px-5 md:px-12">
        {/* Background Image: Existing Sydney Opera House night photograph */}
        <motion.div
          key={heroSlides[activeSlide]?.image || heroImage}
          initial={{ opacity: 0.85, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${heroSlides[activeSlide]?.image || heroImage})` }}
        />

        {/* Curved Architectural Line & Editorial Gradient Overlay matching mockup */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <defs>
            <linearGradient id="editorialCurveGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#FF8FB8" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#FF8FB8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="editorialCurveShade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#071119" stopOpacity="0.96" />
              <stop offset="45%" stopColor="#071119" stopOpacity="0.86" />
              <stop offset="80%" stopColor="#071119" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#071119" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0,0 L 680,0 C 610,260 540,580 460,900 L 0,900 Z"
            fill="url(#editorialCurveShade)"
          />
          <path
            d="M 680,0 C 610,260 540,580 460,900"
            fill="none"
            stroke="url(#editorialCurveGlow)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Soft atmospheric gradient transitions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071119] via-transparent to-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071119]/85 via-transparent to-[#071119]/40" />

        {/* Top Utility Header within Hero */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/70">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>&gt;</span>
            <span className="text-[#FF8FB8]">Galleries</span>
          </div>
          {/* Top Right Tagline */}
          <div className="hidden sm:flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white/70">
            <span>EXPLORE</span>
            <span className="text-[#FF8FB8]">•</span>
            <span>RELIVE</span>
            <span className="text-[#FF8FB8]">•</span>
            <span>GET INSPIRED</span>
            <span className="h-[1px] w-8 bg-white/40" />
          </div>
        </div>

        {/* Handwritten script in upper-right sky area */}
        <div className="hidden lg:block absolute right-[21%] top-28 select-none pointer-events-none -rotate-3 text-right z-10">
          <div className="font-script-neon text-3xl sm:text-4xl text-white/95 leading-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
            <span className="block">Capture</span>
            <span className="block pl-4">Explore</span>
            <span className="block pl-8 relative">
              Belong
              <svg
                className="absolute -bottom-2 left-6 w-24 h-4 text-[#FF8FB8]"
                viewBox="0 0 100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12 Q 50 22, 95 8" />
              </svg>
            </span>
          </div>
        </div>

        {/* Main Middle Row: Vertical 01-05 index, Headline & Paragraph, and Right Side Vertical Dock */}
        <div className="relative z-10 mx-auto my-auto w-full max-w-[1440px] pt-4 pb-6">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            
            {/* Far Left Vertical Pagination (01 - 05) */}
            <div className="hidden lg:flex flex-col items-center gap-6 select-none pr-4 border-r border-white/10">
              {["01", "02", "03", "04", "05"].map((num, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => idx < heroSlides.length && setActiveSlide(idx)}
                    className="group flex flex-col items-center gap-1 transition-all"
                    aria-label={`Slide ${num}`}
                  >
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-[#FF8FB8]" : "text-white/35 group-hover:text-white/70"
                      }`}
                    >
                      {num}
                    </span>
                    {isActive ? (
                      <span className="h-2.5 w-[2px] rounded-full bg-[#FF8FB8]" />
                    ) : (
                      <span className="h-1 w-[1px] rounded-full bg-transparent group-hover:bg-white/30" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Editorial Headline & Supporting Content */}
            <motion.div {...reveal} className="max-w-2xl">
              {/* Small Uppercase Eyebrow with pink accent line */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#FF8FB8]" />
                <span className="text-xs font-black uppercase tracking-[0.45em] text-white/90">
                  GALLERIES
                </span>
              </div>

              {/* Large Sophisticated High-Contrast Serif Headline */}
              <h1 className="mt-4 font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight text-white">
                Moments<br />
                That <span className="font-serif-luxury italic font-normal text-[#FF8FB8] drop-shadow-[0_2px_20px_rgba(255,143,184,0.4)]">Matter</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-xs font-black uppercase tracking-[0.32em] text-white/75">
                REAL EXPERIENCES. TIMELESS MEMORIES.
              </p>

              {/* Existing Supporting Paragraph */}
              <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-white/85">
                Explore real experiences, incredible people and unforgettable destinations through our photo and
                video galleries.
              </p>

              {/* Two Premium CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#gallery"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#FF8FB8] px-8 py-4 text-sm font-black text-[#071119] shadow-[0_0_25px_rgba(255,143,184,0.45)] transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
                >
                  <span>View Photos</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <button
                  type="button"
                  onClick={handleWatchVideo}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/50 hover:scale-105 active:scale-95"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-white/60 text-[10px] text-white">
                    ▶
                  </span>
                  <span>Watch Video</span>
                </button>
              </div>
            </motion.div>

            {/* Right Side: Vertical Gallery Carousel Dock */}
            <div className="hidden lg:flex flex-col items-center justify-center pl-4">
              <div className="rounded-[28px] border border-white/20 bg-black/40 p-3 shadow-2xl backdrop-blur-2xl flex flex-col items-center gap-3">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Select ${slide.title}`}
                      className={`relative h-16 w-24 overflow-hidden rounded-[16px] transition-all duration-300 ${
                        isActive
                          ? "ring-2 ring-[#FF8FB8] shadow-[0_0_18px_rgba(255,143,184,0.65)] scale-105"
                          : "opacity-60 hover:opacity-100 hover:scale-105 border border-white/20"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}

                {/* Circular Arrow Control below Thumbnails */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#FF8FB8]/60 bg-[#FF8FB8]/10 text-[#FF8FB8] shadow-md transition-all duration-300 hover:bg-[#FF8FB8] hover:text-[#071119] hover:scale-110 active:scale-95"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area: Glassmorphism Statistics Panel & Slider Progress */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] pt-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Glassmorphism Statistics Panel */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-xl px-6 py-3.5 shadow-2xl flex flex-wrap items-center gap-6 md:gap-8 w-fit">
              {/* 1.2K+ Photos */}
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/15 text-[#FF8FB8]">
                  <Icon path={icons.image} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-tight">1.2K+</p>
                  <p className="text-[11px] font-medium text-white/70">Photos</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/15 hidden sm:block" />

              {/* 150+ Videos */}
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/15 text-[#FF8FB8]">
                  <Icon path={icons.video} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-tight">150+</p>
                  <p className="text-[11px] font-medium text-white/70">Videos</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/15 hidden sm:block" />

              {/* 50+ Destinations */}
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/15 text-[#FF8FB8]">
                  <Icon path={icons.pin} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-tight">50+</p>
                  <p className="text-[11px] font-medium text-white/70">Destinations</p>
                </div>
              </div>
            </div>

            {/* Right Controls: Slider Navigation & Scroll to explore */}
            <div className="flex items-center gap-5">
              {/* Slide Counter & Progress Bar */}
              <div className="hidden sm:flex items-center gap-3 rounded-full border border-white/15 bg-black/40 backdrop-blur-xl px-4 py-2 text-xs font-bold text-white shadow-xl">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="p-1 text-white/70 hover:text-[#FF8FB8] transition-colors"
                >
                  &lt;
                </button>
                <div className="h-1 w-20 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className="h-full bg-[#FF8FB8] transition-all duration-300"
                    style={{ width: `${((activeSlide + 1) / heroSlides.length) * 100}%` }}
                  />
                </div>
                <span className="font-mono tracking-wider">
                  <span className="text-[#FF8FB8]">0{activeSlide + 1}</span> / 0{heroSlides.length}
                </span>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="p-1 text-white/70 hover:text-[#FF8FB8] transition-colors"
                >
                  &gt;
                </button>
              </div>

              {/* Scroll to Explore */}
              <a
                href="#gallery"
                className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-[#FF8FB8] transition-colors"
              >
                <span>SCROLL TO EXPLORE</span>
                <svg className="h-3.5 w-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Video Lightbox Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/20 bg-[#071119] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF8FB8]">Experience Reel</span>
                  <h3 className="text-xl font-black text-white">Moments in Motion</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 transition"
                  aria-label="Close video"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Galleries Video Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="gallery" className="mx-auto max-w-[1440px] px-5 py-12 md:px-12">
        <motion.div {...reveal} className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between border-b border-black/8 pb-6">
          {/* Left: Media Type Filter (All, Photos, Videos) */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white p-1.5 shadow-sm shrink-0 w-fit">
            {(["all", "photo", "video"] as MediaFilter[]).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setMediaFilter(filter)}
                className={`rounded-full px-5 py-2 text-xs md:text-sm font-black transition-all duration-200 capitalize ${
                  mediaFilter === filter
                    ? "bg-[#FF8FB8] text-[#071119] shadow-sm scale-100"
                    : "text-[#5e6973] hover:text-[#071119] hover:bg-black/5"
                }`}
              >
                {filter === "all" ? "All" : filter === "photo" ? "Photos" : "Videos"}
              </button>
            ))}
          </div>

          {/* Right: Clean, Unified Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setCategory("All Categories")}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                category === "All Categories"
                  ? "bg-[#071119] text-white shadow-md"
                  : "border border-black/10 bg-white text-[#5e6973] hover:border-[#071119] hover:text-[#071119] shadow-sm"
              }`}
            >
              All Categories
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  category === cat
                    ? "bg-[#071119] text-white shadow-md"
                    : "border border-black/10 bg-white text-[#5e6973] hover:border-[#071119] hover:text-[#071119] shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
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
          <a
            href="#gallery"
            className="rounded-full bg-[#FF8FB8] px-8 py-4 text-sm font-black text-[#071119] shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,143,184,0.45)]"
          >
            Share Your Experience &rarr;
          </a>
        </div>
      </section>

      {/* Stats Section shifted after Be Part of Our Story */}
      <section className="border-t border-white/10 bg-[#071119] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-5 py-12 md:px-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3.5 p-3 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200 cursor-default"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 border border-white/15 text-[#FF8FB8] shadow-inner backdrop-blur-md">
                <Icon path={stat.icon} className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-white">{stat.value}</p>
                <p className="text-xs font-medium text-white/65">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
