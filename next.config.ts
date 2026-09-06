import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  // Cloudflare Pages serves the exported site from out/. Every route here is
  // prerendered, so nothing is lost by exporting; the inquiry form is handled
  // by a Pages Function in functions/ rather than a Next route handler.
  output: "export",
  trailingSlash: true,
  // Static export cannot run the default image optimiser. Any images added
  // later should be pre-sized WebP committed to public/.
  images: { unoptimized: true },
};

export default nextConfig;
