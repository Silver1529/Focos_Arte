import { diffs, site } from "@/lib/site";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";
import { SectionEyebrow } from "../ui";
import { CheckIcon } from "../icons";

export default function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1240px] px-[clamp(18px,5vw,64px)] py-[clamp(70px,9vw,120px)]"
    >
      <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
        <Reveal className="relative">
          <ImagePlaceholder
            label="Arraste uma foto da equipe ou de uma obra"
            radius={16}
            className="h-[440px] w-full"
          />
          <div
            className="absolute -bottom-[22px] -left-[22px] rounded-[14px] border border-white/10 bg-surface px-6 py-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="font-display text-[38px] font-black leading-none text-fg-strong">
              {site.years}+
            </div>
            <div className="font-body text-[12px] tracking-[0.06em] text-muted-2">
              anos transformando
              <br />
              ambientes
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionEyebrow className="mb-4">A Empresa</SectionEyebrow>
          <h2 className="m-0 mb-[22px] font-display text-[clamp(28px,3.6vw,44px)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-fg-strong">
            Tradição e precisão em cada detalhe
          </h2>
          <p className="m-0 mb-[18px] text-[16.5px] leading-[1.7] text-muted">
            Há mais de{" "}
            <strong className="text-fg">{site.years} anos</strong> a{" "}
            <strong className="text-fg">Foco Arte</strong> entrega soluções
            completas em gesso e drywall para residências, comércios e obras de
            grande porte. São milhares de ambientes finalizados com o mesmo
            compromisso: qualidade, pontualidade e acabamento impecável.
          </p>
          <p className="m-0 mb-[28px] text-[16.5px] leading-[1.7] text-muted">
            Trabalhamos com{" "}
            <strong className="text-fg">equipe própria e qualificada</strong>,
            materiais de primeira linha e garantia em todos os serviços.
            Cuidamos de tudo, do projeto à limpeza final.
          </p>

          <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            {diffs.map((d) => (
              <div key={d} className="flex items-center gap-[10px]">
                <span
                  className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-[5px]"
                  style={{
                    background: "linear-gradient(135deg,#dfe3e9,#9aa1ac)",
                  }}
                >
                  <CheckIcon size={11} />
                </span>
                <span className="text-[14.5px] text-[#c4c9d0]">{d}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
