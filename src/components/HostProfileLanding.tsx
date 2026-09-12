"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Host } from "@/lib/types";
import { experiences } from "@/lib/data/site";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons = {
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  party: "M4 20l5-11 6 6-11 5z M15 4l1.5 3M19 7.5 22 9M17 2l2 2 M9 9l1 3",
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  calendar: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z M4 10h16 M8 3v4 M16 3v4",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  instagram: "M4 4h16v16H4z M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z M16 7h.01",
  facebook: "M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z",
  website: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M14.5 9.5l-2 5-5 2 2-5 5-2z",
  gem: "M6 3h12l3 5-9 13L3 8l3-5z M3 8h18 M9 3l3 5 3-5 M12 8l-3 13 3-13 3 13-3-13",
  leaf: "M5 21c8 0 15-7 15-15V4h-2C10 4 3 11 3 19v2z M5 21c2-6 6-10 12-12",
  heart: "M12 21c-1-1-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-7 10-8 11z",
};

export function HostProfileLanding({ host }: { host: Host }) {
  const hostedExperiences = experiences.filter((experience) => host.experienceSlugs.includes(experience.slug));

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      <section className="relative min-h-[70vh] overflow-hidden bg-[#071119] text-white">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${host.coverPhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/94 via-[#071119]/55 to-[#071119]/15" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <div className="mb-6 flex items-center gap-2 text-sm font-bold text-white/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>&gt;</span>
              <Link href="/the-village" className="hover:text-white">The Village</Link>
              <span>&gt;</span>
              <span>{host.name}</span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/78">{host.role}</p>
            <h1 className="mt-5 max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">{host.name}</h1>
            <p className="mt-4 flex items-center gap-2 text-lg font-bold text-white/85">
              <Icon path={icons.pin} className="h-5 w-5" /> {host.location}
            </p>
            <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-white/86">{host.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {host.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/12 px-4 py-2 text-xs font-bold text-white/90">{tag}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#experiences" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
                Book an Experience &rarr;
              </a>
              <a href="#enquire" className="rounded-full border border-white/40 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">
                Enquire Now
              </a>
            </div>
            <div className="mt-7 flex gap-3">
              {host.social.instagram ? (
                <a href={host.social.instagram} className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#071119]">
                  <Icon path={icons.instagram} className="h-4 w-4" />
                </a>
              ) : null}
              {host.social.facebook ? (
                <a href={host.social.facebook} className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#071119]">
                  <Icon path={icons.facebook} className="h-4 w-4" />
                </a>
              ) : null}
              {host.social.website ? (
                <a href={host.social.website} className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#071119]">
                  <Icon path={icons.website} className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div {...reveal} className="h-80 overflow-hidden rounded-[20px] shadow-xl lg:h-[26rem]">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${host.photo})` }} />
        </motion.div>
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">About {host.name.split(" ")[0]}</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">The Story So Far</h2>
          <p className="mt-5 text-lg leading-8 text-[#59636d]">{host.fullBio}</p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-6 px-5 pb-16 sm:grid-cols-2 md:px-12 lg:grid-cols-4">
        {[
          { icon: icons.pin, value: `Based in ${host.location.split(",")[0]}`, label: "Home base" },
          { icon: icons.star, value: `${host.rating} Rating`, label: "Guest rating" },
          { icon: icons.party, value: `${host.experienceCount}+ Experiences`, label: "Hosted so far" },
          { icon: icons.users, value: `${host.guestCount.toLocaleString()}+ Guests`, label: "Welcomed" },
        ].map((item) => (
          <motion.div {...reveal} key={item.label} className="rounded-[18px] bg-white p-6 text-center shadow-sm">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ffe3ed] text-[#ff8fb8]">
              <Icon path={item.icon} className="h-5 w-5" />
            </div>
            <p className="mt-4 font-black">{item.value}</p>
            <p className="mt-1 text-xs text-[#66717b]">{item.label}</p>
          </motion.div>
        ))}
      </section>

      <section id="experiences" className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Experiences hosted</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Experiences by {host.name.split(" ")[0]}</h2>
          </div>
          <Link href="/a-deeper-dive" className="text-sm font-black text-[#101b24]">View All Experiences &rarr;</Link>
        </motion.div>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hostedExperiences.map((experience) => (
            <motion.article {...reveal} key={experience.slug} className="overflow-hidden rounded-[18px] bg-white shadow-sm transition hover:shadow-lg">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${experience.image})` }} />
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff8fb8]">{experience.category.replace("-", " & ")}</p>
                <h3 className="mt-2 text-lg font-black leading-tight">{experience.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-[#66717b]">
                  <Icon path={icons.pin} className="h-3.5 w-3.5" /> {experience.location}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#59636d]">{experience.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-black">From ${experience.price}</p>
                  <Link href="/a-deeper-dive" className="flex items-center gap-1 text-sm font-black text-[#101b24]">
                    View Experience <Icon path={icons.arrow} className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
          {hostedExperiences.length === 0 ? (
            <p className="col-span-full text-sm text-[#66717b]">No experiences linked yet.</p>
          ) : null}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071119] px-5 py-16 text-white md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <motion.div {...reveal} className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/65">Upcoming events</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Join {host.name.split(" ")[0]} Next</h2>
            </div>
            <Link href="/events" className="text-sm font-black text-white">View All Events &rarr;</Link>
          </motion.div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {host.upcomingEvents.map((event) => (
              <motion.div {...reveal} key={event.id} className="flex flex-col justify-between gap-4 rounded-[18px] border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="flex items-center gap-2 text-xs font-bold text-white/60">
                    <Icon path={icons.calendar} className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <h3 className="mt-2 text-lg font-black">{event.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-white/70">
                    <Icon path={icons.pin} className="h-3.5 w-3.5" /> {event.location}
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#ffd45a]">{event.availability}</p>
                </div>
                <a href="#enquire" className="shrink-0 rounded-full bg-[#ff8fb8] px-6 py-3 text-sm font-black text-[#071119] transition hover:bg-white">
                  Book Now &rarr;
                </a>
              </motion.div>
            ))}
            {host.upcomingEvents.length === 0 ? (
              <p className="text-sm text-white/70">No upcoming events scheduled right now.</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Host gallery</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Moments with {host.name.split(" ")[0]}</h2>
        </motion.div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {host.gallery.map((image) => (
            <motion.div {...reveal} key={image} whileHover={{ y: -6 }} className="h-48 overflow-hidden rounded-[16px] bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">What guests say</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Guest Reviews</h2>
        </motion.div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {host.testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[18px] bg-white p-6 shadow-sm">
              <p className="text-sm leading-6 text-[#59636d]">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-black">{testimonial.name}</p>
                <p className="text-[#ffb000] text-sm">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="grid gap-8 rounded-[24px] bg-[#f1eee6] p-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#8b7e76]">Why experience with me</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">What Sets {host.name.split(" ")[0]} Apart</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {host.uniquePoints.map((point, index) => (
              <div key={point} className="flex items-start gap-3">
                <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[#071119] ${["bg-[#ffd0df]", "bg-[#dbe7ff]", "bg-[#cdf8dc]", "bg-[#fff0ce]"][index % 4]}`}>
                  <Icon path={[icons.compass, icons.gem, icons.leaf, icons.heart][index % 4]} className="h-4 w-4" />
                </div>
                <p className="text-sm font-bold leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="enquire" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${host.coverPhoto})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/70 to-[#071119]/35" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-5 py-16 text-white md:flex-row md:items-center md:px-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Ready to explore?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ready to Experience It With {host.name.split(" ")[0]}?</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#experiences" className="rounded-full bg-white px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-[#ff8fb8]">
              Explore Experiences &rarr;
            </a>
            <Link href="/private-bookings" className="rounded-full border border-white/40 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">
              Enquire Now &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
