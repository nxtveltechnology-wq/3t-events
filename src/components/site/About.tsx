import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import about from "@/assets/about.jpg";
import g2 from "@/assets/g2.jpg";
import { Reveal } from "./Reveal";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden py-32 md:py-40">
      {/* Soft feather gradient to seamlessly blend the white wave from the Hero section into the background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent" />

      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-24">
        {/* Image collage */}
        <div className="relative h-[560px] md:h-[640px]">
          <motion.div
            style={{ y: y1 }}
            className="absolute left-0 top-0 h-[70%] w-[68%] overflow-hidden rounded-[2px] luxe-shadow"
          >
            <img src={about} alt="Luxury wedding decor" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 right-0 h-[58%] w-[56%] overflow-hidden rounded-[2px] luxe-shadow"
          >
            <img src={g2} alt="Bride twirling" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <div className="pointer-events-none absolute -bottom-6 left-12 font-script text-7xl text-[color:var(--gold)]/70 md:text-8xl">
            est. 2014
          </div>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--royal)]">
              — About 3T Events Experiences
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] text-[color:var(--navy)] md:text-[54px]">
              We make your dreams
              <br />
              <em className="italic text-[color:var(--royal)]">come alive.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg font-sans text-base font-light leading-relaxed text-[color:var(--navy)]/75 md:text-[17px]">
              We firmly believe that your special day should be celebrated like in the fairy tales—magical &amp; memorable. Born out of passion, <strong>3T Events - The Talent Troop Experiences</strong> is your answer to stress-free wedding planning.
              <br /><br />
              As boutique wedding planners &amp; consultants in India, we provide contemporary, out-of-the-box bespoke wedding ideas &amp; hassle-free hands-on management. We bring a fresh perspective and an innovative approach, always keeping in mind the traditional etiquette of every culture.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-[color:var(--navy)]/10 py-8">
              {[
                ["500+", "Events Crafted"],
                ["32", "Destinations"],
                ["10y", "Of Excellence"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-4xl text-[color:var(--navy)] md:text-5xl">{n}</div>
                  <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--royal)]">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-8 font-script text-3xl text-[color:var(--royal)]">
              — Dharm &amp; Team 3T Events
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
