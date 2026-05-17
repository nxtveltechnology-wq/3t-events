import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "./MagneticButton";

import { HERO_BANNERS as BANNERS } from "@/data/index";

// Each slide stays visible for 4s, crossfade takes 1.2s
const SLIDE_DURATION = 4000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const fade = useTransform(scrollY, [0, 380], [1, 0]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % BANNERS.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative h-[90svh] min-h-[500px] w-full overflow-hidden">

      {/* ── Slideshow background with Ken Burns zoom ── */}
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence>
          {BANNERS.map((src, i) =>
            i === current ? (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.0 }}
                animate={{ opacity: 1, scale: 1.08 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{
                  opacity: { duration: 1.2, ease: "easeInOut" },
                  scale: {
                    duration: (SLIDE_DURATION / 1000) + 2,
                    ease: [0.0, 0.0, 0.2, 1],
                  },
                }}
              >
                <img
                  src={src}
                  alt={`3T Events banner ${i + 1}`}
                  className="h-full w-full object-cover object-center"
                  draggable={false}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Minimal top vignette — only for nav text readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-10" />
      </motion.div>


      {/* ── Slide indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-[3px] overflow-hidden rounded-full transition-all duration-500"
            style={{ width: i === current ? 32 : 16 }}
          >
            <span className="absolute inset-0 rounded-full bg-white/30" />
            {i === current && (
              <motion.span
                className="absolute inset-0 rounded-full bg-[color:var(--gold)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </button>
        ))}
      </div>
      {/* ── Decorative wedding border at bottom — multi-wave blend ── */}
      <div className="absolute bottom-0 inset-x-0 z-30 leading-none overflow-visible" style={{ height: "160px" }}>

        {/* Soft gradient blend from image → white behind all waves */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.75) 60%, white 100%)"
        }} />

        {/* Wave 1 — farthest back, semi-transparent gold tint */}
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path
            d="M0,160 L0,100 Q180,55 360,100 Q540,145 720,100 Q900,55 1080,100 Q1260,145 1440,100 L1440,160 Z"
            fill="rgba(255,255,255,0.4)"
          />
          <path
            d="M0,100 Q180,55 360,100 Q540,145 720,100 Q900,55 1080,100 Q1260,145 1440,100"
            fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.35"
          />
        </svg>

        {/* Wave 2 — mid layer */}
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path
            d="M0,160 L0,115 Q180,75 360,115 Q540,155 720,115 Q900,75 1080,115 Q1260,155 1440,115 L1440,160 Z"
            fill="rgba(255,255,255,0.65)"
          />
          <path
            d="M0,115 Q180,75 360,115 Q540,155 720,115 Q900,75 1080,115 Q1260,155 1440,115"
            fill="none" stroke="#C9A84C" strokeWidth="1.8" opacity="0.55"
          />
        </svg>

        {/* Wave 3 — front, solid white with gold line */}
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path
            d="M0,160 L0,130 Q180,90 360,130 Q540,170 720,130 Q900,90 1080,130 Q1260,170 1440,130 L1440,160 Z"
            fill="white"
          />
          <path
            d="M0,130 Q180,90 360,130 Q540,170 720,130 Q900,90 1080,130 Q1260,170 1440,130"
            fill="none" stroke="#C9A84C" strokeWidth="2.5" opacity="0.9"
          />
          {/* Diamond gems on front wave */}
          {[0, 360, 720, 1080, 1440].map((x) => (
            <g key={x} transform={`translate(${x}, 130)`}>
              <rect x="-5" y="-5" width="10" height="10" fill="#C9A84C" opacity="0.9" transform="rotate(45)" />
              <circle cx="0" cy="0" r="2" fill="white" opacity="0.8" />
            </g>
          ))}
        </svg>

        {/* Floating flowers above the front wave */}
        {[
          { x: "12.5%", delay: 0, color: "#f9a8d4" },
          { x: "37.5%", delay: 0.4, color: "#fde68a" },
          { x: "62.5%", delay: 0.2, color: "#f9a8d4" },
          { x: "87.5%", delay: 0.6, color: "#fde68a" },
        ].map((flower, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: flower.x, bottom: "28px" }}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: flower.delay, ease: "easeInOut" }}
          >
            <svg width="40" height="40" viewBox="0 0 44 44" className="-translate-x-1/2">
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <ellipse
                  key={angle}
                  cx={22 + 9 * Math.cos((angle * Math.PI) / 180)}
                  cy={22 + 9 * Math.sin((angle * Math.PI) / 180)}
                  rx="6" ry="4"
                  fill={flower.color}
                  opacity="0.92"
                  transform={`rotate(${angle}, ${22 + 9 * Math.cos((angle * Math.PI) / 180)}, ${22 + 9 * Math.sin((angle * Math.PI) / 180)})`}
                />
              ))}
              <circle cx="22" cy="22" r="5" fill="#C9A84C" opacity="0.95" />
              <circle cx="22" cy="22" r="2.5" fill="#fff" opacity="0.8" />
            </svg>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
