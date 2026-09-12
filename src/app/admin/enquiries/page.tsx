"use client";

import { useMemo, useState } from "react";
import { AdminCard, AdminIcon, AdminPageHeader, StatusBadge, adminIcons } from "@/components/admin/AdminUI";
import { enquiries as enquiriesData, type Enquiry, type EnquiryStatus, type EnquiryType } from "@/lib/data/admin";

const types: (EnquiryType | "All")[] = ["All", "Private Bookings", "Hens Parties", "Corporate & Organisational", "General"];
const statuses: EnquiryStatus[] = ["New", "In Progress", "Confirmed", "Closed"];

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(enquiriesData);
  const [typeFilter, setTypeFilter] = useState<EnquiryType | "All">("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [noteDraft, setNoteDraft] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return enquiries
      .filter((enquiry) => typeFilter === "All" || enquiry.type === typeFilter)
      .filter((enquiry) => !q || enquiry.name.toLowerCase().includes(q) || enquiry.email.toLowerCase().includes(q))
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  }, [enquiries, typeFilter, search]);

  const updateStatus = (id: string, status: EnquiryStatus) => {
    setEnquiries((current) => current.map((enquiry) => (enquiry.id === id ? { ...enquiry, status } : enquiry)));
    setSelected((current) => (current && current.id === id ? { ...current, status } : current));
  };

  const openEnquiry = (enquiry: Enquiry) => {
    setSelected(enquiry);
    setNoteDraft(enquiry.notes);
  };

  const saveNote = () => {
    if (!selected) return;
    setEnquiries((current) => current.map((enquiry) => (enquiry.id === selected.id ? { ...enquiry, notes: noteDraft } : enquiry)));
    setSelected({ ...selected, notes: noteDraft });
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Bookings / Enquiries"
        title="Enquiries"
        text="All Private Booking, Hens Party, Corporate and general enquiry form submissions land here for follow-up."
      />

      <AdminCard>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTypeFilter(type)}
                className={`rounded-full px-4 py-2 text-xs font-black transition ${typeFilter === type ? "bg-[#0c1524] text-white" : "bg-[#eef1f8] text-[#0c1524]"}`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2">
            <AdminIcon path={adminIcons.search} className="h-4 w-4 text-[#8b96a0]" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name or email..." className="w-56 bg-transparent text-sm outline-none placeholder:text-[#9aa3ad]" />
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-xs font-black uppercase tracking-wide text-[#8b96a0]">
                <th className="pb-3 pr-4">Name</th>
                <th className="pb-3 pr-4">Type</th>
                <th className="pb-3 pr-4">Event date</th>
                <th className="pb-3 pr-4">Submitted</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filtered.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td className="py-3 pr-4">
                    <p className="font-black">{enquiry.name}</p>
                    <p className="text-xs text-[#8b96a0]">{enquiry.email}</p>
                  </td>
                  <td className="py-3 pr-4">{enquiry.type}</td>
                  <td className="py-3 pr-4">{enquiry.eventDate ? new Date(enquiry.eventDate).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }) : "—"}</td>
                  <td className="py-3 pr-4">{new Date(enquiry.submittedAt).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}</td>
                  <td className="py-3 pr-4">
                    <select
                      value={enquiry.status}
                      onChange={(event) => updateStatus(enquiry.id, event.target.value as EnquiryStatus)}
                      className="rounded-full border border-black/10 bg-transparent px-3 py-1 text-xs font-black outline-none"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 text-right">
                    <button type="button" onClick={() => openEnquiry(enquiry)} className="rounded-full bg-[#0c1524] px-4 py-2 text-xs font-black text-white transition hover:bg-[#ff8fb8] hover:text-[#0c1524]">
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-sm text-[#8b96a0]">No enquiries match this filter.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </AdminCard>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 p-4" onClick={() => setSelected(null)}>
          <div className="max-h-full w-full max-w-lg overflow-y-auto rounded-[16px] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">{selected.name}</h2>
              <button type="button" onClick={() => setSelected(null)} className="grid h-8 w-8 place-items-center rounded-full border border-black/10">
                <AdminIcon path={adminIcons.close} className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <StatusBadge status={selected.status} />
              <span className="text-xs text-[#8b96a0]">{selected.type}</span>
            </div>

            <div className="mt-5 grid gap-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <p><span className="font-black">Email:</span> {selected.email}</p>
                <p><span className="font-black">Phone:</span> {selected.phone}</p>
                <p><span className="font-black">Event date:</span> {selected.eventDate || "—"}</p>
                <p><span className="font-black">Guests:</span> {selected.guests || "—"}</p>
              </div>
              <div>
                <p className="font-black">Message</p>
                <p className="mt-1 rounded-[10px] bg-[#f4f6fb] p-3 leading-6 text-[#5c6774]">{selected.message}</p>
              </div>
              <label className="grid gap-1 text-sm font-bold">
                Internal notes
                <textarea value={noteDraft} onChange={(event) => setNoteDraft(event.target.value)} className="min-h-24 rounded-[10px] border border-black/10 px-3 py-2 text-sm font-normal outline-none focus:border-[#ff8fb8]" />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Status
                <select value={selected.status} onChange={(event) => updateStatus(selected.id, event.target.value as EnquiryStatus)} className="h-11 rounded-[10px] border border-black/10 px-3 text-sm font-normal outline-none focus:border-[#ff8fb8]">
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 flex gap-3">
              <button type="button" onClick={saveNote} className="flex-1 rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
                Save Notes
              </button>
              <button type="button" onClick={() => setSelected(null)} className="rounded-full border border-black/10 px-5 py-3 text-sm font-black">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
