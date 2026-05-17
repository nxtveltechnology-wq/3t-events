import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Send } from "lucide-react";
import logo from "@/assets/3T Logo.png";
import { FOOTER_DATA } from "@/data/index";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--navy)] text-[color:var(--ivory)]">
      <div className="absolute inset-0 noise opacity-30" />
      <div className="absolute -bottom-40 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-[100%] bg-[color:var(--royal)]/40 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1300px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.8fr_1fr_1fr_1.5fr] md:px-10">

        {/* ── Col 1: Logo + tagline + description + newsletter ── */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Logo — original colors, left aligned on desktop */}
          <img
            src={logo}
            alt="3T Events — The Talent Troop Experiences"
            className="h-24 w-auto object-contain"
          />
          {/* Tagline — simple clean text, brand cyan */}
          <p className="mt-4 font-sans text-sm font-medium tracking-wide text-[color:var(--gold)]">
            {FOOTER_DATA.tagline}
          </p>
          <p className="mt-4 max-w-sm font-sans text-sm font-light leading-relaxed text-[color:var(--ivory)]/70">
            {FOOTER_DATA.description}
          </p>

          <form className="mt-8 flex w-full max-w-sm items-center gap-2 border-b border-[color:var(--ivory)]/20 pb-2 transition-colors focus-within:border-[color:var(--gold)]">
            <input
              type="email"
              placeholder="Your email — for our private journal"
              className="w-full bg-transparent font-sans text-sm text-[color:var(--ivory)] placeholder-[color:var(--ivory)]/40 outline-none"
            />
            <button type="submit" className="text-[color:var(--ivory)]/50 transition-colors hover:text-[color:var(--gold)]">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* ── Col 2: Explore links ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-sans text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
            Explore
          </div>
          <ul className="mt-6 space-y-3 font-serif text-base text-[color:var(--ivory)]/80">
            {[
              ["About", "/about"],
              ["Services", "/services"],
              ["Wedding Stories", "/stories"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <Link to={h} className="underline-anim hover:text-[color:var(--gold)]">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Contact details + socials ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-sans text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
            Contact
          </div>
          <ul className="mt-6 space-y-3 font-sans text-sm font-light text-[color:var(--ivory)]/80">
            <li>{FOOTER_DATA.locations}</li>
            <li>
              <a href={`mailto:${FOOTER_DATA.email}`} className="hover:text-[color:var(--gold)] transition-colors">
                {FOOTER_DATA.email}
              </a>
            </li>
            <li>
              <a href={`tel:${FOOTER_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-[color:var(--gold)] transition-colors">
                {FOOTER_DATA.phone}
              </a>
            </li>
          </ul>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ivory)]/20 text-[color:var(--ivory)]/70 transition-all hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] hover:bg-[color:var(--gold)]/10"
              >
                <I className="h-4 w-4" strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Col 4: Map ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-sans text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
            Our Location
          </div>
          <div className="mt-6 w-full max-w-[280px] md:max-w-none overflow-hidden rounded-lg border border-[color:var(--ivory)]/15 shadow-sm">
            <iframe
              title="3T Events Location"
              src={FOOTER_DATA.mapEmbedUrl}
              width="100%"
              height="200"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-[color:var(--ivory)]/10">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-3 px-6 py-6 font-sans text-[11px] uppercase tracking-[0.3em] text-[color:var(--ivory)]/50 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} 3T Events — The Talent Troop Experiences</span>
          <span>Crafted with quiet love.</span>
        </div>
      </div>
    </footer>
  );
}
