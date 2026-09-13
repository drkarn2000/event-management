type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  cta?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, text, image, cta, ctaHref }: PageHeroProps) {
  return (
    <section className="relative min-h-[68vh] overflow-hidden bg-[#141414] text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
      <div className="relative mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-center px-5 py-24">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd45a]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none text-white md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{text}</p>
        {cta && ctaHref ? (
          <a href={ctaHref} className="mt-8 w-fit rounded-full bg-[#ffd45a] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#141414] transition hover:bg-white">
            {cta}
          </a>
        ) : null}
      </div>
    </section>
  );
}
