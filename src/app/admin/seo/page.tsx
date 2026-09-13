"use client";

import { useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, adminIcons } from "@/components/admin/AdminUI";
import { seoEntries as seoEntriesData, type SeoEntry } from "@/lib/data/admin";

export default function AdminSeoPage() {
  const [entries, setEntries] = useState<SeoEntry[]>(seoEntriesData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<SeoEntry | null>(null);

  const openEdit = (entry: SeoEntry) => {
    setEditingId(entry.id);
    setForm({ ...entry });
  };

  const save = () => {
    if (!form) return;
    setEntries((current) => current.map((entry) => (entry.id === editingId ? form : entry)));
    setEditingId(null);
    setForm(null);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="SEO settings"
        title="Meta & SEO"
        text="Control meta title, description, OG image, slug and search visibility for every page template."
      />

      <AdminCard>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-xs font-black uppercase tracking-wide text-[#8b96a0]">
                <th className="pb-3 pr-4">Page</th>
                <th className="pb-3 pr-4">Slug</th>
                <th className="pb-3 pr-4">Meta title</th>
                <th className="pb-3 pr-4">Indexed</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td className="py-3 pr-4 font-black">{entry.page}</td>
                  <td className="py-3 pr-4 text-[#5c6774]">{entry.slug}</td>
                  <td className="py-3 pr-4 max-w-xs truncate text-[#5c6774]">{entry.metaTitle}</td>
                  <td className="py-3 pr-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-black ${entry.indexed ? "bg-[#cdf8dc] text-[#0f6b2c]" : "bg-[#e5e7eb] text-[#4b5563]"}`}>
                      {entry.indexed ? "Indexed" : "No-index"}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <button type="button" onClick={() => openEdit(entry)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                      <AdminIcon path={adminIcons.edit} className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>

      {form ? (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4" onClick={() => setForm(null)}>
          <div className="max-h-full w-full max-w-lg overflow-y-auto rounded-[16px] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">SEO — {form.page}</h2>
              <button type="button" onClick={() => setForm(null)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                <AdminIcon path={adminIcons.close} className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              <label className="grid gap-1 text-sm font-bold">
                Slug
                <input value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Meta title
                <input value={form.metaTitle} onChange={(event) => setForm({ ...form, metaTitle: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Meta description
                <textarea value={form.metaDescription} onChange={(event) => setForm({ ...form, metaDescription: event.target.value })} className="min-h-20 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                OG image URL
                <input value={form.ogImage} onChange={(event) => setForm({ ...form, ogImage: event.target.value })} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="flex items-center gap-2 text-sm font-bold">
                <input type="checkbox" checked={form.indexed} onChange={(event) => setForm({ ...form, indexed: event.target.checked })} className="h-4 w-4" />
                Allow search engines to index this page
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
