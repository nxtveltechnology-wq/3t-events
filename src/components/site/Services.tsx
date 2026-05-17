import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ALL_EVENTS, SERVICES } from "@/data/index";

export function Services() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="services" className="relative overflow-hidden py-32 md:py-40">

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:var(--ivory)] via-[color:var(--cream)] to-[color:var(--ivory)]" />

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">

        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--royal)]">
              — What We Create
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-5xl font-light leading-tight text-[color:var(--navy)] md:text-6xl">
              Crafted for <em className="italic text-[color:var(--royal)]">every</em> occasion.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-[15px] font-light leading-relaxed text-[color:var(--navy)]/65">
              Weddings are our soul — but extraordinary events are our expertise. From the grandest royal wedding to an intimate corporate gala, we bring the same obsessive detail to every celebration.
            </p>
          </Reveal>
        </div>

      </div> {/* Close the constrained max-w-[1300px] container so the next section can be full-width */}

      {/* ── All Event types — Full Width Parallax Sections with Alternating Alignments ── */}
      <div className="flex w-full flex-col">
        {ALL_EVENTS.map((evt, i) => {
          const Icon = evt.icon;
          const isLeft = i % 2 === 0;

          return (
            <EventCard key={evt.id} evt={evt} i={i} Icon={Icon} isLeft={isLeft} />
          );
        })}
      </div>

      <div className="relative mx-auto max-w-[1300px] px-6 pt-32 md:px-10">

        {/* ── Divider ── */}
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-[color:var(--navy)]/10" />
          <span className="font-script text-3xl text-[color:var(--royal)]/70">How We Create</span>
          <div className="h-px flex-1 bg-[color:var(--navy)]/10" />
        </div>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.05}>
              <div className="group relative h-64 w-full overflow-hidden rounded-xl shadow-lg md:h-72">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="font-serif text-xl font-light leading-snug text-white md:text-2xl drop-shadow-md">
                    {s.title}
                  </h3>
                  <div className="mt-4 h-px w-8 bg-[color:var(--gold)]/80 transition-all duration-500 group-hover:w-16 group-hover:bg-[color:var(--gold)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── View All Services CTA ── */}
        <Reveal delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--navy)]/20 bg-[color:var(--navy)] px-8 py-3.5 font-sans text-[13px] uppercase tracking-[0.3em] text-white shadow-lg transition-all duration-300 hover:bg-[color:var(--royal)] hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function EventCard({ evt, i, Icon, isLeft }: { evt: any; i: number; Icon: any; isLeft: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative flex min-h-[85vh] w-full items-center overflow-hidden">
      
      {/* ── Parallax Background ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%] w-full origin-top">
        <img 
          src={evt.bgImg} 
          alt={evt.title} 
          className="h-full w-full object-cover opacity-90" 
        />
        {/* Base darkening for contrast */}
        <div className="absolute inset-0 bg-[color:var(--navy)]/30" />
        
        {/* Directional fade restricted to the content side */}
        <div className={`absolute inset-0 hidden md:block ${isLeft ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[color:var(--navy)] from-10% via-[color:var(--navy)]/80 via-40% to-transparent to-60%`} />
        
        {/* Mobile fade (bottom to top) */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[color:var(--navy)] from-20% via-[color:var(--navy)]/80 via-60% to-transparent" />
      </motion.div>

      {/* ── Content Container (Full Width) ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] px-6 py-20 md:px-12">
        
        {/* Seamless Editorial Text Overlay */}
        <div className={`flex w-full flex-col text-left md:w-[480px] lg:w-[550px] pt-32 md:pt-0 ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
           
           {/* Eyebrow & Icon */}
           <div className="mb-6 flex items-center gap-4">
              <Icon className="h-5 w-5 text-[color:var(--gold)]/80" strokeWidth={1.5} />
              <div className="h-px w-10 bg-[color:var(--gold)]/40" />
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--gold)]/80">
                {evt.label}
              </span>
           </div>
           
           {/* Title */}
           <h3 className="font-serif text-5xl font-light leading-tight text-white md:text-[4.5rem]">
             {evt.title}
           </h3>
           
           {/* Description */}
           <p className="mt-8 font-sans text-[16px] font-light leading-loose text-white/75">
             {evt.desc}
           </p>
           
           {/* Tags */}
           <div className="mt-10 flex flex-wrap gap-x-4 gap-y-3">
             {evt.tags.map((tag: string) => (
               <div key={tag} className="flex items-center rounded-full bg-[color:var(--gold)]/20 px-4 py-1.5 border border-[color:var(--gold)]/30 backdrop-blur-sm transition-all hover:bg-[color:var(--gold)]/30">
                 <div className="mr-2 h-[4px] w-[4px] rounded-full bg-[color:var(--gold)]" />
                 <span className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[color:var(--gold)]">
                   {tag}
                 </span>
               </div>
             ))}
           </div>

           {/* Sleek View More Link / Button */}
           <div className="mt-14">
             <Link 
               to="/events/$eventId" 
               params={{ eventId: evt.id }} 
               className="group inline-flex w-max items-center justify-center gap-4 rounded-full bg-[color:var(--gold)] px-8 py-3.5 transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
             >
               <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-black transition-colors">
                 Explore {evt.title}
               </span>
               <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
             </Link>
           </div>
           
        </div>
      </div>
    </div>
  );
}
