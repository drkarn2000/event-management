import Link from "next/link";
import { AdminCard, AdminIcon, AdminPageHeader, StatusBadge, adminIcons } from "@/components/admin/AdminUI";
import { activityLog, enquiries, newsletterSubscribers } from "@/lib/data/admin";
import { cities } from "@/lib/data/cities";
import { hosts } from "@/lib/data/hosts";
import { galleryItems } from "@/lib/data/site";

export default function AdminPage() {
  const totalEvents = cities.reduce((sum, city) => sum + city.events.length, 0);
  const upcomingEvents = cities
    .flatMap((city) => city.events.map((event) => ({ ...event, city: city.name })))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);
  const openEnquiries = enquiries.filter((enquiry) => enquiry.status === "New" || enquiry.status === "In Progress");
  const recentEnquiries = [...enquiries]
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
    .slice(0, 5);
  const activeSubscribers = newsletterSubscribers.filter((subscriber) => subscriber.status === "Subscribed");

  const stats = [
    { label: "Total events", value: totalEvents, icon: adminIcons.calendar, href: "/admin/events" },
    { label: "Open enquiries", value: openEnquiries.length, icon: adminIcons.inbox, href: "/admin/enquiries" },
    { label: "Hosts", value: hosts.length, icon: adminIcons.users, href: "/admin/hosts" },
    { label: "Gallery items", value: galleryItems.length, icon: adminIcons.image, href: "/admin/gallery" },
    { label: "Newsletter subscribers", value: activeSubscribers.length, icon: adminIcons.mail, href: "/admin/newsletter" },
  ];

  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Admin / CMS"
        title="Website control room"
        text="Frontend prototype for the admin modules, wired to mock data. Authentication, database, and uploads can be connected next."
        action={
          <Link href="/admin/events" className="rounded-full bg-[#ff8fb8] px-5 py-3 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            + New Event
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <AdminCard className="transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#eef1f8] text-[#0c1524]">
                  <AdminIcon path={stat.icon} className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-3xl font-black">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-[#5c6774]">{stat.label}</p>
            </AdminCard>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AdminCard>
          <div className="flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Upcoming events</p>
            <Link href="/admin/events" className="text-sm font-black text-[#0c1524]">Manage &rarr;</Link>
          </div>
          <div className="mt-4 divide-y divide-black/5">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between gap-4 py-3">
                <div>
                  <p className="font-black">{event.title}</p>
                  <p className="mt-0.5 text-sm text-[#5c6774]">{event.venue} &middot; {event.city}</p>
                </div>
                <p className="shrink-0 text-sm font-bold text-[#5c6774]">
                  {new Date(event.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Recent activity</p>
          <div className="mt-4 space-y-4">
            {activityLog.map((entry) => (
              <div key={entry.id} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ff8fb8]" />
                <div>
                  <p className="text-sm font-bold leading-snug">{entry.text}</p>
                  <p className="mt-0.5 text-xs text-[#8b96a0]">{entry.time}</p>
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex items-center justify-between">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5c6774]">Recent enquiries</p>
          <Link href="/admin/enquiries" className="text-sm font-black text-[#0c1524]">View all &rarr;</Link>
        </div>
        <div className="mt-4 grid gap-3">
          {recentEnquiries.map((enquiry) => (
            <div key={enquiry.id} className="flex flex-col justify-between gap-3 rounded-[12px] border border-black/5 p-4 md:flex-row md:items-center">
              <div>
                <p className="font-black">{enquiry.name} &middot; {enquiry.type}</p>
                <p className="mt-1 text-sm text-[#5c6774]">{enquiry.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={enquiry.status} />
                <Link href="/admin/enquiries" className="rounded-full bg-[#0c1524] px-4 py-2 text-sm font-black text-white transition hover:bg-[#ff8fb8] hover:text-[#0c1524]">
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}

