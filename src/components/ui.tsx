import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons";

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

/**
 * Botão/CTA verde do WhatsApp.
 * Ajuste tamanho, padding e sombra pela prop `className`.
 */
export function WaButton({
  href,
  children,
  className = "",
  iconSize = 18,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  iconSize?: number;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[10px] rounded-full bg-wa font-display font-extrabold uppercase tracking-[0.04em] text-wa-ink no-underline ${className}`}
    >
      <WhatsAppIcon size={iconSize} fill="#06210f" />
      {children}
    </a>
  );
}
