import Image from "next/image";
import { site } from "@/lib/site";
import { waDefaultLink } from "@/lib/whatsapp";
import Reveal from "../Reveal";
import { WaButton } from "../ui";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-[clamp(18px,5vw,64px)] pb-[60px] pt-[120px]"
      style={{
        background:
          "radial-gradient(120% 80% at 78% 18%,#1b2027 0%,#0e1115 45%,#0a0c0f 100%)",
      }}
    >
      {/* grade de fundo com máscara radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(80% 70% at 70% 30%,#000,transparent)",
          WebkitMaskImage: "radial-gradient(80% 70% at 70% 30%,#000,transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-white/[0.14] bg-white/[0.03] px-[15px] py-[7px]">
            <span className="h-[7px] w-[7px] rounded-full bg-wa shadow-[0_0_8px_#25D366]" />
            <span className="font-display text-[11px] font-semibold tracking-[0.22em] text-[#aeb4bd]">
              MAIS DE {site.years} ANOS DE MERCADO
            </span>
          </div>

          <h1 className="m-0 mb-6 font-display text-[clamp(40px,6.2vw,80px)] font-black uppercase leading-[0.98] tracking-[-0.01em]">
            <span className="block text-fg-strong">Soluções em</span>
            <span className="tg-metal block">gesso &amp; drywall</span>
            <span className="mt-[6px] block text-[0.55em] font-bold tracking-[0.02em] text-fg-strong">
              que valorizam o seu ambiente
            </span>
          </h1>

          <p className="m-0 mb-[34px] max-w-[520px] text-[17.5px] leading-[1.6] text-muted">
            Forros, sancas, divisórias e paredes 3D executados por uma equipe
            própria com tradição, acabamento impecável e garantia. Do projeto à
            entrega, cuidamos de tudo.
          </p>

          <div className="flex flex-wrap gap-[14px]">
            <WaButton
              href={waDefaultLink()}
              className="px-[26px] py-4 text-[14px] shadow-[0_12px_30px_rgba(37,211,102,0.32)]"
            >
              Pedir orçamento
            </WaButton>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-[26px] py-4 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-fg no-underline"
            >
              Nossos serviços →
            </a>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div
            aria-hidden
            className="absolute inset-[-8%_-6%] blur-[8px]"
            style={{
              background:
                "radial-gradient(circle at 50% 40%,rgba(180,190,205,.18),transparent 65%)",
            }}
          />
          <div
            className="relative rounded-[18px] border border-white/10 p-[34px]"
            style={{
              background: "linear-gradient(160deg,#15191f,#0d1014)",
              boxShadow:
                "0 30px 80px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.06)",
            }}
          >
            <Image
              src="/tiger-logo-textured.jpeg"
              alt="Tiger Gesso"
              width={640}
              height={640}
              className="block w-full rounded-[12px]"
              priority
            />
          </div>
        </Reveal>
      </div>

      <a
        href="#stats"
        className="absolute bottom-[22px] left-1/2 -translate-x-1/2 font-display text-[10px] uppercase tracking-[0.3em] text-[#6b727b] no-underline"
      >
        Role para baixo ↓
      </a>
    </header>
  );
}
