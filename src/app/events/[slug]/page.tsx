import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { cities, getCityBySlug, regionLabels } from "@/lib/data/cities";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export default async function CityEventsPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <main>
      <PageHero eyebrow={`${regionLabels[city.region]} events`} title={city.name} text={city.tagline} image={city.heroImage} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionTitle eyebrow="City events" title={`Upcoming in ${city.name}`} text="SEO-friendly city page powered by the same city data used on the tabbed events page." />
          <div className="mt-8 grid gap-4">
            {city.events.map((event) => (
              <article key={event.id} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-black text-[#e84a27]">{new Date(event.date).toLocaleDateString("en-AU", { dateStyle: "medium" })}</p>
                <h2 className="mt-2 text-2xl font-black">{event.title}</h2>
                <p className="mt-1 text-sm font-bold text-[#5a5148]">{event.venue}</p>
                <p className="mt-3 text-sm leading-6 text-[#6b625a]">{event.description}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-lg bg-[#141414] p-6 text-white">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd45a]">Booking Widget</p>
          <h2 className="mt-3 text-3xl font-black">{city.name}</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">Drop the city-specific iframe or third-party booking script here.</p>
          <div className="mt-6 rounded-md border border-white/15 bg-white/10 p-4 text-sm text-white/80">{city.bookingWidgetUrl}</div>
        </aside>
      </section>
    </main>
  );
}
