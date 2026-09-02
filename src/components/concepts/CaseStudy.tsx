import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export type CaseStudyProps = {
  name: string;
  industry: string;
  tagline: string;
  palette: { ink: string; accent: string; surface: string };
  brief: string;
  decisions: { title: string; body: string }[];
  functionality: string[];
  demoHref: string;
};

function DesktopFrame({ palette }: { palette: CaseStudyProps["palette"] }) {
  return (
    <div className="border border-charcoal/15 bg-white">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-charcoal/10">
        <span className="w-2 h-2 rounded-full bg-charcoal/20" />
        <span className="w-2 h-2 rounded-full bg-charcoal/20" />
        <span className="w-2 h-2 rounded-full bg-charcoal/20" />
      </div>
      <div style={{ backgroundColor: palette.surface }} className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div style={{ backgroundColor: palette.ink }} className="w-16 h-2 rounded" />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ backgroundColor: `${palette.ink}33` }} className="w-8 h-1.5 rounded" />
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: palette.ink }} className="h-20 flex flex-col justify-center p-4 mb-3">
          <div className="w-32 h-2.5 rounded bg-white/85 mb-2" />
          <div className="w-20 h-1.5 rounded bg-white/50 mb-3" />
          <div style={{ backgroundColor: palette.accent }} className="w-20 h-5" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white border p-2" style={{ borderColor: `${palette.ink}22` }}>
              <div style={{ backgroundColor: `${palette.accent}55` }} className="h-8 mb-1.5" />
              <div style={{ backgroundColor: `${palette.ink}22` }} className="w-full h-1.5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileFrame({ palette }: { palette: CaseStudyProps["palette"] }) {
  return (
    <div className="border border-charcoal/15 bg-white rounded-[18px] p-1.5 w-32 mx-auto">
      <div style={{ backgroundColor: palette.surface }} className="rounded-[12px] overflow-hidden">
        <div style={{ backgroundColor: palette.ink }} className="p-2.5">
          <div className="w-12 h-1.5 rounded bg-white/85 mb-1.5" />
          <div className="w-8 h-1 rounded bg-white/50 mb-2" />
          <div style={{ backgroundColor: palette.accent }} className="w-12 h-3.5" />
        </div>
        <div className="p-2 space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white border p-1.5" style={{ borderColor: `${palette.ink}22` }}>
              <div style={{ backgroundColor: `${palette.accent}55` }} className="h-5 mb-1" />
              <div style={{ backgroundColor: `${palette.ink}22` }} className="w-3/4 h-1 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudy(props: CaseStudyProps) {
  const { name, industry, tagline, palette, brief, decisions, functionality, demoHref } = props;

  return (
    <div className="min-h-screen bg-ivory">
      <header className="bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors"
          >
            <ArrowLeft size={14} /> Moss &amp; Ross
          </Link>
          <Link
            href={demoHref}
            className="inline-flex items-center gap-2 bg-clay hover:bg-clay-dark text-ivory text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 transition-colors"
          >
            Live Demo <ExternalLink size={13} />
          </Link>
        </div>
      </header>

      <div className="bg-clay/15 border-b border-clay/30">
        <p className="max-w-4xl mx-auto px-6 py-3 text-charcoal/70 text-sm">
          <span className="font-semibold text-charcoal">
            Self-initiated concept · Fictional business.
          </span>{" "}
          {name} does not exist. We created it to show how we design and build.
          There was no client, and we claim no results.
        </p>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="w-10 h-1 bg-clay mb-8" aria-hidden="true" />
        <p className="text-clay-dark text-xs font-medium uppercase tracking-[0.25em] mb-4">
          Concept Case Study · {industry}
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium text-charcoal tracking-tight mb-4">
          {name}
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed max-w-2xl mb-16">
          {tagline}
        </p>

        <section className="mb-14">
          <h2 className="text-charcoal font-medium text-2xl tracking-tight mb-4">
            The Brief
          </h2>
          <p className="text-charcoal/60 leading-relaxed max-w-2xl">{brief}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-charcoal font-medium text-2xl tracking-tight mb-6">
            The Decisions
          </h2>
          <div className="space-y-6">
            {decisions.map((d) => (
              <div key={d.title} className="bg-white border border-charcoal/10 p-6">
                <h3 className="font-semibold text-charcoal text-lg mb-2">
                  {d.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-charcoal font-medium text-2xl tracking-tight mb-4">
            The Functionality
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-5">
            On the live demo, a visitor can:
          </p>
          <ul className="space-y-3">
            {functionality.map((f, i) => (
              <li key={f} className="flex items-baseline gap-4">
                <span className="text-clay text-sm font-medium">0{i + 1}</span>
                <span className="text-charcoal/70">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-charcoal font-medium text-2xl tracking-tight mb-6">
            The Finished Work
          </h2>
          <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-center bg-ivory-deep border border-charcoal/10 p-8">
            <DesktopFrame palette={palette} />
            <MobileFrame palette={palette} />
          </div>
          <p className="text-charcoal/50 text-sm mt-4">
            Stylized desktop and mobile impressions. The live demo below is the
            real, responsive site.
          </p>
        </section>

        <Link
          href={demoHref}
          className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/85 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors"
        >
          Open the Live Demo <ArrowRight size={16} />
        </Link>
      </main>
    </div>
  );
}
