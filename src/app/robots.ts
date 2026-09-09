import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Emitted to out/robots.txt at build time.
 *
 * The point of this file is the Sitemap line: without it a crawler only finds
 * the sitemap if it happens to guess the path. Nothing is disallowed, because
 * there is nothing on the site we would rather people did not read.
 *
 * Note that Cloudflare can serve its own managed robots.txt, which is what the
 * live domain returned before this existed: a header of AI content-signal
 * comments and no actual directives. If the deployed robots.txt still looks
 * like that, the managed setting is winning and has to be turned off in the
 * Cloudflare dashboard for this file to take effect.
 */
/** Required by `output: export`, same as sitemap.ts. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
