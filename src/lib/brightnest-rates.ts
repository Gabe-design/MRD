// BrightNest Cleaning — published rate card and the deterministic baseline
// estimate derived from it.
//
// This is the single source of truth for pricing. It lives client-side on
// purpose: these are the same numbers a real cleaning company prints on its
// services page, so there is nothing to hide, and keeping the arithmetic in
// the browser means the estimator still produces a usable figure when
// /api/estimate is unreachable — which is always the case under `next dev`,
// where Cloudflare Pages Functions do not exist.
//
// BrightNest is a fictional business. These rates are invented for the demo.

export const SERVICES = [
  "Standard Clean",
  "Deep Clean",
  "Move-In / Move-Out",
] as const;

export type Service = (typeof SERVICES)[number];

export const HOME_SIZES = ["1–2 bedrooms", "3 bedrooms", "4+ bedrooms"] as const;
export type HomeSize = (typeof HOME_SIZES)[number];

export const FREQUENCIES = ["One-off", "Fortnightly", "Weekly"] as const;
export type Frequency = (typeof FREQUENCIES)[number];

/** Hourly rate in GBP, by service. */
const HOURLY: Record<Service, number> = {
  "Standard Clean": 22,
  "Deep Clean": 26,
  "Move-In / Move-Out": 26,
};

/** Baseline hours for a Standard Clean, by home size: [low, high]. */
const STANDARD_HOURS: Record<HomeSize, [number, number]> = {
  "1–2 bedrooms": [2.5, 3],
  "3 bedrooms": [3, 4],
  "4+ bedrooms": [4, 5.5],
};

/** Multiplier applied to Standard hours for the heavier services. */
const HOURS_MULTIPLIER: Record<Service, number> = {
  "Standard Clean": 1,
  "Deep Clean": 1.7,
  "Move-In / Move-Out": 2,
};

/** Discount on the hourly rate for a recurring plan. */
const FREQUENCY_DISCOUNT: Record<Frequency, number> = {
  "One-off": 0,
  Fortnightly: 0.1,
  Weekly: 0.15,
};

export type Baseline = {
  service: Service;
  homeSize: HomeSize;
  frequency: Frequency;
  hoursLow: number;
  hoursHigh: number;
  priceLow: number;
  priceHigh: number;
  hourlyRate: number;
  discountPct: number;
};

const round = (n: number, step: number) => Math.round(n / step) * step;

/**
 * The rate-card estimate, before anything the visitor wrote is taken into
 * account. Pure arithmetic — no network, no model, always available.
 */
export function baselineEstimate(
  service: Service,
  homeSize: HomeSize,
  frequency: Frequency,
): Baseline {
  const [lo, hi] = STANDARD_HOURS[homeSize];
  const mult = HOURS_MULTIPLIER[service];
  const hoursLow = round(lo * mult, 0.5);
  const hoursHigh = round(hi * mult, 0.5);

  const discountPct = FREQUENCY_DISCOUNT[frequency];
  const hourlyRate = Math.round(HOURLY[service] * (1 - discountPct));

  return {
    service,
    homeSize,
    frequency,
    hoursLow,
    hoursHigh,
    priceLow: round(hoursLow * hourlyRate, 5),
    priceHigh: round(hoursHigh * hourlyRate, 5),
    hourlyRate,
    discountPct,
  };
}

/** What each service covers as standard. Shown when the model is unavailable. */
export const STANDARD_INCLUSIONS: Record<Service, string[]> = {
  "Standard Clean": [
    "Kitchen surfaces and floors",
    "Bathrooms top to bottom",
    "Dusting and vacuuming throughout",
    "Bins emptied, beds made",
  ],
  "Deep Clean": [
    "Everything in a Standard Clean",
    "Inside the oven and fridge",
    "Skirting boards and door frames",
    "Under furniture and interior windows",
  ],
  "Move-In / Move-Out": [
    "Full deep clean of empty rooms",
    "Inside all cupboards",
    "Appliances inside and out",
    "Handover checklist provided",
  ],
};
