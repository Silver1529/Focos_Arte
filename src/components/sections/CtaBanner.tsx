import { waDefaultLink } from "@/lib/whatsapp";
import Reveal from "../Reveal";
import { WaButton } from "../ui";

export default function CtaBanner() {
  return (
    <div className="px-[clamp(18px,5vw,64px)]">
      <Reveal
        className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-7 rounded-[20px] border border-white/10 p-[clamp(36px,5vw,56px)] shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
        style={{ background: "linear-gradient(120deg,#1a1f26,#0e1115)" }}
      >
        <div>
          <h2 className="m-0 mb-[10px] font-display text-[clamp(24px,3vw,38px)] font-extrabold uppercase tracking-[-0.01em] text-fg-strong">
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="m-0 max-w-[560px] text-[16px] leading-[1.6] text-muted">
            Fale agora com a nossa equipe pelo WhatsApp e receba um orçamento sem
            compromisso.
          </p>
        </div>
        <WaButton
          href={waDefaultLink()}
          iconSize={20}
          className="whitespace-nowrap px-[30px] py-[18px] text-[15px] shadow-[0_14px_34px_rgba(37,211,102,0.34)]"
        >
          Chamar no WhatsApp
        </WaButton>
      </Reveal>
    </div>
  );
}
