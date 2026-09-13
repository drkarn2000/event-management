export type Region = "australia" | "uk" | "europe";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
  category?: string;
  featured?: boolean;
  status?: "Draft" | "Published";
};

export type City = {
  slug: string;
  name: string;
  region: Region;
  tagline: string;
  heroImage: string;
  bookingWidgetUrl: string;
  events: EventItem[];
};

export type HostUpcomingEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  availability: string;
};

export type HostTestimonial = {
  name: string;
  quote: string;
  rating: number;
};

export type Host = {
  slug: string;
  name: string;
  role: string;
  location: string;
  tags: string[];
  photo: string;
  coverPhoto: string;
  bio: string;
  fullBio: string;
  quote?: string;
  featured?: boolean;
  rating: number;
  experienceCount: number;
  guestCount: number;
  experienceSlugs: string[];
  upcomingEvents: HostUpcomingEvent[];
  gallery: string[];
  testimonials: HostTestimonial[];
  uniquePoints: string[];
  social: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  rating: number;
  avatar?: string;
};

export type GalleryItem = {
  id: string;
  type: "photo" | "video";
  src: string;
  category: string;
  caption: string;
};

export type Experience = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  featured?: boolean;
};

export type ExperienceCategory = {
  slug: string;
  title: string;
  text: string;
  icon: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
};
