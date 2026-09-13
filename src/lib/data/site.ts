import { Experience, ExperienceCategory, GalleryItem, Product, Testimonial } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "product-1",
    name: "The Main Event",
    eyebrow: "Signature experience",
    tagline: "A hosted social night built for big laughs, easy mingling, and zero awkward standing around.",
    description:
      "Our flagship format blends playful prompts, great venues, curated hosts, and a booking flow that keeps the whole evening simple from first click to last cheers.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Hosted icebreakers", "Premium city venues", "Flexible ticket tiers", "Photo-friendly moments"],
  },
  {
    slug: "product-2",
    name: "The After Hours Club",
    eyebrow: "Premium format",
    tagline: "A smaller, sharper night for guests who want something a little more curated.",
    description:
      "Think intimate guest lists, moodier rooms, elevated food and drink options, and hosts who know how to read the room without over-running it.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Limited-capacity nights", "Elevated drinks packages", "Curated guest flow", "Private add-ons"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Mia, Sydney",
    quote: "We came in as a group of nervous friends and left with half the room in our camera roll.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t-2",
    name: "Callum, London",
    quote: "The hosts made it feel loose, funny, and somehow very organised. Dangerous combination.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t-3",
    name: "Priya, Melbourne",
    quote: "Booked for a hens night and did not have to chase a single detail. Miracle behaviour.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
  },
];

export const deeperDiveTestimonials: Testimonial[] = [
  {
    id: "dd-1",
    name: "Sophie L.",
    quote: "An unforgettable experience! I discovered so much more than I expected. The local insights made it truly special.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "dd-2",
    name: "Daniel K.",
    quote: "The Deeper Dive experiences are incredible. Small groups, amazing hosts and memories that last a lifetime.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "dd-3",
    name: "Priya M.",
    quote: "Such a unique and meaningful way to travel. I can't recommend it enough!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
  },
];

export const experienceCategories: ExperienceCategory[] = [
  {
    slug: "adventure",
    title: "Adventure",
    text: "Get active and explore",
    icon: "compass",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "food-drink",
    title: "Food & Drink",
    text: "Taste the local flavours",
    icon: "utensils",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "culture-history",
    title: "Culture & History",
    text: "Discover the stories",
    icon: "landmark",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "wellness",
    title: "Wellness",
    text: "Recharge your mind",
    icon: "lotus",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "creative-workshops",
    title: "Creative Workshops",
    text: "Learn something new",
    icon: "palette",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "nature-wildlife",
    title: "Nature & Wildlife",
    text: "Connect with nature",
    icon: "leaf",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=900&auto=format&fit=crop",
  },
];

