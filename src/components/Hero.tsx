import { ArrowRight } from "lucide-react";
import BrandIntro from "@/components/BrandIntro";
import Reveal from "@/components/Reveal";

const audience = [
  "Businesses that don't have a website yet",
  "Sites that look years out of date",
  "Pages that make the next step hard to take",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full px-6 pt-32 pb-16">
        <div className="grid gap-y-14 mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-16 lg:gap-y-12">
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <div className="w-10 h-1 bg-clay mb-10" aria-hidden="true" />

            <p className="text-clay text-xs font-medium uppercase tracking-[0.25em] mb-6">
              A Two-Person Digital Studio
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-ivory leading-[1.1] tracking-tight mb-8">
              Polished, practical websites for local businesses.
            </h1>

            <p className="text-lg sm:text-xl text-sand max-w-2xl mb-12 leading-relaxed">
              We design and build websites that make your business easy to find
              and easy to contact. We handle everything from the first
              conversation to launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-200"
              >
                Discuss Your Project <ArrowRight size={16} />
              </a>
              <a
                href="#concepts"
                className="inline-flex items-center justify-center gap-2 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] border border-ivory/25 hover:border-ivory/50 transition-colors duration-200"
              >
                Explore the Concepts
              </a>
            </div>
            <p className="text-sand/80 text-sm">
              The first call is free, and you see the full price before we start.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center"
          >
            <BrandIntro />
          </Reveal>

          <Reveal delay={80} className="max-w-2xl lg:col-start-1 lg:row-start-2">
            <p className="text-ivory/70 text-xs font-medium uppercase tracking-[0.2em] mb-5">
              Built for
            </p>
            <ul className="space-y-3">
              {audience.map((item, i) => (
                <li key={item} className="flex items-baseline gap-4">
                  <span className="text-clay text-sm font-medium">
                    0{i + 1}
                  </span>
                  <span className="text-sand text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="border-t border-ivory/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sand text-xs font-medium uppercase tracking-[0.2em]">
            Strategy / Design / Development
          </p>
          <p className="text-sand text-xs font-medium uppercase tracking-[0.2em]">
            Crafted with Intention
          </p>
        </div>
      </div>
    </section>
  );
}
