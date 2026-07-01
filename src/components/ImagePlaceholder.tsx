import type { CSSProperties } from "react";

/**
 * Placeholder de imagem coerente com o tema dark.
 * Ocupa o lugar das fotos reais (equipe, obras) que serão adicionadas
 * depois — via upload no admin (Fase 3) ou trocando por <Image />.
 */
export default function ImagePlaceholder({
  label,
  className = "",
  radius = 14,
  style,
}: {
  label: string;
  className?: string;
  radius?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[10px] border border-white/[0.08] px-4 text-center ${className}`}
      style={{
        borderRadius: radius,
        background: "linear-gradient(160deg,#15191f,#0d1014)",
        ...style,
      }}
    >
      <svg
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a5058"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <circle cx="8.5" cy="8.5" r="1.6" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="font-body text-[12px] leading-snug text-muted-3">
        {label}
      </span>
    </div>
  );
}
