import type { Metadata, Viewport } from "next";
import { Archivo, Barlow } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import { WhatsAppProvider } from "@/components/whatsapp-ui";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Em produção na Vercel usa o domínio de produção automaticamente
// (adapta sozinho quando o domínio próprio for configurado).
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tiger Gesso — Soluções em Gesso & Drywall",
    template: "%s · Tiger Gesso",
  },
  description:
    "Forros, sancas, divisórias e paredes 3D executados por equipe própria, com acabamento impecável e garantia. Mais de 30 anos de mercado. Peça seu orçamento pelo WhatsApp.",
  keywords: [
    "gesso",
    "drywall",
    "forro de gesso",
    "sancas",
    "divisórias",
    "paredes 3D",
    "molduras",
    "rodateto",
    "Tiger Gesso",
  ],
  openGraph: {
    title: "Tiger Gesso — Soluções em Gesso & Drywall",
    description:
      "Forros, sancas, divisórias e paredes 3D com equipe própria, acabamento impecável e garantia. Mais de 30 anos de mercado.",
    url: siteUrl,
    siteName: "Tiger Gesso",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiger Gesso — Soluções em Gesso & Drywall",
    description:
      "Soluções completas em gesso e drywall com equipe própria e garantia.",
  },
  appleWebApp: {
    capable: true,
    title: "Tiger Gesso",
    statusBarStyle: "black",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${barlow.variable}`}>
      <body>
        <WhatsAppProvider>{children}</WhatsAppProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
