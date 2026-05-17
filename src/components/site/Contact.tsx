import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import petal from "@/assets/petal.png";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Your story has begun. We'll be in touch within 24 hours.");
    }, 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-40">
      <img src={petal} alt="" aria-hidden className="float-slow pointer-events-none absolute -left-12 top-20 w-56 opacity-60" style={{ ["--r" as never]: "-12deg" }} />
      <img src={petal} alt="" aria-hidden className="float-med pointer-events-none absolute -right-16 bottom-10 w-72 opacity-50" style={{ ["--r" as never]: "18deg" }} />

      <div className="mx-auto max-w-[920px] px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--royal)]">— Begin Your Story</span>
            <h2 className="mt-6 font-serif text-5xl font-light leading-tight text-[color:var(--navy)] md:text-6xl">
              Tell us about your <em className="italic text-[color:var(--royal)]">forever</em>.
            </h2>
            <p className="mx-auto mt-6 max-w-lg font-sans text-base font-light text-[color:var(--navy)]/70">
              Share a few details and our atelier will reach out with a private consultation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="relative mt-16 rounded-[2px] border border-[color:var(--gold)]/30 bg-[color:var(--ivory)]/80 p-10 luxe-shadow backdrop-blur md:p-14"
          >
            {/* corner ornaments */}
            <span className="pointer-events-none absolute left-3 top-3 h-8 w-8 border-l border-t border-[color:var(--gold)]/60" />
            <span className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r border-t border-[color:var(--gold)]/60" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[color:var(--gold)]/60" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 border-b border-r border-[color:var(--gold)]/60" />

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              <Field label="Your Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Event Type" name="type" placeholder="Wedding, Sangeet, Reception…" />
              <Field label="Event Date" name="date" type="date" />
              <Field label="Estimated Budget" name="budget" placeholder="₹ 50L — 5Cr" />
              <div className="md:col-span-2">
                <Field label="Tell us your story" name="message" textarea />
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-5 md:flex-row">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.32em] text-[color:var(--navy)]/70 underline-anim hover:text-[color:var(--gold)]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Quick Connect
              </a>
              <MagneticButton type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send Inquiry"}
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean;
}) {
  const cls =
    "peer w-full border-0 border-b border-[color:var(--navy)]/20 bg-transparent pb-3 pt-5 font-sans text-[15px] text-[color:var(--navy)] placeholder-transparent outline-none transition-all focus:border-[color:var(--gold)]";
  return (
    <label className="group relative block">
      {textarea ? (
        <textarea name={name} required={required} placeholder={label} rows={3} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder ?? label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-0 top-2 font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--royal)] transition-all">
        {label}
      </span>
    </label>
  );
}
