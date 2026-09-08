import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import PatternBackdrop from "@/components/PatternBackdrop";
import Reveal from "@/components/Reveal";
import {
  BUILD_TIERS,
  CARE_PLANS,
  IN_EVERY_BUILD,
  PRICING_FAQ,
  STARTING_PRICE,
} from "@/lib/pricing";
import { SITE_NAME, HOME_AREA } from "@/lib/site";

const description = `Website pricing from ${STARTING_PRICE}, published in full. Fixed build prices, optional monthly care plans, and a working demo before you pay anything. ${SITE_NAME}, a two-person studio in ${HOME_AREA}.`;

export const metadata: Metadata = {
  title: `Pricing — Websites from ${STARTING_PRICE} | ${SITE_NAME}`,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "/pricing",
    siteName: SITE_NAME,
    title: `Pricing — Websites from ${STARTING_PRICE} | ${SITE_NAME}`,
    description,
  },
};

/**
 * The pricing FAQ, marked up so the answers can be lifted into a search result
 * or an AI answer. Only the questions on this page: the homepage FAQ carries
 * its own, and one page claiming another's questions would be inaccurate.
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/** The three promises that already appear on the homepage, restated where the
    money is, because that is where they answer a real hesitation. */
const guarantees = [
  {
    title: "Nothing Up Front",
    body: "You see a working demo of your own site before you pay a cent. If it isn't right, you walk away owing nothing.",
  },
  {
    title: "The Quote Is the Price",
    body: "You get the full cost in writing before we start. What we quote is what you pay, and extras get priced before they get built.",
  },
  {
    title: "We Own Our Deadlines",
    body: "If we miss the agreed delivery date, the next milestone is on us. We build realistic timelines and stick to them.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors"
          >
            <ArrowLeft size={14} /> Moss &amp; Ross
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-clay hover:bg-clay-dark text-ivory text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 transition-colors"
          >
            Start With a Free Demo
          </Link>
        </div>
      </header>

      <main>
        <section className="relative bg-charcoal overflow-hidden">
          {/* The same backdrop as the home hero, running fainter: there is no
              brand animation on this page to sit against, and a scrim keeps the
              left side dark enough for the headline over the bright stretch. */}
          <PatternBackdrop
            align="centre"
            className="mask-feather-x opacity-20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40"
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
            <Reveal className="max-w-3xl">
              <div className="w-10 h-1 bg-clay mb-10" aria-hidden="true" />

              <p className="text-clay text-xs font-medium uppercase tracking-[0.25em] mb-6">
                Pricing · Published in Full
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-ivory leading-[1.1] tracking-tight mb-8">
                Here are the prices. No call required.
              </h1>

              <p className="text-lg sm:text-xl text-sand max-w-2xl mb-12 leading-relaxed">
                Most studios around here make you book a call to hear a number.
                We would rather you knew before you picked up the phone, so you
                can tell in a minute whether we are worth your time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-200"
                >
                  Start With a Free Demo <ArrowRight size={16} />
                </Link>
                <a
                  href="#care"
                  className="inline-flex items-center justify-center gap-2 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] border border-ivory/25 hover:border-ivory/50 transition-colors duration-200"
                >
                  See Care Plans
                </a>
              </div>
              <p className="text-sand/80 text-sm">
                Websites from {STARTING_PRICE}. You pay nothing until you have
                seen your own site working.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="builds" className="bg-ivory py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-16">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                The Build
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
                One price, paid once, for the site itself.
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                Every tier is a finished website: designed, written, built, and
                launched. The difference between them is how many pages you need
                and how much the site has to do.
              </p>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {BUILD_TIERS.map((tier, i) => (
                <Reveal
                  key={tier.name}
                  delay={i * 90}
                  className={`flex flex-col bg-white p-8 ${
                    tier.featured
                      ? "border-2 border-clay"
                      : "border border-charcoal/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-charcoal font-medium text-xs uppercase tracking-[0.2em]">
                      {tier.name}
                    </h3>
                    {tier.featured && (
                      <span className="text-clay text-[10px] font-semibold uppercase tracking-[0.18em]">
                        Most Projects
                      </span>
                    )}
                  </div>

                  <p className="text-charcoal text-4xl font-medium tracking-tight mb-1">
                    {tier.price}
                  </p>
                  <p className="text-charcoal/50 text-sm mb-6">{tier.scope}</p>

                  <p className="text-charcoal/60 leading-relaxed mb-8">
                    {tier.summary}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className="text-clay shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-charcoal/75 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Pushed to the bottom so the buttons line up across cards
                      whose feature lists are different lengths. */}
                  <Link
                    href="/#contact"
                    className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                      tier.featured
                        ? "bg-clay hover:bg-clay-dark text-ivory"
                        : "border border-charcoal/20 text-charcoal hover:border-charcoal/50"
                    }`}
                  >
                    Start With a Free Demo
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory-deep py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-14">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                In Every Build
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight">
                The parts that are never an upsell.
              </h2>
            </Reveal>

            <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {IN_EVERY_BUILD.map((item, i) => (
                <Reveal
                  key={item}
                  delay={(i % 2) * 80}
                  className="flex items-start gap-4 border-t border-charcoal/10 pt-5"
                >
                  <Check
                    size={18}
                    className="text-clay shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-charcoal/75 leading-relaxed">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="care" className="bg-ivory py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-16">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                After Launch
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
                Care plans, if you want one.
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                A website needs hosting, updates, and someone to change the
                hours when they change. You can hand all of that to us monthly,
                or take the site and run it wherever you like. Both are fine,
                and neither changes the build price.
              </p>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {CARE_PLANS.map((plan, i) => (
                <Reveal
                  key={plan.name}
                  delay={i * 90}
                  className={`flex flex-col bg-white p-8 ${
                    plan.featured
                      ? "border-2 border-clay"
                      : "border border-charcoal/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-charcoal font-medium text-xs uppercase tracking-[0.2em]">
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="text-clay text-[10px] font-semibold uppercase tracking-[0.18em]">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <p className="text-charcoal text-3xl font-medium tracking-tight mb-1">
                    {plan.price}
                    <span className="text-charcoal/40 text-base font-normal">
                      {" "}
                      / month
                    </span>
                  </p>
                  <p className="text-charcoal/60 leading-relaxed mt-4 mb-7">
                    {plan.summary}
                  </p>

                  <ul className="space-y-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className="text-clay shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-charcoal/75 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <p className="text-charcoal/50 text-sm">
                Cancel or change plans any time with a month&apos;s notice. The
                site is yours either way, and we help you move it.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-charcoal py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-12">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                What You Are Covered On
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-ivory tracking-tight">
                The risk is ours, not yours.
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {guarantees.map((g, i) => (
                <Reveal
                  key={g.title}
                  delay={i * 90}
                  className="border-t border-ivory/20 pt-6"
                >
                  <h3 className="text-ivory font-medium text-lg mb-3">
                    {g.title}
                  </h3>
                  <p className="text-sand leading-relaxed">{g.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory-deep py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal className="mb-14">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                Questions About Price
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight">
                The things people ask once they see a number.
              </h2>
            </Reveal>

            <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
              {PRICING_FAQ.map((item, i) => (
                <Reveal key={item.q} delay={(i % 3) * 70} className="py-7">
                  <h3 className="text-charcoal font-medium text-lg mb-3">
                    {item.q}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">{item.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-24 px-6">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
              Still cheaper to find out than to wonder.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
              Tell us about your business and we will build you a working demo.
              You look at it on your own phone before any money changes hands,
              and if it is not right, that is the end of it.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/85 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors"
            >
              Start With a Free Demo <ArrowRight size={16} />
            </Link>
          </Reveal>
        </section>
      </main>

      <footer className="bg-charcoal px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Moss &amp; Ross
          </Link>
          <p className="text-sand/50 text-xs">
            Prices apply to new builds in {HOME_AREA} and remotely.
          </p>
        </div>
      </footer>
    </div>
  );
}
