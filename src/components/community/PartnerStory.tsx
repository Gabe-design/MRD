import Link from "next/link";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

/**
 * One measured claim. Both sides are strings rather than numbers so a story can
 * say "3 days" or "~6 hrs/wk" without the component pretending to do math on
 * units it does not understand.
 */
export type StoryMetric = {
  label: string;
  before: string;
  after: string;
  /** How the number was arrived at. Shown small, and worth filling in: an
   *  unsourced number reads as marketing, a sourced one reads as evidence. */
  note?: string;
};

export type PartnerStoryProps = {
  org: string;
  missionArea: string;
  /** Enough context to judge the result: staff count, people served, location. */
  facts: { label: string; value: string }[];
  /** One paragraph a reader could repeat back after skimming. */
  summary: string;
  /** The situation before we arrived, in their words as much as ours. */
  problem: string[];
  metrics: StoryMetric[];
  built: { title: string; body: string }[];
  /** Who owns it now and what they were left with. The point of the track. */
  handover: string[];
  quote?: { text: string; attribution: string };
  /** What the project deliberately did not fix. Keeps the rest believable. */
  limits: string;
  /** Marks the page as layout with placeholder content, not a real engagement. */
  preview?: boolean;
};

function MetricBand({ metrics }: { metrics: StoryMetric[] }) {
  return (
    <section className="bg-charcoal py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-12">
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Before and After
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-ivory tracking-tight">
            What changed, measured.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={(i % 3) * 90}
              className="bg-charcoal p-6"
            >
              <p className="text-sand/70 text-xs uppercase tracking-[0.15em] mb-5">
                {m.label}
              </p>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sand/50 text-lg line-through decoration-sand/30">
                  {m.before}
                </span>
                <ArrowRight size={14} className="text-clay shrink-0" aria-hidden="true" />
                <span className="text-ivory text-2xl font-medium">{m.after}</span>
              </div>
              {m.note ? (
                <p className="text-sand/50 text-xs leading-relaxed">{m.note}</p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PartnerStory(props: PartnerStoryProps) {
  const {
    org,
    missionArea,
    facts,
    summary,
    problem,
    metrics,
    built,
    handover,
    quote,
    limits,
    preview = false,
  } = props;

  return (
    <div className="min-h-screen bg-ivory">
      <header className="bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors"
          >
            <ArrowLeft size={14} /> Community Track
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-clay hover:bg-clay-dark text-ivory text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 transition-colors"
          >
            Apply as a Partner
          </Link>
        </div>
      </header>

      {preview ? (
        <div className="bg-clay/15 border-b border-clay/40 px-6 py-3">
          <p className="max-w-5xl mx-auto text-charcoal text-sm">
            <span className="font-semibold uppercase tracking-[0.15em] text-xs mr-2">
              Template Preview
            </span>
            Placeholder content shown to demonstrate the layout. This is not a
            real engagement, and no organization named here is a client.
          </p>
        </div>
      ) : null}

      <main>
        <section className="bg-ivory py-20 px-6 border-b border-charcoal/10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="w-10 h-1 bg-clay mb-8" aria-hidden="true" />
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-5">
                {missionArea}
              </p>
              <h1 className="text-4xl sm:text-5xl font-medium text-charcoal leading-[1.15] tracking-tight mb-8">
                {org}
              </h1>
              <p className="text-charcoal/60 text-lg sm:text-xl leading-relaxed max-w-3xl mb-12">
                {summary}
              </p>

              <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-charcoal/10 pt-8">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-charcoal/45 text-xs uppercase tracking-[0.15em] mb-2">
                      {f.label}
                    </dt>
                    <dd className="text-charcoal font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                The Problem
              </p>
              <h2 className="text-3xl font-medium text-charcoal tracking-tight mb-8">
                What was eating the week.
              </h2>
              {problem.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-charcoal/60 text-lg leading-relaxed mb-5 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        <MetricBand metrics={metrics} />

        <section className="bg-ivory-deep py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-12">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                What We Built
              </p>
              <h2 className="text-3xl font-medium text-charcoal tracking-tight">
                The work, decision by decision.
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {built.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={(i % 2) * 90}
                  className="bg-white border border-charcoal/10 p-6"
                >
                  <h3 className="text-charcoal font-medium text-lg mb-3">
                    {b.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">{b.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                The Handover
              </p>
              <h2 className="text-3xl font-medium text-charcoal tracking-tight mb-6">
                Who owns it now.
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-8">
                The project is only finished when someone on staff can run it
                without us. Here is what that meant in practice:
              </p>
              <ul className="space-y-4">
                {handover.map((h, i) => (
                  <li key={h} className="flex items-baseline gap-4">
                    <span className="text-clay text-sm font-medium shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-charcoal/70 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {quote ? (
          <section className="bg-charcoal py-20 px-6">
            <Reveal className="max-w-3xl mx-auto text-center">
              <Quote size={28} className="text-clay mx-auto mb-8" aria-hidden="true" />
              <blockquote className="text-ivory text-xl sm:text-2xl font-medium leading-relaxed tracking-tight mb-8">
                {quote.text}
              </blockquote>
              <p className="text-sand text-sm uppercase tracking-[0.15em]">
                {quote.attribution}
              </p>
            </Reveal>
          </section>
        ) : null}

        <section className="bg-ivory py-20 px-6">
          <Reveal className="max-w-3xl mx-auto border border-charcoal/15 p-8">
            <h2 className="text-charcoal font-medium text-xl tracking-tight mb-4">
              What This Did Not Solve
            </h2>
            <p className="text-charcoal/60 leading-relaxed">{limits}</p>
          </Reveal>
        </section>

        <section className="bg-ivory-deep py-20 px-6 border-t border-charcoal/10">
          <Reveal className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-charcoal tracking-tight mb-6">
              Your organization could be the next one.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
              We take on a small number of partner organizations at a time. Tell
              us what the process is and what it costs you today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/85 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors"
              >
                Apply as a Partner <ArrowRight size={16} />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-2 text-charcoal font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] border border-charcoal/25 hover:border-charcoal/50 transition-colors"
              >
                How the Track Works
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-charcoal px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors"
          >
            <ArrowLeft size={14} /> Community Track
          </Link>
          <p className="text-sand/50 text-xs">
            {preview
              ? "Template preview. Placeholder content, not a real engagement."
              : "Numbers are the organization's own, measured before and after the project."}
          </p>
        </div>
      </footer>
    </div>
  );
}
