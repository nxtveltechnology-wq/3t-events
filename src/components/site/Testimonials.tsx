import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

import { TESTIMONIALS as T } from "@/data/index";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[color:var(--navy)] py-32 text-[color:var(--ivory)] md:py-40">
      <div className="absolute inset-0 noise" />
      <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-[color:var(--gold)]/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-[color:var(--royal)]/40 blur-[140px]" />

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
              — Whispered Love
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-5xl font-light leading-tight md:text-6xl">
              Words from the <em className="italic text-[color:var(--gold)]">families</em> we've held.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {T.map((t, i) => (
            <Reveal key={t.couple} delay={i * 0.1}>
              <div className="relative h-full rounded-[2px] border border-[color:var(--ivory)]/10 bg-[color:var(--ivory)]/[0.04] p-10 backdrop-blur transition-all duration-700 hover:-translate-y-1 hover:bg-[color:var(--ivory)]/[0.07]">
                <Quote className="h-8 w-8 text-[color:var(--gold)]/70" strokeWidth={1.2} />
                <p className="mt-6 font-serif text-xl font-light italic leading-relaxed text-[color:var(--ivory)]/90 md:text-2xl">
                  "{t.quote}"
                </p>
                <div className="mt-10 border-t border-[color:var(--ivory)]/10 pt-5">
                  <div className="font-script text-2xl text-[color:var(--gold)]">{t.couple}</div>
                  <div className="mt-1 font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--ivory)]/60">
                    {t.place}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
