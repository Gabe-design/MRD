/**
 * Facts about the studio that appear in more than one place: metadata, the
 * hero, the footer, and the structured data. Kept here so the service area
 * and contact details are edited once rather than hunted for.
 */

export const SITE_NAME = "Moss & Ross";

/**
 * Used for canonical and Open Graph URLs, so it has to be the domain we
 * actually serve from. Pointing it anywhere else tells search engines the
 * content belongs to that other site.
 */
export const SITE_URL = "https://mrdstudios.tech";

/** Where we are, in the phrasing used in body copy. */
export const HOME_AREA = "the Conejo Valley";

/** The wider region we actively market to. */
export const REGION = "Ventura County and greater Southern California";

/**
 * Towns named for local search. These are the places a nearby customer would
 * actually type, so they appear verbatim in the footer.
 */
export const SERVICE_AREA = [
  "Westlake Village",
  "Thousand Oaks",
  "Agoura Hills",
  "Newbury Park",
  "Camarillo",
  "Simi Valley",
  "Moorpark",
  "Calabasas",
];

/**
 * Local is where we focus, but the work itself is remote, and we already have
 * clients outside California. Said plainly so distance never reads as a no.
 */
export const REMOTE_NOTE =
  "We work remotely with businesses anywhere in the country.";

/**
 * The public inbox. Left empty until the studio address is decided: every
 * consumer hides its mailto rather than shipping a placeholder that bounces.
 * Set this to the real address to turn those links back on.
 *
 * Note this is only the address shown to visitors. Inquiries submitted through
 * the form are delivered by functions/api/inquiry.js to whatever INQUIRY_TO is
 * set to in Cloudflare, so the form works whether or not this is filled in.
 */
export const CONTACT_EMAIL: string = "";
