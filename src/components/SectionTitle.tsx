type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  invert?: boolean;
};

export function SectionTitle({ eyebrow, title, text, invert = false }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.22em] text-[#e84a27]">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-black leading-tight md:text-5xl ${invert ? "text-white" : "text-[#141414]"}`}>{title}</h2>
      {text ? <p className={`mt-4 text-base leading-7 md:text-lg ${invert ? "text-white/75" : "text-[#5a5148]"}`}>{text}</p> : null}
    </div>
  );
}
