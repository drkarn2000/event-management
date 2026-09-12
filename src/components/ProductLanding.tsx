"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";

type ProductLandingProps = {
  product: Product;
  label: string;
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const storyImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
];

const benefitChips = ["Live Music", "Great People", "Iconic Locations", "Unforgettable Atmosphere"];

const bookingBenefits = [
  { title: "Multiple Dates", text: "Across Major Cities", mark: "CAL" },
  { title: "Individual & Group", text: "Bookings", mark: "VIP" },
  { title: "Safe & Secure", text: "Booking Process", mark: "OK" },
  { title: "Dedicated", text: "Customer Support", mark: "24" },
];

const expectations = ["Amazing Locations", "Quality Entertainment", "Food & Drink Options", "Great Community"];

const gallery = [
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=900&auto=format&fit=crop",
];

const faqs = [
  "Where is Product available?",
  "What is included in the ticket?",
  "Can I book for a group?",
  "What is the refund policy?",
];

export function ProductLanding({ product, label }: ProductLandingProps) {
  const customFaqs = faqs.map((faq) => faq.replace("Product", label));

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      <section className="relative min-h-[72vh] overflow-hidden bg-[#071119] text-white">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/48 to-[#071119]/8" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <div className="mb-7 flex items-center gap-2 text-sm font-bold text-white/75">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>&gt;</span>
              <Link href="/product-1" className="hover:text-white">Products</Link>
              <span>&gt;</span>
              <span>{label}</span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.52em] text-white/82">Featured experience</p>
            <h1 className="mt-4 text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">{label}</h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-9 text-white/90">{product.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-white/86">
              <span>Premium Experience</span>
              <span>Available in Multiple Cities</span>
              <span>Perfect for Groups</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/events" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
                Book Now →
              </Link>
              <Link href="/galleries" className="rounded-full border border-white/45 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">
                Watch Video
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="absolute bottom-14 right-5 hidden rounded-[24px] border border-white/25 bg-white/12 p-4 text-white shadow-2xl backdrop-blur-xl lg:block"
          >
            <p className="text-sm font-black">Join Thousands</p>
            <p className="mt-1 text-sm text-[#ffd45a]">5 star <span className="text-white">4.9</span></p>
            <p className="mt-1 text-xs text-white/70">Rated by our guests</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-16 md:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div {...reveal} className="grid grid-cols-[1.1fr_0.75fr] gap-4">
          <div className="min-h-[420px] rounded-[20px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${storyImages[0]})` }} />
          <div className="grid gap-4">
            <div className="rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${storyImages[1]})` }} />
            <div className="rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${storyImages[2]})` }} />
          </div>
        </motion.div>

        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#8b7e76]">About {label}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            More Than Just an Event. It&apos;s an Experience.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#59636d]">
            {label} brings people together through music, culture and incredible locations. Whether you&apos;re joining with friends,
            celebrating a special occasion or just looking for something different, this experience is designed to create memories that last.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-4">
            {benefitChips.map((chip) => (
              <div key={chip} className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8edf0] text-lg font-black text-[#071119]">+</div>
                <p className="mt-3 text-sm font-black">{chip}</p>
              </div>
            ))}
          </div>
          <Link href="/events" className="mt-9 inline-flex rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white">
            Book Your Experience →
          </Link>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <motion.div {...reveal} className="grid gap-0 overflow-hidden rounded-[18px] bg-white/78 shadow-sm md:grid-cols-4">
          {bookingBenefits.map((item, index) => (
            <div key={item.title} className={`flex items-center gap-5 p-7 ${index > 0 ? "border-t border-black/10 md:border-l md:border-t-0" : ""}`}>
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#e8edf0] text-xs font-black text-[#071119]">{item.mark}</div>
              <div>
                <p className="font-black">{item.title}</p>
                <p className="mt-1 text-sm text-[#59636d]">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#071119] px-5 py-20 text-white md:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/62">The experience</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">What to Expect</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/78">
              From the moment you arrive, every detail is designed to give you an incredible time. Here&apos;s what&apos;s included in your experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {expectations.map((item) => (
                <motion.div key={item} whileHover={{ y: -6 }} className="rounded-[16px] border border-white/8 bg-white/10 p-5 shadow-sm">
                  <p className="text-sm font-black text-[#ff8fb8]">+</p>
                  <h3 className="mt-8 max-w-32 text-base font-black">{item}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...reveal} className="relative min-h-[340px] overflow-hidden rounded-[20px] bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(${storyImages[2]})` }}>
            <div className="absolute inset-0 bg-black/22" />
            <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xl font-black text-[#071119]" type="button">
              Play
            </button>
            <p className="absolute bottom-14 left-0 right-0 text-center text-lg font-black">Watch Experience Video</p>
            <p className="absolute bottom-6 right-7 text-sm font-bold">02:28</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Gallery</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Moments from {label}</h2>
          </div>
          <Link href="/galleries" className="text-sm font-black text-[#071119]">View Full Gallery →</Link>
        </motion.div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {gallery.map((image) => (
            <motion.div key={image} whileHover={{ y: -6 }} className="h-36 rounded-[12px] bg-cover bg-center shadow-sm" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-20 md:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Frequently asked questions</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Have Questions?</h2>
          <div className="mt-7 grid gap-3">
            {customFaqs.map((faq) => (
              <details key={faq} className="group rounded-[12px] border border-black/10 bg-white px-5 py-4 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">
                  {faq}
                  <span className="text-xl leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-[#59636d]">
                  Full answer content can be edited from the product CMS module when the backend is connected.
                </p>
              </details>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal} className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-[#071119] p-8 text-white shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-62" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/95 via-[#071119]/70 to-transparent" />
          <div className="relative max-w-md">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Ready to join?</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight">Book Your Experience Today</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              Spots fill fast. Don&apos;t miss out on an unforgettable time with amazing people.
            </p>
            <Link href="/events" className="mt-8 inline-flex rounded-full bg-[#ff8fb8] px-9 py-4 text-sm font-black text-[#071119] transition hover:bg-white">
              Book Now →
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
