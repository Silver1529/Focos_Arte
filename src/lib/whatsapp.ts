/** Monta um link wa.me para um número específico com a mensagem já codificada. */
export function waLinkFor(phone: string, message: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão de orçamento (CTAs genéricos). */
export const DEFAULT_WA_MESSAGE =
  "Olá, Tiger Gesso! Gostaria de solicitar um orçamento.";

/** Mensagem para um serviço específico. */
export function serviceMessage(serviceTitle: string): string {
  return `Olá, Tiger Gesso! Tenho interesse em *${serviceTitle}*. Podem me passar um orçamento?`;
}

/** Monta a mensagem do formulário de contato, anunciando o serviço escolhido. */
export function waFormMessage(fields: {
  name: string;
  phone: string;
  service: string;
  message: string;
}): string {
  const dash = (v: string) => (v.trim() ? v.trim() : "-");
  const lines = [
    `Olá, Tiger Gesso! Gostaria de um orçamento de *${fields.service}*.`,
    "",
    `*Nome:* ${dash(fields.name)}`,
    `*Telefone:* ${dash(fields.phone)}`,
  ];
  if (fields.message.trim()) {
    lines.push("", `*Mensagem:* ${fields.message.trim()}`);
  }
  return lines.join("\n");
}
