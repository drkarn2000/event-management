"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cities, regionLabels } from "@/lib/data/cities";
import { Region } from "@/lib/types";

type CityFilter = "all" | string;
type SortMode = "date" | "city";

const destinationCards = [
  {
    name: "Ibiza",
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Barcelona",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Mykonos",
    image: "https://images.unsplash.com/photo-1601581875039-e899893d520c?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Amsterdam",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=900&auto=format&fit=crop",
  },
];

const valueProps = [
  {
    title: "Curated Events",
    text: "Handpicked experiences in amazing locations",
    mark: "CAL",
  },
  {
    title: "Great Community",
    text: "Meet like-minded people",
    mark: "VIP",
  },
  {
    title: "Iconic Destinations",
    text: "Events in Australia, the UK and Europe",
    mark: "PIN",
  },
];

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
  calendar: "M7 3v4 M17 3v4 M4 8h16 M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1z M8 12h3 M8 16h3 M14 12h2 M14 16h2",
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  arrowRight: "M5 12h14 M13 6l6 6-6 6",
};

const heroStats = [
  { icon: icons.calendar, value: "500+", label: "Events Worldwide" },
  { icon: icons.pin, value: "100+", label: "Amazing Locations" },
  { icon: icons.users, value: "1M+", label: "Event Goers" },
  { icon: icons.star, value: "4.8", label: "Average Rating" },
];

