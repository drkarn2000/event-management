"use client";

import { useMemo, useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, StatusBadge, adminIcons } from "@/components/admin/AdminUI";
import { newsletterSubscribers as subscribersData } from "@/lib/data/admin";

export default function AdminNewsletterPage() {
  const [subscribers] = useState(subscribersData);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return subscribers.filter((subscriber) => !q || subscriber.email.toLowerCase().includes(q));
  }, [subscribers, search]);

  const activeCount = subscribers.filter((subscriber) => subscriber.status === "Subscribed").length;

  const exportCsv = () => {
    const header = "Email,Subscribed At,Status,Source\n";
    const rows = subscribers.map((s) => `${s.email},${s.subscribedAt},${s.status},${s.source}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "newsletter-subscribers.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Newsletter"
        title="Subscribers"
        text={`${activeCount} active subscribers across the mailing list. Connect Mailchimp or another ESP to sync automatically.`}
        action={
          <button type="button" onClick={exportCsv} className="flex items-center gap-2 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            <AdminIcon path={adminIcons.download} className="h-4 w-4" /> Export CSV
          </button>
        }
      />

      <AdminCard>
        <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2">
          <AdminIcon path={adminIcons.search} className="h-4 w-4 text-[#8b96a0]" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search subscribers..." className="w-64 bg-transparent text-sm outline-none placeholder:text-[#9aa3ad]" />
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-xs font-black uppercase tracking-wide text-[#8b96a0]">
                <th className="pb-3 pr-4">Email</th>
                <th className="pb-3 pr-4">Subscribed</th>
                <th className="pb-3 pr-4">Source</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filtered.map((subscriber) => (
                <tr key={subscriber.id}>
                  <td className="py-3 pr-4 font-bold">{subscriber.email}</td>
                  <td className="py-3 pr-4">{new Date(subscriber.subscribedAt).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</td>
                  <td className="py-3 pr-4">{subscriber.source}</td>
                  <td className="py-3"><StatusBadge status={subscriber.status} /></td>
                </tr>
              ))}
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-sm text-[#8b96a0]">No subscribers match this search.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </AdminCard>

      <AdminCard>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Email integration</p>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#5c6774]">
          Connect a Mailchimp, Klaviyo or other ESP API key here once available to sync subscribers automatically.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input disabled placeholder="ESP API key (not connected)" className="h-11 rounded-[10px] border border-black/10 bg-[#f4f6fb] px-3 text-sm text-[#8b96a0] outline-none" />
          <input disabled placeholder="Audience/List ID (not connected)" className="h-11 rounded-[10px] border border-black/10 bg-[#f4f6fb] px-3 text-sm text-[#8b96a0] outline-none" />
        </div>
      </AdminCard>
    </div>
  );
}
