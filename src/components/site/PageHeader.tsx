import { type ReactNode } from "react";

export function PageHeader({
  eyebrow, title, italic, subtitle,
}: { eyebrow: string; title: string; italic?: string; subtitle?: string }) {
  return (
    <section className="relative pb-16 pt-40 md:pb-24 md:pt-48">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
        <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--royal)]">— {eyebrow}</span>
        <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] text-[color:var(--navy)] md:text-7xl">
          {title} {italic && <em className="italic text-[color:var(--royal)]">{italic}</em>}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-xl font-sans text-base font-light text-[color:var(--navy)]/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function PageWrap({ children }: { children: ReactNode }) {
  return <div className="relative z-[2]">{children}</div>;
}
