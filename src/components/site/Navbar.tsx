import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/3T Logo.png";

const LEFT_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
] as const;

const RIGHT_LINKS = [
  { to: "/testimonials", label: "Testimonials" },
  { to: "/stories", label: "Stories" },
  { to: "/contact", label: "Contact Us" },
] as const;

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

// On home and events pages: white (dark top)
// On other pages: navy (light background)
const linkCls = (isDarkTop: boolean) =>
  `underline-anim font-sans text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors ${
    !isDarkTop
      ? "text-[color:var(--navy)] hover:text-[color:var(--royal)] drop-shadow-sm"
      : "text-white hover:text-[color:var(--gold)] drop-shadow-md"
  }`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isDarkTop = location.pathname === "/" || location.pathname.startsWith("/events");

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        {/* Glass + feather gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
        <nav className="relative mx-auto flex max-w-[1400px] items-center px-6 py-2 md:px-10">

          {/* ── Left links ── */}
          <ul className="hidden flex-1 items-center justify-end gap-8 lg:flex">
            {LEFT_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={linkCls(isDarkTop)}
                  activeProps={{ className: "!text-[color:var(--gold)]" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Center logo ── */}
          <Link
            to="/"
            className="group mx-6 shrink-0 transition-opacity hover:opacity-80"
          >
            <img
              src={logo}
              alt="3T Events — The Talent Troop Experiences"
              className="h-20 md:h-28 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* ── Right links ── */}
          <ul className="hidden flex-1 items-center justify-start gap-8 lg:flex">
            {RIGHT_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={linkCls(isDarkTop)}
                  activeProps={{ className: "!text-[color:var(--gold)]" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Mobile hamburger ── */}
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`rounded-full border p-3 backdrop-blur transition-colors ${
                !isDarkTop
                  ? "border-[color:var(--navy)]/15 bg-[color:var(--ivory)]/70 text-[color:var(--navy)]"
                  : "border-white/30 bg-white/10 text-white"
              }`}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[color:var(--cream)]/98 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-sans font-bold uppercase tracking-widest text-xl text-[color:var(--navy)]">3T Events</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[color:var(--navy)]/20 p-3 text-[color:var(--navy)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-7 px-6">
              {ALL_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-serif text-4xl text-[color:var(--navy)] hover:text-[color:var(--gold)]"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
