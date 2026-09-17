type EnquiryFormProps = {
  type: string;
};

export function EnquiryForm({ type }: EnquiryFormProps) {
  return (
    <form className="grid gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <input type="hidden" name="enquiryType" value={type} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#2d2a26]">
          Name
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#e84a27]" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#2d2a26]">
          Email
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#e84a27]" name="email" type="email" placeholder="you@example.com" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#2d2a26]">
          Date
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#e84a27]" name="date" type="date" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#2d2a26]">
          Guests
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#e84a27]" name="guests" placeholder="Approx. number" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-[#2d2a26]">
        Tell us the vibe
        <textarea className="min-h-32 rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#e84a27]" name="message" placeholder="Location, budget, occasion, non-negotiables..." />
      </label>
      <button className="rounded-full bg-[#FF8FB8] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#071119] transition hover:bg-[#071119] hover:text-white" type="submit">
        Send Enquiry
      </button>
    </form>
  );
}
