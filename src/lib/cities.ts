/**
 * The towns that get their own page.
 *
 * Four, not all eight in SERVICE_AREA. A page per town is only worth having if
 * it says something the others do not: search engines discount near-duplicate
 * location pages, and a reader who lives here spots a find-and-replace job
 * immediately. Every field below is written per town for that reason, and a
 * fifth town should only be added when there is genuinely something to say
 * about it.
 *
 * Nothing here claims work we have not done. The studio has no local clients
 * yet, so the copy is about knowing the market and what we would build for it,
 * never about who we have already built it for. That constraint matches the
 * homepage FAQ, which says plainly that the portfolio is concept work.
 */

export type City = {
  slug: string;
  name: string;
  /** Sits in the eyebrow above the headline. */
  region: string;
  headline: string;
  /** The hero paragraph. */
  intro: string;
  /** Body paragraphs on what this particular market is like. */
  context: string[];
  /** Places a resident would recognise, used to show we actually know it. */
  landmarks: string[];
  /** The trades that actually matter here, with a reason each. */
  industries: { name: string; note: string }[];
  /** Questions a business owner in this town would really ask. */
  faq: { q: string; a: string }[];
  /** Slugs of the other city pages worth crossing to from here. */
  nearby: string[];
};

export const CITIES: City[] = [
  {
    slug: "thousand-oaks",
    name: "Thousand Oaks",
    region: "Conejo Valley · Ventura County",
    headline: "Web design in Thousand Oaks.",
    intro:
      "The biggest city in the Conejo Valley, and the one where a customer searching for you has the most other options on the same screen. We build sites that answer their question before they scroll back to the results.",
    context: [
      "Thousand Oaks is a town of established businesses with real competition. A dentist on Thousand Oaks Boulevard is not competing with a bad website across the county, they are competing with four good ones within a two-mile drive. That changes what a site has to do: it is not enough to exist and look tidy, it has to make the case and make the next step obvious.",
      "It is also a town where Amgen and the businesses around it have set a baseline for what people expect a professional website to look like. Residents here see well-made software all day. A site that looks like it was assembled from a template in 2015 reads as a signal about the business behind it, fairly or not.",
      "The upside is that the searches are worth having. Households here have money to spend on services and a habit of researching before they call, which means the visitor who finds you has already decided they might buy. Losing them to a slow page or a hidden phone number is expensive in a way it is not everywhere.",
    ],
    landmarks: [
      "Thousand Oaks Boulevard",
      "The Oaks",
      "Janss Marketplace",
      "Newbury Park",
    ],
    industries: [
      {
        name: "Dental and medical practices",
        note: "New-patient forms, insurance answered up front, and a booking path that works on a phone at 9pm.",
      },
      {
        name: "Professional services",
        note: "Attorneys, accountants, and financial advisors, where the site's job is credibility and a low-friction first contact.",
      },
      {
        name: "Home services",
        note: "Large lots and older houses mean steady work. The site needs photos of finished jobs and a clear service area.",
      },
      {
        name: "Fitness and wellness",
        note: "Class schedules, trial offers, and a signup that does not ask for a phone call first.",
      },
    ],
    faq: [
      {
        q: "Can you help me show up for searches in Thousand Oaks specifically?",
        a: "We build the things that actually feed local results: accurate page titles that name the town, clean structure, fast loading, and a properly filled-out Google Business Profile, which is what puts you in the map pack. What we will not do is promise a ranking. Anyone who promises you position one for a competitive Thousand Oaks search is guessing.",
      },
      {
        q: "There are a lot of web designers here. Why you?",
        a: "Price and access, mostly. We are two people with no office and no account managers, so a site here starts at $850 rather than the $5,000 an agency in the same zip code will quote. And you deal with whichever of us is building your site, not a project manager relaying messages.",
      },
      {
        q: "Do you work with businesses in Newbury Park?",
        a: "Yes. Newbury Park is part of Thousand Oaks, and we treat it the same way. If your customers search for Newbury Park rather than Thousand Oaks, we write the site to match how they actually search.",
      },
    ],
    nearby: ["westlake-village", "agoura-hills", "simi-valley"],
  },
  {
    slug: "westlake-village",
    name: "Westlake Village",
    region: "Conejo Valley · On the county line",
    headline: "Web design in Westlake Village.",
    intro:
      "A small town with a customer base that expects things to be well made. We are based here, which means we know the difference between a site that looks expensive and one that reads as trustworthy.",
    context: [
      "Westlake Village is small, and that shapes the work. Businesses here run on reputation and referral more than on volume, so the website is usually not the first time someone hears your name. It is the place they check afterwards to see whether the recommendation holds up. That makes the job less about capturing strangers and more about not losing people who already half-decided.",
      "The town also sits on the Los Angeles and Ventura county line, which quietly matters for search. Someone in Westlake Village searching for a service may see results pulled from either county, and businesses that never say which side they are on get filtered out of both. Naming your area plainly on the page is unglamorous and it works.",
      "Expectations here are high and the tolerance for looking cheap is low. That is not about ornament, it is about restraint: generous spacing, real photographs, type that is easy to read, and no stock image of a handshake. A site can be simple and still read as considered, and in this town that combination does more than anything flashy.",
    ],
    landmarks: [
      "The Promenade",
      "Westlake Lake",
      "Agoura Road",
      "Lindero Canyon",
    ],
    industries: [
      {
        name: "Boutique professional services",
        note: "Small practices where one partner is the brand and the site has to carry that without overstating it.",
      },
      {
        name: "Medical aesthetics and wellness",
        note: "Treatment pages that explain plainly, real before-and-afters, and a consultation request that is easy to send.",
      },
      {
        name: "Financial and legal advisors",
        note: "Credibility first: who you are, who you work with, and what happens on the first call.",
      },
      {
        name: "High-end home services",
        note: "Designers, builders, and specialty trades whose work sells itself if the photographs are given room.",
      },
    ],
    faq: [
      {
        q: "You are based here. Does that actually make a difference?",
        a: "For some things, yes. We can meet you in person, we know the roads your customers describe, and we know which nearby towns your service area should mention. For the build itself it makes less difference than people expect, because the work is the same wherever it happens. We would rather be honest about that than sell you on local for its own sake.",
      },
      {
        q: "My business is in Westlake Village but half my clients are in LA County. How should the site handle that?",
        a: "Say both, plainly, on the page. Sitting on the county line is an advantage if the site names the towns on each side, and a problem if it names none of them. We list the areas you actually serve rather than stuffing in every town within thirty miles, which search engines have been discounting for years.",
      },
      {
        q: "Can you match the look of my existing brand?",
        a: "Yes. If you have a logo, colors, or printed material we design around them. If you do not, we will build something simple and consistent that you can carry into signage and cards later. We are not going to talk you into a rebrand you did not ask for.",
      },
    ],
    nearby: ["thousand-oaks", "agoura-hills"],
  },
  {
    slug: "agoura-hills",
    name: "Agoura Hills",
    region: "Los Angeles County · Gateway to the canyons",
    headline: "Web design in Agoura Hills.",
    intro:
      "Where the Conejo Valley runs into the Santa Monica Mountains, and where a lot of businesses are found by people who are already outdoors with a phone in their hand. That should shape the site.",
    context: [
      "Agoura Hills has a different character to the towns on the Ventura side. The canyon roads to Malibu, the trailheads, and Old Agoura's equestrian streets pull in visitors who are not local and are searching on a phone, often on a weak signal. A heavy site that takes eight seconds to load loses those people before it has said anything.",
      "That makes speed and mobile layout less of a technical footnote and more of the actual product here. We build phones-first for every client, but in this town it is the difference between getting the call and not: someone parked at a trailhead deciding where to eat is not waiting around for a hero video to buffer.",
      "The trades do well here too, and for a specific reason. Hillside lots, older properties, canyon access, and fire-code work all generate steady demand for contractors, landscapers, and specialty services. Those businesses usually have good photographs of finished work sitting unused on a phone. Putting them on the page, organized by type of job, does more than any amount of copy about craftsmanship.",
    ],
    landmarks: [
      "Kanan Road",
      "Old Agoura",
      "Reyes Adobe",
      "The Santa Monica Mountains",
    ],
    industries: [
      {
        name: "Contractors and specialty trades",
        note: "Hillside and canyon properties mean steady work. Photograph galleries sorted by job type, and a quote form that asks the right questions.",
      },
      {
        name: "Landscaping and outdoor construction",
        note: "The finished work is the sales pitch. Gallery first, paragraphs second.",
      },
      {
        name: "Restaurants and cafes",
        note: "Hours, menu, and directions readable in three seconds on a phone with two bars of signal.",
      },
      {
        name: "Equestrian and outdoor services",
        note: "A small, specific audience that is easy to reach if the site names what it does without hedging.",
      },
    ],
    faq: [
      {
        q: "A lot of my customers are visitors, not locals. Does that change the site?",
        a: "It changes what goes at the top. For a business that gets found by people passing through, hours, location, and how to contact you belong above everything else, because that is the entire question a visitor has. The story about your business still matters, it just does not go first.",
      },
      {
        q: "My customers are often on bad signal in the canyons. Can you make the site fast enough?",
        a: "That is a real constraint and we design around it. Sites we build are static, which means the page is already made before anyone asks for it, images are compressed and correctly sized, and there is nothing loading in the background that the visitor did not ask for. It is the single biggest thing you can do for someone on one bar.",
      },
      {
        q: "Do you serve Calabasas and Oak Park too?",
        a: "Yes, along with the rest of the Conejo Valley and the western San Fernando Valley. Agoura Hills sits in the middle of several markets and we will write the service area to match wherever your customers actually come from.",
      },
    ],
    nearby: ["westlake-village", "thousand-oaks"],
  },
  {
    slug: "simi-valley",
    name: "Simi Valley",
    region: "Ventura County",
    headline: "Web design in Simi Valley.",
    intro:
      "A bigger, more practical market than the Conejo, and one where a fair price matters more than a fashionable one. That happens to be what we are built for.",
    context: [
      "Simi Valley runs on trades and family businesses. Plumbers, roofers, HVAC, auto shops, landscapers: the kind of work where the customer is often in a hurry and the website's only job is to prove you are real and get them to the phone. That is a narrower job than most agencies design for, and doing it well means resisting the urge to add things.",
      "Prices here are also more grounded than a mile down the 23. A quote of five or six thousand dollars for a small business website is not just expensive in this market, it is disqualifying, and plenty of good businesses have ended up on a free page builder because that was the only other option they were shown. There is a lot of room between those two, and that gap is most of who we built the studio for.",
      "The other thing that matters here is emergency intent. A homeowner with water coming through a ceiling is not reading your about page. They are looking for a phone number, a service area that includes their street, and some sign that you answer. Building for that specific moment is unglamorous work and it is what actually generates calls.",
    ],
    landmarks: [
      "Los Angeles Avenue",
      "The Reagan Library",
      "Simi Town Center",
      "Tapo Canyon",
    ],
    industries: [
      {
        name: "Home services and trades",
        note: "Phone number everywhere, service area named street by street, and photographs of real finished jobs.",
      },
      {
        name: "Auto and repair",
        note: "Services, hours, and location answered immediately, because most of these searches are urgent.",
      },
      {
        name: "Family and community businesses",
        note: "Studios, schools, clinics, and shops where the site needs to feel like the people who run it.",
      },
      {
        name: "Emergency services",
        note: "Built for the two-in-the-morning search: fast, obvious, and impossible to get lost in.",
      },
    ],
    faq: [
      {
        q: "I have been quoted $6,000 for a website. Is that normal?",
        a: "It is normal for an agency, and it is more than most Simi Valley businesses need to spend. That number covers an office, account managers, and a sales team. Our builds start at $850 and most land at $1,650, because there are two of us and none of that overhead. Whether the more expensive quote is worth it depends on what is in it, and you should ask them to show you.",
      },
      {
        q: "Most of my calls are emergencies. What should the site do?",
        a: "Put the phone number in the header where it is tappable on a phone, say your hours and whether you answer after them, and name the neighborhoods you cover so nobody has to guess. Everything else on the site can wait, because in that moment the customer has exactly one question.",
      },
      {
        q: "I already have a website but it is old. Rebuild or fix?",
        a: "We will tell you honestly on the first call, and sometimes the answer is fix. If the structure is sound and it is only dated, that is cheaper than starting over. If it is slow, unreadable on a phone, or built on something that is no longer supported, patching it costs more over time than replacing it.",
      },
    ],
    nearby: ["thousand-oaks", "westlake-village"],
  },
];

/** Slug lookup for the route. */
export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/** The towns that have a page, for linking from the footer. */
export const CITY_SLUGS = new Map(CITIES.map((c) => [c.name, c.slug]));
