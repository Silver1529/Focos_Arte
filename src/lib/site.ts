/**
 * Configuração e conteúdo do site Foco Arte.
 *
 * Enquanto não há banco de dados (v1), todo o conteúdo editável vive aqui.
 * Depois, parte disto migra para o painel admin / SiteConfig.
 */

/** Ano de fundação da Foco Arte — base do cálculo de anos de mercado. */
const FOUNDED_YEAR = 2014;

export const site = {
  /** Fallback de URL para metadata/OpenGraph (usado quando fora da Vercel). */
  url: "https://foco-arte.vercel.app",

  /** Ano de fundação — exibido como "desde 2014". */
  foundedYear: FOUNDED_YEAR,

  /**
   * Anos de mercado — calculado a partir de FOUNDED_YEAR, para nunca ficar
   * desatualizado. Aparece no hero, sobre, footer e nos metadados.
   */
  years: new Date().getFullYear() - FOUNDED_YEAR,

  /** Cidade/região de atendimento. */
  city: "São Paulo e região",

  /** Horário de atendimento exibido no contato. */
  hours: "Seg a Sáb · 08h às 18h",

  /**
   * Instagram da empresa — exibido só como texto.
   * O link foi retirado a pedido: a URL do perfil levava para outra conta.
   * Para voltar a ser clicável, confirme a URL certa, adicione `url` aqui e
   * envolva o item de novo num <a> em Contact.tsx e Footer.tsx.
   */
  instagram: {
    handle: "@Foco_art",
  },
} as const;

/** Crédito do desenvolvedor (rodapé). */
export const developer = {
  name: "D20 Software House",
  email: "d20softwarehouse@gmail.com",
  url: "https://d20-software-house.vercel.app/",
  /**
   * Aviso de propriedade intelectual exibido no rodapé. Cobre o que foi
   * criado pelo desenvolvedor (código, layout e design); a marca, as fotos
   * e os textos continuam sendo da Foco Arte.
   */
  rights:
    "Todos os direitos intelectuais sobre o código, o layout e o design deste site pertencem a D20 Software House e seus fundadores",
} as const;

export type WhatsAppContact = {
  /** Nome de quem atende. */
  name: string;
  /** Número em formato internacional só com dígitos (DDI + DDD + número). */
  phone: string;
  /** Número formatado para exibição. */
  display: string;
  /** E-mail de contato — opcional (nem todo contato tem). */
  email?: string;
};

/**
 * Contatos. Ao clicar em qualquer CTA de WhatsApp, o visitante escolhe
 * com quem falar (ver src/components/whatsapp-ui.tsx).
 */
export const whatsapps: WhatsAppContact[] = [
  { name: "Marcio Lima", phone: "5511972537833", display: "(11) 97253-7833", email: "marciolimatg1@gmail.com" },
  { name: "Mario Santos", phone: "5511957228008", display: "(11) 95722-8008", email: "mariosantos.tg@gmail.com" },
  { name: "Joilson Alves Silva", phone: "5511957334379", display: "(11) 95733-4379" },
];

/** Contatos que têm e-mail (o do Joilson é só WhatsApp). */
export const emailContacts = whatsapps.filter(
  (w): w is WhatsAppContact & { email: string } => Boolean(w.email),
);

/** Estatísticas exibidas na faixa abaixo do hero. */
export const stats = [
  { num: `${site.years}+`, label: "anos de mercado" },
  { num: "67+", label: "obras entregues" },
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
  { quote: "Tradição que se vê no acabamento. Já é a terceira obra que fecho com a Foco Arte e nunca me decepcionaram.", name: "Eng. Rafael Costa", role: "Construtora · Parceiro", initial: "R" },
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

export type ProjectPhoto = {
  src: string;
  alt: string;
  /** Classes de span (lg+) para o mosaico. Vazio = tile 1x1. */
  span?: string;
};

const mainProjectAddress =
  "Av. Brig. Faria Lima, 3732 - Itaim Bibi, São Paulo - SP, 04538-132";

/**
 * Obra em destaque na seção Projetos.
 * As fotos ficam em public/projetos/<slug>/.
 */
export const mainProject = {
  title: "Entrega para a Shopee",
  // location/address/mapsUrl/mapsEmbedUrl ficam GUARDADOS aqui para reativar
  // o mapa depois (removidos da exibição a pedido — ver Projects.tsx).
  location: "Itaim Bibi, São Paulo · SP",
  address: mainProjectAddress,
  /** Abre a localização exata no Google Maps (sem chave de API). */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mainProjectAddress)}`,
  /** Mapa interativo embutido (sem chave de API). */
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mainProjectAddress)}&output=embed`,
  summary:
    "Forros e sancas curvas em drywall executados em um edifício comercial de alto padrão — do sistema estrutural ao acabamento.",
  photos: [
    { src: "/projetos/predio-do-birman-32/01.jpeg", alt: "Forro curvo em drywall no salão principal", span: "lg:col-span-2 lg:row-span-2" },
    { src: "/projetos/predio-do-birman-32/07.jpeg", alt: "Amplo pavimento com forros orgânicos e vista da cidade", span: "lg:row-span-2" },
    { src: "/projetos/predio-do-birman-32/03.jpeg", alt: "Sanca de drywall com curvas concêntricas" },
    { src: "/projetos/predio-do-birman-32/02.jpeg", alt: "Detalhe da sanca curva com iluminação e difusor de ar" },
    { src: "/projetos/predio-do-birman-32/10.jpeg", alt: "Forro curvo em drywall com vista panorâmica de São Paulo", span: "lg:col-span-2" },
    { src: "/projetos/predio-do-birman-32/09.jpeg", alt: "Pavimento amplo com forros esculpidos em drywall", span: "lg:row-span-2" },
    { src: "/projetos/predio-do-birman-32/08.jpeg", alt: "Salão com forro curvo e divisórias em drywall" },
    { src: "/projetos/predio-do-birman-32/06.jpeg", alt: "Ambiente com estrutura de forro e divisórias curvas" },
    { src: "/projetos/predio-do-birman-32/12.jpeg", alt: "Forros curvos em drywall vistos durante a execução", span: "lg:col-span-2" },
    { src: "/projetos/predio-do-birman-32/05.jpeg", alt: "Divisórias e forro curvo com vista para a fachada envidraçada" },
    { src: "/projetos/predio-do-birman-32/04.jpeg", alt: "Estrutura metálica do forro e instalações antes das placas" },
    { src: "/projetos/predio-do-birman-32/11.jpeg", alt: "Pavimento com forros de drywall em fase de execução" },
  ] satisfies ProjectPhoto[],
} as const;
