import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Summit Landscapes — Live Concept Demo",
  description:
    "Fictional business. A self-initiated concept website by Moss & Ross.",
  robots: { index: false },
};

const ink = "#26372C";
const moss = "#7A9B5E";
const surface = "#F5F3EC";

const services = [
  {
    title: "Design & Build",
    body: "Full outdoor transformations, from first sketch to last paving stone. One crew and one plan the whole way.",
  },
  {
    title: "Patios & Pathways",
    body: "Natural stone, porcelain, and brick laid level, drained, and edged right the first time.",
  },
  {
    title: "Planting & Lawns",
    body: "Borders, hedging, turf, and low-maintenance planting schemes matched to your soil and light.",
  },
  {
    title: "Seasonal Maintenance",
    body: "Scheduled visits that keep the space looking like the day we handed it over.",
  },
];

const projects = [
  { name: "The Terraced Garden", type: "Design & Build", from: "#5d7d4a", to: "#8fae6d" },
  { name: "Limestone Courtyard", type: "Patio", from: "#8d8272", to: "#c2b7a3" },
  { name: "The Long Border", type: "Planting", from: "#4d6b3f", to: "#7a9b5e" },
  { name: "Cedar & Stone Entry", type: "Design & Build", from: "#6b5d48", to: "#a3906f" },
  { name: "Meadow Lawn", type: "Lawns", from: "#66884f", to: "#9cba79" },
  { name: "The Fire-Pit Circle", type: "Patio", from: "#7d6a55", to: "#b09a7c" },
];

const areas = [
  "Ridgefield",
  "Hollow Creek",
  "Marden",
  "East Pine",
  "Calloway",
  "North Vale",
  "Sutter's Mill",
  "Briarwood",
];

const inputCls =
  "w-full bg-white border border-[#26372C]/20 text-[#26372C] placeholder-[#26372C]/40 px-4 py-3 text-sm focus:outline-none focus:border-[#7A9B5E] focus:ring-1 focus:ring-[#7A9B5E]";

export default function SummitLandscapesDemo() {
  return (
    <div style={{ backgroundColor: surface, color: ink }} className="min-h-screen">
      <div style={{ backgroundColor: ink }} className="text-center px-4 py-2">
        <p className="text-xs text-white/80">
          Fictional business: a self-initiated concept by{" "}
          <Link href="/concepts/summit-landscapes" className="underline text-white">
            Moss &amp; Ross
          </Link>
          . No real company, services, or projects.
        </p>
      </div>

      <header className="border-b" style={{ borderColor: `${ink}22` }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <p className="font-semibold tracking-wide text-lg">
            Summit<span style={{ color: moss }}> Landscapes</span>
          </p>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#sl-services" className="hover:opacity-70">Services</a>
            <a href="#sl-projects" className="hover:opacity-70">Projects</a>
            <a href="#sl-areas" className="hover:opacity-70">Areas</a>
            <a
              href="#sl-quote"
              style={{ backgroundColor: moss }}
              className="text-white font-semibold px-4 py-2 text-sm"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      </header>

      <section style={{ backgroundColor: ink }} className="text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: moss }} className="text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Landscaping &amp; Outdoor Construction
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight max-w-2xl mb-6">
            Outdoor spaces, built to last.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-10">
            Design, construction, and planting for gardens that work as hard as
            they look. Serving eight towns across the valley.
          </p>
          <a
            href="#sl-quote"
            style={{ backgroundColor: moss }}
            className="inline-block text-white font-semibold px-8 py-4"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <section id="sl-projects" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2">Recent Projects</h2>
          <p className="opacity-60 mb-10">
            Illustrative project tiles. In a real build, these are your photos.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <figure key={p.name} className="bg-white border" style={{ borderColor: `${ink}1a` }}>
                <div
                  className="h-40"
                  style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                />
                <figcaption className="p-4">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm opacity-60">{p.type}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="sl-services" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">What We Do</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} style={{ backgroundColor: surface }} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed opacity-70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sl-areas" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-3">Where We Work</h2>
          <p className="opacity-60 mb-8 max-w-xl">
            We take on projects within about 30 minutes of our yard. If your
            town is on this list, you&apos;re in our patch.
          </p>
          <ul className="flex flex-wrap gap-3">
            {areas.map((a) => (
              <li
                key={a}
                className="bg-white border px-4 py-2 text-sm"
                style={{ borderColor: `${ink}22` }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="sl-quote" style={{ backgroundColor: ink }} className="text-white px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-3">Request a Quote</h2>
          <p className="text-white/70 mb-8">
            Tell us about the space and we&apos;ll come back within two working
            days to arrange a visit.
          </p>
          <form className="bg-white p-8 space-y-4" style={{ color: ink }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className={inputCls} placeholder="Your name" aria-label="Your name" />
              <input className={inputCls} placeholder="Phone or email" aria-label="Phone or email" />
            </div>
            <input className={inputCls} placeholder="Property address or town" aria-label="Address" />
            <div className="grid sm:grid-cols-2 gap-4">
              <select className={inputCls} defaultValue="" aria-label="Project type">
                <option value="" disabled>Project type</option>
                <option>Design &amp; build</option>
                <option>Patio or pathway</option>
                <option>Planting or lawn</option>
                <option>Maintenance</option>
              </select>
              <select className={inputCls} defaultValue="" aria-label="Budget">
                <option value="" disabled>Rough budget</option>
                <option>Under $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <textarea className={`${inputCls} resize-none`} rows={4} placeholder="Describe the space and what you'd like done" aria-label="Description" />
            <button
              type="button"
              style={{ backgroundColor: moss }}
              className="w-full text-white font-semibold px-6 py-4"
            >
              Send Quote Request
            </button>
            <p className="text-xs opacity-50 text-center">
              Demonstration form. This concept site doesn&apos;t send anything.
            </p>
          </form>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm opacity-70">
        <p className="mb-1">Summit Landscapes is a fictional business.</p>
        <p>
          Self-initiated concept designed and built by{" "}
          <Link href="/" className="underline">Moss &amp; Ross</Link>.{" "}
          <Link href="/concepts/summit-landscapes" className="underline">
            Read the case study
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
