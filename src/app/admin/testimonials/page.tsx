"use client";

import { useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, adminIcons } from "@/components/admin/AdminUI";
import { testimonials as testimonialsData } from "@/lib/data/site";
import type { Testimonial } from "@/lib/types";

const emptyForm: Testimonial = { id: "", name: "", quote: "", rating: 5, avatar: "" };

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);
  const [related, setRelated] = useState<Record<string, string>>({});
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Testimonial>(emptyForm);
  const [relatedDraft, setRelatedDraft] = useState("General");

  const openNew = () => {
    setForm(emptyForm);
    setEditingId(null);
    setRelatedDraft("General");
    setFormOpen(true);
  };

  const openEdit = (testimonial: Testimonial) => {
    setForm(testimonial);
    setEditingId(testimonial.id);
    setRelatedDraft(related[testimonial.id] ?? "General");
    setFormOpen(true);
  };

  const remove = (id: string) => setTestimonials((current) => current.filter((testimonial) => testimonial.id !== id));

  const save = () => {
    const payload: Testimonial = { ...form, id: editingId ?? `t-${Date.now()}` };
    setTestimonials((current) => {
      if (editingId) return current.map((testimonial) => (testimonial.id === editingId ? payload : testimonial));
      return [payload, ...current];
    });
    setRelated((current) => ({ ...current, [payload.id]: relatedDraft }));
    setFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Testimonials"
        title="Testimonials"
        text="Manage guest quotes shown across the homepage and landing pages, with ratings and related host/event tags."
        action={
          <button type="button" onClick={openNew} className="flex items-center gap-2 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            <AdminIcon path={adminIcons.plus} className="h-4 w-4" /> Add Testimonial
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <AdminCard key={testimonial.id}>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${testimonial.avatar})` }} />
              <div>
                <p className="font-black">{testimonial.name}</p>
                <p className="text-[#ffb000] text-sm">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#5c6774]">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-3 text-xs font-bold text-[#8b96a0]">Related to: {related[testimonial.id] ?? "General"}</p>
            <div className="mt-4 flex gap-2">
              <button type="button" onClick={() => openEdit(testimonial)} className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs font-black transition hover:bg-[#0c1524] hover:text-white">
                <AdminIcon path={adminIcons.edit} className="h-3.5 w-3.5" /> Edit
              </button>
              <button type="button" onClick={() => remove(testimonial.id)} className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs font-black text-[#c0392b] transition hover:bg-[#c0392b] hover:text-white">
                <AdminIcon path={adminIcons.trash} className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </AdminCard>
        ))}
      </div>

      {formOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4" onClick={() => setFormOpen(false)}>
          <div className="max-h-full w-full max-w-lg overflow-y-auto rounded-[16px] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">{editingId ? "Edit Testimonial" : "New Testimonial"}</h2>
              <button type="button" onClick={() => setFormOpen(false)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                <AdminIcon path={adminIcons.close} className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              <label className="grid gap-1 text-sm font-bold">
                Person name / location
                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Avatar URL
                <input value={form.avatar} onChange={(event) => setForm({ ...form, avatar: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Quote
                <textarea value={form.quote} onChange={(event) => setForm({ ...form, quote: event.target.value })} className="min-h-24 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="grid gap-1 text-sm font-bold">
                  Rating
                  <select value={form.rating} onChange={(event) => setForm({ ...form, rating: Number(event.target.value) })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]">
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>{n} stars</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1 text-sm font-bold">
                  Related host/event
                  <input value={relatedDraft} onChange={(event) => setRelatedDraft(event.target.value)} placeholder="e.g. Sophie Carter" className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
                </label>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={save} className="flex-1 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                {editingId ? "Save Changes" : "Add Testimonial"}
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
