import { mainProject } from "@/lib/site";
import Reveal from "../Reveal";
import ProjectGallery from "../ProjectGallery";
import { SectionEyebrow } from "../ui";
import { WaLink } from "../whatsapp-ui";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="border-t border-white/[0.06] bg-panel px-[clamp(18px,5vw,64px)] py-[clamp(70px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <SectionEyebrow className="mb-[14px]">Portfólio</SectionEyebrow>
            <h2 className="m-0 font-display text-[clamp(28px,3.6vw,46px)] font-extrabold uppercase tracking-[-0.01em] text-fg-strong">
              Projetos &amp; obras
            </h2>
          </div>
          <WaLink className="font-display text-[12.5px] font-bold uppercase tracking-[0.06em] text-wa">
            Quero um projeto assim →
          </WaLink>
        </Reveal>

        {/* Obra em destaque */}
        <Reveal className="mb-6">
          <h3 className="m-0 font-display text-[20px] font-bold uppercase tracking-[0.02em] text-fg-strong">
            {mainProject.title}
          </h3>
          <p className="m-0 mt-3 max-w-[720px] text-[15px] leading-[1.6] text-muted">
            {mainProject.summary}
          </p>
        </Reveal>

        <ProjectGallery photos={mainProject.photos} />
      </div>
    </section>
  );
}
