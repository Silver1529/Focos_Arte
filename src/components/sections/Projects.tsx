import { waDefaultLink } from "@/lib/whatsapp";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";
import { SectionEyebrow } from "../ui";

const gallery = [
  { label: "Foto de obra 1", span: "lg:col-span-2 lg:row-span-2" },
  { label: "Foto 2", span: "" },
  { label: "Foto 3", span: "" },
  { label: "Foto 4", span: "" },
  { label: "Foto 5", span: "" },
  { label: "Foto de obra 6", span: "lg:col-span-2" },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="border-t border-white/[0.06] bg-panel px-[clamp(18px,5vw,64px)] py-[clamp(70px,9vw,120px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <SectionEyebrow className="mb-[14px]">Portfólio</SectionEyebrow>
            <h2 className="m-0 font-display text-[clamp(28px,3.6vw,46px)] font-extrabold uppercase tracking-[-0.01em] text-fg-strong">
              Projetos &amp; obras
            </h2>
          </div>
          <a
            href={waDefaultLink()}
            target="_blank"
            rel="noopener"
            className="font-display text-[12.5px] font-bold uppercase tracking-[0.06em] text-wa no-underline"
          >
            Quero um projeto assim →
          </a>
        </Reveal>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-[14px] lg:grid-cols-4">
          {gallery.map((g) => (
            <ImagePlaceholder
              key={g.label}
              label={g.label}
              className={`h-full w-full ${g.span}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
