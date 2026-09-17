"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/site";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroImage = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2200&auto=format&fit=crop";

const occasions = [
  "Birthdays",
  "Engagements",
  "Anniversaries",
  "Family Gatherings",
  "Social Events",
  "Custom Occasions",
];

const collageImages = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=900&auto=format&fit=crop",
];

const venues = [
  {
    title: "Rooftop Venues",
    text: "City Views",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Beachside Locations",
    text: "Coastal Vibes",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Unique Spaces",
    text: "Something Different",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=900&auto=format&fit=crop",
  },
];

function PrivateEnquiryForm() {
  return (
    <form className="rounded-[22px] border border-black/8 bg-white/88 p-6 shadow-[0_18px_60px_rgba(7,17,25,0.09)] backdrop-blur">
      <h2 className="text-3xl font-black tracking-tight text-[#101b24]">Send an Enquiry</h2>
      <p className="mt-3 text-sm leading-6 text-[#66717b]">Tell us about your event and we&apos;ll get back to you with a custom proposal.</p>
      <div className="mt-5 grid gap-3">
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Your Name *" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Email Address *" type="email" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Phone Number" />
        <select className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]">
          <option>Type of Event</option>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Custom Event</option>
        </select>
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Expected Number of Guests" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]" type="date" />
        <textarea className="min-h-32 rounded-[12px] border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Tell us more about your event..." />
        <button className="mt-1 rounded-full bg-[#ff8fb8] px-6 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white" type="submit">
          Submit Enquiry &rarr;
        </button>
      </div>
    </form>
  );
}

const featureStrip = [
  {
    title: "Tailored",
    subtitle: "Experiences",
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  },
  {
    title: "Any Group",
    subtitle: "Size",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "Iconic",
    subtitle: "Locations",
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    title: "Memorable",
    subtitle: "Moments",
    icon: "M6 3h12l4 6-10 12L2 9l4-6z M2 9h20 M12 21L8 9l4-6 4 6-4 12",
  },
];

const clientAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
];

