import { City } from "@/lib/types";

export const cities: City[] = [
  {
    slug: "sydney",
    name: "Sydney",
    region: "australia",
    tagline: "Harbourside good times, no cap.",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/sydney",
    events: [
      {
        id: "syd-1",
        title: "Sunset Rooftop Social",
        date: "2026-10-04",
        venue: "The Rocks, Sydney",
        description: "Golden hour vibes with our full crew and a killer playlist.",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "syd-2",
        title: "Sydney Warehouse Sessions",
        date: "2026-11-15",
        venue: "Alexandria, Sydney",
        description: "Our biggest indoor bash of the season. Bring your dancing shoes.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    region: "australia",
    tagline: "Laneways, lattes, and legendary nights.",
    heroImage: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/melbourne",
    events: [
      {
        id: "mel-1",
        title: "CBD Laneway Party",
        date: "2026-10-18",
        venue: "Fitzroy, Melbourne",
        description: "Hidden laneway, big energy. Doors open at dusk.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    region: "australia",
    tagline: "River city, next-level nights.",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/brisbane",
    events: [
      {
        id: "bne-1",
        title: "Riverside Social",
        date: "2026-10-25",
        venue: "South Bank, Brisbane",
        description: "Riverside beats and good vibes only.",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "perth",
    name: "Perth",
    region: "australia",
    tagline: "West coast, best coast.",
    heroImage: "https://images.unsplash.com/photo-1509002450302-c6b0da5a5d5f?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/perth",
    events: [
      {
        id: "per-1",
        title: "Sunset Sessions",
        date: "2026-11-01",
        venue: "Fremantle, Perth",
        description: "Sun's out, good times out.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    region: "australia",
    tagline: "Small city, huge energy.",
    heroImage: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/adelaide",
    events: [
      {
        id: "adl-1",
        title: "Hills Hideaway Party",
        date: "2026-11-08",
        venue: "Adelaide Hills",
        description: "An intimate night up in the hills.",
        image: "https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "london",
    name: "London",
    region: "uk",
    tagline: "Big smoke, bigger nights.",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/london",
    events: [
      {
        id: "lon-1",
        title: "Shoreditch Social",
        date: "2026-10-10",
        venue: "Shoreditch, London",
        description: "East London's finest warehouse party.",
        image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "manchester",
    name: "Manchester",
    region: "uk",
    tagline: "Northern soul, southern manners optional.",
    heroImage: "https://images.unsplash.com/photo-1543832923-c8112fdb0409?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/manchester",
    events: [
      {
        id: "man-1",
        title: "Northern Quarter Bash",
        date: "2026-10-22",
        venue: "Northern Quarter, Manchester",
        description: "Industrial venue, unforgettable night.",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "berlin",
    name: "Berlin",
    region: "europe",
    tagline: "Techno soul, no curfew.",
    heroImage: "https://images.unsplash.com/photo-1587330979470-3016b6702d89?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/berlin",
    events: [
      {
        id: "ber-1",
        title: "Kreuzberg Nights",
        date: "2026-11-05",
        venue: "Kreuzberg, Berlin",
        description: "Underground energy, above-ground fun.",
        image: "https://images.unsplash.com/photo-1571266028243-d220c9b39a86?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "amsterdam",
    name: "Amsterdam",
    region: "europe",
    tagline: "Canals, bikes, and unbeatable nights.",
    heroImage: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1600&auto=format&fit=crop",
    bookingWidgetUrl: "https://example-booking.com/embed/amsterdam",
    events: [
      {
        id: "ams-1",
        title: "Canal Side Social",
        date: "2026-11-12",
        venue: "Jordaan, Amsterdam",
        description: "Waterside beats and good company.",
        image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

export const regionLabels: Record<string, string> = {
  australia: "Australia",
  uk: "UK",
  europe: "Europe",
};

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
