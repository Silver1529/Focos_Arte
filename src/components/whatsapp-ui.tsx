"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { whatsapps } from "@/lib/site";
import { DEFAULT_WA_MESSAGE, waLinkFor } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type WhatsAppContextValue = {
  /** Abre o pop-up de escolha com a mensagem informada. */
  open: (message?: string) => void;
};

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

export function useWhatsApp(): WhatsAppContextValue {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) {
    throw new Error("useWhatsApp precisa estar dentro de <WhatsAppProvider>");
  }
  return ctx;
}

/** Provider global: guarda a mensagem atual e renderiza o pop-up de escolha. */
export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const isOpen = message !== null;

  const open = useCallback((msg?: string) => {
    setMessage(msg ?? DEFAULT_WA_MESSAGE);
  }, []);

  const close = useCallback(() => setMessage(null), []);

  // Fecha com ESC e trava o scroll do body quando aberto.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <WhatsAppContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Escolha um contato de WhatsApp"
          onClick={close}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-[rgba(8,10,13,0.72)] p-4 backdrop-blur-[6px] sm:items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[420px] rounded-[18px] border border-white/[0.1] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            style={{ background: "linear-gradient(165deg,#161a20,#0f1216)" }}
          >
            <div className="mb-1 flex items-start justify-between gap-3">
              <div>
                <h3 className="m-0 font-display text-[18px] font-extrabold uppercase tracking-[0.02em] text-fg-strong">
                  Falar no WhatsApp
                </h3>
                <p className="m-0 mt-1 text-[13.5px] text-muted-2">
                  Escolha com quem você quer falar:
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="h-9 w-9 flex-none rounded-[9px] border border-white/[0.14] bg-white/5 text-[18px] leading-none text-fg"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {whatsapps.map((w) => (
                <a
                  key={w.phone}
                  href={waLinkFor(w.phone, message)}
                  target="_blank"
                  rel="noopener"
                  onClick={close}
                  className="flex items-center gap-[14px] rounded-[12px] border border-white/[0.1] bg-white/[0.03] p-[14px] no-underline transition-colors hover:border-wa/50 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-wa">
                    <WhatsAppIcon size={22} fill="#06210f" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-[15.5px] font-bold text-fg-strong">
                      {w.name}
                    </span>
                    <span className="text-[13px] text-muted-2">{w.display}</span>
                  </span>
                  <span className="ml-auto text-wa" aria-hidden>
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </WhatsAppContext.Provider>
  );
}

/** CTA verde do WhatsApp — abre o pop-up de escolha. */
export function WaButton({
  message,
  children,
  className = "",
  iconSize = 18,
}: {
  message?: string;
  children: ReactNode;
  className?: string;
  iconSize?: number;
}) {
  const { open } = useWhatsApp();
  return (
    <button
      type="button"
      onClick={() => open(message)}
      className={`inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-full border-0 bg-wa font-display font-extrabold uppercase tracking-[0.04em] text-wa-ink ${className}`}
    >
      <WhatsAppIcon size={iconSize} fill="#06210f" />
      {children}
    </button>
  );
}

/** Link de texto (ex.: "Pedir orçamento →") — abre o pop-up de escolha. */
export function WaLink({
  message,
  children,
  className = "",
}: {
  message?: string;
  children: ReactNode;
  className?: string;
}) {
  const { open } = useWhatsApp();
  return (
    <button
      type="button"
      onClick={() => open(message)}
      className={`cursor-pointer border-0 bg-transparent p-0 text-left ${className}`}
    >
      {children}
    </button>
  );
}