export function PrivateBookingsLanding() {
  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      {/* Redesigned Luxury Editorial Hero Section */}
      <section className="relative min-h-[760px] lg:min-h-[820px] xl:min-h-[860px] overflow-hidden bg-[#070E16] text-white pt-20 sm:pt-22 lg:pt-24 pb-12 lg:pb-14 flex flex-col justify-between">
        
        {/* RIGHT ZONE: Existing Banquet Table Photograph */}
        <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
          <img
            src={heroImage}
            alt="Private Bookings banquet table and ambient flowers"
            className="h-full w-full object-cover object-[72%_center] opacity-40 lg:opacity-100 transition-opacity duration-700"
          />
          {/* Subtle Stage Lighting & Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070E16] via-[#070E16]/85 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent" />
        </div>

        {/* DESKTOP CURVED SPLIT & ARCHITECTURAL BOUNDARY */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900" fill="none">
            <defs>
              <linearGradient id="privateCurveStroke" x1="0" y1="0" x2="0.6" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="35%" stopColor="#FF8FB8" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF8FB8" stopOpacity="0.1" />
              </linearGradient>
              <filter id="privateCurveGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="1" dy="0" stdDeviation="4" floodColor="#FF8FB8" floodOpacity="0.35" />
              </filter>
            </defs>
            {/* Left Solid Dark Base */}
            <path
              d="M 0 0 L 490 0 C 580 220, 640 520, 520 900 L 0 900 Z"
              fill="#070E16"
            />
            {/* Delicate Architectural Boundary Arc */}
            <path
              d="M 490 0 C 580 220, 640 520, 520 900"
              stroke="url(#privateCurveStroke)"
              strokeWidth="2"
              filter="url(#privateCurveGlow)"
            />
          </svg>
        </div>

        {/* BOTTOM POLISHED CREAM FADE */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f4ee] via-[#f7f4ee]/80 via-[#f7f4ee]/25 to-transparent pointer-events-none z-15" />

        {/* MAIN CONTAINER CONTENT */}
        <div className="relative mx-auto w-full max-w-[1520px] px-5 sm:px-8 md:px-12 z-20 flex-1 flex flex-col justify-between">
          
          {/* Top Bar: Breadcrumb (Left) & Editorial Category Nav (Right) */}
          <div className="flex items-center justify-between pt-1 sm:pt-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">&gt;</span>
              <span className="text-white font-semibold">Private Bookings</span>
            </div>

            {/* Top Right Editorial Navigation Text Group */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.26em] text-white/85 leading-relaxed uppercase">
                <div>INTIMATE GATHERINGS</div>
                <div>CORPORATE EVENTS</div>
                <div>SPECIAL OCCASIONS</div>
                <div>AND MORE</div>
              </div>
              <div className="w-12 h-0.5 bg-[#FF8FB8] mt-2" />
            </div>
          </div>

          {/* Core Grid Composition */}
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[0.95fr_1.2fr] py-4 sm:py-6">
            
            {/* LEFT SIDE: Editorial Content Block */}
            <div className="max-w-xl z-20">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
                <span className="h-0.5 w-6 bg-[#FF8FB8]" />
                <span>PRIVATE EVENTS</span>
              </div>

              {/* Large Luxury Serif Headline: Private Bookings */}
              <h1 className="mt-4 font-serif-luxury text-6xl sm:text-7xl lg:text-[84px] xl:text-[96px] font-normal leading-[0.9] tracking-tight text-white">
                Private<br />
                <span className="text-[#FF8FB8]">Bookings</span>
              </h1>

              {/* Supporting Statement */}
              <p className="mt-4 text-base sm:text-lg font-bold text-white">
                Your event. Your people. Our expertise.
              </p>

              {/* Narrative Copy */}
              <p className="mt-3 max-w-lg text-sm sm:text-base font-normal leading-relaxed text-white/80">
                From intimate gatherings to large celebrations, we create unforgettable experiences tailored to your vision.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="#enquiry"
                  className="group inline-flex items-center justify-center rounded-full bg-[#FF8FB8] px-8 py-3.5 text-sm sm:text-base font-bold text-[#070E16] shadow-[0_8px_25px_rgba(255,143,184,0.4)] transition-all duration-300 hover:bg-[#ff7aa8] hover:shadow-[0_12px_32px_rgba(255,143,184,0.55)] hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Enquire Now &rarr;</span>
                </a>
                <a
                  href="#venues"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/50 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-current transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-2.5 w-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span>View Our Spaces</span>
                </a>
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
              
              {/* Upper Section: Plan Your Perfect Event Glass Card */}
              <div className="flex justify-center sm:justify-end w-full">
                <a
                  href="#enquiry"
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
                    <p className="text-sm sm:text-base font-bold text-white leading-tight">
                      Plan Your<br className="hidden sm:inline" /> Perfect Event
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/70 mt-1 leading-snug truncate sm:overflow-visible">
                      Let our team bring your vision to life.
                    </p>
                  </div>
                  <div className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full border border-white/30 bg-white/5 text-white transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Center Artwork: Handwritten Script with Pink Swoosh */}
              <div className="flex flex-col items-start select-none -rotate-10 transform origin-top-left mx-auto sm:ml-auto sm:mr-12 lg:mr-24 my-auto py-4">
                <span className="font-script-neon text-3xl sm:text-5xl lg:text-[52px] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-[0.88]">
                  Celebrations
                </span>
                <span className="font-script-neon text-3xl sm:text-5xl lg:text-[52px] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-[0.88] mt-1">
                  Made Personal.
                </span>
                <svg className="w-28 sm:w-44 h-3.5 mt-0.5" viewBox="0 0 160 14" fill="none">
                  <path d="M 4 6 Q 80 14, 156 4" stroke="#FF8FB8" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Lower Section: Social Proof Card */}
              <div className="flex justify-center sm:justify-end pt-4 w-full">
                <div className="inline-flex items-center gap-3 sm:gap-3.5 rounded-2xl border border-white/20 bg-[#0c1420]/80 px-3.5 py-2.5 sm:px-5 sm:py-3 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] max-w-full">
                  <div className="flex -space-x-2">
                    {clientAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Client"
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white/40 object-cover shadow-sm"
                      />
                    ))}
                    <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full border-2 border-white/40 bg-[#FF8FB8]/25 text-[10px] font-bold text-[#FF8FB8] shadow-sm">
                      +
                    </span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight">500+ Private Events</p>
                    <p className="mt-0.5 flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-amber-300">
                      <span>★ 5 star</span>
                      <span className="font-bold text-white">4.9</span>
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/50 leading-tight">Rated by our clients</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Center: Scroll to Explore Indicator */}
          <div className="flex justify-center pt-2 pb-1">
            <a
              href="#enquiry"
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

      <section id="enquiry" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-12 lg:grid-cols-[0.95fr_0.9fr_0.75fr] lg:items-start">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Make it yours</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">Perfect for Every Occasion</h2>
          <p className="mt-5 text-lg leading-8 text-[#59636d]">
            Whether it&apos;s a birthday, an engagement, a milestone celebration or just a reason to bring people together, we&apos;ll help you create an experience that&apos;s uniquely yours.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {occasions.map((occasion, index) => (
              <div key={occasion} className="text-center">
                <div className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-sm font-black ${["bg-[#ffd0df]", "bg-[#dbe7ff]", "bg-[#cdf8dc]", "bg-[#ecd7ff]", "bg-[#fff0ce]", "bg-[#d8f3ff]"][index]}`}>
                  {index + 1}
                </div>
                <p className="mt-3 text-sm font-black">{occasion}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="grid grid-cols-2 gap-4">
          <div className="col-span-2 h-64 rounded-[20px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${collageImages[0]})` }} />
          <div className="h-52 rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${collageImages[1]})` }} />
          <div className="h-52 rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${collageImages[2]})` }} />
        </motion.div>

        <motion.div {...reveal}>
          <PrivateEnquiryForm />
        </motion.div>
      </section>

      <section id="venues" className="relative overflow-hidden bg-[#071119] px-5 py-16 text-white md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/65">Incredible locations</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Stunning Venues</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/82">
              From rooftop spaces and beachside venues to unique hidden gems, we&apos;ll help you find the perfect setting for your private event.
            </p>
            <Link href="/galleries" className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-[#071119] transition hover:bg-[#ff8fb8]">Explore Venues &rarr;</Link>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {venues.map((venue) => (
              <motion.article key={venue.title} whileHover={{ y: -8 }} className="relative min-h-64 overflow-hidden rounded-[18px] border border-white/30 bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${venue.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-black">{venue.title}</h3>
                  <p className="mt-1 text-sm text-white/72">{venue.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">What our clients say</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Unforgettable Experiences</h2>
          </div>
          <Link href="/galleries" className="text-sm font-black">View More Testimonials &rarr;</Link>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[18px] bg-white p-6 shadow-sm">
              <p className="text-base leading-7 text-[#59636d]">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-black">{testimonial.name}</p>
                <p className="text-[#ffb000]">★★★★★</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="relative overflow-hidden bg-[#071119] py-24 text-white md:py-32">
        {/* Background celebration photography with refined atmospheric darkening */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2000&auto=format&fit=crop)" }}
        />
        {/* Multi-layered luxury gradients for deep atmospheric lighting and contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119] via-[#071119]/88 to-[#071119]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071119] via-transparent to-[#071119]/60" />

        {/* Ambient glow orbs */}
        <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#FF8FB8]/15 blur-3xl" />
        <div className="pointer-events-none absolute right-10 -bottom-10 h-80 w-80 rounded-full bg-[#ffd45a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Compelling Headline & CTAs (7 cols) */}
            <motion.div
              {...reveal}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FB8] backdrop-blur-md shadow-inner">
                <span className="h-2 w-2 rounded-full bg-[#FF8FB8] animate-pulse" />
                <span>Bespoke Private Celebrations</span>
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight md:text-6xl text-white">
                Ready to Plan Your{" "}
                <span className="font-serif-luxury italic text-[#FF8FB8] font-normal drop-shadow-[0_2px_20px_rgba(255,143,184,0.4)]">
                  Next Event?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
                From intimate dinner parties and milestone birthdays to rooftop gatherings and corporate retreats, our dedicated event team curates every element to perfection.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#enquiry"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#FF8FB8] px-8 py-4 text-sm font-black text-[#071119] shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_25px_rgba(255,143,184,0.5)] active:scale-95"
                >
                  <span>Enquire Now</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="tel:+61000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95"
                >
                  <svg className="h-4 w-4 text-[#FF8FB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Us Direct</span>
                </a>
              </div>

              {/* Trust Indicators / Social Proof */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/15 pt-7">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <img
                      className="inline-block h-9 w-9 rounded-full object-cover ring-2 ring-[#071119]"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                      alt="Guest"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full object-cover ring-2 ring-[#071119]"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                      alt="Guest"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full object-cover ring-2 ring-[#071119]"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
                      alt="Guest"
                    />
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FF8FB8] text-xs font-black text-[#071119] ring-2 ring-[#071119]">
                      +
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[#ffb000] text-xs">
                      ★★★★★ <span className="font-bold text-white text-xs ml-1">4.9 / 5</span>
                    </div>
                    <p className="text-[11px] font-medium text-white/70">500+ private celebrations</p>
                  </div>
                </div>

                <div className="hidden sm:block h-8 w-[1px] bg-white/20" />

                <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FF8FB8]/20 text-[#FF8FB8] font-bold">✓</span>
                  <span>Free consultation & custom quote</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Luxury Concierge Glass Card (5 cols) */}
            <motion.div
              {...reveal}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              {/* Decorative background glow behind the card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8FB8]/20 to-white/5 rounded-[32px] blur-xl transform -rotate-1 scale-95" />

              <div className="relative rounded-[30px] border border-white/20 bg-white/[0.08] p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-white/35">
                {/* Header of the card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF8FB8]">VIP Service</span>
                    <h3 className="text-xl font-black text-white mt-0.5">Event Concierge</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Now Booking
                  </span>
                </div>

                {/* 3 Value propositions */}
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/5 transition-all hover:bg-white/[0.08]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FF8FB8]/20 border border-[#FF8FB8]/30 text-[#FF8FB8]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Exclusive Private Spaces</h4>
                      <p className="mt-0.5 text-xs text-white/70 leading-relaxed">Rooftops, seaside retreats, secret lounges & luxury estates.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/5 transition-all hover:bg-white/[0.08]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FF8FB8]/20 border border-[#FF8FB8]/30 text-[#FF8FB8]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Curated Entertainment & DJs</h4>
                      <p className="mt-0.5 text-xs text-white/70 leading-relaxed">Top-tier acoustic sets, live DJs, ambient sound & lighting.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/5 transition-all hover:bg-white/[0.08]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FF8FB8]/20 border border-[#FF8FB8]/30 text-[#FF8FB8]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">24-Hour Custom Proposal</h4>
                      <p className="mt-0.5 text-xs text-white/70 leading-relaxed">Rapid turnaround with tailored pricing and full mood boards.</p>
                    </div>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Typical reply: <strong>&lt; 2 hours</strong>
                  </span>
                  <a
                    href="#enquiry"
                    className="font-bold text-[#FF8FB8] hover:text-white transition-colors flex items-center gap-1"
                  >
                    Start Inquiry &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
