import {
  ArrowRight,
  Smartphone,
  MessageSquare,
  FileText,
  Search,
  RefreshCw,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const deliverables = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    body: "A custom design built for phones first, since that's where most of your customers will find you, then scaled up to desktop.",
  },
  {
    icon: MessageSquare,
    title: "Inquiry & Quote Forms",
    body: "A clear path for customers to take the next step: contact forms, quote requests, or a booking path, whichever fits your business.",
  },
  {
    icon: FileText,
    title: "Content Setup",
    body: "You give us your services, prices, photos, and details. We write the structure, place the content, and make it read well.",
  },
  {
    icon: Search,
    title: "Search-Engine Basics",
    body: "Proper page titles, descriptions, and fast load times, plus guidance on setting up your Google Business Profile.",
  },
  {
    icon: RefreshCw,
    title: "Agreed Revision Rounds",
    body: "We agree on the number of revision rounds before we start, so refinements don't turn into surprise costs.",
  },
  {
    icon: LifeBuoy,
    title: "Launch & Ongoing Support",
    body: "We handle the domain, hosting, and go-live. After launch, updates run through a support arrangement we agree together.",
  },
];

const commitments = [
  {
    title: "Free First Revision",
    body: "If you don't love the direction after the first draft, we change it at no cost.",
  },
  {
    title: "No Surprise Invoices",
    body: "You see the full price before we write a single line of code. What we quote is what you pay.",
  },
  {
    title: "We Own Our Deadlines",
    body: "If we miss the agreed delivery date, the next milestone is on us. We build realistic timelines and stick to them.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="bg-ivory-deep py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            What&apos;s Included
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-4">
            What You Get, In Writing
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Every project includes the pieces below. Before we start, we write
            down the exact scope: pages, features, and support.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {deliverables.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 90} className="bg-white border border-charcoal/10 p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-charcoal mb-5">
                <d.icon size={22} className="text-clay" />
              </div>
              <h3 className="font-semibold text-charcoal text-lg mb-2">
                {d.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{d.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-charcoal/10 pt-14">
          <Reveal className="flex items-center justify-center gap-3 mb-10">
            <ShieldCheck size={22} className="text-clay" />
            <h3 className="text-charcoal font-medium text-2xl tracking-tight">
              Our Commitments
            </h3>
          </Reveal>
          {/* The one promise that applies before any money changes hands, so it
              sits above the three that describe how the work runs once it
              does. */}
          <Reveal className="bg-charcoal p-8 sm:p-10 mb-6">
            <div className="w-10 h-1 bg-clay mb-6" aria-hidden="true" />
            <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
              Free Demo
            </p>
            <h4 className="text-ivory text-2xl sm:text-3xl font-medium tracking-tight mb-4">
              See it before you pay a thing.
            </h4>
            <p className="text-sand leading-relaxed max-w-2xl mb-8">
              We design and build a working demo of your site first, at no cost.
              You open it on your own phone, click through the real thing, and
              decide from there. If it isn&apos;t right, you don&apos;t pay.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-200"
            >
              Start a Free Demo <ArrowRight size={16} />
            </a>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="bg-white border border-charcoal/10 p-8">
                <h4 className="font-semibold text-charcoal text-lg mb-3">
                  {c.title}
                </h4>
                <p className="text-charcoal/60 text-sm leading-relaxed">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
