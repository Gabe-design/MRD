import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  HOME_AREA,
  REGION,
  REMOTE_NOTE,
  SERVICE_AREA,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description = `${SITE_NAME} is a two-person digital studio designing and building polished, practical websites for local businesses in ${HOME_AREA} and across ${REGION}. ${REMOTE_NOTE}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} — Web Design in Conejo Valley & Ventura County`,
  description,
  keywords: [
    "web design Conejo Valley",
    "web design Ventura County",
    "Westlake Village web design",
    "Thousand Oaks web design",
    "small business website",
    "local business website design",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Web Design in Conejo Valley & Ventura County`,
    description,
  },
};

/**
 * Tells search engines what kind of business this is and where it works, which
 * is what a local result is built from. Deliberately claims no street address,
 * phone, or rating: everything here is something the site can stand behind.
 */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description,
  areaServed: [
    ...SERVICE_AREA.map((name) => ({ "@type": "City", name })),
    { "@type": "AdministrativeArea", name: "Ventura County" },
    { "@type": "AdministrativeArea", name: "Southern California" },
  ],
  knowsAbout: ["Web design", "Web development", "Small business websites"],
  founder: [
    { "@type": "Person", name: "Henry Moss" },
    { "@type": "Person", name: "Gabriel Ross" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Hides revealable blocks before the body paints, so they can fade in
            rather than appearing and then blinking out on hydration. Skipped
            entirely without an observer or under reduced motion, and undone if
            hydration never arrives. */}
        <script dangerouslySetInnerHTML={{ __html: "(function(){var d=document.documentElement;if(!('requestAnimationFrame' in window))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js-reveal');setTimeout(function(){if(!d.hasAttribute('data-reveal-ready'))d.classList.remove('js-reveal');},4000);})();" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
