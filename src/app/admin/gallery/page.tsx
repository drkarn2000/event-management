"use client";

import { useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, adminIcons } from "@/components/admin/AdminUI";
import { galleryCategories, galleryItems as galleryItemsData } from "@/lib/data/site";
import type { GalleryItem } from "@/lib/types";

const emptyForm: GalleryItem = {
  id: "",
  type: "photo",
  src: "",
  category: galleryCategories[0] ?? "Events",
  caption: "",
};

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(galleryItemsData);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<GalleryItem>(emptyForm);
  const [featuredIds, setFeaturedIds] = useState<string[]>([galleryItemsData[0]?.id ?? ""]);

  const remove = (id: string) => setItems((current) => current.filter((item) => item.id !== id));

  const move = (id: string, direction: -1 | 1) => {
    setItems((current) => {
      const index = current.findIndex((item) => item.id === id);
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= current.length) return current;
      const updated = [...current];
      [updated[index], updated[nextIndex]] = [updated[nextIndex], updated[index]];
      return updated;
    });
  };

  const toggleFeatured = (id: string) => {
    setFeaturedIds((current) => (current.includes(id) ? current.filter((f) => f !== id) : [...current, id]));
  };

  const save = () => {
    setItems((current) => [{ ...form, id: `g-${Date.now()}` }, ...current]);
    setForm(emptyForm);
    setFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Gallery"
        title="Photo & Video Gallery"
        text="Upload and manage media, assign categories, mark items featured, and control display order."
        action={
          <button type="button" onClick={() => setFormOpen(true)} className="flex items-center gap-2 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            <AdminIcon path={adminIcons.plus} className="h-4 w-4" /> Upload Media
          </button>
        }
      />

      <AdminCard>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={item.id} className="overflow-hidden rounded-[14px] border border-black/5">
              <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url(${item.src})` }}>
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-black uppercase text-[#0c1524]">{item.type}</span>
                {featuredIds.includes(item.id) ? (
                  <span className="absolute right-2 top-2 rounded-full bg-[#ffd0df] px-2 py-0.5 text-[10px] font-black text-[#9d1049]">Featured</span>
                ) : null}
              </div>
              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ff8fb8]">{item.category}</p>
                <p className="mt-1 text-sm font-bold leading-tight">{item.caption}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-1">
                    <button type="button" onClick={() => move(item.id, -1)} disabled={index === 0} className="grid h-7 w-7 place-items-center rounded-full border border-black/10 text-[#0c1524] disabled:opacity-30">↑</button>
                    <button type="button" onClick={() => move(item.id, 1)} disabled={index === items.length - 1} className="grid h-7 w-7 place-items-center rounded-full border border-black/10 text-[#0c1524] disabled:opacity-30">↓</button>
                  </div>
                  <div className="flex gap-1">
                    <button type="button" onClick={() => toggleFeatured(item.id)} className="grid h-7 w-7 place-items-center rounded-full border border-black/10 text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                      <AdminIcon path={adminIcons.star} className="h-3.5 w-3.5" />
                    </button>
                    <button type="button" onClick={() => remove(item.id)} className="grid h-7 w-7 place-items-center rounded-full border border-black/10 text-[#c0392b] transition hover:bg-[#c0392b] hover:text-white">
                      <AdminIcon path={adminIcons.trash} className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AdminCard>

      {formOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4" onClick={() => setFormOpen(false)}>
          <div className="max-h-full w-full max-w-lg overflow-y-auto rounded-[16px] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">Upload Media</h2>
              <button type="button" onClick={() => setFormOpen(false)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                <AdminIcon path={adminIcons.close} className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              <label className="grid gap-1 text-sm font-bold">
                Media type
                <select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value as "photo" | "video" })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]">
                  <option value="photo">Photo</option>
                  <option value="video">Video</option>
                </select>
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Media URL
                <input value={form.src} onChange={(event) => setForm({ ...form, src: event.target.value })} placeholder="https://..." className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Category
                <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]">
                  {galleryCategories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Caption
                <input value={form.caption} onChange={(event) => setForm({ ...form, caption: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={save} className="flex-1 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                Add to Gallery
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
