"use client";

import { useWhatsApp } from "./whatsapp-ui";
import { WhatsAppIcon } from "./icons";

/** Botão flutuante do WhatsApp (canto inferior direito). */
export default function FloatingWhatsApp() {
  const { open } = useWhatsApp();
  return (
    <button
      type="button"
      onClick={() => open()}
      aria-label="Falar no WhatsApp"
      className="tg-float fixed bottom-6 right-6 z-[60] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-0 bg-wa"
    >
      <WhatsAppIcon size={32} fill="#ffffff" />
    </button>
  );
}
