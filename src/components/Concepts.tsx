import { ArrowRight, ExternalLink } from "lucide-react";

const concepts = [
  {
    name: "Summit Landscapes",
    industry: "Landscaping & Outdoor Construction",
    summary:
      "A gallery-first site built to win quote requests: finished projects up front, a clear service area, and a quote form one click from anywhere.",
    demonstrates: ["Project gallery", "Service area", "Quote-request form"],
    caseHref: "/concepts/summit-landscapes",
    demoHref: "/concepts/summit-landscapes/demo",
    swatches: ["#26372C", "#7A9B5E", "#F5F3EC"],
  },
  {
    name: "Fade & Co.",
    industry: "Barbershop",
    summary:
      "A dark, brass-accented shop site where a visitor can find a price and start a booking in under a minute.",
    demonstrates: ["Services & prices", "Staff profiles", "Booking path"],
    caseHref: "/concepts/fade-and-co",
    demoHref: "/concepts/fade-and-co/demo",
    swatches: ["#141210", "#C2A15A", "#F1EAE0"],
  },
  {
    name: "BrightNest Cleaning",
    industry: "Home Cleaning Services",
    summary:
      "A light, trustworthy site that answers a visitor's real questions before they reach out: what's included, where you go, what it costs.",
    demonstrates: ["Service options", "Areas covered", "FAQs & inquiry flow"],
    caseHref: "/concepts/brightnest-cleaning",
    demoHref: "/concepts/brightnest-cleaning/demo",
    swatches: ["#1F4E48", "#2F8F83", "#FAFAF7"],
  },
];

export default function Concepts() {
  return (
    <section id="concepts" className="bg-ivory py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Selected Concepts
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-4">
            Work That Shows How We Think
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            We&apos;re a new studio, so we built our portfolio ourselves: three
            complete concept sites for fictional businesses. Click through them
            and judge the work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {concepts.map((c) => (
            <article
              key={c.name}
              className="border border-charcoal/10 bg-white p-6 flex flex-col"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal/50 border border-charcoal/15 self-start px-2.5 py-1 mb-5">
                Self-initiated concept · Fictional business
              </p>

              <div className="flex gap-1.5 mb-5" aria-hidden="true">
                {c.swatches.map((s) => (
                  <span
                    key={s}
                    className="w-8 h-8 border border-charcoal/10"
                    style={{ backgroundColor: s }}
                  />
                ))}
              </div>

              <h3 className="font-semibold text-charcoal text-xl mb-1">
                {c.name}
              </h3>
              <p className="text-clay-dark text-xs font-medium uppercase tracking-[0.15em] mb-4">
                {c.industry}
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
                {c.summary}
              </p>

              <ul className="flex flex-wrap gap-2 mb-6">
                {c.demonstrates.map((d) => (
                  <li
                    key={d}
                    className="text-xs font-medium text-clay-dark bg-clay/10 px-2.5 py-1"
                  >
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2.5">
                <a
                  href={c.demoHref}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/85 text-ivory text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
                >
                  Open the Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href={c.caseHref}
                  className="inline-flex items-center justify-center gap-2 border border-charcoal/20 hover:border-clay text-charcoal text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 transition-colors"
                >
                  Read the Case Study <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-charcoal/50 text-sm mt-10 max-w-2xl mx-auto">
          Each concept is a fictional business we invented to demonstrate a
          complete experience. The disclosure appears again on every demo page.
        </p>
      </div>
    </section>
  );
}
