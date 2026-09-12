"use client";

import { useState } from "react";
import { AdminCard, AdminPageHeader } from "@/components/admin/AdminUI";
import { cities } from "@/lib/data/cities";
import { testimonials } from "@/lib/data/site";

export default function AdminHomepagePage() {
  const [hero, setHero] = useState({
    eyebrow: "Unforgettable experiences",
    title: "Real People. Extraordinary Experiences.",
    subtitle: "We connect people with unique experiences, incredible locations and passionate locals.",
    videoUrl: "",
  });
  const [whatWeDo, setWhatWeDo] = useState(
    "We design and deliver hosted events, private bookings, hens parties, corporate experiences and deeper travel experiences across Australia, the UK and Europe.",
  );
  const [mailingListText, setMailingListText] = useState("Join our mailing list for early access to new events and destinations.");
  const [featuredEventIds, setFeaturedEventIds] = useState<string[]>(
    cities.flatMap((city) => city.events).slice(0, 3).map((event) => event.id),
  );
  const [featuredTestimonialIds, setFeaturedTestimonialIds] = useState<string[]>(testimonials.map((t) => t.id));
  const [saved, setSaved] = useState(false);

  const allEvents = cities.flatMap((city) => city.events.map((event) => ({ ...event, cityName: city.name })));

  const toggleEvent = (id: string) => {
    setFeaturedEventIds((current) => (current.includes(id) ? current.filter((e) => e !== id) : [...current, id]));
  };

  const toggleTestimonial = (id: string) => {
    setFeaturedTestimonialIds((current) => (current.includes(id) ? current.filter((t) => t !== id) : [...current, id]));
  };

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Homepage CMS"
        title="Homepage Content"
        text="Edit the hero, What We Do copy, featured events, testimonials and mailing list section shown on the homepage."
        action={
          <button type="button" onClick={save} className="rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            Save Changes
          </button>
        }
      />

      {saved ? (
        <div className="rounded-[12px] bg-[#cdf8dc] px-4 py-3 text-sm font-bold text-[#0f6b2c]">Homepage content saved (prototype — connect to CMS storage next).</div>
      ) : null}

      <AdminCard>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Hero</p>
        <div className="mt-4 grid gap-3">
          <label className="grid gap-1 text-sm font-bold">
            Eyebrow
            <input value={hero.eyebrow} onChange={(event) => setHero({ ...hero, eyebrow: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Title
            <input value={hero.title} onChange={(event) => setHero({ ...hero, title: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Subtitle
            <textarea value={hero.subtitle} onChange={(event) => setHero({ ...hero, subtitle: event.target.value })} className="min-h-20 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
          </label>
          <label className="grid gap-1 text-sm font-bold">
            Hero video URL (optional)
            <input value={hero.videoUrl} onChange={(event) => setHero({ ...hero, videoUrl: event.target.value })} placeholder="https://..." className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
          </label>
        </div>
      </AdminCard>

      <AdminCard>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">What We Do</p>
        <textarea value={whatWeDo} onChange={(event) => setWhatWeDo(event.target.value)} className="mt-4 min-h-24 w-full rounded-[10px] border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#ff8fb8]" />
      </AdminCard>

      <AdminCard>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Featured events</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {allEvents.map((event) => (
            <label key={event.id} className="flex items-center gap-3 rounded-[10px] border border-black/5 px-3 py-2 text-sm font-bold">
              <input type="checkbox" checked={featuredEventIds.includes(event.id)} onChange={() => toggleEvent(event.id)} className="h-4 w-4" />
              {event.title} <span className="font-normal text-[#8b96a0]">— {event.cityName}</span>
            </label>
          ))}
        </div>
      </AdminCard>

      <AdminCard>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Testimonials shown</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <label key={testimonial.id} className="flex items-center gap-3 rounded-[10px] border border-black/5 px-3 py-2 text-sm font-bold">
              <input type="checkbox" checked={featuredTestimonialIds.includes(testimonial.id)} onChange={() => toggleTestimonial(testimonial.id)} className="h-4 w-4" />
              {testimonial.name}
            </label>
          ))}
        </div>
      </AdminCard>

      <AdminCard>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Mailing list section</p>
        <textarea value={mailingListText} onChange={(event) => setMailingListText(event.target.value)} className="mt-4 min-h-16 w-full rounded-[10px] border border-black/10 px-3 py-2 text-sm outline-none focus:border-[#ff8fb8]" />
      </AdminCard>
    </div>
  );
}
