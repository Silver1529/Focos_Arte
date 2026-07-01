import type { ReactNode } from "react";

/** Rótulo pequeno em maiúsculas acima dos títulos de seção. */
export function SectionEyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-display text-[12px] font-bold uppercase tracking-[0.32em] text-faint ${className}`}
    >
      {children}
    </div>
  );
}
