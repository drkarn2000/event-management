"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cities } from "@/lib/data/cities";
import { galleryItems, testimonials } from "@/lib/data/site";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
} as const;

const services = [
  { title: "Live Events", text: "Amazing events in iconic locations", tint: "bg-[#ffd0df]" },
  { title: "Private Bookings", text: "Tailored experiences for your special moments", tint: "bg-[#dbe7ff]" },
  { title: "Corporate & Team", text: "Engaging events for organisations", tint: "bg-[#cdf8dc]" },
  { title: "Unique Experiences", text: "Workshops, hosts and one-of-a-kind activities", tint: "bg-[#ecd7ff]" },
];

const lifestyle = [
  { title: "Iconic Locations", text: "Australia, UK & Europe", mark: "01" },
  { title: "Like-Minded People", text: "A community that vibes", mark: "02" },
  { title: "Unforgettable Moments", text: "Events you will actually remember", mark: "03" },
];

const heroStats = [
  {
    icon: (
      <svg className="h-5 w-5 text-[#ffd45a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-[#ffd45a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    value: "1,200+",
    label: "Events Managed",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-[#ffd45a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    value: "4.9/5",
    label: "Client Satisfaction",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-[#ffd45a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    value: "25+",
    label: "Cities Worldwide",
  },
];

export function HomeExperience() {
  const events = cities.flatMap((city) => city.events.map((event) => ({ ...event, city: city.name }))).slice(0, 4);

  return (
    <main className="overflow-hidden bg-[#fbf8f1] text-[#101b24]">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#071119] text-white">
        {/* Same background image preserved and now clearly visible */}
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2200&auto=format&fit=crop)" }}
        />
        {/* Dark luxury gradient overlay: party photo clearly visible on the right, dark on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/95 via-[#071119]/68 to-[#071119]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071119]/75 via-transparent to-[#071119]/35 pointer-events-none" />

        {/* Preserved bottom glow effect */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fbf8f1] via-[#fbf8f1]/30 to-transparent pointer-events-none z-10" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[160px] bg-gradient-to-t from-[#ffd45a]/25 via-[#ffecd1]/15 to-transparent blur-3xl pointer-events-none z-10" />

        <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-between px-5 pt-28 pb-4 md:px-12 md:pt-32 md:pb-6 z-20">
          {/* Main 2-column Hero Content */}
          <div className="my-auto grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center py-2">
            {/* Left Column */}
            <motion.div {...reveal} className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#ffd45a]">
                D R E A M &nbsp;•&nbsp; P L A N &nbsp;•&nbsp; C E L E B R A T E
              </p>

              <h1 className="mt-4 text-4xl font-medium leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[76px] font-serif-luxury">
                Creating
                <span className="block italic text-[#ffd45a] font-serif-luxury my-1 font-normal drop-shadow-[0_2px_15px_rgba(255,212,90,0.3)]">
                  Extraordinary
                </span>
                Experiences
              </h1>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/85 font-normal">
                From intimate gatherings to grand celebrations, VEYORA turns your moments into timeless memories with creativity, precision and passion.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/events"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#FF8FB8] hover:bg-white text-[#071119] px-7 py-3 text-xs md:text-sm font-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,143,184,0.5)]"
                >
                  <span>Explore Events</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/galleries"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-xs md:text-sm font-bold shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-white/40 text-[9px] text-[#FF8FB8]">▶</span>
                  <span>Watch Our Story</span>
                </Link>
              </div>

              {/* 4 Stats in row with micro-hover effect */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
                {heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2.5 p-2 rounded-xl border border-transparent hover:border-white/15 hover:bg-white/5 transition-all duration-200 cursor-default"
                  >
                    <span className="shrink-0 grid h-9 w-9 place-items-center rounded-xl bg-white/10 border border-white/15 shadow-inner backdrop-blur-md">
                      {stat.icon}
                    </span>
                    <div>
                      <span className="block text-lg font-bold leading-none text-white sm:text-xl md:text-2xl">{stat.value}</span>
                      <span className="mt-1 block text-[11px] font-medium text-white/70">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trusted by Clients Social Proof */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white/60 transition-transform duration-200 hover:scale-110"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white/60 transition-transform duration-200 hover:scale-110"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white/60 transition-transform duration-200 hover:scale-110"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
                    alt="Client"
                  />
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF8FB8] text-[11px] font-black text-[#071119] ring-2 ring-white/60">
                    +
                  </span>
                </div>
                <p className="text-xs font-semibold text-white/80 leading-snug">
                  Trusted by Individuals,<br />Brands & Corporates
                </p>
              </div>
            </motion.div>

            {/* Right Column: Signature Luxury Visual Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              {/* Decorative delicate golden circular rings curving around */}
              <div className="absolute -left-6 -top-6 -bottom-6 right-8 rounded-full border border-[#ffd45a]/35 pointer-events-none -rotate-6 scale-105 hidden sm:block" />
              <div className="absolute left-8 -bottom-8 w-60 h-60 rounded-full border border-[#ffd45a]/25 pointer-events-none hidden sm:block" />

              {/* Main Organic Composition Container */}
              <div className="relative w-full max-w-[650px] h-[460px] sm:h-[500px] rounded-l-[240px] sm:rounded-l-[270px] rounded-r-[32px] overflow-hidden border-[6px] border-white/85 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#0b1721]">
                {/* Central Banquet Table Scene with Lake View */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Upper-Left Dark Arched Badge: Events That Matter */}
                <div className="absolute left-0 top-0 w-[240px] sm:w-[270px] h-[230px] sm:h-[250px] rounded-br-[130px] rounded-tl-[240px] bg-[#142330]/95 backdrop-blur-md pt-7 pb-6 pl-20 pr-4 sm:pt-8 sm:pb-7 sm:pl-24 sm:pr-5 text-white z-10 border-r border-b border-white/10 shadow-2xl">
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-bold leading-tight">
                    Events<br />That Matter
                  </h3>
                  <div className="w-8 h-[2px] bg-[#ffd45a] mt-2 mb-3" />
                  <ul className="space-y-1.5 text-[11px] sm:text-xs text-white/80 font-medium tracking-wide">
                    {["Weddings", "Corporate Events", "Social Celebrations", "Destination Events"].map((cat) => (
                      <li key={cat}>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="inline-block transition-colors hover:text-[#ffd45a] cursor-pointer"
                        >
                          {cat}
                        </motion.span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating "FEEL THE VIBE" Pill Badge */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute left-[140px] sm:left-[170px] top-[210px] sm:top-[230px] z-20 flex items-center gap-2.5 rounded-full bg-[#faeed6] border border-white/80 px-3.5 py-1.5 sm:py-2 shadow-2xl backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_10px_25px_rgba(255,212,90,0.4)]"
                >
                  <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-[#1b252e] text-white shadow-md text-[10px] pl-0.5">
                    ▶
                  </span>
                  <span className="text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider text-[#1b252e] leading-tight block pr-1">
                    FEEL<br />THE VIBE
                  </span>
                </motion.div>

                {/* Far Right Vertical Neon Panel: "Good People Great Moments" */}
                <div className="absolute right-0 top-0 bottom-0 w-[145px] sm:w-[165px] bg-[#0c1720]/80 backdrop-blur-sm border-l border-white/15 overflow-hidden flex flex-col justify-center items-center p-3 z-10">
                  {/* Subtle fairy lights backdrop */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519225429980-715cb0215aed?q=80&w=800&auto=format&fit=crop)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0c1720]/80 via-transparent to-[#0c1720]/90" />
                  {/* Arched golden line frame */}
                  <div className="absolute top-5 bottom-5 left-2.5 right-2.5 rounded-t-full border border-[#ffd45a]/35 pointer-events-none" />

                  {/* Golden Glowing Cursive Neon Script */}
                  <div className="relative z-10 font-script-neon text-amber-200 text-3xl sm:text-[34px] leading-[1.08] select-none text-center drop-shadow-[0_0_14px_rgba(255,212,90,0.85)]">
                    <span className="block">Good</span>
                    <span className="block">People</span>
                    <span className="block mt-1">Great</span>
                    <span className="block">Moments</span>
                  </div>
                </div>

                {/* Lower-Right Floating Testimonial Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 max-w-[270px] sm:max-w-[300px] rounded-[22px] bg-white/95 p-4 shadow-2xl backdrop-blur-xl border border-white/80 cursor-default"
                >
                  <span className="text-3xl font-serif-luxury text-[#c59b4e] leading-none block -mb-2">“</span>
                  <p className="text-xs font-medium text-[#1c2933] italic leading-relaxed">
                    "They made our special day absolutely magical!"
                  </p>
                  <div className="mt-2.5 flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=150&auto=format&fit=crop"
                      alt="Priya & Arjun"
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-[#ffd45a]/60 shadow-sm shrink-0"
                    />
                    <div>
                      <div className="flex text-amber-400 text-xs">★★★★★</div>
                      <p className="text-xs font-bold text-[#101b24]">Priya & Arjun</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Center Bottom: Scroll to Explore */}
          <div className="mt-4 flex flex-col items-center justify-center text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              — SCROLL TO EXPLORE —
            </p>
            <div className="mt-2 grid h-6 w-3.5 place-items-start justify-center rounded-full border border-white/40 p-0.5">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-[#ffd45a]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:px-12 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div {...reveal} className="text-center lg:text-left">
          <p className="text-xs font-black uppercase tracking-[0.48em] text-[#8d7d72]">Creating unforgettable moments</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">What We Do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5c6670] lg:mx-0">
            From unique events to private celebrations, we bring people together through incredible experiences across Australia, the UK and Europe.
          </p>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group rounded-[22px] bg-white p-6 shadow-sm border border-black/5 hover:border-[#ffd45a]/60 hover:shadow-xl transition-all duration-300 text-center cursor-default"
              >
                <div className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${service.tint} text-lg font-black text-[#173044] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-inner`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-black transition-colors group-hover:text-[#c59b4e]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c6670]">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="h-[330px] rounded-[22px] bg-cover bg-center shadow-2xl"
            style={{ backgroundImage: `url(${galleryItems[1].src})` }}
          />
          <motion.div
            whileHover={{ y: -6, scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="absolute -bottom-3 right-[-10px] rounded-[22px] bg-white p-5 shadow-xl border border-black/5 hover:border-[#ffd45a]/40 cursor-default"
          >
            <p className="text-lg font-black">Amazing People</p>
            <p className="mt-2 text-sm text-[#68727b]">Good times +</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Events Carousel */}
      <section
        className="relative bg-[#071119] bg-cover bg-center bg-no-repeat px-5 py-24 text-white md:px-12 overflow-hidden"
        style={{ backgroundImage: "url('/Upcoming%20Events%20section.png')" }}
      >
        {/* Luxury backdrop overlay: allows the background image to show clearly while maintaining perfect text and card readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071119]/80 via-[#071119]/65 to-[#071119]/85 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1440px]">
          <motion.div {...reveal} className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-[#FF8FB8]">Do not miss out</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl drop-shadow-md">Upcoming Events</h2>
            </div>
            <Link
              href="/events"
              className="w-fit rounded-full bg-[#FF8FB8] hover:bg-white text-[#071119] px-7 py-3 text-sm font-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,143,184,0.45)]"
            >
              View All Events →
            </Link>
          </motion.div>
          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#071119]/85 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#071119]/85 to-transparent" />
            <motion.div
              className="flex w-max gap-5 pb-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...events, ...events].map((event, index) => (
                <motion.article
                  key={`${event.id}-${index}`}
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ duration: 0.28 }}
                  className="group relative h-64 w-[280px] shrink-0 overflow-hidden rounded-[18px] bg-cover bg-center shadow-xl md:w-[320px] transition-all hover:shadow-2xl border border-white/10"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071119] via-[#071119]/35 to-transparent transition-opacity group-hover:opacity-80" />
                  <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-center text-xs font-black uppercase text-[#071119] shadow-md transition-transform duration-300 group-hover:scale-105">
                    {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-bold text-white/80">{event.city}</p>
                    <h3 className="mt-1 text-xl font-black group-hover:text-[#FF8FB8] transition-colors">{event.title}</h3>
                    <p className="mt-1 text-sm text-white/78">{event.venue}</p>
                  </div>
                  <Link
                    href={`/events/${event.city.toLowerCase()}`}
                    className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-[#FF8FB8] text-lg font-black text-[#071119] shadow-md transition-all duration-300 hover:bg-white hover:scale-115 hover:rotate-[-45deg]"
                  >
                    →
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* People Places Experiences */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...reveal} className="relative min-h-[360px]">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.08, zIndex: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-8 h-56 w-48 rotate-[-8deg] rounded-[22px] bg-cover bg-center shadow-xl md:w-64 cursor-pointer"
            style={{ backgroundImage: `url(${galleryItems[3].src})` }}
          />
          <motion.div
            whileHover={{ rotate: 0, scale: 1.08, zIndex: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[22%] top-0 h-72 w-56 rotate-[3deg] rounded-[22px] border-8 border-white bg-cover bg-center shadow-2xl md:w-72 cursor-pointer"
            style={{ backgroundImage: `url(${galleryItems[0].src})` }}
          />
          <motion.div
            whileHover={{ rotate: 0, scale: 1.08, zIndex: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-16 h-60 w-48 rotate-[-6deg] rounded-[22px] bg-cover bg-center shadow-xl md:w-64 cursor-pointer"
            style={{ backgroundImage: `url(${galleryItems[2].src})` }}
          />
          <motion.div
            whileHover={{ y: -8, scale: 1.06 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-4 left-[24%] z-10 rounded-[18px] bg-white p-5 shadow-xl border border-black/5 hover:border-[#ffd45a]/40 cursor-default"
          >
            <p className="text-lg font-black">Good Times</p>
            <p className="mt-2 text-sm text-[#68727b]">Real people +</p>
          </motion.div>
        </motion.div>
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#8d7d72]">Life is better together</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">People. Places. Experiences.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#5c6670]">
            We bring together amazing people in incredible locations, creating memories that last a lifetime.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {lifestyle.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group p-5 rounded-[20px] bg-white shadow-sm border border-black/5 hover:border-[#ff8fb8]/50 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ffcedd] text-sm font-black transition-all duration-300 group-hover:bg-[#ff8fb8] group-hover:text-white group-hover:scale-110">
                  {item.mark}
                </div>
                <h3 className="mt-4 font-black transition-colors group-hover:text-[#101b24]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#68727b]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mailing List Section */}
      <section className="relative overflow-hidden bg-[#071119] px-5 py-14 text-white md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="relative mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-white/60">Stay in the loop</p>
            <h2 className="mt-3 text-4xl font-black">Join Our Mailing List</h2>
            <p className="mt-3 text-sm text-white/75">Be the first to know about upcoming events, exclusive experiences and special offers.</p>
          </div>
          <form className="flex rounded-full bg-white p-2 shadow-2xl focus-within:ring-2 focus-within:ring-[#FF8FB8]">
            <input className="min-w-0 flex-1 bg-transparent px-5 text-sm text-[#071119] outline-none placeholder:text-[#8b96a0]" placeholder="Your email address" type="email" />
            <button
              className="rounded-full bg-[#FF8FB8] hover:bg-[#071119] hover:text-white px-6 py-3 text-sm font-black text-[#071119] shadow-md transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              type="submit"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-5 py-20 md:px-12">
        <motion.div {...reveal} className="mx-auto max-w-[1440px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#8d7d72]">What people say</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Real People. Great Experiences.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group rounded-[22px] bg-white p-7 text-left shadow-sm hover:shadow-2xl border border-black/5 hover:border-[#ffd45a]/50 transition-all duration-300 cursor-default flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif text-[#ffd45a] leading-none block -mb-1 transition-transform duration-200 group-hover:scale-110">“</span>
                  <p className="text-base leading-7 text-[#4d5963]">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5">
                  <p className="font-black text-[#101b24] group-hover:text-[#c59b4e] transition-colors">{testimonial.name}</p>
                  <p className="text-[#ffb000] text-sm group-hover:scale-105 transition-transform">★★★★★</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
