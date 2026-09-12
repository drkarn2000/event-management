"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/site";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroImage = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2200&auto=format&fit=crop";

const occasions = [
  "Birthdays",
  "Engagements",
  "Anniversaries",
  "Family Gatherings",
  "Social Events",
  "Custom Occasions",
];

const collageImages = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=900&auto=format&fit=crop",
];

const venues = [
  {
    title: "Rooftop Venues",
    text: "City Views",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Beachside Locations",
    text: "Coastal Vibes",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Unique Spaces",
    text: "Something Different",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=900&auto=format&fit=crop",
  },
];

function PrivateEnquiryForm() {
  return (
    <form className="rounded-[22px] border border-black/8 bg-white/88 p-6 shadow-[0_18px_60px_rgba(7,17,25,0.09)] backdrop-blur">
      <h2 className="text-3xl font-black tracking-tight text-[#101b24]">Send an Enquiry</h2>
      <p className="mt-3 text-sm leading-6 text-[#66717b]">Tell us about your event and we&apos;ll get back to you with a custom proposal.</p>
      <div className="mt-5 grid gap-3">
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Your Name *" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Email Address *" type="email" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Phone Number" />
        <select className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]">
          <option>Type of Event</option>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Custom Event</option>
        </select>
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Expected Number of Guests" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]" type="date" />
        <textarea className="min-h-32 rounded-[12px] border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Tell us more about your event..." />
        <button className="mt-1 rounded-full bg-[#ff8fb8] px-6 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white" type="submit">
          Submit Enquiry &rarr;
        </button>
      </div>
    </form>
  );
}

export function PrivateBookingsLanding() {
  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#101b24]">
      <section className="relative min-h-[66vh] overflow-hidden bg-[#071119] text-white">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/48 to-[#071119]/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[66vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <div className="mb-7 flex items-center gap-2 text-sm font-bold text-white/75">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>&gt;</span>
              <span>Private Bookings</span>
            </div>
            <h1 className="text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">Private Bookings</h1>
            <p className="mt-5 max-w-2xl text-2xl font-black text-white">Your event. Your people. Our expertise.</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/84">
              From intimate gatherings to large celebrations, we create unforgettable experiences tailored to your vision.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-white/86">
              <span>Tailored Experiences</span>
              <span>Any Group Size</span>
              <span>Iconic Locations</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#enquiry" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">Enquire Now &rarr;</a>
              <a href="#venues" className="rounded-full border border-white/45 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">View Our Spaces</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="absolute bottom-14 right-5 hidden rounded-[26px] border border-white/25 bg-white/12 p-5 shadow-2xl backdrop-blur-xl lg:block"
          >
            <p className="text-sm font-black">500+ Private Events</p>
            <p className="mt-1 text-sm text-[#ffd45a]">5 star <span className="text-white">4.9</span></p>
            <p className="mt-1 text-xs text-white/70">Rated by our clients</p>
          </motion.div>
        </div>
      </section>

      <section id="enquiry" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-12 lg:grid-cols-[0.95fr_0.9fr_0.75fr] lg:items-start">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Make it yours</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">Perfect for Every Occasion</h2>
          <p className="mt-5 text-lg leading-8 text-[#59636d]">
            Whether it&apos;s a birthday, an engagement, a milestone celebration or just a reason to bring people together, we&apos;ll help you create an experience that&apos;s uniquely yours.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {occasions.map((occasion, index) => (
              <div key={occasion} className="text-center">
                <div className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-sm font-black ${["bg-[#ffd0df]", "bg-[#dbe7ff]", "bg-[#cdf8dc]", "bg-[#ecd7ff]", "bg-[#fff0ce]", "bg-[#d8f3ff]"][index]}`}>
                  {index + 1}
                </div>
                <p className="mt-3 text-sm font-black">{occasion}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="grid grid-cols-2 gap-4">
          <div className="col-span-2 h-64 rounded-[20px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${collageImages[0]})` }} />
          <div className="h-52 rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${collageImages[1]})` }} />
          <div className="h-52 rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${collageImages[2]})` }} />
        </motion.div>

        <motion.div {...reveal}>
          <PrivateEnquiryForm />
        </motion.div>
      </section>

      <section id="venues" className="relative overflow-hidden bg-[#071119] px-5 py-16 text-white md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/65">Incredible locations</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Stunning Venues</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/82">
              From rooftop spaces and beachside venues to unique hidden gems, we&apos;ll help you find the perfect setting for your private event.
            </p>
            <Link href="/galleries" className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-[#071119] transition hover:bg-[#ff8fb8]">Explore Venues &rarr;</Link>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {venues.map((venue) => (
              <motion.article key={venue.title} whileHover={{ y: -8 }} className="relative min-h-64 overflow-hidden rounded-[18px] border border-white/30 bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${venue.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-black">{venue.title}</h3>
                  <p className="mt-1 text-sm text-white/72">{venue.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-12">
        <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">What our clients say</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Unforgettable Experiences</h2>
          </div>
          <Link href="/galleries" className="text-sm font-black">View More Testimonials &rarr;</Link>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[18px] bg-white p-6 shadow-sm">
              <p className="text-base leading-7 text-[#59636d]">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-black">{testimonial.name}</p>
                <p className="text-[#ffb000]">★★★★★</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071119] text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/82 via-[#071119]/78 to-[#071119]/28" />
        <div className="relative mx-auto grid max-w-[1440px] gap-8 px-5 py-20 md:px-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div />
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Let&apos;s create something amazing</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">Ready to Plan Your Event?</h2>
            <p className="mt-4 text-lg leading-8 text-white/82">Get in touch with our team today and let&apos;s bring your vision to life.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#enquiry" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">Enquire Now &rarr;</a>
              <a href="tel:+61000000000" className="rounded-full border border-white/35 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">Call Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
