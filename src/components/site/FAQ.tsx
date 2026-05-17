import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { FAQS } from "@/data/index";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-[color:var(--ivory)] py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--royal)]">
              — Knowledge
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-[color:var(--navy)] md:text-5xl">
              Frequently Asked <em className="italic text-[color:var(--royal)]">Questions</em>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div 
                  className={`cursor-pointer rounded-2xl border transition-colors duration-300 ${
                    isOpen 
                      ? "border-[color:var(--royal)]/30 bg-white shadow-lg" 
                      : "border-[color:var(--navy)]/10 bg-white/50 hover:border-[color:var(--navy)]/20 hover:bg-white"
                  }`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between p-6 md:p-8">
                    <h3 className={`font-serif text-lg md:text-xl transition-colors ${isOpen ? 'text-[color:var(--royal)]' : 'text-[color:var(--navy)]'}`}>
                      {faq.q}
                    </h3>
                    <div className={`ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? 'border-[color:var(--royal)]/20 bg-[color:var(--royal)]/5 text-[color:var(--royal)]' : 'border-[color:var(--navy)]/10 text-[color:var(--navy)]/60'}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </div>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-8 pt-2 font-sans text-[15px] font-light leading-relaxed text-[color:var(--navy)]/70 md:px-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
