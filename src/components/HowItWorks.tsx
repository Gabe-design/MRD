const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "A free call about your business, your customers, and what the website needs to do. We ask questions in plain English.",
    yourPart: "Tell us how your business works. There's nothing to prepare.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We turn the conversation into a design direction: layout, colors, and the copy that sells your work.",
    yourPart: "Tell us what you like and what you don't. Your feedback shapes the direction before we build.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We build the real site, fast and mobile-first, and share a private preview link as it takes shape.",
    yourPart: "Almost nothing. Watch progress from the preview link if you like.",
  },
  {
    step: "04",
    title: "Review & Revisions",
    description:
      "You click through the whole site on your phone and computer. We refine it through the revision rounds we agreed on up front.",
    yourPart: "Tell us anything that feels off. That's what the rounds are for.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "We handle the domain, hosting, and go-live, then stay available for updates and changes after launch.",
    yourPart: "Announce it. We take care of the rest.",
  },
];

const workingDetails = [
  {
    title: "Who runs the project",
    body: "One of us runs your project from start to finish. You deal with the same person at every step.",
  },
  {
    title: "How feedback works",
    body: "You open a real preview link and tell us what you think, by message or a quick call. \"The header feels cramped\" is all the design vocabulary you need.",
  },
  {
    title: "What you supply",
    body: "Your logo if you have one, photos of your work, and your business details: services, prices, hours. We set up all the content from there.",
  },
  {
    title: "After launch",
    body: "We handle hosting, small updates, and fixes through a support arrangement we agree on before the project starts.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-4">
            From First Conversation to Launch
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Five steps. You always know which one we&apos;re on and when
            you&apos;re needed.
          </p>
        </div>

        <ol className="max-w-3xl mx-auto mb-20">
          {steps.map((s, i) => (
            <li
              key={s.step}
              className={`grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10 pb-10 ${
                i < steps.length - 1 ? "border-b border-charcoal/10 mb-10" : ""
              }`}
            >
              <span className="text-clay text-2xl sm:text-3xl font-medium leading-none pt-1">
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-charcoal text-xl mb-2">
                  {s.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed mb-3">
                  {s.description}
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="text-clay-dark font-medium uppercase tracking-[0.1em] text-xs mr-2">
                    Your part
                  </span>
                  <span className="text-charcoal/60">{s.yourPart}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="border-t border-charcoal/10 pt-14">
          <h3 className="text-center text-charcoal font-medium text-2xl tracking-tight mb-10">
            The Details That Make It Easy
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingDetails.map((d) => (
              <div key={d.title} className="bg-ivory border border-charcoal/10 p-6">
                <h4 className="font-semibold text-charcoal text-base mb-2">
                  {d.title}
                </h4>
                <p className="text-charcoal/60 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
