import Image from "next/image";
import { developer, site, whatsapps } from "@/lib/site";
import { DEFAULT_WA_MESSAGE, waLinkFor } from "@/lib/whatsapp";

const footerNav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sistema", label: "Nosso sistema" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const colTitleClass =
  "mb-4 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-[#cfd4db]";
const footerLinkClass = "text-[14px] text-muted-3 no-underline hover:text-fg";

export default function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-ink-deep px-[clamp(18px,5vw,64px)] pb-[30px] pt-[54px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/tiger-symbol.png"
              alt="Tiger Gesso"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-[16px] font-extrabold tracking-[0.16em] text-fg-strong">
              TIGER GESSO
            </span>
          </div>
          <p className="m-0 max-w-[340px] text-[14px] leading-[1.6] text-muted-3">
            Soluções completas em gesso e drywall há mais de {site.years} anos.
            Qualidade, tradição e acabamento que você pode confiar.
          </p>
        </div>

        <div>
          <div className={colTitleClass}>Navegação</div>
          <div className="flex flex-col gap-[11px]">
            {footerNav.map((l) => (
              <a key={l.href} href={l.href} className={footerLinkClass}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className={colTitleClass}>Contato</div>
          <div className="flex flex-col gap-[11px]">
            {whatsapps.map((w) => (
              <a
                key={w.phone}
                href={waLinkFor(w.phone, DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener"
                className="text-[14px] text-muted-3 no-underline hover:text-fg"
              >
                <span className="font-semibold text-wa">WhatsApp</span> ·{" "}
                {w.name} — {w.display}
              </a>
            ))}
            {whatsapps.map((w) => (
              <a
                key={`mail-${w.phone}`}
                href={`mailto:${w.email}`}
                className="text-[14px] text-muted-3 no-underline hover:text-fg"
              >
                {w.email}
              </a>
            ))}
            <span className="text-[14px] text-muted-3">{site.city}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[38px] flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-white/[0.07] pt-[22px]">
        <span className="text-[12.5px] text-faint">
          © {yearNow} Tiger Gesso · Soluções em Gesso. Todos os direitos
          reservados.
        </span>
        <span className="text-[12.5px] text-faint">
          Mais de {site.years} anos de mercado
        </span>
      </div>

      <div className="mx-auto mt-4 max-w-[1240px] text-center">
        <span className="text-[12px] text-faint">
          Desenvolvido por{" "}
          <a
            href={developer.url}
            target="_blank"
            rel="noopener"
            className="font-semibold text-muted-2 no-underline hover:text-fg"
          >
            {developer.name}
          </a>
          {" · "}
          <a
            href={`mailto:${developer.email}`}
            className="text-muted-3 no-underline hover:text-fg"
          >
            {developer.email}
          </a>
        </span>
      </div>
    </footer>
  );
}
