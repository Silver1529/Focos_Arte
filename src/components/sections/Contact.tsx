import { emailContacts, site, whatsapps } from "@/lib/site";
import { DEFAULT_WA_MESSAGE, waLinkFor } from "@/lib/whatsapp";
import Reveal from "../Reveal";
import ContactForm from "../ContactForm";
import { SectionEyebrow } from "../ui";
import {
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  PinIcon,
  ClockIcon,
} from "../icons";

function InfoRow({
  icon,
  label,
  value,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconBg?: string;
}) {
  return (
    <div className="flex items-center gap-[14px]">
      <span
        className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px]"
        style={
          iconBg
            ? { background: iconBg }
            : {
                background: "#15191f",
                border: "1px solid rgba(255,255,255,.1)",
              }
        }
      >
        {icon}
      </span>
      <span>
        <span className="block text-[12px] tracking-[0.04em] text-muted-3">
          {label}
        </span>
        <span className="block font-display text-[16px] font-bold text-fg-strong">
          {value}
        </span>
      </span>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="px-[clamp(18px,5vw,64px)] py-[clamp(70px,9vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[50px] lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionEyebrow className="mb-[14px]">Fale conosco</SectionEyebrow>
          <h2 className="m-0 mb-[22px] font-display text-[clamp(28px,3.4vw,42px)] font-extrabold uppercase tracking-[-0.01em] text-fg-strong">
            Solicite seu orçamento
          </h2>
          <p className="m-0 mb-[30px] text-[16px] leading-[1.6] text-muted">
            Atendemos toda a região de{" "}
            <strong className="text-fg">{site.city}</strong>. Preencha o
            formulário ou chame direto no WhatsApp.
          </p>

          <div className="flex flex-col gap-[18px]">
            {whatsapps.map((w) => (
              <a
                key={w.phone}
                href={waLinkFor(w.phone, DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener"
                className="no-underline transition-opacity hover:opacity-80"
              >
                <InfoRow
                  icon={<WhatsAppIcon size={22} fill="#06210f" />}
                  iconBg="#25D366"
                  label={`WhatsApp · ${w.name}`}
                  value={w.display}
                />
              </a>
            ))}
            {emailContacts.map((w) => (
              <a
                key={`mail-${w.phone}`}
                href={`mailto:${w.email}`}
                className="no-underline transition-opacity hover:opacity-80"
              >
                <InfoRow
                  icon={<MailIcon size={20} />}
                  label={`E-mail · ${w.name}`}
                  value={w.email}
                />
              </a>
            ))}
            <InfoRow
              icon={<InstagramIcon size={20} />}
              label="Instagram"
              value={site.instagram.handle}
            />
            <InfoRow
              icon={<PinIcon size={20} />}
              label="Atendimento"
              value={site.city}
            />
            <InfoRow
              icon={<ClockIcon size={20} />}
              label="Horário"
              value={site.hours}
            />
          </div>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
