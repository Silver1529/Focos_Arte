"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Envolve um bloco e o revela (fade + slide up) quando entra na viewport.
 * Substitui o IntersectionObserver que o site original aplicava a [data-reveal].
 * O próprio wrapper é o elemento animado, então pode ser usado como item de grid.
 */
export default function Reveal({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`tg-reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
