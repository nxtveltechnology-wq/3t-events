import petal from "@/assets/petal.png";

const PETALS = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 28 + Math.random() * 56,
  duration: 18 + Math.random() * 22,
  delay: -Math.random() * 30,
  dx: (Math.random() - 0.5) * 200,
  opacity: 0.25 + Math.random() * 0.45,
}));

export function FloatingPetals() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {PETALS.map((p) => (
        <img
          key={p.id}
          src={petal}
          alt=""
          className="petal-drift absolute -top-32 select-none blur-[0.5px]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--dx" as never]: `${p.dx}px`,
          }}
        />
      ))}
    </div>
  );
}
