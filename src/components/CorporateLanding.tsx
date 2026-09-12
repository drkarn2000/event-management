"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/site";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroImage =
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2200&auto=format&fit=crop";

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={path} />
    </svg>
  );
}

const icons = {
  shield: "M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z",
  calendar: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z M4 10h16 M8 3v4 M16 3v4",
  rocket: "M5 15l-1.5 5L9 18.5 M12 15c3-1 6-4 7-9 -5 1-8 4-9 7-2 0-3.5 1-4.5 3.5C7 15 9 15 12 15z M9 12a2 2 0 1 0 3 3",
  users: "M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M2 20c0-3 2.7-5 6-5s6 2 6 5 M12 20c0-2.5 2-4.3 4.5-4.9 M15 15.1c2.7.3 5 2.1 5 4.9",
  headset: "M4 13a8 8 0 0 1 16 0 M4 13v4a2 2 0 0 0 2 2h1v-6H5a1 1 0 0 0-1 1z M20 13v4a2 2 0 0 1-2 2h-1v-6h1a1 1 0 0 1 2 1z M9 19v.5a2 2 0 0 0 2 2h1",
  star: "M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.5-4.1 6-.7L12 3z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z",
  arrowLeft: "M19 12H5 M11 6l-6 6 6 6",
  arrowRight: "M5 12h14 M13 6l6 6-6 6",
};

const categories = [
  { title: "Team Building", text: "Engaging & fun", icon: icons.shield, tint: "bg-[#dbe7ff]" },
  { title: "Conferences", text: "Seamless execution", icon: icons.calendar, tint: "bg-[#ecd7ff]" },
  { title: "Product Launches", text: "Make an impact", icon: icons.rocket, tint: "bg-[#ffe2cf]" },
  { title: "Networking Events", text: "Bring people together", icon: icons.users, tint: "bg-[#cdf8dc]" },
  { title: "End-to-End Support", text: "We handle the details", icon: icons.headset, tint: "bg-[#ffd0df]" },
];

const collageImages = [
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=900&auto=format&fit=crop",
];