export function EventsDiscovery() {
  const [activeCity, setActiveCity] = useState<CityFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("date");

  const allEvents = useMemo(
    () =>
      cities.flatMap((city) =>
        city.events.map((event) => ({
          ...event,
          citySlug: city.slug,
          cityName: city.name,
          region: city.region,
          bookingWidgetUrl: city.bookingWidgetUrl,
        })),
      ),
    [],
  );

  const visibleEvents = useMemo(() => {
    const filtered = activeCity === "all" ? allEvents : allEvents.filter((event) => event.citySlug === activeCity);
    return [...filtered].sort((a, b) => {
      if (sortMode === "city") {
        return a.cityName.localeCompare(b.cityName);
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [activeCity, allEvents, sortMode]);

  const regionGroups: Region[] = ["australia", "uk", "europe"];
  const featuredEvent = allEvents[0];

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      <section className="relative min-h-screen overflow-hidden bg-[#071119] text-white">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2200&auto=format&fit=crop)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/94 via-[#073140]/58 to-[#071119]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071119]/82 via-transparent to-[#071119]/12" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f4ee] via-[#f7f4ee]/55 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto grid min-h-screen max-w-[1440px] gap-10 px-5 pb-20 pt-32 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <motion.div {...reveal} className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.55em] text-white/80">Events around the world</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">
              Unforgettable <span className="block text-[#cdeeff]">Events</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-white/88">
              Music. People. Culture. Incredible locations. Find your next experience.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-center gap-5 ${index > 0 ? "xl:border-l xl:border-white/22 xl:pl-7" : ""}`}
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-[18px] border border-white/18 bg-white/10 backdrop-blur-xl">
                    <Icon path={stat.icon} className="h-7 w-7 text-white" />
                  </span>
                  <span>
                    <span className="block text-3xl font-black leading-none">{stat.value}</span>
                    <span className="mt-2 block text-base font-medium text-white/86">{stat.label}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative hidden min-h-[560px] lg:block"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="absolute right-0 top-0 z-30 flex max-w-[285px] items-center gap-4 rounded-[22px] border border-white/45 bg-white/78 p-6 text-[#101b24] shadow-2xl backdrop-blur-xl"
            >
              <Icon path={icons.pin} className="h-9 w-9 shrink-0" />
              <div>
                <p className="text-lg font-black">Explore Events Worldwide</p>
                <p className="mt-2 text-sm leading-5 text-[#4f5a62]">Discover amazing experiences in iconic destinations.</p>
              </div>
              <Icon path={icons.arrowRight} className="h-5 w-5 shrink-0 text-[#53606a]" />
            </motion.div>

            {featuredEvent ? (
              <motion.article
                whileHover={{ y: -8, scale: 1.025 }}
                transition={{ duration: 0.28 }}
                className="absolute bottom-24 right-4 z-20 w-[520px] overflow-hidden rounded-[28px] border-[10px] border-[#8ed8e8]/65 bg-[#071119]/88 shadow-2xl backdrop-blur-xl"
              >
                <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url(${featuredEvent.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071119]/25 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-[#1f9cf0] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                    Featured
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight">Music & Lifestyle Events</h2>
                    <p className="mt-1 text-sm text-white/78">Unforgettable moments in stunning locations.</p>
                  </div>
                  <Link href={`/events/${featuredEvent.citySlug}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#071119] transition hover:bg-[#ff8fb8]" aria-label="View featured event">
                    <Icon path={icons.arrowRight} className="h-6 w-6" />
                  </Link>
                </div>
              </motion.article>
            ) : null}
          </motion.div>
        </motion.div>
      </section>

      <section className="sticky top-[73px] z-30 border-b border-black/5 bg-[#f7f4ee]/88 px-5 py-4 backdrop-blur-xl md:px-12">
        <div className="mx-auto flex max-w-[1440px] gap-3 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveCity("all")}
            className={`min-h-12 shrink-0 rounded-[14px] px-7 text-sm font-black transition ${
              activeCity === "all" ? "bg-[#071119] text-white shadow-lg" : "bg-white/80 text-[#4e5962] shadow-sm hover:bg-white"
            }`}
            type="button"
          >
            All Events
          </button>
          {regionGroups.map((region) =>
            cities
              .filter((city) => city.region === region)
              .map((city) => (
                <button
                  key={city.slug}
                  onClick={() => setActiveCity(city.slug)}
                  className={`min-h-12 shrink-0 rounded-[14px] px-7 text-sm font-black transition ${
                    activeCity === city.slug ? "bg-[#071119] text-white shadow-lg" : "bg-white/80 text-[#4e5962] shadow-sm hover:bg-white"
                  }`}
                  type="button"
                >
                  {city.name}
                </button>
              )),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-12">
        <motion.div {...reveal} className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Discover</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Upcoming Events</h2>
          </div>
          <label className="flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black text-[#101b24] shadow-sm">
            Sort by:
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="bg-transparent font-black outline-none"
            >
              <option value="date">Date</option>
              <option value="city">City</option>
            </select>
          </label>
        </motion.div>

        <motion.div layout className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleEvents.map((event) => {
            const date = new Date(event.date);
            return (
              <motion.article
                layout
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.28 }}
                className="group relative min-h-[318px] overflow-hidden rounded-[20px] bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[12px] bg-white px-4 py-3 text-center text-[#071119] shadow-lg">
                  <p className="text-xs font-black uppercase">{date.toLocaleDateString("en-US", { month: "short" })}</p>
                  <p className="text-xl font-black leading-none">{date.toLocaleDateString("en-US", { day: "2-digit" })}</p>
                </div>
                <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-[#101b24]/65 text-xl text-white backdrop-blur-md transition group-hover:bg-[#ff8fb8] group-hover:text-[#071119]" type="button">
                  ♡
                </button>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-sm font-bold text-white/86">{event.cityName}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{event.title}</h3>
                  <p className="mt-2 text-sm font-medium text-white/80">{event.venue}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="min-w-0 text-sm text-white/82">
                      {regionLabels[event.region]} · {event.description.split(".")[0]}
                    </p>
                    <Link
                      href={`/events/${event.citySlug}`}
                      className="shrink-0 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#071119] transition hover:bg-white"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-12 md:px-12">
        <motion.div
          {...reveal}
          className="relative grid min-h-[260px] gap-8 overflow-hidden rounded-[24px] bg-[#071119] p-8 text-white md:grid-cols-[1fr_1.2fr] md:p-10"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-65"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1800&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073140]/90 via-[#073140]/55 to-[#071119]/40" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/75">Explore more</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Events in Europe</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-white/86">
              From beach clubs to city rooftops, discover unforgettable experiences across Europe.
            </p>
            <Link href="/events/berlin" className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-[#071119] transition hover:bg-[#ff8fb8]">
              View European Events →
            </Link>
          </div>
          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-5">
            {destinationCards.map((destination) => (
              <motion.div
                key={destination.name}
                whileHover={{ y: -8 }}
                className="relative min-h-44 overflow-hidden rounded-[18px] border border-white/70 bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute inset-x-0 bottom-4 text-center text-base font-black text-white">{destination.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-0 px-5 pb-16 md:grid-cols-3 md:px-12">
        {valueProps.map((item, index) => (
          <motion.div
            {...reveal}
            key={item.title}
            className={`flex items-center gap-5 py-8 ${index > 0 ? "border-t border-black/10 md:border-l md:border-t-0 md:pl-12" : ""}`}
          >
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[#e8edf0] text-sm font-black text-[#071119] shadow-inner">
              {item.mark}
            </div>
            <div>
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-1 text-base text-[#68727b]">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
