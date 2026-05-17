import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy)] py-24 md:py-32">
      {/* ── Ambient glow ── */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[color:var(--royal)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[color:var(--gold)]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1000px] px-6 text-center md:px-10">
        
        {/* ── Vision Section ── */}
        <div className="mb-24">
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-[color:var(--gold)]/70">
              — Our Vision
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-snug text-white md:text-5xl lg:text-6xl text-balance mx-auto">
              We give it <em className="italic text-[color:var(--gold)]/90">our all.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-3xl font-sans text-lg font-light leading-relaxed text-white/70 md:text-xl text-balance">
              We desire to provide top-of-the-line wedding planning services for the ease and comfort of planning your wedding. Between the out-of-the-box ideas we pitch and the grandeur we deliver, we give it our all. We believe that planning the perfect wedding is no less than an art of design, a hint of genius and a little bit of magic from us.
            </p>
          </Reveal>
        </div>

        {/* ── Destination Weddings Section ── */}
        <div className="relative mx-auto max-w-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-md rounded-[2px] shadow-2xl">
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--gold)]/70">
              — Destination Weddings
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-6 font-serif text-3xl font-light leading-snug text-white md:text-4xl text-balance">
              One-Stop Solution for Your <br className="hidden md:block"/>
              <em className="italic text-[color:var(--gold)]/80">A-Z Planning Needs</em>
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-3xl font-sans text-base font-light leading-relaxed text-white/60 md:text-[17px] text-balance">
              We provide A-Z destination wedding planning services—involved in planning an event from social media promotions, entertainment, wedding décor, catering, and best wedding venues booking assistance to minute arrangements like wedding stationery, itinerary, gift trousseau and others. We focus on providing one-stop all solutions specially for events like destination weddings.
            </p>
          </Reveal>
          
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
        </div>

      </div>
    </section>
  );
}
