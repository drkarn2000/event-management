"use client";

import { useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, adminIcons } from "@/components/admin/AdminUI";
import { hosts as hostsData } from "@/lib/data/hosts";
import type { Host } from "@/lib/types";

export default function AdminHostsPage() {
  const [hosts, setHosts] = useState<Host[]>(hostsData);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<Host | null>(null);
  const [tagsText, setTagsText] = useState("");

  const openEdit = (host: Host) => {
    setEditingSlug(host.slug);
    setForm({ ...host });
    setTagsText(host.tags.join(", "));
  };

  const remove = (slug: string) => {
    setHosts((current) => current.filter((host) => host.slug !== slug));
  };

  const save = () => {
    if (!form) return;
    const updated: Host = { ...form, tags: tagsText.split(",").map((tag) => tag.trim()).filter(Boolean) };
    setHosts((current) => current.map((host) => (host.slug === editingSlug ? updated : host)));
    setEditingSlug(null);
    setForm(null);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="The Village"
        title="Hosts"
        text="Add, edit or remove hosts. Every host uses the same dynamic profile template at /the-village/[slug], so new hosts appear automatically without new page code."
        action={
          <button type="button" className="flex items-center gap-2 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            <AdminIcon path={adminIcons.plus} className="h-4 w-4" /> Add Host
          </button>
        }
      />

      <AdminCard>
        <div className="grid gap-3">
          {hosts.map((host) => (
            <div key={host.slug} className="flex flex-col justify-between gap-3 rounded-[12px] border border-black/5 p-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${host.photo})` }} />
                <div>
                  <p className="font-black">{host.name}</p>
                  <p className="text-sm text-[#5c6774]">{host.location}</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {host.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#eef1f8] px-2.5 py-0.5 text-[11px] font-bold text-[#0c1524]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => openEdit(host)} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                  <AdminIcon path={adminIcons.edit} className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => remove(host.slug)} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#c0392b] transition hover:bg-[#c0392b] hover:text-white">
                  <AdminIcon path={adminIcons.trash} className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </AdminCard>

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
                Name
                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Location
                <input value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Tags (comma separated)
                <input value={tagsText} onChange={(event) => setTagsText(event.target.value)} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Profile photo URL
                <input value={form.photo} onChange={(event) => setForm({ ...form, photo: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Cover image URL
                <input value={form.coverPhoto} onChange={(event) => setForm({ ...form, coverPhoto: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Short bio
                <textarea value={form.bio} onChange={(event) => setForm({ ...form, bio: event.target.value })} className="min-h-16 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Full story
                <textarea value={form.fullBio} onChange={(event) => setForm({ ...form, fullBio: event.target.value })} className="min-h-28 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <div className="grid grid-cols-3 gap-3">
                <label className="grid gap-1 text-sm font-bold">
                  Rating
                  <input type="number" step="0.1" value={form.rating} onChange={(event) => setForm({ ...form, rating: Number(event.target.value) })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
                </label>
                <label className="grid gap-1 text-sm font-bold">
                  Experiences
                  <input type="number" value={form.experienceCount} onChange={(event) => setForm({ ...form, experienceCount: Number(event.target.value) })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
                </label>
                <label className="grid gap-1 text-sm font-bold">
                  Guests
                  <input type="number" value={form.guestCount} onChange={(event) => setForm({ ...form, guestCount: Number(event.target.value) })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
                </label>
              </div>
              <label className="grid gap-1 text-sm font-bold">
                Instagram
                <input value={form.social.instagram ?? ""} onChange={(event) => setForm({ ...form, social: { ...form.social, instagram: event.target.value } })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Website
                <input value={form.social.website ?? ""} onChange={(event) => setForm({ ...form, social: { ...form.social, website: event.target.value } })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <p className="text-xs text-[#8b96a0]">
                {form.experienceSlugs.length} linked experiences &middot; {form.gallery.length} gallery photos &middot; {form.testimonials.length} testimonials &middot; {form.upcomingEvents.length} upcoming events.
                These relations are managed from their own modules in the full build.
              </p>
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
