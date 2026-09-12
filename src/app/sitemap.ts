import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { SITE_URL } from "@/lib/site";

/**
 * Emitted to out/sitemap.xml at build time, since the site is a static export
 * and there is no server to generate one per request.
 *
 * Town pages are read from lib/cities so adding a fifth town updates this
 * automatically. The concept slugs are listed by hand because they live in
 * Concepts.tsx as component data rather than a shared constant; adding a
 * fourth concept means adding it here too.
 *
 * Trailing slashes are deliberate. next.config sets trailingSlash, so the
 * slashless form serves a 308 redirect, and pointing a crawler at a redirect
 * for every URL wastes the crawl for no reason.
 */

/**
 * The concept case studies, but not their /demo routes. The demos are complete
 * websites for businesses we invented, and a fictional landscaping company
 * ranking for real searches would compete with the actual clients these pages
 * exist to win. They stay reachable, they just are not advertised.
 */
const CONCEPTS = [
  "summit-landscapes",
  "fade-and-co",
  "brightnest-cleaning",
];

/**
 * Required by `output: export`. Next treats sitemap.ts as a route handler, and
 * without this it refuses to build one it cannot serve dynamically. It also
 * fixes the date below at build time, which is what we want.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * Deploy time, not content-change time: a static export has no record of
   * when any individual page was last edited. Every page therefore carries the
   * same date, which is honest about what it means rather than inventing
   * per-page history.
   */
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      priority: 1,
    },
    {
      url: `${SITE_URL}/pricing/`,
      lastModified,
      priority: 0.9,
    },
    /**
     * The community track page, but not its template-preview route. That
     * route is placeholder content for a nonprofit that does not exist,
     * marked noindex and linked from nowhere on purpose.
     */
    {
      url: `${SITE_URL}/community/`,
      lastModified,
      priority: 0.8,
    },
    ...CITIES.map((city) => ({
      url: `${SITE_URL}/web-design/${city.slug}/`,
      lastModified,
      priority: 0.8,
    })),
    ...CONCEPTS.map((slug) => ({
      url: `${SITE_URL}/concepts/${slug}/`,
      lastModified,
      priority: 0.6,
    })),
  ];
}
