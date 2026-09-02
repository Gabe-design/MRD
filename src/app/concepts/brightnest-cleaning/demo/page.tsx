import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrightNest Cleaning — Live Concept Demo",
  description:
    "Fictional business. A self-initiated concept website by Moss & Ross.",
  robots: { index: false },
};

const ink = "#1F4E48";
const teal = "#2F8F83";
const surface = "#FAFAF7";

const plans = [
  {
    name: "Standard Clean",
    blurb: "The regular reset for a lived-in home.",
    includes: ["Kitchen surfaces & floors", "Bathrooms top to bottom", "Dusting & vacuuming throughout", "Bins emptied, beds made"],
  },
  {
    name: "Deep Clean",
    blurb: "Everything in Standard, plus the places you forget.",
    includes: ["Inside oven & fridge", "Skirting boards & door frames", "Under furniture", "Interior windows"],
  },
  {
    name: "Move-In / Move-Out",
    blurb: "An empty-home clean landlords sign off on.",
    includes: ["Full deep clean of empty rooms", "Inside all cupboards", "Appliances inside & out", "Checklist provided for handover"],
  },
  {
    name: "Recurring Plans",
    blurb: "Weekly or fortnightly, same cleaner each visit.",
    includes: ["Priority scheduling", "Same trusted cleaner", "Flexible re-booking", "Pause anytime"],
  },
];

const areas = ["Fernhill", "Oakton", "Willow Park", "Riverside", "The Meadows", "Clarendon"];

const faqs = [
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes. Cleaners arrive with everything needed, including a vacuum and eco-friendly products. If you prefer we use your products, say so in the booking notes.",
  },
  {
    q: "What about pets?",
    a: "Pets are welcome. Let us know in advance so we can match you with a cleaner who's comfortable, and tell us if anyone should stay in a particular room.",
  },
  {
    q: "How do you get in if I'm not home?",
    a: "Most clients leave a key in a lockbox or share an entry code. Access details are stored securely and only shared with your assigned cleaner.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "Reschedule or cancel up to 24 hours before your visit at no charge.",
  },
  {
    q: "Are you insured?",
    a: "This is a fictional demo. On a real site, this answer would state the company's insurance coverage, because clients ask.",
  },
];

const inputCls =
  "w-full bg-white border border-[#1F4E48]/20 text-[#1F4E48] placeholder-[#1F4E48]/40 px-4 py-3 text-sm focus:outline-none focus:border-[#2F8F83] focus:ring-1 focus:ring-[#2F8F83]";

export default function BrightNestDemo() {
  return (
    <div style={{ backgroundColor: surface, color: ink }} className="min-h-screen">
      <div style={{ backgroundColor: ink }} className="text-center px-4 py-2">
        <p className="text-xs text-white/80">
          Fictional business: a self-initiated concept by{" "}
          <Link href="/concepts/brightnest-cleaning" className="underline text-white">
            Moss &amp; Ross
          </Link>
          . No real company, staff, or coverage.
        </p>
      </div>

      <header className="bg-white border-b" style={{ borderColor: `${ink}1a` }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <p className="font-semibold text-lg">
            Bright<span style={{ color: teal }}>Nest</span> Cleaning
          </p>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#bn-services" className="hover:opacity-70">Services</a>
            <a href="#bn-areas" className="hover:opacity-70">Areas</a>
            <a href="#bn-faq" className="hover:opacity-70">FAQ</a>
            <a
              href="#bn-inquire"
              style={{ backgroundColor: teal }}
              className="text-white font-semibold px-4 py-2 rounded-full"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-24 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: teal }} className="text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Home Cleaning, Handled
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-6">
            A clean home, off your to-do list.
          </h1>
          <p className="opacity-60 text-lg max-w-xl mx-auto mb-10">
            Vetted, insured cleaners, transparent options, and the same friendly
            face each visit.
          </p>
          <a
            href="#bn-inquire"
            style={{ backgroundColor: teal }}
            className="inline-block text-white font-semibold px-8 py-4 rounded-full"
          >
            Get Your Quote
          </a>
        </div>
      </section>

      <section id="bn-services" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2 text-center">Choose Your Clean</h2>
          <p className="opacity-60 text-center mb-12">
            Every option lists exactly what&apos;s included. No surprises.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {plans.map((p) => (
              <div key={p.name} className="bg-white border rounded-xl p-7" style={{ borderColor: `${ink}1a` }}>
                <h3 className="font-semibold text-xl mb-1">{p.name}</h3>
                <p className="opacity-60 text-sm mb-5">{p.blurb}</p>
                <ul className="space-y-2">
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-baseline gap-2 text-sm">
                      <span style={{ color: teal }} aria-hidden="true">✓</span>
                      <span className="opacity-80">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bn-areas" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-3">Areas We Cover</h2>
          <p className="opacity-60 mb-8 max-w-xl mx-auto">
            We keep our patch small so cleaners spend time cleaning, not driving.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <li
                key={a}
                className="rounded-full px-5 py-2 text-sm font-medium"
                style={{ backgroundColor: `${teal}1a`, color: ink }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="bn-faq" className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Questions, Answered
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="bg-white border rounded-xl px-6 py-4 group"
                style={{ borderColor: `${ink}1a` }}
              >
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span style={{ color: teal }} className="text-xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="opacity-70 text-sm leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="bn-inquire" style={{ backgroundColor: ink }} className="text-white px-6 py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-3 text-center">Get Your Quote</h2>
          <p className="text-white/70 text-center mb-8">
            Three quick questions and we&apos;ll send a price the same day.
          </p>
          <form className="bg-white rounded-xl p-8 space-y-4" style={{ color: ink }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className={inputCls} placeholder="Your name" aria-label="Your name" />
              <input className={inputCls} placeholder="Email or phone" aria-label="Email or phone" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <select className={inputCls} defaultValue="" aria-label="Home size">
                <option value="" disabled>Home size</option>
                <option>1–2 bedrooms</option>
                <option>3 bedrooms</option>
                <option>4+ bedrooms</option>
              </select>
              <select className={inputCls} defaultValue="" aria-label="Service">
                <option value="" disabled>Service</option>
                {plans.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
            <select className={inputCls} defaultValue="" aria-label="Frequency">
              <option value="" disabled>How often?</option>
              <option>One-off</option>
              <option>Weekly</option>
              <option>Fortnightly</option>
            </select>
            <button
              type="button"
              style={{ backgroundColor: teal }}
              className="w-full text-white font-semibold px-6 py-4 rounded-full"
            >
              Request My Quote
            </button>
            <p className="text-xs opacity-50 text-center">
              Demonstration form. This concept site doesn&apos;t send anything.
            </p>
          </form>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm opacity-70">
        <p className="mb-1">BrightNest Cleaning is a fictional business.</p>
        <p>
          Self-initiated concept designed and built by{" "}
          <Link href="/" className="underline">Moss &amp; Ross</Link>.{" "}
          <Link href="/concepts/brightnest-cleaning" className="underline">
            Read the case study
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
