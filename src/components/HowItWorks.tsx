import { MessageSquare, PencilRuler, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Free Discovery Call",
    description:
      "Tell us about your business, your goals, and what's frustrating you online. No tech jargon — just a normal conversation.",
  },
  {
    step: "02",
    icon: PencilRuler,
    title: "We Build It",
    description:
      "Our team designs and builds your site or tool, keeping you in the loop with updates. Most projects ship within 2–4 weeks.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "We go live and hand you the keys. Ongoing support means you're never left stranded when something needs updating.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple. Fast. No Surprises.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We keep the process straightforward so you always know what&apos;s
            happening and when.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200"
            aria-hidden="true"
          />

          {steps.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-blue-100 shadow-lg shadow-blue-50 flex items-center justify-center">
                  <s.icon size={28} className="text-blue-500" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">
                  {s.step.replace("0", "")}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
