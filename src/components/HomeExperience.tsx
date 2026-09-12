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

export function HomeExperience() {
  const events = cities.flatMap((city) => city.events.map((event) => ({ ...event, city: city.name }))).slice(0, 4);

  return (
    <main className="overflow-hidden bg-[#fbf8f1] text-[#101b24]">
      <section className="relative min-h-[92vh] overflow-hidden bg-[#071119] text-white">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2200&auto=format&fit=crop)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/42 to-[#071119]/12" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fbf8f1] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-center px-5 pb-24 pt-32 md:px-12">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.55em] text-white/85">Experiences · People · Good Times</p>
            <h1 className="mt-6 max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
              More Than Just Events
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-white/88">
              Unforgettable experiences in amazing cities. Music, people, culture and so much more.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/events" className="rounded-full bg-white px-7 py-4 text-sm font-black text-[#071119] transition hover:bg-[#ff8fb8]">
                Explore Events →
              </Link>
              <Link href="/galleries" className="rounded-full border border-white/45 px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">
                Watch Video
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="absolute bottom-24 right-5 hidden items-center gap-4 rounded-full bg-white/10 p-2 pr-6 backdrop-blur-xl md:flex"
          >
            <div className="h-20 w-20 rounded-full border-4 border-white bg-cover bg-center" style={{ backgroundImage: `url(${galleryItems[0].src})` }} />
            <div>
              <p className="font-black">Feel the Vibe</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.25em] text-white/55">Play Video</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:px-12 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div {...reveal} className="text-center lg:text-left">
          <p className="text-xs font-black uppercase tracking-[0.48em] text-[#8d7d72]">Creating unforgettable moments</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">What We Do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5c6670] lg:mx-0">
            From unique events to private celebrations, we bring people together through incredible experiences across Australia, the UK and Europe.
          </p>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div key={service.title} whileHover={{ y: -8 }} className="text-center">
                <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${service.tint} text-lg font-black text-[#173044]`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-black">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c6670]">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative hidden lg:block">
          <div className="h-[330px] rounded-[22px] bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(${galleryItems[1].src})` }} />
          <div className="absolute -bottom-3 right-[-10px] rounded-[22px] bg-white p-5 shadow-xl">
            <p className="text-lg font-black">Amazing People</p>
            <p className="mt-2 text-sm text-[#68727b]">Good times +</p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#071119] px-5 py-20 text-white md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <motion.div {...reveal} className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-white/60">Do not miss out</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Upcoming Events</h2>
            </div>
            <Link href="/events" className="w-fit rounded-full border border-white/40 px-6 py-3 text-sm font-black transition hover:bg-white hover:text-[#071119]">
              View All Events →
            </Link>
          </motion.div>
          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#071119] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#071119] to-transparent" />
            <motion.div
              className="flex w-max gap-5 pb-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...events, ...events].map((event, index) => (
                <motion.article
                  key={`${event.id}-${index}`}
                  whileHover={{ y: -8 }}
                  className="relative h-64 w-[280px] shrink-0 overflow-hidden rounded-[18px] bg-cover bg-center shadow-xl md:w-[320px]"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071119] via-[#071119]/25 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-center text-xs font-black uppercase text-[#071119]">
                    {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-bold text-white/80">{event.city}</p>
                    <h3 className="mt-1 text-xl font-black">{event.title}</h3>
                    <p className="mt-1 text-sm text-white/78">{event.venue}</p>
                  </div>
                  <Link href={`/events/${event.city.toLowerCase()}`} className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white text-lg font-black text-[#071119]">
                    →
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...reveal} className="relative min-h-[360px]">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-8 h-56 w-48 rotate-[-8deg] rounded-[22px] bg-cover bg-center shadow-xl md:w-64"
            style={{ backgroundImage: `url(${galleryItems[3].src})` }}
          />
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[22%] top-0 h-72 w-56 rotate-[3deg] rounded-[22px] border-8 border-white bg-cover bg-center shadow-2xl md:w-72"
            style={{ backgroundImage: `url(${galleryItems[0].src})` }}
          />
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-16 h-60 w-48 rotate-[-6deg] rounded-[22px] bg-cover bg-center shadow-xl md:w-64"
            style={{ backgroundImage: `url(${galleryItems[2].src})` }}
          />
          <motion.div
            whileHover={{ y: -6, scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-[24%] z-10 rounded-[18px] bg-white p-5 shadow-xl"
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
              <motion.div key={item.title} whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="group cursor-default">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ffcedd] text-sm font-black transition-colors duration-300 group-hover:bg-[#ff8fb8] group-hover:text-white">
                  {item.mark}
                </div>
                <h3 className="mt-4 font-black">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#68727b]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#071119] px-5 py-14 text-white md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="relative mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-white/60">Stay in the loop</p>
            <h2 className="mt-3 text-4xl font-black">Join Our Mailing List</h2>
            <p className="mt-3 text-sm text-white/75">Be the first to know about upcoming events, exclusive experiences and special offers.</p>
          </div>
          <form className="flex rounded-full bg-white p-2 shadow-2xl">
            <input className="min-w-0 flex-1 bg-transparent px-5 text-sm text-[#071119] outline-none" placeholder="Your email address" type="email" />
            <button className="rounded-full bg-[#ff8fb8] px-6 py-3 text-sm font-black text-[#071119]" type="submit">Subscribe →</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-20 md:px-12">
        <motion.div {...reveal} className="mx-auto max-w-[1440px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#8d7d72]">What people say</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Real People. Great Experiences.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="rounded-[18px] bg-white p-6 text-left shadow-sm">
                <p className="text-base leading-7 text-[#4d5963]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-black">{testimonial.name}</p>
                  <p className="text-[#ffb000]">★★★★★</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
