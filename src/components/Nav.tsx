"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/site";
import { waDefaultLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 no-underline">
      <Image
        src="/tiger-logo.jpeg"
        alt="Tiger Gesso"
        width={46}
        height={46}
        className="h-[46px] w-[46px] rounded-[9px] border border-white/10 object-cover"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[16px] font-extrabold tracking-[0.18em] text-fg-strong">
          TIGER GESSO
        </span>
        <span className="mt-[3px] font-display text-[8.5px] font-medium tracking-[0.34em] text-muted-3">
          SOLUÇÕES EM GESSO
        </span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/[0.07] bg-[rgba(11,13,16,0.72)] px-[clamp(18px,5vw,64px)] py-[14px] backdrop-blur-[14px]">
        <Logo />

        <div className="flex items-center gap-[30px]">
          <div className="hidden gap-[26px] lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#c4c9d0] no-underline transition-colors hover:text-fg-strong"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={waDefaultLink()}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full bg-wa px-[18px] py-[11px] font-display text-[12.5px] font-bold uppercase tracking-[0.04em] text-wa-ink no-underline shadow-[0_6px_20px_rgba(37,211,102,0.28)] lg:inline-flex"
          >
            <WhatsAppIcon size={16} fill="#06210f" />
            Orçamento
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[10px] border border-white/[0.14] bg-white/5 lg:hidden"
          >
            <span className="block h-[2px] w-5 rounded-sm bg-fg" />
            <span className="block h-[2px] w-5 rounded-sm bg-fg" />
            <span className="block h-[2px] w-5 rounded-sm bg-fg" />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-[55] flex-col bg-[rgba(8,10,13,0.97)] px-[clamp(22px,7vw,48px)] pb-10 pt-[90px] backdrop-blur-[8px] ${
          open ? "flex" : "hidden"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
          className="absolute right-[clamp(18px,5vw,48px)] top-[18px] h-11 w-11 rounded-[10px] border border-white/[0.14] bg-white/5 text-[22px] leading-none text-fg"
        >
          ✕
        </button>

        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="border-b border-white/[0.08] py-4 font-display text-[22px] font-bold uppercase tracking-[0.04em] text-fg-strong no-underline"
          >
            {l.label}
          </a>
        ))}

        <a
          href={waDefaultLink()}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="mt-[26px] inline-flex items-center justify-center gap-[10px] rounded-full bg-wa p-4 font-display text-[15px] font-extrabold uppercase tracking-[0.04em] text-wa-ink no-underline"
        >
          <WhatsAppIcon size={18} fill="#06210f" />
          Pedir orçamento
        </a>
      </div>
    </>
  );
}
