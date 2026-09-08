import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local company logos include a few SVGs in public/logos/companies/
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
