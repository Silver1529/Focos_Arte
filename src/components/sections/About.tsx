import { diffs, site } from "@/lib/site";
import Reveal from "../Reveal";
import { SectionEyebrow } from "../ui";
import { CheckIcon } from "../icons";

export default function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1240px] px-[clamp(18px,5vw,64px)] py-[clamp(70px,9vw,120px)]"
    >
      <Reveal className="mx-auto max-w-[760px] text-center">
        <SectionEyebrow className="mb-4">A Empresa</SectionEyebrow>
        <h2 className="m-0 font-display text-[clamp(28px,3.6vw,44px)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-fg-strong">
          Tradição e precisão em cada detalhe
        </h2>
      </Reveal>

      <Reveal>
        <div className="mx-auto mt-[38px] grid max-w-[1000px] grid-cols-1 gap-x-[56px] gap-y-[18px] md:grid-cols-2">
          <p className="m-0 text-[16.5px] leading-[1.7] text-muted">
            Fundada em{" "}
            <strong className="text-fg">{site.foundedYear}</strong>, a{" "}
            <strong className="text-fg">Foco Arte</strong> entrega há mais de{" "}
            <strong className="text-fg">{site.years} anos</strong> soluções
            completas em gesso e drywall para residências, comércios e obras de
            grande porte. São milhares de ambientes finalizados com o mesmo
            compromisso: qualidade, pontualidade e acabamento impecável.
          </p>
          <p className="m-0 text-[16.5px] leading-[1.7] text-muted">
            Trabalhamos com{" "}
            <strong className="text-fg">equipe própria e qualificada</strong>,
            materiais de primeira linha e garantia em todos os serviços.
            Cuidamos de tudo, do projeto à limpeza final.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mx-auto mt-[46px] grid max-w-[1000px] grid-cols-1 gap-[16px] border-t border-white/[0.07] pt-[38px] sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
