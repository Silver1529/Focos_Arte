"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { ProjectPhoto } from "@/lib/site";

function MaximizeIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

export default function ProjectGallery({
  photos,
}: {
  photos: readonly ProjectPhoto[];
}) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;
  const current = index === null ? null : photos[index];

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-[14px] lg:auto-rows-[220px] lg:grid-cols-4 lg:[grid-auto-flow:dense]">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ampliar: ${p.alt}`}
            className={`group relative cursor-pointer overflow-hidden rounded-[14px] border border-white/[0.08] bg-surface p-0 ${p.span ?? ""}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes={
                p.span?.includes("col-span-2")
                  ? "50vw"
                  : "(max-width: 1024px) 50vw, 25vw"
              }
              quality={90}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end gap-2 p-3 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="mt-[2px] flex-none text-white/80">
                <MaximizeIcon />
              </span>
              <span className="line-clamp-2 text-[12px] font-medium leading-tight text-white/95">
                {p.alt}
              </span>
            </span>
          </button>
        ))}
      </div>

      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-4 bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[20px] leading-none text-white"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[26px] leading-none text-white sm:left-6"
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[74vh] w-full max-w-[1100px]"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="90vw"
              quality={90}
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[26px] leading-none text-white sm:right-6"
          >
            ›
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-w-[720px] items-center justify-center gap-3 text-center"
          >
            <span className="text-[13.5px] text-white/85">{current.alt}</span>
            <span className="flex-none text-[12px] text-white/40">
              {index + 1} / {photos.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
