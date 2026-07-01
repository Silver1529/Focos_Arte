import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Qualidades permitidas para o otimizador do next/image.
    // 75 = padrão (logos); 90 = fotos da galeria/lightbox (mais nítidas).
    qualities: [75, 90],
  },
};

export default nextConfig;