export const experiences: Experience[] = [
  {
    slug: "hidden-bays-by-boat",
    title: "Hidden Bays by Boat",
    tagline: "Explore secluded beaches, swim in crystal clear waters and experience the coastline like a local.",
    description: "Explore secluded beaches, swim in crystal clear waters and experience the coastline like a local.",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1600&auto=format&fit=crop",
    category: "adventure",
    location: "Sydney, Australia",
    rating: 4.9,
    reviewCount: 84,
    price: 180,
    featured: true,
  },
  {
    slug: "sunset-sailing-experience",
    title: "Sunset Sailing Experience",
    tagline: "Golden hour on the water with a crew who knows every hidden cove.",
    description: "Golden hour on the water with a crew who knows every hidden cove.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    category: "adventure",
    location: "Sydney, Australia",
    rating: 4.9,
    reviewCount: 128,
    price: 120,
  },
  {
    slug: "italian-cooking-class",
    title: "Italian Cooking Class",
    tagline: "Learn the family recipes behind Rome's best-loved dishes.",
    description: "Learn the family recipes behind Rome's best-loved dishes.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
    category: "food-drink",
    location: "Rome, Italy",
    rating: 4.8,
    reviewCount: 96,
    price: 95,
  },
  {
    slug: "barossa-valley-wine-tour",
    title: "Barossa Valley Wine Tour",
    tagline: "Sip your way through Australia's most iconic wine region.",
    description: "Sip your way through Australia's most iconic wine region.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
    category: "food-drink",
    location: "Adelaide, Australia",
    rating: 4.9,
    reviewCount: 74,
    price: 150,
  },
  {
    slug: "snorkelling-with-marine-life",
    title: "Snorkelling with Marine Life",
    tagline: "Swim alongside turtles and tropical fish in crystal waters.",
    description: "Swim alongside turtles and tropical fish in crystal waters.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    category: "nature-wildlife",
    location: "Gold Coast, Australia",
    rating: 4.8,
    reviewCount: 112,
    price: 130,
  },
  {
    slug: "confidence-lab",
    title: "Confidence Lab",
    tagline: "A playful workshop for people who want to be better in rooms.",
    description: "Light facilitation, social exercises, and practical tools for starting better conversations.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    category: "creative-workshops",
    location: "Melbourne, Australia",
    rating: 4.7,
    reviewCount: 58,
    price: 65,
  },
  {
    slug: "host-school",
    title: "Host School",
    tagline: "Behind the curtain of how great event energy gets made.",
    description: "A deeper look at timing, tone, crowd care, and how to make strangers feel like a room.",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop",
    category: "creative-workshops",
    location: "London, UK",
    rating: 4.8,
    reviewCount: 41,
    price: 75,
  },
  {
    slug: "creative-icebreakers",
    title: "Creative Icebreakers",
    tagline: "Better prompts than asking what someone does for work.",
    description: "Designed for teams, communities, and party planners who want warmer starts.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    category: "culture-history",
    location: "Berlin, Germany",
    rating: 4.7,
    reviewCount: 37,
    price: 55,
  },
];

export function getExperiencesByCategory(categorySlug: string) {
  return experiences.filter((experience) => experience.category === categorySlug);
}

export function getFeaturedExperience() {
  return experiences.find((experience) => experience.featured) ?? experiences[0];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    type: "photo",
    src: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1200&auto=format&fit=crop",
    category: "Experiences",
    caption: "Boat Experiences",
  },
  {
    id: "g-2",
    type: "video",
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
    category: "Hens Parties",
    caption: "Hens Parties",
  },
  {
    id: "g-3",
    type: "photo",
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    category: "Destinations",
    caption: "Destinations",
  },
  {
    id: "g-4",
    type: "photo",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    category: "Private Bookings",
    caption: "Private Bookings",
  },
  {
    id: "g-5",
    type: "video",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    category: "Experiences",
    caption: "Nature & Wildlife",
  },
  {
    id: "g-6",
    type: "video",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    category: "Corporate",
    caption: "Corporate",
  },
  {
    id: "g-7",
    type: "photo",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    category: "Experiences",
    caption: "Experiences",
  },
  {
    id: "g-8",
    type: "video",
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop",
    category: "Experiences",
    caption: "Adventure",
  },
  {
    id: "g-9",
    type: "photo",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    category: "Experiences",
    caption: "Food & Drink",
  },
  {
    id: "g-10",
    type: "video",
    src: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
    category: "Destinations",
    caption: "Australia",
  },
  {
    id: "g-11",
    type: "photo",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    category: "The Village",
    caption: "The Village",
  },
  {
    id: "g-12",
    type: "photo",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    category: "Destinations",
    caption: "Island Getaways",
  },
  {
    id: "g-13",
    type: "video",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
    category: "Events",
    caption: "Events",
  },
  {
    id: "g-14",
    type: "photo",
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
    category: "Experiences",
    caption: "Wine Tours",
  },
  {
    id: "g-15",
    type: "video",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    category: "Experiences",
    caption: "Underwater",
  },
];

export const galleryCategories = [
  "Events",
  "Private Bookings",
  "Hens Parties",
  "Corporate",
  "The Village",
  "Experiences",
  "Destinations",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
