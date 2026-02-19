import { useEffect, useRef } from "react";

/**
 * Signature moment: a subtle pointer-following glow field in the hero background.
 * Respects prefers-reduced-motion (falls back to a static glow).
 */
export function HeroGlowField() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--glow-x", `${x}%`);
      el.style.setProperty("--glow-y", `${y}%`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-hero opacity-[0.18]" />

      {/* Glow that tracks pointer */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px circle at var(--glow-x, 30%) var(--glow-y, 30%), hsl(var(--primary) / 0.26), transparent 60%)",
        }}
      />

      {/* Secondary ambient glow */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(520px circle at 70% 20%, hsl(var(--hero-to) / 0.22), transparent 62%)",
        }}
      />
    </div>
  );
}
