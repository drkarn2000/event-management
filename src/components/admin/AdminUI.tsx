export function AdminIcon({ path, className = "h-5 w-5" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

export const adminIcons = {
  dashboard: "M4 4h7v7H4z M13 4h7v4h-7z M13 11h7v9h-7z M4 14h7v6H4z",
  calendar: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z M4 10h16 M8 3v4 M16 3v4",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  box: "M21 8L12 3 3 8v8l9 5 9-5V8z M3 8l9 5 9-5 M12 13v8",
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  inbox: "M4 5h16l-2 8H6L4 5z M2 13h5l2 3h6l2-3h5 M2 13v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6",
  image: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M4 17l5-5 3 3 4-5 5 6",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  home: "M4 11l8-7 8 7 M6 10v10h12V10",
  mail: "M4 6h16v12H4z M4 6l8 7 8-7",
  search: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 16z M21 21l-4.3-4.3",
  plus: "M12 5v14 M5 12h14",
  edit: "M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
  trash: "M3 6h18 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6",
  close: "M18 6 6 18 M6 6l12 12",
  chevron: "M6 9l6 6 6-6",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  download: "M12 3v12 M7 10l5 5 5-5 M4 21h16",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
};

export function AdminPageHeader({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#ff8fb8]">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0c1524] md:text-4xl">{title}</h1>
        {text ? <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5c6774]">{text}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

const statusStyles: Record<string, string> = {
  New: "bg-[#dbe7ff] text-[#1d3a8f]",
  "In Progress": "bg-[#fff0ce] text-[#8a6300]",
  Confirmed: "bg-[#cdf8dc] text-[#0f6b2c]",
  Closed: "bg-[#e5e7eb] text-[#4b5563]",
  Subscribed: "bg-[#cdf8dc] text-[#0f6b2c]",
  Unsubscribed: "bg-[#e5e7eb] text-[#4b5563]",
  Featured: "bg-[#ffd0df] text-[#9d1049]",
  Published: "bg-[#cdf8dc] text-[#0f6b2c]",
  Draft: "bg-[#e5e7eb] text-[#4b5563]",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${statusStyles[status] ?? "bg-[#e5e7eb] text-[#4b5563]"}`}>
      {status}
    </span>
  );
}

export function AdminCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[16px] border border-black/5 bg-white p-5 shadow-[0_2px_16px_rgba(12,21,36,0.05)] ${className}`}>{children}</div>;
}
