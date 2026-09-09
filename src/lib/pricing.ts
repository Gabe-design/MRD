/**
 * Every number the studio publishes, in one place.
 *
 * These appear on the pricing page and in the homepage FAQ, so a price change
 * is one edit here rather than a hunt through copy. Deliberately set below the
 * local market: agencies in the Conejo Valley quote $5,000 and up for the same
 * scope, and undercutting them plainly is the point of publishing at all.
 *
 * If a tier's price changes, change `note` with it. The two are read together
 * and a stale note is worse than none.
 */

/** Shown wherever a starting price is quoted in prose. */
export const STARTING_PRICE = "$850";

export type BuildTier = {
  name: string;
  price: string;
  /** Sits under the price. Keep it to a scope, not a sales line. */
  scope: string;
  summary: string;
  includes: string[];
  /** Exactly one tier should carry this. */
  featured?: boolean;
};

/**
 * Three tiers, because two reads as a choice between cheap and expensive and
 * four makes people stall. The middle one is flagged: most small businesses
 * need five to seven pages, and saying so stops the starter tier from becoming
 * a default that under-serves them.
 */
export const BUILD_TIERS: BuildTier[] = [
  {
    name: "Starter",
    price: "$850",
    scope: "One to three pages",
    summary:
      "For a business that has no website at all and needs to be findable, credible, and easy to contact.",
    includes: [
      "Custom mobile-first design",
      "Up to three pages",
      "Contact or quote form",
      "Page titles, descriptions, and fast load times",
      "Google Business Profile setup walkthrough",
      "Two revision rounds",
      "Domain, hosting, and launch handled",
    ],
  },
  {
    name: "Essential",
    price: "$1,650",
    scope: "Five to seven pages",
    summary:
      "Where most projects land. Room for your services, your work, and the pages that answer a customer's questions before they call.",
    featured: true,
    includes: [
      "Everything in Starter",
      "Five to seven pages",
      "Service pages written around what you actually sell",
      "Photo gallery or project showcase",
      "Quote request form with the fields you need",
      "Local search setup for your service area",
      "Three revision rounds",
    ],
  },
  {
    name: "Complete",
    price: "from $2,900",
    scope: "Eight or more pages",
    summary:
      "For businesses that need the site to do a job: take bookings, sort enquiries, or carry a large catalogue of work.",
    includes: [
      "Everything in Essential",
      "Eight or more pages",
      "Booking or scheduling flow",
      "Custom features built for how you work",
      "Content written from your notes and photos",
      "Four revision rounds",
      "Priority scheduling",
    ],
  },
];

export type CarePlan = {
  name: string;
  price: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

/**
 * Optional and after launch, never bundled into the build price. A site the
 * studio does not host still gets handed over cleanly, which is what makes
 * the plans an offer rather than a lock-in.
 */
export const CARE_PLANS: CarePlan[] = [
  {
    name: "Essentials",
    price: "$49",
    summary: "Keeps the site online, current, and backed up.",
    includes: [
      "Hosting, SSL, and domain renewal",
      "Weekly backups",
      "Uptime monitoring",
      "Security and platform updates",
    ],
  },
  {
    name: "Standard",
    price: "$99",
    summary: "The above, plus a person who changes things when you ask.",
    featured: true,
    includes: [
      "Everything in Essentials",
      "Up to one hour of content edits a month",
      "Seasonal updates: hours, prices, promotions",
      "Two-business-day turnaround",
    ],
  },
  {
    name: "Priority",
    price: "$179",
    summary: "For businesses whose site changes often and cannot be down.",
    includes: [
      "Everything in Standard",
      "Unlimited small edits",
      "Same-business-day turnaround",
      "New pages and sections as you grow",
      "Quarterly search and speed review",
    ],
  },
];

/**
 * What every build carries regardless of tier. Kept separate from the tier
 * lists so the cards stay scannable and nothing important reads as an upsell.
 */
export const IN_EVERY_BUILD = [
  "A working demo before you pay anything",
  "Designed for phones first, then scaled up",
  "Written and structured for search engines",
  "Contact goes straight to your inbox",
  "You own the domain, the site, and the content",
  "One person runs your project start to finish",
];

/** Questions that only come up once a price is on the page. */
export const PRICING_FAQ = [
  {
    q: "Is this really the whole price?",
    a: "Yes. You get the full cost in writing before any work starts, and the number on your quote is the number you pay. The only way it changes is if you ask for something outside what we agreed, and we tell you the cost of that before we build it.",
  },
  {
    q: "Why are you cheaper than the agencies?",
    a: "There are two of us and no office, no account managers, and no sales team. The same work at a Conejo Valley agency carries the cost of all three. We would rather charge less and stay busy than charge more and wait.",
  },
  {
    q: "What do I pay up front?",
    a: "Nothing. We build you a working demo first, and you look at it on your own phone before any money changes hands. If it is not right, you do not pay. Once you are happy we take half to begin the full build and the rest at launch.",
  },
  {
    q: "Do I have to take a care plan?",
    a: "No. The plans are optional and start after launch. If you would rather host the site yourself or have someone else look after it, we hand over the domain, the files, and everything you need to run it elsewhere.",
  },
  {
    q: "Can I change plans or cancel?",
    a: "Change or cancel any time with a month's notice. Cancelling a plan does not cost you the site: it is yours, and we help you move it wherever you want it.",
  },
  {
    q: "What if my project does not fit a tier?",
    a: "Say what you need on the first call and we will quote it. The tiers cover most local businesses, but they are a starting point rather than a menu you have to pick from.",
  },
];
