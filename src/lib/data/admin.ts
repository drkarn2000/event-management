export type EnquiryType = "Private Bookings" | "Hens Parties" | "Corporate & Organisational" | "General";
export type EnquiryStatus = "New" | "In Progress" | "Confirmed" | "Closed";

export type Enquiry = {
  id: string;
  type: EnquiryType;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guests: string;
  message: string;
  status: EnquiryStatus;
  submittedAt: string;
  notes: string;
};

export const enquiries: Enquiry[] = [
  {
    id: "enq-1",
    type: "Private Bookings",
    name: "Chloe Winters",
    email: "chloe.winters@example.com",
    phone: "+61 412 555 018",
    eventDate: "2026-10-18",
    guests: "24",
    message: "Looking for a rooftop birthday setup in Sydney, ideally with catering.",
    status: "New",
    submittedAt: "2026-09-08",
    notes: "",
  },
  {
    id: "enq-2",
    type: "Hens Parties",
    name: "Rebecca Sloan",
    email: "bec.sloan@example.com",
    phone: "+61 433 221 904",
    eventDate: "2026-11-02",
    guests: "12",
    message: "Boat party for a hens group, Saturday afternoon, Gold Coast.",
    status: "In Progress",
    submittedAt: "2026-09-05",
    notes: "Sent proposal, waiting on deposit.",
  },
  {
    id: "enq-3",
    type: "Corporate & Organisational",
    name: "David Chen",
    email: "d.chen@globaltech.example",
    phone: "+61 401 998 231",
    eventDate: "2026-10-29",
    guests: "180",
    message: "End-of-year conference plus networking dinner for GlobalTech APAC.",
    status: "Confirmed",
    submittedAt: "2026-08-27",
    notes: "Contract signed, venue confirmed at South Bank.",
  },
  {
    id: "enq-4",
    type: "General",
    name: "Priya Nair",
    email: "priya.nair@example.com",
    phone: "+61 420 774 552",
    eventDate: "",
    guests: "",
    message: "Do you offer partnerships with local photographers?",
    status: "New",
    submittedAt: "2026-09-10",
    notes: "",
  },
  {
    id: "enq-5",
    type: "Corporate & Organisational",
    name: "Sarah Whitfield",
    email: "s.whitfield@northbridge.example",
    phone: "+44 7700 900123",
    eventDate: "2026-11-20",
    guests: "60",
    message: "Team building day in Manchester, ideally outdoors with a dinner to close.",
    status: "New",
    submittedAt: "2026-09-09",
    notes: "",
  },
  {
    id: "enq-6",
    type: "Hens Parties",
    name: "Amelia Foster",
    email: "amelia.f@example.com",
    phone: "+44 7700 900456",
    eventDate: "2026-10-24",
    guests: "9",
    message: "Wine tour hens weekend, London group travelling to the Cotswolds.",
    status: "Closed",
    submittedAt: "2026-08-14",
    notes: "Booked directly with venue, closing out.",
  },
  {
    id: "enq-7",
    type: "Private Bookings",
    name: "Marcus Yeo",
    email: "marcus.yeo@example.com",
    phone: "+61 402 118 774",
    eventDate: "2026-12-05",
    guests: "40",
    message: "Engagement party, beachside venue preferred, Perth.",
    status: "In Progress",
    submittedAt: "2026-09-03",
    notes: "Shortlisted three venues, awaiting client choice.",
  },
];

export type NewsletterStatus = "Subscribed" | "Unsubscribed";

export type NewsletterSubscriber = {
  id: string;
  email: string;
  subscribedAt: string;
  status: NewsletterStatus;
  source: string;
};

