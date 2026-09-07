import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="bg-charcoal px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-ivory text-2xl font-medium tracking-tight mb-2">
            Ready when you are.
          </h2>
          <p className="text-sand text-sm">
            Free first call · Working demo before you pay · Full price in
            writing before we start
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-200 shrink-0"
        >
          Discuss Your Project <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
