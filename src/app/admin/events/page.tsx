"use client";

import { useMemo, useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, StatusBadge, adminIcons } from "@/components/admin/AdminUI";
import { cities as citiesData } from "@/lib/data/cities";
import type { EventItem, Region } from "@/lib/types";

type AdminEvent = EventItem & { citySlug: string; cityName: string; region: Region };

const emptyForm: AdminEvent = {
  id: "",
  title: "",
  date: "",
  venue: "",
  description: "",
  image: "",
  category: "Social",
  featured: false,
  status: "Draft",
  citySlug: citiesData[0]?.slug ?? "",
  cityName: citiesData[0]?.name ?? "",
  region: citiesData[0]?.region ?? "australia",
};

function flattenEvents(): AdminEvent[] {
  return citiesData.flatMap((city) =>
    city.events.map((event) => ({
      ...event,
      status: event.status ?? "Published",
      citySlug: city.slug,
      cityName: city.name,
      region: city.region,
    })),
  );
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<AdminEvent[]>(flattenEvents);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState<Region | "all">("all");
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<AdminEvent>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    const q = search.trim().toLowerCase();
    return events
      .filter((event) => regionFilter === "all" || event.region === regionFilter)
      .filter((event) => !q || event.title.toLowerCase().includes(q) || event.cityName.toLowerCase().includes(q))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events, search, regionFilter]);

  const openNew = () => {
    setForm(emptyForm);
    setEditingId(null);
    setFormOpen(true);
  };

  const openEdit = (event: AdminEvent) => {
    setForm(event);
    setEditingId(event.id);
    setFormOpen(true);
  };

  const remove = (id: string) => {
    setEvents((current) => current.filter((event) => event.id !== id));
  };

  const toggleFeatured = (id: string) => {
    setEvents((current) => current.map((event) => (event.id === id ? { ...event, featured: !event.featured } : event)));
  };

  const save = () => {
    const city = citiesData.find((c) => c.slug === form.citySlug);
    const payload: AdminEvent = {
      ...form,
      id: editingId ?? `evt-${Date.now()}`,
      cityName: city?.name ?? form.cityName,
      region: city?.region ?? form.region,
    };
    setEvents((current) => {
      if (editingId) {
        return current.map((event) => (event.id === editingId ? payload : event));
      }
      return [payload, ...current];
    });
    setFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Events management"
        title="Events"
        text="Add, edit and manage every event across all cities. Changes here reflect the tabbed events page and city detail pages."
        action={
          <button type="button" onClick={openNew} className="flex items-center gap-2 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            <AdminIcon path={adminIcons.plus} className="h-4 w-4" /> New Event
          </button>
        }
      />

      <AdminCard>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2">
            <AdminIcon path={adminIcons.search} className="h-4 w-4 text-[#8b96a0]" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search events or cities..."
              className="w-56 bg-transparent text-sm outline-none placeholder:text-[#9aa3ad]"
            />
          </div>
          <select
            value={regionFilter}
            onChange={(event) => setRegionFilter(event.target.value as Region | "all")}
            className="rounded-full border border-black/10 px-4 py-2 text-sm font-bold outline-none"
          >
            <option value="all">All regions</option>
            <option value="australia">Australia</option>
            <option value="uk">UK</option>
            <option value="europe">Europe</option>
          </select>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-xs font-black uppercase tracking-wide text-[#8b96a0]">
                <th className="pb-3 pr-4">Event</th>
                <th className="pb-3 pr-4">City</th>
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Featured</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filteredEvents.map((event) => (
                <tr key={event.id}>
                  <td className="py-3 pr-4">
                    <p className="font-black">{event.title}</p>
                    <p className="text-xs text-[#8b96a0]">{event.venue}</p>
                  </td>
                  <td className="py-3 pr-4">{event.cityName}</td>
                  <td className="py-3 pr-4">{new Date(event.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</td>
                  <td className="py-3 pr-4">
                    <button
                      type="button"
                      onClick={() => toggleFeatured(event.id)}
                      className={`rounded-full px-3 py-1 text-xs font-black transition ${event.featured ? "bg-[#ffd0df] text-[#9d1049]" : "bg-[#e5e7eb] text-[#4b5563]"}`}
                    >
                      {event.featured ? "Featured" : "Standard"}
                    </button>
                  </td>
                  <td className="py-3 pr-4">
                    <StatusBadge status={event.status ?? "Published"} />
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button type="button" onClick={() => openEdit(event)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                        <AdminIcon path={adminIcons.edit} className="h-3.5 w-3.5" />
                      </button>
                      <button type="button" onClick={() => remove(event.id)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-[#c0392b] transition hover:bg-[#c0392b] hover:text-white">
                        <AdminIcon path={adminIcons.trash} className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-sm text-[#8b96a0]">No events match this filter.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </AdminCard>

      {formOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4" onClick={() => setFormOpen(false)}>
          <div className="max-h-full w-full max-w-lg overflow-y-auto rounded-[16px] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">{editingId ? "Edit Event" : "New Event"}</h2>
              <button type="button" onClick={() => setFormOpen(false)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                <AdminIcon path={adminIcons.close} className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              <label className="grid gap-1 text-sm font-bold">
                Event title
                <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                City
                <select value={form.citySlug} onChange={(event) => setForm({ ...form, citySlug: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]">
                  {citiesData.map((city) => (
                    <option key={city.slug} value={city.slug}>{city.name}</option>
                  ))}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1 text-sm font-bold">
                  Date & time
                  <input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
                </label>
                <label className="grid gap-1 text-sm font-bold">
                  Category
                  <input value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
                </label>
              </div>
              <label className="grid gap-1 text-sm font-bold">
                Location / venue
                <input value={form.venue} onChange={(event) => setForm({ ...form, venue: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Event image URL
                <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Description
                <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="min-h-24 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1 text-sm font-bold">
                  Status
                  <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as "Draft" | "Published" })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]">
                    <option>Draft</option>
                    <option>Published</option>
                  </select>
                </label>
                <label className="flex items-center gap-2 self-end pb-2 text-sm font-bold">
                  <input type="checkbox" checked={form.featured} onChange={(event) => setForm({ ...form, featured: event.target.checked })} className="h-4 w-4" />
                  Featured event
                </label>
              </div>
              <div className="rounded-[10px] border border-dashed border-black/15 p-3 text-xs text-[#8b96a0]">
                Booking widget/embed for this city: {citiesData.find((c) => c.slug === form.citySlug)?.bookingWidgetUrl}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={save} className="flex-1 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                {editingId ? "Save Changes" : "Create Event"}
              </button>
              <button type="button" onClick={() => setFormOpen(false)} className="rounded-full border border-black/10 px-5 py-3 text-sm font-black">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
