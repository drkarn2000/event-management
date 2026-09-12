"use client";

import { useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, adminIcons } from "@/components/admin/AdminUI";
import { products as productsData } from "@/lib/data/site";
import type { Product } from "@/lib/types";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<Product | null>(null);
  const [highlightsText, setHighlightsText] = useState("");

  const openEdit = (product: Product) => {
    setEditingSlug(product.slug);
    setForm({ ...product });
    setHighlightsText(product.highlights.join("\n"));
  };

  const save = () => {
    if (!form) return;
    const updated: Product = { ...form, highlights: highlightsText.split("\n").map((line) => line.trim()).filter(Boolean) };
    setProducts((current) => current.map((product) => (product.slug === editingSlug ? updated : product)));
    setEditingSlug(null);
    setForm(null);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Products management"
        title="Products"
        text="Manage the two dedicated product landing pages: hero content, features, images and FAQs."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <AdminCard key={product.slug}>
            <div className="h-40 rounded-[12px] bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-[#ff8fb8]">{product.eyebrow}</p>
            <h2 className="mt-1 text-xl font-black">{product.name}</h2>
            <p className="mt-2 text-sm leading-6 text-[#5c6774]">{product.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full bg-[#eef1f8] px-3 py-1 text-xs font-bold text-[#0c1524]">{highlight}</span>
              ))}
            </div>
            <button type="button" onClick={() => openEdit(product)} className="mt-5 flex w-fit items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-black transition hover:bg-[#0c1524] hover:text-white">
              <AdminIcon path={adminIcons.edit} className="h-3.5 w-3.5" /> Edit page content
            </button>
          </AdminCard>
        ))}
      </div>

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
                Product name
                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Eyebrow
                <input value={form.eyebrow} onChange={(event) => setForm({ ...form, eyebrow: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Hero tagline
                <textarea value={form.tagline} onChange={(event) => setForm({ ...form, tagline: event.target.value })} className="min-h-16 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Description
                <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="min-h-24 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Hero image URL
                <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Highlights (one per line)
                <textarea value={highlightsText} onChange={(event) => setHighlightsText(event.target.value)} className="min-h-24 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
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
