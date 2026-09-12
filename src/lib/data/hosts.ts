import { Host } from "@/lib/types";

export const hosts: Host[] = [
  {
    slug: "sophie-carter",
    name: "Sophie Carter",
    role: "Host, Sydney",
    location: "Sydney, Australia",
    tags: ["Events", "Boat Experiences"],
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2200&auto=format&fit=crop",
    bio: "Brings energy, warmth and local expertise to every event.",
    fullBio:
      "Sophie brings energy, warmth and local expertise to every event. Whether it's a private celebration, a hens party or a corporate experience, she knows how to create unforgettable moments on the water and beyond. Growing up on Sydney Harbour, she learned early that the best stories happen when people feel at ease — so she builds every experience around genuine connection first, itinerary second. What makes her experiences different is the mix of insider knowledge and unscripted moments: the hidden bay only locals know, the impromptu singalong on the boat deck, the extra hour nobody wants to end.",
    quote:
      "I love bringing people together and showing them the best of this incredible city. Every event is a new story, and I'm here to make it unforgettable.",
    featured: true,
    rating: 4.9,
    experienceCount: 62,
    guestCount: 1240,
    experienceSlugs: ["hidden-bays-by-boat", "sunset-sailing-experience"],
    upcomingEvents: [
      { id: "sc-1", title: "Sunset Sailing Experience", date: "2026-10-11", location: "Sydney Harbour", availability: "6 spots left" },
      { id: "sc-2", title: "Hidden Bays by Boat", date: "2026-10-25", location: "Pittwater, Sydney", availability: "Almost full" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Mia R.", quote: "Sophie made us feel like locals within an hour. Best day on the water we've had.", rating: 5 },
      { name: "Tom H.", quote: "She reads the group perfectly and somehow finds the best hidden spots.", rating: 5 },
      { name: "Priya K.", quote: "Booked for a hens do and it exceeded every expectation.", rating: 5 },
    ],
    uniquePoints: ["Local harbour knowledge", "Personal, unscripted moments", "Small group sizes", "Genuine local recommendations"],
    social: { instagram: "https://instagram.com", website: "https://example.com" },
  },
  {
    slug: "liam-walker",
    name: "Liam Walker",
    role: "Host, Melbourne",
    location: "Melbourne, Australia",
    tags: ["Adventure", "Corporate"],
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=2200&auto=format&fit=crop",
    bio: "Master of ceremonies and full-time good-time enthusiast.",
    fullBio:
      "Liam has hosted over 300 nights across the country, bringing a mix of charm, chaos, and impeccable timing to every event. When he's not on stage, he's scouting the next unforgettable venue. He built his reputation on reading a room fast and adjusting the plan in real time, which is why corporates and casual groups both request him. What makes his sessions different is the balance of structure and spontaneity — enough plan to feel seamless, enough freedom to feel real.",
    rating: 4.8,
    experienceCount: 48,
    guestCount: 980,
    experienceSlugs: ["confidence-lab"],
    upcomingEvents: [
      { id: "lw-1", title: "Confidence Lab Workshop", date: "2026-10-17", location: "Fitzroy, Melbourne", availability: "8 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Callum D.", quote: "The hosts made it feel loose, funny, and somehow very organised.", rating: 5 },
      { name: "Zoe P.", quote: "Liam had the whole office laughing within ten minutes.", rating: 5 },
    ],
    uniquePoints: ["Reads the room in real time", "Corporate-ready polish", "Playful, structured formats", "Great with big groups"],
    social: { instagram: "https://instagram.com", website: "https://example.com" },
  },
  {
    slug: "emily-rose",
    name: "Emily Rose",
    role: "Host, Gold Coast",
    location: "Gold Coast, Australia",
    tags: ["Hens Parties", "Wellness"],
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2200&auto=format&fit=crop",
    bio: "Storyteller, hype-woman, and hens party legend.",
    fullBio:
      "Emily cut her teeth hosting hens parties and wellness retreats before joining The Village full-time. Her energy is unmatched and her playlists are even better. She believes the best experiences leave people a little more relaxed and a lot more connected, which is why she blends celebration with genuine wellness moments. What makes her different is her ability to hold space for both big laughs and quiet, meaningful ones in the same afternoon.",
    rating: 4.9,
    experienceCount: 55,
    guestCount: 1105,
    experienceSlugs: ["snorkelling-with-marine-life"],
    upcomingEvents: [
      { id: "er-1", title: "Snorkelling with Marine Life", date: "2026-11-02", location: "Gold Coast", availability: "4 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Jess T.", quote: "Absolutely amazing experience. Emily made our hens party so easy and so much fun.", rating: 5 },
      { name: "Emily R.", quote: "Best hens party ever, communication was great from start to finish.", rating: 5 },
    ],
    uniquePoints: ["Celebration meets wellness", "Warm, inclusive energy", "Great playlists, better company", "Small, relaxed groups"],
    social: { instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    slug: "jack-thompson",
    name: "Jack Thompson",
    role: "Host, Byron Bay",
    location: "Byron Bay, Australia",
    tags: ["Local Tours", "Music Events"],
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2200&auto=format&fit=crop",
    bio: "Sunshine chaser and riverside party starter.",
    fullBio:
      "Jack grew up on the coast and brings that laid-back-but-let's-go energy to every event he touches. Ask him about the time the DJ booth fell in the river. He's spent years building relationships with the best local spots along the coast, and his tours always end up somewhere off the typical tourist track. What makes his experiences different is the mix of music, movement, and genuinely good local intel.",
    rating: 4.8,
    experienceCount: 39,
    guestCount: 760,
    experienceSlugs: ["sunset-sailing-experience"],
    upcomingEvents: [
      { id: "jt-1", title: "Sunset Sailing Experience", date: "2026-10-30", location: "Byron Bay", availability: "10 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Nick B.", quote: "Jack knows every local secret spot. Unreal day out.", rating: 5 },
      { name: "Harriet S.", quote: "Genuinely one of the best hosted days we've had.", rating: 4 },
    ],
    uniquePoints: ["Off-the-beaten-track locations", "Music-led experiences", "Laid-back but well-run", "Deep local relationships"],
    social: { instagram: "https://instagram.com", website: "https://example.com" },
  },
  {
    slug: "olivia-bennett",
    name: "Olivia Bennett",
    role: "Host, London",
    location: "London, UK",
    tags: ["Cultural", "Food & Wine"],
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2200&auto=format&fit=crop",
    bio: "Cross-continental connector of good vibes.",
    fullBio:
      "Olivia splits her time between London and Europe, bringing our signature brand of fun to every corner of the continent. She's fluent in three languages and one universal one: fun. Trained as a cultural historian before turning to hosting, she layers real stories and context into every gathering. What makes her different is the depth she brings without ever making an experience feel like a lecture.",
    rating: 4.9,
    experienceCount: 44,
    guestCount: 890,
    experienceSlugs: ["host-school"],
    upcomingEvents: [
      { id: "ob-1", title: "Host School Workshop", date: "2026-11-08", location: "Shoreditch, London", availability: "5 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Freya M.", quote: "Olivia's storytelling made the whole evening feel special.", rating: 5 },
      { name: "James O.", quote: "She's got a knack for making strangers feel like old friends.", rating: 5 },
    ],
    uniquePoints: ["Cultural depth without the lecture", "Multilingual host", "Cross-city expertise", "Genuine storytelling"],
    social: { instagram: "https://instagram.com" },
  },
  {
    slug: "noah-khan",
    name: "Noah Khan",
    role: "Host, Manchester",
    location: "Manchester, UK",
    tags: ["Nightlife", "Private Events"],
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1543832923-c8112fdb0409?q=80&w=2200&auto=format&fit=crop",
    bio: "Northern charm with a flair for the dramatic.",
    fullBio:
      "Noah has spent years hosting private events and nightlife experiences across the north. He knows exactly how to read a room and keep the night moving. He got his start hosting warehouse nights before moving into private and corporate events, and he's kept the same instinct for pace and energy. What makes his experiences different is a natural sense of theatre — every night has a build, a peak, and a landing.",
    rating: 4.7,
    experienceCount: 33,
    guestCount: 640,
    experienceSlugs: ["host-school"],
    upcomingEvents: [
      { id: "nk-1", title: "Northern Quarter Private Night", date: "2026-10-24", location: "Manchester", availability: "Limited spots" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1543832923-c8112fdb0409?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Alfie R.", quote: "Noah completely nailed the pace of the night.", rating: 5 },
      { name: "Grace L.", quote: "Great energy, very professional, would book again.", rating: 4 },
    ],
    uniquePoints: ["A natural sense of theatre", "Private event specialist", "Reads the crowd instantly", "Northern charm, big energy"],
    social: { instagram: "https://instagram.com", website: "https://example.com" },
  },
  {
    slug: "isabella-martin",
    name: "Isabella Martin",
    role: "Host, Barcelona",
    location: "Barcelona, Spain",
    tags: ["Food & Dining", "City Tours"],
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2200&auto=format&fit=crop",
    bio: "Tapas, sunshine, and unforgettable city tours.",
    fullBio:
      "Isabella has an encyclopaedic knowledge of Barcelona's best hidden restaurants and rooftop bars, and she loves nothing more than sharing them with guests. Born and raised in the city, she treats every group like visiting family, taking them well beyond the guidebook stops. What makes her different is the access — the family-run kitchens and rooftop terraces most visitors never find.",
    rating: 4.8,
    experienceCount: 51,
    guestCount: 1020,
    experienceSlugs: ["italian-cooking-class"],
    upcomingEvents: [
      { id: "im-1", title: "Barcelona Food & Tapas Tour", date: "2026-10-19", location: "Barcelona", availability: "7 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Anna K.", quote: "Isabella took us to places we'd never have found ourselves. Incredible food.", rating: 5 },
      { name: "Marco P.", quote: "Felt like a local the entire tour. Highly recommend.", rating: 5 },
    ],
    uniquePoints: ["Family-run local access", "Deep culinary knowledge", "Beyond the guidebook", "Warm, personal hosting"],
    social: { instagram: "https://instagram.com" },
  },
  {
    slug: "lucas-moretti",
    name: "Lucas Moretti",
    role: "Host, Rome",
    location: "Rome, Italy",
    tags: ["History", "Cultural"],
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2200&auto=format&fit=crop",
    bio: "A history buff with a talent for storytelling.",
    fullBio:
      "Lucas trained as a tour guide before joining The Village, and he brings the same depth of knowledge and love of a good story to every experience he hosts. He specialises in weaving history into modern-day Rome, showing guests how ancient streets still shape daily life. What makes his experiences different is the way he turns facts into genuinely gripping stories.",
    rating: 4.9,
    experienceCount: 58,
    guestCount: 1150,
    experienceSlugs: ["italian-cooking-class"],
    upcomingEvents: [
      { id: "lm-1", title: "Roman Cooking & History Evening", date: "2026-11-05", location: "Rome", availability: "6 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Sarah W.", quote: "Lucas made Roman history feel alive. Best tour we've done anywhere.", rating: 5 },
      { name: "David F.", quote: "Incredible storyteller, made the whole evening fly by.", rating: 5 },
    ],
    uniquePoints: ["History brought to life", "Trained professional guide", "Storytelling over facts", "Small, immersive groups"],
    social: { instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    slug: "chloe-dubois",
    name: "Chloe Dubois",
    role: "Host, Paris",
    location: "Paris, France",
    tags: ["Art & Culture", "Luxury"],
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2200&auto=format&fit=crop",
    bio: "Effortlessly chic and always in the know.",
    fullBio:
      "Chloe has a black book of the best galleries, ateliers, and private dining rooms in Paris, and she loves curating luxury experiences that feel personal. Before joining The Village she worked in private art consultancy, and she brings the same eye for detail to every event. What makes her different is the level of curation — nothing feels generic, everything feels chosen for you.",
    rating: 4.9,
    experienceCount: 46,
    guestCount: 910,
    experienceSlugs: ["creative-icebreakers"],
    upcomingEvents: [
      { id: "cd-1", title: "Private Atelier Evening", date: "2026-11-14", location: "Le Marais, Paris", availability: "4 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Isabelle T.", quote: "Chloe's curation is impeccable. Every detail felt considered.", rating: 5 },
      { name: "Robert G.", quote: "An unforgettable, elegant evening from start to finish.", rating: 5 },
    ],
    uniquePoints: ["Curated, never generic", "Private art & atelier access", "An eye for detail", "Elevated small-group nights"],
    social: { instagram: "https://instagram.com", website: "https://example.com" },
  },
  {
    slug: "daniel-cooper",
    name: "Daniel Cooper",
    role: "Host, Edinburgh",
    location: "Edinburgh, UK",
    tags: ["Adventure", "Group Tours"],
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2200&auto=format&fit=crop",
    bio: "Highland adventures and unforgettable group tours.",
    fullBio:
      "Daniel grew up exploring the Scottish Highlands and now channels that spirit of adventure into every group tour and outdoor experience he hosts. He's spent years mapping routes that balance breathtaking scenery with genuine challenge, always with safety front of mind. What makes his experiences different is the balance of adventure and storytelling about the land itself.",
    rating: 4.8,
    experienceCount: 41,
    guestCount: 800,
    experienceSlugs: ["creative-icebreakers"],
    upcomingEvents: [
      { id: "dc-1", title: "Highland Group Adventure Day", date: "2026-10-27", location: "Scottish Highlands", availability: "9 spots left" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
    ],
    testimonials: [
      { name: "Ellie M.", quote: "Daniel's knowledge of the Highlands made this trip unforgettable.", rating: 5 },
      { name: "Connor B.", quote: "Well-paced, safe, and genuinely thrilling. Would go again.", rating: 4 },
    ],
    uniquePoints: ["Deep Highlands knowledge", "Adventure with real storytelling", "Safety-first planning", "Small group tours"],
    social: { instagram: "https://instagram.com" },
  },
];

export function getHostBySlug(slug: string) {
  return hosts.find((h) => h.slug === slug);
}

export function getFeaturedHost() {
  return hosts.find((h) => h.featured) ?? hosts[0];
}
