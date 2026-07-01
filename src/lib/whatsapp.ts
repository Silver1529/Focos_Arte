import { site } from "./site";

/** Número de WhatsApp em formato limpo (somente dígitos), com override por env. */
export function waNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? site.whatsappNumber;
  return raw.replace(/\D/g, "");
}

/** Monta um link wa.me com a mensagem informada já codificada. */
export function waLink(message: string): string {
  return `https://wa.me/${waNumber()}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão de orçamento (CTAs genéricos). */
export const DEFAULT_WA_MESSAGE =
  "Olá, Tiger Gesso! Gostaria de solicitar um orçamento.";

/** Link padrão de orçamento. */
export function waDefaultLink(): string {
  return waLink(DEFAULT_WA_MESSAGE);
}

/** Link para um serviço específico. */
export function waServiceLink(serviceTitle: string): string {
  return waLink(
    `Olá, Tiger Gesso! Tenho interesse em *${serviceTitle}*. Podem me passar um orçamento?`,
  );
}

/** Monta a mensagem do formulário de contato. */
export function waFormMessage(fields: {
  name: string;
  phone: string;
  service: string;
  message: string;
}): string {
  const dash = (v: string) => (v.trim() ? v.trim() : "-");
  return (
    "Olá, Tiger Gesso! Gostaria de um orçamento." +
    "\n\n*Nome:* " +
    dash(fields.name) +
    "\n*Telefone:* " +
    dash(fields.phone) +
    "\n*Serviço:* " +
    dash(fields.service) +
    "\n*Mensagem:* " +
    dash(fields.message)
  );
}
