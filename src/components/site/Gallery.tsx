import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { GALLERY_ITEMS as ALL, GALLERY_CATEGORIES as CATS } from "@/data/index";

export function Gallery() {
  const [active, setActive] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = active === "All" ? ALL : ALL.filter((x) => x.cat === active);

  return (
    <section id="gallery" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--royal)]">
                — Editorial Gallery
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-serif text-5xl font-light leading-tight text-[color:var(--navy)] md:text-6xl">
                Frames of <em className="italic text-[color:var(--royal)]">forever</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 font-sans text-[10px] uppercase tracking-[0.32em] transition-all ${
                    active === c
                      ? "border-[color:var(--navy)] bg-[color:var(--navy)] text-[color:var(--ivory)]"
                      : "border-[color:var(--navy)]/20 text-[color:var(--navy)]/70 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <button
                onClick={() => setLightbox(it.src)}
                className="group mb-5 block w-full overflow-hidden rounded-[2px] luxe-shadow"
              >
                <div className={`relative w-full overflow-hidden ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img
                    src={it.src}
                    alt={it.cat}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute bottom-5 left-5 translate-y-3 font-script text-2xl text-[color:var(--ivory)] opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                    {it.cat}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[color:var(--navy)]/90 p-6 backdrop-blur-md"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 rounded-full border border-[color:var(--ivory)]/30 p-3 text-[color:var(--ivory)]"
            >
              <X className="h-4 w-4" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[88vh] max-w-[92vw] rounded-[2px] luxe-shadow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