export const newsletterSubscribers: NewsletterSubscriber[] = [
  { id: "sub-1", email: "mia.harper@example.com", subscribedAt: "2026-09-01", status: "Subscribed", source: "Homepage" },
  { id: "sub-2", email: "callum.reid@example.com", subscribedAt: "2026-08-22", status: "Subscribed", source: "Events page" },
  { id: "sub-3", email: "priya.k@example.com", subscribedAt: "2026-08-15", status: "Subscribed", source: "Hens Parties page" },
  { id: "sub-4", email: "jack.oliver@example.com", subscribedAt: "2026-07-30", status: "Unsubscribed", source: "Homepage" },
  { id: "sub-5", email: "freya.moss@example.com", subscribedAt: "2026-09-07", status: "Subscribed", source: "Galleries page" },
  { id: "sub-6", email: "tom.hardy@example.com", subscribedAt: "2026-06-18", status: "Subscribed", source: "Homepage" },
];

export type SeoEntry = {
  id: string;
  page: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  indexed: boolean;
};

export const seoEntries: SeoEntry[] = [
  { id: "seo-1", page: "Home", slug: "/", metaTitle: "VIBE | Unforgettable Events & Experiences", metaDescription: "Public events, private bookings, hens parties, corporate experiences, hosts, and galleries.", ogImage: "/og/home.jpg", indexed: true },
  { id: "seo-2", page: "Events", slug: "/events", metaTitle: "Events | VIBE", metaDescription: "Browse events across Australia, the UK and Europe.", ogImage: "/og/events.jpg", indexed: true },
  { id: "seo-3", page: "Product 1", slug: "/product-1", metaTitle: "The Main Event | VIBE", metaDescription: "Our flagship hosted social night format.", ogImage: "/og/product-1.jpg", indexed: true },
  { id: "seo-4", page: "Private Bookings", slug: "/private-bookings", metaTitle: "Private Bookings | VIBE", metaDescription: "Tailored private events for every occasion.", ogImage: "/og/private-bookings.jpg", indexed: true },
  { id: "seo-5", page: "Hens Parties", slug: "/hens-parties", metaTitle: "Hens Parties | VIBE", metaDescription: "Unforgettable hens parties in amazing locations.", ogImage: "/og/hens-parties.jpg", indexed: true },
  { id: "seo-6", page: "Corporate & Organisational", slug: "/corporate-organisational", metaTitle: "Corporate Events | VIBE", metaDescription: "Meaningful events, stronger teams.", ogImage: "/og/corporate.jpg", indexed: true },
  { id: "seo-7", page: "The Village", slug: "/the-village", metaTitle: "The Village | VIBE", metaDescription: "Meet our incredible hosts.", ogImage: "/og/the-village.jpg", indexed: true },
  { id: "seo-8", page: "A Deeper Dive", slug: "/a-deeper-dive", metaTitle: "A Deeper Dive | VIBE", metaDescription: "More than just an event.", ogImage: "/og/a-deeper-dive.jpg", indexed: true },
  { id: "seo-9", page: "About", slug: "/about", metaTitle: "About VIBE | Our Story", metaDescription: "Real people, extraordinary experiences.", ogImage: "/og/about.jpg", indexed: true },
  { id: "seo-10", page: "Galleries", slug: "/galleries", metaTitle: "Galleries | VIBE", metaDescription: "Moments that matter.", ogImage: "/og/galleries.jpg", indexed: false },
];

export type ActivityLogEntry = {
  id: string;
  text: string;
  time: string;
};

export const activityLog: ActivityLogEntry[] = [
  { id: "act-1", text: "New enquiry received from Sarah Whitfield (Corporate)", time: "2 hours ago" },
  { id: "act-2", text: "Host profile updated: Sophie Carter", time: "5 hours ago" },
  { id: "act-3", text: "New gallery upload: 4 photos added to Hens Parties", time: "Yesterday" },
  { id: "act-4", text: "Event confirmed: Sunset Rooftop Social, Sydney", time: "Yesterday" },
  { id: "act-5", text: "Newsletter subscriber added: freya.moss@example.com", time: "2 days ago" },
];
