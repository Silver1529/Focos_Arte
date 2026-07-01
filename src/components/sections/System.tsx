import { steps } from "@/lib/site";
import Reveal from "../Reveal";
import { SectionEyebrow } from "../ui";

export default function System() {
  return (
    <section
      id="sistema"
      className="relative px-[clamp(18px,5vw,64px)] py-[clamp(70px,9vw,120px)]"
      style={{
        background: "radial-gradient(110% 90% at 20% 0%,#171c23,#0b0d10 60%)",
      }}
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-[54px] max-w-[720px]">
          <SectionEyebrow className="mb-[14px]">
            Nosso sistema de trabalho
          </SectionEyebrow>
          <h2 className="m-0 mb-4 font-display text-[clamp(28px,3.6vw,46px)] font-extrabold uppercase tracking-[-0.01em] text-fg-strong">
            Do primeiro contato à entrega
          </h2>
          <p className="m-0 text-[16.5px] leading-[1.6] text-muted">
            Um processo transparente em 6 etapas. Você acompanha cada fase e sabe
            exatamente o que esperar — sem surpresas no preço ou no prazo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((st) => (
            <Reveal
              key={st.no}
              className="rounded-[14px] border border-white/[0.08] px-[26px] py-[28px]"
              style={{
                background:
                  "linear-gradient(165deg,rgba(255,255,255,.035),rgba(255,255,255,.01))",
              }}
            >
              <div className="tg-metal-vert font-display text-[46px] font-black leading-none">
                {st.no}
              </div>
              <h3 className="mb-2 mt-[14px] font-display text-[18px] font-bold uppercase tracking-[0.02em] text-fg-strong">
                {st.title}
              </h3>
              <p className="m-0 text-[14.5px] leading-[1.6] text-muted-2">
                {st.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
