"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Animação de abertura do site — roda a cada visita.
 *
 * As placas do telhado da marca entram girando no espaço 3D, se encaixam,
 * dão lugar ao símbolo real e a cortina abre revelando a página. Toda a
 * coreografia vive em globals.css (`.intro*`); aqui ficam só o tempo, o
 * travamento do scroll e o atalho para pular.
 *
 * Os tempos abaixo precisam bater com os `animation-delay` do CSS.
 */
const INTRO_MS = 2400;
/** Versão curta para quem pediu menos movimento no sistema. */
const INTRO_REDUCED_MS = 600;
/** Fade de saída quando o visitante interage antes do fim. */
const SKIP_MS = 350;

type Phase = "playing" | "closing" | "done";

export default function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>("playing");

  // ciclo normal + atalho: qualquer interação pula a animação
  useEffect(() => {
    if (phase !== "playing") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const timer = window.setTimeout(
      () => setPhase("done"),
      reduced ? INTRO_REDUCED_MS : INTRO_MS,
    );

    const skip = () => setPhase("closing");
    const events = ["pointerdown", "keydown", "wheel", "touchmove"] as const;
    events.forEach((e) => window.addEventListener(e, skip, { passive: true }));

    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, skip));
    };
  }, [phase]);

  // espera o fade de saída terminar antes de desmontar
  useEffect(() => {
    if (phase !== "closing") return;
    const timer = window.setTimeout(() => setPhase("done"), SKIP_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  // trava o scroll só enquanto a intro cobre a página
  useEffect(() => {
    document.documentElement.classList.toggle("intro-locked", phase !== "done");
    return () => document.documentElement.classList.remove("intro-locked");
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`intro${phase === "closing" ? " intro--closing" : ""}`}
      aria-hidden
    >
      <div className="intro__curtain intro__curtain--top" />
      <div className="intro__curtain intro__curtain--bottom" />

      <div className="intro__stage">
        <div className="intro__roof">
          <span className="intro__beam intro__beam--left" />
          <span className="intro__beam intro__beam--right" />

          <div className="intro__grid">
            <span className="intro__square" />
            <span className="intro__square" />
            <span className="intro__square" />
            <span className="intro__square" />
          </div>

          <Image
            src="/foco-arte-symbol.png"
            alt=""
            width={637}
            height={190}
            className="intro__symbol"
            priority
          />
        </div>

        <div className="intro__wordmark tg-metal">Foco Arte</div>
        <div className="intro__tagline">Drywall · Forros · Divisórias</div>
        <span className="intro__sweep" />
      </div>
    </div>
  );
}
