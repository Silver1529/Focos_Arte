"use client";

import { useState } from "react";
import { serviceOptions } from "@/lib/site";
import { waFormMessage } from "@/lib/whatsapp";
import { useWhatsApp } from "./whatsapp-ui";
import { WhatsAppIcon } from "./icons";

const fieldClass =
  "rounded-[10px] border border-white/[0.12] bg-[#0d1014] px-[14px] py-[13px] font-body text-[16px] text-fg-strong outline-none focus:border-white/30";

const labelTextClass =
  "font-display text-[11.5px] font-semibold uppercase tracking-[0.1em] text-muted-2";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const { open } = useWhatsApp();

  // v1 (sem banco): monta a mensagem e abre o pop-up para escolher o contato.
  // Fase 2: enviar POST /api/leads ANTES de redirecionar (regra de ouro).
  function enviar() {
    open(waFormMessage({ name, phone, service, message }));
  }

  return (
    <div
      className="rounded-[18px] border border-white/[0.08] p-[clamp(26px,3vw,38px)]"
      style={{ background: "linear-gradient(165deg,#161a20,#0f1216)" }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-[7px] sm:col-span-2">
          <span className={labelTextClass}>Nome</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-[7px]">
          <span className={labelTextClass}>Telefone</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            inputMode="tel"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-[7px]">
          <span className={labelTextClass}>Serviço</span>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${fieldClass} appearance-none`}
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-[7px] sm:col-span-2">
          <span className={labelTextClass}>Mensagem</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Conte um pouco sobre o seu projeto..."
            className={`${fieldClass} resize-y`}
          />
        </label>
      </div>

      <button
        type="button"
        onClick={enviar}
        className="mt-5 flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-full border-0 bg-wa p-4 font-display text-[14.5px] font-extrabold uppercase tracking-[0.04em] text-wa-ink"
      >
        <WhatsAppIcon size={18} fill="#06210f" />
        Enviar pelo WhatsApp
      </button>
      <p className="m-0 mt-[14px] text-center text-[12px] text-faint">
        Resposta rápida em horário comercial.
      </p>
    </div>
  );
}
