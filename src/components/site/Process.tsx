import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { PROCESS_STEPS as STEPS } from "@/data/index";

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const py1 = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const py2 = useTransform(scrollYProgress, [0, 1], [60, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[color:var(--navy)] py-32 md:py-44">

      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[color:var(--royal)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[color:var(--gold)]/10 blur-[100px]" />


      <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">

        {/* ── Header ── */}
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-[color:var(--gold)]/70">
              — The Journey
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-white md:text-6xl">
              From first hello{" "}
              <em className="italic text-[color:var(--gold)]/80">to forever.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] font-light leading-relaxed text-white/55">
              Six beautifully choreographed phases — each one bringing your vision closer to reality.
            </p>
          </Reveal>
        </div>

        {/* ── Steps grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className={`group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${s.accent} p-8 shadow-xl backdrop-blur-sm`}
                >
                  {/* Subtle inner glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--gold)]/8 blur-2xl" />

                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between">
                    <span className="font-script text-5xl leading-none text-[color:var(--gold)]/60">
                      {s.n}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 backdrop-blur-sm">
                      <Icon className="h-4 w-4" strokeWidth={1.3} />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-10 bg-[color:var(--gold)]/30 transition-all duration-500 group-hover:w-20 group-hover:bg-[color:var(--gold)]/60" />

                  {/* Text */}
                  <h3 className="font-serif text-2xl font-light text-white">{s.t}</h3>
                  <p className="font-sans text-[13px] font-light leading-relaxed text-white/60">{s.d}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Bottom accent line ── */}
        <Reveal delay={0.4}>
          <div className="mt-20 flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-white/10" />
            <span className="font-script text-2xl text-[color:var(--gold)]/50">crafted with love</span>
            <div className="h-px w-24 bg-white/10" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
