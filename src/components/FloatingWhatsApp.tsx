import { waDefaultLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

/** Botão flutuante do WhatsApp (canto inferior direito). */
export default function FloatingWhatsApp() {
  return (
    <a
      href={waDefaultLink()}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="tg-float fixed bottom-6 right-6 z-[60] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-wa no-underline"
    >
      <WhatsAppIcon size={32} fill="#ffffff" />
    </a>
  );
}
