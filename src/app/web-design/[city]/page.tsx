import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPage from "@/components/CityPage";
import { CITIES, getCity } from "@/lib/cities";
import { STARTING_PRICE } from "@/lib/pricing";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * One route for every town in lib/cities, prerendered at build time. The site
 * is a static export, so this list is the complete set: a slug that is not
 * here has no page rather than a runtime 404.
 */
export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

type Params = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const title = `Web Design in ${city.name} | ${SITE_NAME}`;
  const description = `Websites for ${city.name} businesses from ${STARTING_PRICE}, built by a two-person studio in the Conejo Valley. See a working demo before you pay anything.`;
  const path = `/web-design/${city.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title,
      description,
    },
  };
}

export default async function Page({ params }: Params) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  /**
   * Two blocks, doing different jobs. The service says who serves this town,
   * which is what a local result is assembled from; the FAQ carries the
   * town-specific answers, which is what gets lifted into a rich result or an
   * AI answer. Both claim only what the page itself says.
   */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Web design and development",
        provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
        areaServed: { "@type": "City", name: city.name },
        description: city.intro,
        offers: {
          "@type": "Offer",
          price: STARTING_PRICE.replace("$", ""),
          priceCurrency: "USD",
          description: `Websites for ${city.name} businesses, starting at ${STARTING_PRICE}.`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityPage city={city} />
    </>
  );
}
