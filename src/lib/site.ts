/**
 * Configuração e conteúdo do site Tiger Gesso.
 *
 * Enquanto não há banco de dados (v1), todo o conteúdo editável vive aqui.
 * Depois, parte disto migra para o painel admin / SiteConfig.
 */

export const site = {
  /** Usado em metadata/OpenGraph. Ajustar no go-live para o domínio real. */
  url: "https://tigergesso.com.br",

  /** Anos de mercado — aparece no hero, sobre, footer. */
  years: 30,

  /** Cidade/região de atendimento. */
  city: "sua cidade e região",

  /** Telefone exibido (formatado para leitura). */
  phoneDisplay: "(38) 99999-0000",

  /** E-mail de contato. */
  email: "contato@tigergesso.com.br",

  /**
   * WhatsApp (somente dígitos, DDI + DDD + número).
   * Pode ser sobrescrito por NEXT_PUBLIC_WHATSAPP_NUMBER no ambiente.
   */
  whatsappNumber: "5538999990000",

  /** Horário de atendimento exibido no contato. */
  hours: "Seg a Sáb · 08h às 18h",
} as const;

/** Estatísticas exibidas na faixa abaixo do hero. */
export const stats = [
  { num: `${site.years}+`, label: "anos de mercado" },
  { num: "2.500+", label: "obras entregues" },
  { num: "100%", label: "equipe própria" },
  { num: "5★", label: "avaliação dos clientes" },
] as const;

/** Diferenciais listados na seção "Sobre". */
export const diffs = [
  `+${site.years} anos de experiência`,
  "Equipe própria e qualificada",
  "Materiais de primeira linha",
  "Garantia em todos os serviços",
  "Orçamento sem compromisso",
  "Pontualidade na entrega",
] as const;

export type Service = {
  no: string;
  icon: string;
  title: string;
  desc: string;
};

/** Serviços em gesso & drywall. */
export const services: Service[] = [
  { no: "01", icon: "▭", title: "Forro de Gesso", desc: "Placas lisas e resistentes para um teto perfeito, com ótimo custo-benefício." },
  { no: "02", icon: "▤", title: "Forro Drywall", desc: "Estrutura em aço galvanizado, ideal para grandes vãos e melhor acústica." },
  { no: "03", icon: "◳", title: "Forro Removível", desc: "Modulado, com acesso fácil às instalações elétricas e hidráulicas." },
  { no: "04", icon: "◢", title: "Sancas & LED", desc: "Sancas abertas, fechadas e invertidas com iluminação embutida." },
  { no: "05", icon: "▥", title: "Divisórias Drywall", desc: "Paredes internas rápidas, limpas e com isolamento acústico." },
  { no: "06", icon: "◰", title: "Paredes 3D", desc: "Painéis decorativos que dão textura e volume ao ambiente." },
  { no: "07", icon: "═", title: "Molduras & Rodateto", desc: "Acabamentos clássicos que valorizam toda a arquitetura." },
  { no: "08", icon: "✦", title: "Acabamento Final", desc: "Massa, pintura, iluminação e reparos para a entrega impecável." },
];

/** Etapas do sistema de trabalho (6 passos). */
export const steps = [
  { no: "01", title: "Visita & Medição", desc: "Vamos até você avaliar o ambiente e tirar todas as medidas — sem nenhum custo." },
  { no: "02", title: "Projeto & Orçamento", desc: "Apresentamos a melhor solução com preço fechado, claro e transparente." },
  { no: "03", title: "Execução", desc: "Equipe própria instala com agilidade, organização e o mínimo de sujeira." },
  { no: "04", title: "Iluminação", desc: "Posicionamos pontos de luz, sancas e LED conforme o seu projeto." },
  { no: "05", title: "Acabamento", desc: "Massa corrida, lixamento e pintura para um resultado de tirar o fôlego." },
  { no: "06", title: "Entrega & Garantia", desc: "Limpeza final, vistoria com você e garantia em todos os serviços." },
] as const;

/** Depoimentos de clientes. */
export const testimonials = [
  { quote: "Forro e sancas ficaram impecáveis. Equipe pontual, limpa e muito caprichosa. Recomendo demais!", name: "Marcos Andrade", role: "Residencial · Casa nova", initial: "M" },
  { quote: "Fizeram todo o drywall da minha loja em tempo recorde, sem atrapalhar o funcionamento. Profissionais de verdade.", name: "Patrícia Lemos", role: "Comercial · Loja", initial: "P" },
  { quote: "Tradição que se vê no acabamento. Já é a terceira obra que fecho com a Tiger e nunca me decepcionaram.", name: "Eng. Rafael Costa", role: "Construtora · Parceiro", initial: "R" },
] as const;

/** Opções do <select> de serviço no formulário de contato. */
export const serviceOptions = [
  "Forro de Gesso",
  "Forro Drywall",
  "Sancas / Iluminação",
  "Divisórias",
  "Paredes 3D",
  "Molduras / Rodatetos",
  "Outro",
] as const;

/** Links de navegação do topo/menu. */
export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sistema", label: "Sistema" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;
