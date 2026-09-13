"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const heroWords = ["Real People.", "Extraordinary", "Experiences."];

const heroContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const heroWord = {
  initial: { opacity: 0, y: 46, rotate: 3, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, rotate: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
} as const;

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

const heroHighlights = [
  {
    title: "Extraordinary Locations",
    text: "From hidden gems to iconic destinations.",
    icon: icons.pin,
    className: "right-2 top-4 hidden max-w-[255px] lg:flex",
    tone: "text-[#10211a]",
  },
  {
    title: "Unforgettable Events",
    text: "Curated experiences in stunning locations.",
    icon: icons.calendar,
    className: "right-0 top-[42%] hidden max-w-[250px] xl:flex",
    tone: "text-[#a47755]",
  },
  {
    title: "Meaningful Connections",
    text: "Bringing people together through shared passions.",
    icon: icons.users,
    className: "bottom-[28%] left-4 hidden max-w-[335px] bg-[#101b24]/88 text-white lg:flex",
    tone: "text-white",
  },
  {
    title: "Passionate Locals",
    text: "Authentic experiences guided by real people.",
    icon: icons.leaf,
    className: "bottom-16 right-4 hidden max-w-[270px] lg:flex",
    tone: "text-[#10211a]",
  },
];

export function AboutLanding() {
  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      <section className="relative min-h-screen overflow-hidden bg-[#f4f1ea] pt-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.95),rgba(244,241,234,0.74)_40%,rgba(236,227,216,0.74)_100%)]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBgImage})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(112deg,#fbfaf6_0%,#fbfaf6_43%,rgba(251,250,246,0.62)_54%,rgba(251,250,246,0.18)_100%)]" />
        <div className="absolute -right-20 bottom-0 h-52 w-[58%] rotate-[-10deg] bg-white/72" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f4ee] via-[#f7f4ee]/85 to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1440px] gap-10 px-5 pb-14 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="z-10 max-w-2xl pt-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative inline-flex w-fit items-center gap-5 text-xs font-black uppercase tracking-[0.45em] text-[#5c665f]"
            >
              Our Story
              <span className="h-px w-24 bg-[#5c665f]/55" />
            </motion.p>
            <motion.h1
              variants={heroContainer}
              initial="initial"
              animate="animate"
              className="mt-10 flex max-w-2xl flex-col text-4xl font-black leading-[0.98] text-[#101b24] sm:text-5xl md:text-6xl xl:text-7xl"
            >
              {heroWords.map((word, index) => (
                <motion.span key={word} variants={heroWord} className={`inline-block ${index === 1 ? "text-[#b99176]" : ""}`}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.65 }}
              className="mt-7 max-w-xl text-lg font-medium leading-8 text-[#59636d]"
            >
              We connect people with unique experiences, incredible locations and passionate locals - creating
              moments that last a lifetime.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.65 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#our-story"
                whileHover={{ scale: 1.04, boxShadow: "0 20px 45px rgba(30,55,43,0.22)" }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full bg-[#1f382c] px-10 py-4 text-sm font-black text-white transition-colors hover:bg-[#101b24]"
              >
                Our Story &rarr;
              </motion.a>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 rounded-full border border-black/15 bg-white/28 px-8 py-4 text-sm font-black text-[#101b24] transition-colors hover:bg-[#101b24] hover:text-white"
              >
                <Icon path={icons.play} className="h-4 w-4" /> Watch Video
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.65 }}
              className="mt-12 grid gap-5 border-t border-black/12 pt-7 sm:grid-cols-2 lg:grid-cols-4"
            >
              {heroStrip.map((stat) => (
                <div key={stat.label} className="border-black/15 sm:pr-5 lg:border-r last:border-r-0">
                  <Icon path={stat.icon} className="h-6 w-6 text-[#9b6d52]" />
                  <p className="mt-3 text-2xl font-black leading-none text-[#101b24]">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-[#334038]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[620px] w-full max-w-4xl justify-self-end max-lg:hidden"
          >
            {heroHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: [0, -12, 0] }}
                transition={{
                  opacity: { delay: 0.8 + index * 0.12, duration: 0.55 },
                  y: { duration: 4.5 + index * 0.35, repeat: Infinity, ease: "easeInOut", delay: index * 0.45 },
                }}
                whileHover={{ y: -5 }}
                className={`absolute z-40 items-center gap-4 rounded-[22px] border border-white/55 bg-white/82 px-6 py-5 shadow-2xl backdrop-blur-xl ${item.className}`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/70">
                  <Icon path={item.icon} className={`h-7 w-7 ${item.tone}`} />
                </span>
                <span>
                  <span className="block text-base font-black leading-tight">{item.title}</span>
                  <span className="mt-2 block text-sm leading-5 opacity-75">{item.text}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


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
