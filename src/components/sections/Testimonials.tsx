import { testimonials } from "@/lib/site";
import Reveal from "../Reveal";
import { SectionEyebrow } from "../ui";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(18px,5vw,64px)] py-[clamp(60px,8vw,100px)]">
      <Reveal className="mb-[46px] text-center">
        <SectionEyebrow className="mb-[14px]">Quem confia</SectionEyebrow>
        <h2 className="m-0 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold uppercase tracking-[-0.01em] text-fg-strong">
          O que dizem nossos clientes
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal
            key={t.name}
            className="rounded-[14px] border border-white/[0.08] p-7"
            style={{ background: "linear-gradient(165deg,#161a20,#0f1216)" }}
          >
            <div
              className="mb-[14px] text-[15px] tracking-[0.18em] text-[#cfd4db]"
              aria-label="5 de 5 estrelas"
            >
              ★★★★★
            </div>
            <p className="m-0 mb-5 text-[15.5px] italic leading-[1.65] text-[#c4c9d0]">
              “{t.quote}”
            </p>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] font-display text-[15px] font-extrabold text-[#cfd4db]"
                style={{ background: "linear-gradient(135deg,#2a3038,#14181d)" }}
                aria-hidden
              >
                {t.initial}
              </div>
              <div>
                <div className="font-display text-[14px] font-bold text-fg-strong">
                  {t.name}
                </div>
                <div className="text-[12.5px] text-muted-3">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