const eventTypes = [
  { title: "Conferences & Seminars", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop" },
  { title: "Team Building Activities", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=900&auto=format&fit=crop" },
  { title: "Product Launches", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop" },
  { title: "Corporate Dinners & Networking", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop" },
  { title: "Incentive Events", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop" },
  { title: "Client Entertainment", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=900&auto=format&fit=crop" },
];

const trustPoints = [
  { title: "Experienced Team", text: "Years of event expertise", icon: icons.star },
  { title: "Custom Experiences", text: "Tailored to your goals", icon: icons.users },
  { title: "Trusted by Leading Brands", text: "Proven track record", icon: icons.shield },
  { title: "Iconic Locations", text: "Australia, UK & Europe", icon: icons.globe },
];

function CorporateEnquiryForm() {
  return (
    <form className="rounded-[22px] border border-black/8 bg-white p-7 shadow-[0_18px_60px_rgba(7,17,25,0.08)]">
      <input type="hidden" name="enquiryType" value="Corporate & Organisational" />
      <p className="text-xs font-black uppercase tracking-[0.4em] text-[#5b6b8c]">Get in touch</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0c1524]">Request a Corporate Event Proposal</h2>
      <p className="mt-3 text-sm leading-6 text-[#5c6774]">
        Tell us about your requirements and our team will get back to you with a customised proposal.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#2c5cf6]" placeholder="Your Name *" name="name" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#2c5cf6]" placeholder="Company Name *" name="company" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#2c5cf6]" placeholder="Email Address *" name="email" type="email" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#2c5cf6]" placeholder="Phone Number *" name="phone" />
        <select className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#2c5cf6]" name="eventType">
          <option>Type of Event</option>
          <option>Conferences & Seminars</option>
          <option>Team Building</option>
          <option>Product Launch</option>
          <option>Corporate Dinner & Networking</option>
          <option>Incentive Event</option>
          <option>Client Entertainment</option>
        </select>
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#2c5cf6]" placeholder="Expected Number of Guests" name="guests" />
        <textarea className="min-h-28 rounded-[12px] border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#2c5cf6] md:col-span-2" placeholder="Tell us more about your event goals..." name="message" />
      </div>
      <button className="mt-6 w-full rounded-full bg-[#ff8fb8] px-6 py-4 text-sm font-black text-[#071119] transition hover:bg-[#0c1524] hover:text-white" type="submit">
        Submit Enquiry &rarr;
      </button>
    </form>
  );
}

export function CorporateLanding() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial % testimonials.length];

  return (
    <main className="overflow-hidden bg-[#f5f7fb] text-[#0c1524]">
      <section className="relative min-h-[70vh] overflow-hidden bg-[#0c1524] text-white">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1524]/94 via-[#0c1524]/55 to-[#0c1524]/15" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f5f7fb] to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <div className="mb-6 flex items-center gap-2 text-sm font-bold text-white/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>&gt;</span>
              <span>Corporate & Organisational</span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/75">Corporate & organisational events</p>
            <h1 className="mt-5 max-w-3xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              Meaningful Events. Stronger Teams.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/85">
              We create exceptional corporate experiences that inspire, connect and deliver real impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#proposal" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#0c1524] transition hover:bg-white">Enquire Now &rarr;</a>
              <Link href="/galleries" className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#0c1524]">
                <span className="grid h-4 w-4 place-items-center">▶</span> Watch Video
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="absolute bottom-14 right-5 hidden items-center gap-3 rounded-[20px] border border-white/25 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl lg:flex"
          >
            <Icon path={icons.users} className="h-8 w-8 text-white/85" />
            <div>
              <p className="text-sm font-black">Trusted by 200+</p>
              <p className="text-xs text-white/70">Companies & Organisations</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:grid-cols-2 md:px-12 lg:grid-cols-5">
        {categories.map((item) => (
          <motion.div {...reveal} key={item.title} className="text-center">
            <div className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${item.tint} text-[#0c1524]`}>
              <Icon path={item.icon} className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-base font-black">{item.title}</h3>
            <p className="mt-1 text-sm text-[#66717b]">{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 md:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#5b6b8c]">Tailored experiences</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Corporate Events That Deliver More
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4c5763]">
            From strategy sessions and team building to large-scale conferences and product launches, we design and
            deliver events tailored to your organisation&apos;s goals. Our team handles everything, so you can focus
            on what matters &mdash; your people.
          </p>
          <a href="#event-types" className="mt-8 inline-flex rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white">
            Explore Our Corporate Events &rarr;
          </a>
        </motion.div>
        <motion.div {...reveal} className="grid grid-cols-2 gap-4">
          <div className="col-span-2 min-h-64 rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${collageImages[0]})` }} />
          {collageImages.slice(1).map((image) => (
            <div key={image} className="min-h-40 rounded-[16px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </motion.div>
      </section>

      <section id="event-types" className="relative overflow-hidden bg-[#0c1524] px-5 py-16 text-white md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="relative mx-auto max-w-[1440px]">
          <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/65">Event types</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Experiences for Every Goal</h2>
              <p className="mt-3 max-w-xl text-white/75">
                Whether you&apos;re looking to motivate, reward or collaborate, we have the perfect event for you.
              </p>
            </div>
            <Link href="/events" className="text-sm font-black text-white">View All Events &rarr;</Link>
          </motion.div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {eventTypes.map((item) => (
              <motion.article key={item.title} whileHover={{ y: -8 }} className="relative min-h-52 overflow-hidden rounded-[18px] border border-white/25 bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <h3 className="text-sm font-black leading-tight">{item.title}</h3>
                  <span className="text-lg">&rarr;</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="proposal" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#5b6b8c]">Get in touch</p>
          <CorporateEnquiryForm />
        </motion.div>
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#5b6b8c]">Why choose us</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">A Partner You Can Rely On</h2>
          <div className="mt-7 grid grid-cols-2 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title}>
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#e6ecff] text-[#0c1524]">
                  <Icon path={point.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-black leading-tight">{point.title}</h3>
                <p className="mt-1 text-xs text-[#66717b]">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#5b6b8c]">What our clients say</p>
            <Link href="/galleries" className="text-sm font-black text-[#0c1524]">View More Testimonials &rarr;</Link>
          </div>
          <div className="mt-4 rounded-[18px] bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-[#4c5763]">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-black">{testimonial.name}</p>
                <p className="text-[#ffb000] text-sm">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white"
                >
                  <Icon path={icons.arrowLeft} className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setActiveTestimonial((i) => (i + 1) % testimonials.length)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#0c1524] transition hover:bg-[#0c1524] hover:text-white"
                >
                  <Icon path={icons.arrowRight} className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#0c1524] text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1524]/90 via-[#0c1524]/80 to-[#0c1524]/25" />
        <div className="relative mx-auto grid max-w-[1440px] gap-8 px-5 py-20 md:px-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div />
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-white/70">Let&apos;s build something great</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">Ready to Elevate Your Next Event?</h2>
            <p className="mt-4 text-lg leading-8 text-white/82">
              Partner with a team that understands business goals as well as it understands good hospitality.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#proposal" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#0c1524] transition hover:bg-white">Request a Proposal &rarr;</a>
              <a href="tel:+61000000000" className="rounded-full border border-white/35 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#0c1524]">Call Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
