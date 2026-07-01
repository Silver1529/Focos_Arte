import { services } from "@/lib/site";
import { serviceMessage } from "@/lib/whatsapp";
import Reveal from "../Reveal";
import { SectionEyebrow } from "../ui";
import { WaLink } from "../whatsapp-ui";

export default function Services() {
  return (
    <section
      id="servicos"
      className="border-t border-white/[0.06] bg-panel px-[clamp(18px,5vw,64px)] py-[clamp(70px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-[54px] text-center">
          <SectionEyebrow className="mb-[14px]">O que fazemos</SectionEyebrow>
          <h2 className="m-0 font-display text-[clamp(28px,3.6vw,46px)] font-extrabold uppercase tracking-[-0.01em] text-fg-strong">
            Serviços em gesso &amp; drywall
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[16.5px] leading-[1.6] text-muted">
            Soluções completas para deixar o seu projeto pronto, do forro ao
            acabamento final.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((sv) => (
            <Reveal
              key={sv.no}
              className="flex min-h-[228px] flex-col overflow-hidden rounded-[14px] border border-white/[0.08] p-[26px_22px_24px]"
              style={{ background: "linear-gradient(165deg,#161a20,#0f1216)" }}
            >
              <div className="font-display text-[14px] font-black tracking-[0.08em] text-[#3a4049]">
                {sv.no}
              </div>
              <div
                className="mt-[14px] flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-white/[0.12] text-[18px] text-[#cfd4db]"
                style={{ background: "linear-gradient(140deg,#1e242b,#10141a)" }}
                aria-hidden
              >
                {sv.icon}
              </div>
              <h3 className="mb-2 mt-4 font-display text-[16.5px] font-bold uppercase tracking-[0.02em] text-fg-strong">
                {sv.title}
              </h3>
              <p className="m-0 mb-4 flex-1 text-[13.8px] leading-[1.55] text-muted-2">
                {sv.desc}
              </p>
              <WaLink
                message={serviceMessage(sv.title)}
                className="font-display text-[11.5px] font-bold uppercase tracking-[0.08em] text-wa"
              >
                Pedir orçamento →
              </WaLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
