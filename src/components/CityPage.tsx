import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MapPin } from "lucide-react";
import PatternBackdrop from "@/components/PatternBackdrop";
import Reveal from "@/components/Reveal";
import { getCity, type City } from "@/lib/cities";
import { BUILD_TIERS, STARTING_PRICE } from "@/lib/pricing";
import { REMOTE_NOTE } from "@/lib/site";

/**
 * The shell every town page renders through. All of the per-town wording lives
 * in lib/cities; nothing here is written about a specific place, so the shape
 * stays consistent while the substance does not repeat.
 */
export default function CityPage({ city }: { city: City }) {
  const nearby = city.nearby
    .map((slug) => getCity(slug))
    .filter((c): c is City => Boolean(c));

  return (
    <div className="min-h-screen bg-ivory">
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
                {city.region}
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-ivory leading-[1.1] tracking-tight mb-8">
                {city.headline}
              </h1>

              <p className="text-lg sm:text-xl text-sand max-w-2xl mb-12 leading-relaxed">
                {city.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-200"
                >
                  Start With a Free Demo <ArrowRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] border border-ivory/25 hover:border-ivory/50 transition-colors duration-200"
                >
                  See Pricing
                </Link>
              </div>
              <p className="text-sand/80 text-sm">
                Websites from {STARTING_PRICE}. You see a working demo before
                you pay anything.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-24 px-6">
          <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
            <Reveal>
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                The Market
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-8">
                What building for {city.name} actually involves.
              </h2>
              {city.context.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-charcoal/60 text-lg leading-relaxed mb-5 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </Reveal>

            {/* Named so the page reads as written by someone who has been here,
                which is the whole point of having a page per town. */}
            <Reveal delay={100} className="lg:pt-16">
              <div className="border-l-2 border-clay pl-6">
                <p className="text-charcoal font-medium text-xs uppercase tracking-[0.2em] mb-5">
                  Around here
                </p>
                <ul className="space-y-3">
                  {city.landmarks.map((place) => (
                    <li key={place} className="flex items-start gap-3">
                      <MapPin
                        size={15}
                        className="text-clay shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span className="text-charcoal/70">{place}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory-deep py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-14">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                Who We Build For
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight">
                The businesses this town runs on.
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {city.industries.map((industry, i) => (
                <Reveal
                  key={industry.name}
                  delay={(i % 2) * 90}
                  className="bg-white border border-charcoal/10 p-7"
                >
                  <h3 className="text-charcoal font-medium text-lg mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">
                    {industry.note}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-14">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                What It Costs
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
                Published, so you do not have to call to find out.
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                The same prices apply in {city.name} as everywhere else we work.
                No local premium, no quote that depends on what your postcode
                suggests you can afford.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3 mb-10">
              {BUILD_TIERS.map((tier, i) => (
                <Reveal
                  key={tier.name}
                  delay={i * 90}
                  className={`bg-white p-7 ${
                    tier.featured
                      ? "border-2 border-clay"
                      : "border border-charcoal/10"
                  }`}
                >
                  <p className="text-charcoal font-medium text-xs uppercase tracking-[0.2em] mb-4">
                    {tier.name}
                  </p>
                  <p className="text-charcoal text-3xl font-medium tracking-tight mb-1">
                    {tier.price}
                  </p>
                  <p className="text-charcoal/50 text-sm">{tier.scope}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm uppercase tracking-[0.15em] border-b-2 border-clay pb-1 hover:text-clay transition-colors"
              >
                See what each tier includes <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-charcoal py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-12">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-ivory tracking-tight">
                Nothing to pay until you have seen it.
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "A free call",
                  body: `Tell us how your business works and who your customers in ${city.name} actually are. Nothing to prepare.`,
                },
                {
                  step: "02",
                  title: "A working demo",
                  body: "We build a real version of your site and send you a link. You open it on your own phone and decide.",
                },
                {
                  step: "03",
                  title: "Launch",
                  body: "If it is right, we finish it, handle the domain and hosting, and put it live. If not, you owe nothing.",
                },
              ].map((s, i) => (
                <Reveal
                  key={s.step}
                  delay={i * 90}
                  className="border-t border-ivory/20 pt-6"
                >
                  <p className="text-clay text-sm font-medium mb-3">{s.step}</p>
                  <h3 className="text-ivory font-medium text-lg mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sand leading-relaxed">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory-deep py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal className="mb-14">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                Questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight">
                What {city.name} businesses ask us.
              </h2>
            </Reveal>

            <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
              {city.faq.map((item, i) => (
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
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-medium text-charcoal tracking-tight mb-4">
                We work across the Conejo Valley.
              </h2>
              <p className="text-charcoal/60 leading-relaxed">
                {REMOTE_NOTE}
              </p>
            </Reveal>

            <div className="flex flex-wrap gap-3">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/web-design/${c.slug}`}
                  className="inline-flex items-center gap-2 border border-charcoal/20 px-5 py-3 text-sm text-charcoal hover:border-charcoal/50 transition-colors"
                >
                  <Check size={14} className="text-clay" aria-hidden="true" />
                  Web design in {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory-deep py-24 px-6">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
              Let&apos;s build yours.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
              Tell us about your business and we will build you a working demo.
              You look at it before any money changes hands, and if it is not
              right, that is the end of it.
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
            Web design and development for {city.name} businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}
