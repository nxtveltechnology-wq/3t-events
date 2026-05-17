import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { WHY_US_VALUES as VALUES } from "@/data/index";

export function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const py1 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const py2 = useTransform(scrollYProgress, [0, 1], [40, -30]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[color:var(--ivory)] py-32 md:py-44">

      {/* Subtle gradient overlay so center content is clear */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,color-mix(in_oklab,var(--ivory)_95%,transparent),transparent)]" />

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">

        {/* ── Header ── */}
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-[color:var(--royal)]">
              — Why Choose Us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-[color:var(--navy)] md:text-6xl">
              The difference{" "}
              <em className="italic text-[color:var(--royal)]">you'll feel.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] font-light leading-relaxed text-[color:var(--navy)]/60">
              Excellence is not a claim — it's a practice. Here's what makes 3T Events different.
            </p>
          </Reveal>
        </div>

        {/* ── Values grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.012 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-[color:var(--navy)]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[color:var(--royal)] to-[color:var(--gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--royal)]/20 bg-[color:var(--cream)] text-[color:var(--royal)] transition-colors group-hover:border-[color:var(--royal)]/50 group-hover:bg-[color:var(--royal)]/10">
                      <Icon className="h-5 w-5" strokeWidth={1.3} />
                    </div>
                    <span className="font-script text-4xl text-[color:var(--navy)]/15 transition-colors group-hover:text-[color:var(--royal)]/25">
                      {v.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-light text-[color:var(--navy)]">{v.title}</h3>
                    <div className="mt-2 h-px w-8 bg-[color:var(--royal)]/30 transition-all duration-500 group-hover:w-16 group-hover:bg-[color:var(--royal)]" />
                  </div>
                  <p className="font-sans text-[13px] font-light leading-relaxed text-[color:var(--navy)]/60">{v.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Bottom quote ── */}
        <Reveal delay={0.5}>
          <div className="mt-20 text-center">
            <div className="mx-auto mb-6 h-px w-24 bg-[color:var(--navy)]/15" />
            <blockquote className="font-script text-3xl text-[color:var(--royal)] md:text-4xl">
              "We don't just plan events — we craft memories that outlive the moment."
            </blockquote>
            <div className="mt-4 font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--navy)]/40">
              — Dharm &amp; Team 3T Events
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
