import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  children: ReactNode;
};

export function MagneticButton({ variant = "primary", className = "", children, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const mx = ((x / r.width) - 0.5) * 14;
    const my = ((y / r.height) - 0.5) * 14;
    el.style.setProperty("--mx", `${(x / r.width) * 100}%`);
    el.style.setProperty("--my", `${(y / r.height) * 100}%`);
    el.style.transform = `translate(${mx}px, ${my}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "magnetic-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-sans text-[11px] uppercase tracking-[0.32em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--navy)] text-[color:var(--ivory)] hover:bg-[color:var(--royal)] luxe-shadow"
      : "border border-[color:var(--navy)]/30 text-[color:var(--navy)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]";

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
