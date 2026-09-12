"use client";

import { useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, adminIcons } from "@/components/admin/AdminUI";
import { cities as citiesData, regionLabels } from "@/lib/data/cities";
import type { City, Region } from "@/lib/types";

export default function AdminCitiesPage() {
  const [cities, setCities] = useState<City[]>(citiesData);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<City | null>(null);

  const openEdit = (city: City) => {
    setEditingSlug(city.slug);
    setForm({ ...city });
  };

  const save = () => {
    if (!form) return;
    setCities((current) => current.map((city) => (city.slug === editingSlug ? form : city)));
    setEditingSlug(null);
    setForm(null);
  };

  const regions: Region[] = ["australia", "uk", "europe"];

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Cities management"
        title="Cities"
        text="Manage Australia, UK and Europe destinations, their content and booking widgets. Each city powers a tab on the Events page and its own SEO-friendly URL."
      />

      {regions.map((region) => (
        <AdminCard key={region}>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">{regionLabels[region]}</p>
          <div className="mt-4 grid gap-3">
            {cities.filter((city) => city.region === region).map((city) => (
              <div key={city.slug} className="flex flex-col justify-between gap-3 rounded-[12px] border border-black/5 p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-20 shrink-0 rounded-[8px] bg-cover bg-center" style={{ backgroundImage: `url(${city.heroImage})` }} />
                  <div>
                    <p className="font-black">{city.name}</p>
                    <p className="text-sm text-[#5c6774]">{city.tagline}</p>
                    <p className="mt-1 text-xs text-[#8b96a0]">/events/{city.slug} &middot; {city.events.length} events</p>
                  </div>
                </div>
                <button type="button" onClick={() => openEdit(city)} className="flex w-fit items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-black transition hover:bg-[#0c1524] hover:text-white">
                  <AdminIcon path={adminIcons.edit} className="h-3.5 w-3.5" /> Edit
                </button>
              </div>
            ))}
          </div>
        </AdminCard>
      ))}

      {form ? (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4" onClick={() => setForm(null)}>
          <div className="max-h-full w-full max-w-lg overflow-y-auto rounded-[16px] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">Edit {form.name}</h2>
              <button type="button" onClick={() => setForm(null)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                <AdminIcon path={adminIcons.close} className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              <label className="grid gap-1 text-sm font-bold">
                City name
                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Tagline
                <input value={form.tagline} onChange={(event) => setForm({ ...form, tagline: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Hero image URL
                <input value={form.heroImage} onChange={(event) => setForm({ ...form, heroImage: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Region
                <select value={form.region} onChange={(event) => setForm({ ...form, region: event.target.value as Region })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]">
                  <option value="australia">Australia</option>
                  <option value="uk">UK</option>
                  <option value="europe">Europe</option>
                </select>
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Booking widget/embed URL
                <input value={form.bookingWidgetUrl} onChange={(event) => setForm({ ...form, bookingWidgetUrl: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <p className="text-xs text-[#8b96a0]">{form.events.length} events associated. Manage individual events from the Events module.</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={save} className="flex-1 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                Save Changes
              </button>
              <button type="button" onClick={() => setForm(null)} className="rounded-full border border-black/10 px-5 py-3 text-sm font-black">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
