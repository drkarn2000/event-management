"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminIcon, adminIcons } from "@/components/admin/AdminUI";

const navGroups = [
  {
    label: "Overview",
    items: [{ href: "/admin", label: "Dashboard", icon: adminIcons.dashboard }],
  },
  {
    label: "Content",
    items: [
      { href: "/admin/events", label: "Events", icon: adminIcons.calendar },
      { href: "/admin/cities", label: "Cities", icon: adminIcons.pin },
      { href: "/admin/products", label: "Products", icon: adminIcons.box },
      { href: "/admin/hosts", label: "The Village", icon: adminIcons.users },
      { href: "/admin/gallery", label: "Gallery", icon: adminIcons.image },
      { href: "/admin/testimonials", label: "Testimonials", icon: adminIcons.star },
      { href: "/admin/homepage", label: "Homepage CMS", icon: adminIcons.home },
    ],
  },
  {
    label: "Growth",
    items: [
      { href: "/admin/enquiries", label: "Enquiries", icon: adminIcons.inbox },
      { href: "/admin/newsletter", label: "Newsletter", icon: adminIcons.mail },
      { href: "/admin/seo", label: "SEO Settings", icon: adminIcons.globe },
    ],
  },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#f4f6fb] text-[#0c1524]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-[#0c1524] text-white lg:flex">
        <Link href="/" className="flex items-center gap-2 px-6 py-6 leading-none">
          <span className="block text-2xl font-black uppercase tracking-[0.14em]">VIBE</span>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">Admin</span>
        </Link>
        <nav className="flex-1 space-y-6 overflow-y-auto px-4 pb-6">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="px-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{group.label}</p>
              <div className="mt-2 space-y-1">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm font-bold transition ${
                        active ? "bg-[#ff8fb8] text-[#0c1524]" : "text-white/75 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <AdminIcon path={item.icon} className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <Link href="/" className="mx-4 mb-6 flex items-center gap-3 rounded-[10px] border border-white/15 px-3 py-2.5 text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-white">
          <AdminIcon path={adminIcons.logout} className="h-4 w-4" />
          Back to website
        </Link>
      </aside>

      <div className="flex min-h-screen w-full flex-col lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-black/5 bg-white/90 px-5 py-4 backdrop-blur lg:px-8">
          <div className="flex items-center gap-2 text-sm font-bold text-[#5c6774] lg:hidden">
            <span className="text-lg font-black text-[#0c1524]">VIBE Admin</span>
          </div>
          <div className="hidden items-center gap-2 text-sm font-bold text-[#5c6774] lg:flex">
            <AdminIcon path={adminIcons.search} className="h-4 w-4" />
            <input placeholder="Search admin..." className="w-64 bg-transparent text-sm outline-none placeholder:text-[#9aa3ad]" />
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ffe3ed] text-sm font-black text-[#ff5c8d]">A</span>
            <div className="hidden text-right sm:block">
              <p className="text-sm font-black leading-none">Admin User</p>
              <p className="text-xs text-[#8b96a0]">admin@vibe.example</p>
            </div>
          </div>
        </header>
        <main className="flex-1 px-5 py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
