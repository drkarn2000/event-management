"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cities, regionLabels } from "@/lib/data/cities";
import { Region } from "@/lib/types";

const regions: Region[] = ["australia", "uk", "europe"];

export function EventsTabs() {
  const [region, setRegion] = useState<Region>("australia");
  const [citySlug, setCitySlug] = useState("sydney");

  const visibleCities = useMemo(() => cities.filter((city) => city.region === region), [region]);
  const selectedCity = cities.find((city) => city.slug === citySlug) ?? visibleCities[0];

  function selectRegion(nextRegion: Region) {
    setRegion(nextRegion);
    setCitySlug(cities.find((city) => city.region === nextRegion)?.slug ?? "sydney");
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-2">
        {regions.map((item) => (
          <button
            key={item}
            onClick={() => selectRegion(item)}
            className={`rounded-full px-4 py-2 text-sm font-black uppercase tracking-wide transition ${
              region === item ? "bg-[#141414] text-white" : "bg-white text-[#141414] hover:bg-[#ffd45a]"
            }`}
            type="button"
          >
            {regionLabels[item]}
          </button>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {visibleCities.map((city) => (
          <button
            key={city.slug}
            onClick={() => setCitySlug(city.slug)}
            className={`shrink-0 rounded-md border px-4 py-3 text-left text-sm font-bold transition ${
              selectedCity.slug === city.slug ? "border-[#e84a27] bg-[#e84a27] text-white" : "border-black/10 bg-white text-[#141414]"
            }`}
            type="button"
          >
            {city.name}
          </button>
        ))}
      </div>
      <motion.div
        key={selectedCity.slug}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${selectedCity.heroImage})` }} />
          <div className="p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e84a27]">{regionLabels[selectedCity.region]}</p>
            <h2 className="mt-2 text-3xl font-black text-[#141414]">{selectedCity.name}</h2>
            <p className="mt-2 text-[#5a5148]">{selectedCity.tagline}</p>
            <div className="mt-6 grid gap-4">
              {selectedCity.events.map((event) => (
                <article key={event.id} className="rounded-md border border-black/10 p-4">
                  <p className="text-sm font-black text-[#e84a27]">{new Date(event.date).toLocaleDateString("en-AU", { dateStyle: "medium" })}</p>
                  <h3 className="mt-1 text-xl font-black text-[#141414]">{event.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#5a5148]">{event.venue}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6b625a]">{event.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <aside className="rounded-lg border border-black/10 bg-[#141414] p-6 text-white">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd45a]">Booking Widget</p>
          <h3 className="mt-3 text-3xl font-black">{selectedCity.name} bookings</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Replace this placeholder with the client booking embed for this city.
          </p>
          <div className="mt-6 rounded-md border border-white/15 bg-white/10 p-4 text-sm text-white/80">
            Embed URL: {selectedCity.bookingWidgetUrl}
          </div>
          <a href={selectedCity.bookingWidgetUrl} className="mt-6 block rounded-full bg-[#ffd45a] px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-[#141414]">
            Open Booking
          </a>
        </aside>
      </motion.div>
    </div>
  );
}
