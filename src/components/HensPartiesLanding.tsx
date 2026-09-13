"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroImage = "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2200&auto=format&fit=crop";

const highlights = [
  { title: "Unique Experiences", text: "Tailored to your group", tint: "bg-[#ffd0df]" },
  { title: "Any Group Size", text: "From small to large", tint: "bg-[#dbe7ff]" },
  { title: "Iconic Locations", text: "Australia, UK & Europe", tint: "bg-[#cdf8dc]" },
  { title: "Food & Drink Options", text: "Packages to suit all", tint: "bg-[#ffe2cf]" },
  { title: "Hassle-Free Planning", text: "We take care of the details", tint: "bg-[#ecd7ff]" },
];

const introImages = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=900&auto=format&fit=crop",
];

const ideas = [
  { title: "Boat Parties", text: "Sun, drinks and good vibes", image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=900&auto=format&fit=crop" },
  { title: "Wine Tours", text: "Sip and explore", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop" },
  { title: "Pamper & Wellness", text: "Relax and unwind", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop" },
  { title: "Food & Dining", text: "Delicious experiences", image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=900&auto=format&fit=crop" },
  { title: "Adventure Activities", text: "Something different", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=900&auto=format&fit=crop" },
  { title: "Nightlife", text: "Dance the night away", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=900&auto=format&fit=crop" },
];

const hensTestimonials = [
  {
    name: "Jess T.",
    quote: "Absolutely amazing experience. The team made our hens party so easy to plan and everything was perfect.",
  },
  {
    name: "Emily R.",
    quote: "Best hens party ever. From start to finish the communication was great and the day exceeded expectations.",
  },
];

function HensEnquiryForm() {
  return (
    <form className="rounded-[20px] bg-gradient-to-br from-[#fff4f8] to-[#ffe3ed] p-7 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.45em] text-[#8b7e76]">Get started</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight">Enquire About Your Hens Party</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Your Name *" />
        <select className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]">
          <option>Type of Experience</option>
          <option>Boat Party</option>
          <option>Wine Tour</option>
          <option>Nightlife</option>
        </select>
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Email Address *" type="email" />
        <select className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm text-[#66717b] outline-none focus:border-[#ff8fb8]">
          <option>Preferred Location</option>
          <option>Sydney</option>
          <option>Melbourne</option>
          <option>London</option>
        </select>
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Phone Number *" />
        <input className="h-12 rounded-[12px] border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#ff8fb8]" placeholder="Expected Number of Guests" />
        <textarea className="min-h-28 rounded-[12px] border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff8fb8] md:col-span-2" placeholder="Tell us more about your event..." />
      </div>
      <button className="mt-6 w-full rounded-full bg-[#ff8fb8] px-6 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white" type="submit">
        Submit Enquiry &rarr;
      </button>
    </form>
  );
}

export function HensPartiesLanding() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 via-[#071119]/42 to-[#071119]/5" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[66vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12">
          <motion.div {...reveal}>
            <p className="text-xs font-black uppercase tracking-[0.55em] text-white/82">Hens parties</p>
            <h1 className="mt-5 max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">Celebrate Her Way</h1>
            <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-white/88">
              Unforgettable hens parties in amazing locations. Great vibes, unique experiences and memories that last a lifetime.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#hens-enquiry" className="rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-white">Enquire Now &rarr;</a>
              <Link href="/galleries" className="rounded-full border border-white/45 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#071119]">Watch Video</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-5 md:px-12">
        {highlights.map((item, index) => (
          <motion.div {...reveal} key={item.title} className="text-center">
            <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${item.tint} text-sm font-black text-[#071119]`}>{index + 1}</div>
            <h3 className="mt-4 text-lg font-black">{item.title}</h3>
            <p className="mt-2 text-sm text-[#66717b]">{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 md:px-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Make it unforgettable</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">Hens Parties Done Differently</h2>
          <p className="mt-5 text-lg leading-8 text-[#59636d]">
            Whether you&apos;re planning a relaxed day out, a vibrant night on the town, or a completely unique experience, we&apos;ll help you create a hens party that&apos;s all about great company, amazing locations and unforgettable moments.
          </p>
          <a href="#hens-ideas" className="mt-8 inline-flex rounded-full bg-[#ff8fb8] px-8 py-4 text-sm font-black text-[#071119] transition hover:bg-[#071119] hover:text-white">View Experiences &rarr;</a>
        </motion.div>
        <motion.div {...reveal} className="grid grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 min-h-[320px] rounded-[18px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${introImages[0]})` }} />
          {introImages.slice(1).map((image) => (
            <div key={image} className="min-h-[150px] rounded-[16px] bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${image})` }} />
          ))}
        </motion.div>
      </section>

      <section id="hens-ideas" className="relative overflow-hidden bg-[#071119] px-5 py-16 text-white md:px-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1800&auto=format&fit=crop)" }} />
        <div className="relative mx-auto max-w-[1440px]">
          <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/65">Popular experiences</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ideas for Your Hens Party</h2>
            </div>
            <Link href="/a-deeper-dive" className="text-sm font-black text-white">View All Experiences &rarr;</Link>
          </motion.div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {ideas.map((idea) => (
              <motion.article key={idea.title} whileHover={{ y: -8 }} className="relative min-h-56 overflow-hidden rounded-[18px] border border-white/30 bg-cover bg-center shadow-xl" style={{ backgroundImage: `url(${idea.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-black">{idea.title}</h3>
                  <p className="mt-1 text-sm text-white/74">{idea.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="hens-enquiry" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-12 lg:grid-cols-[1fr_0.95fr]">
        <motion.div {...reveal}>
          <HensEnquiryForm />
        </motion.div>
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-[#8b7e76]">Real stories</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">What Our Clients Say</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {hensTestimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[18px] bg-white p-6 shadow-sm">
                <p className="text-sm leading-6 text-[#59636d]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-black">{testimonial.name}</p>
                  <p className="text-[#ffb000]">★★★★★</p>
                </div>
              </article>
            ))}
          </div>
          <div className="relative mt-8 min-h-[190px] overflow-hidden rounded-[18px] bg-[#071119] p-7 text-white shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop)" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071119]/92 to-[#071119]/25" />
            <div className="relative max-w-md">
              <h3 className="text-2xl font-black">Let&apos;s Plan Something Amazing</h3>
              <p className="mt-3 text-sm leading-6 text-white/78">Get in touch today and let&apos;s create an unforgettable hens party experience.</p>
              <a href="#hens-enquiry" className="mt-5 inline-flex rounded-full bg-[#ff8fb8] px-7 py-3 text-sm font-black text-[#071119] transition hover:bg-white">Enquire Now &rarr;</a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
