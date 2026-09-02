import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fade & Co. — Live Concept Demo",
  description:
    "Fictional business. A self-initiated concept website by Moss & Ross.",
  robots: { index: false },
};

const ink = "#141210";
const brass = "#C2A15A";
const cream = "#F1EAE0";

const services = [
  { name: "Classic Cut", price: "$35" },
  { name: "Skin Fade", price: "$40" },
  { name: "Cut & Beard", price: "$50" },
  { name: "Beard Trim & Shape", price: "$20" },
  { name: "Hot Towel Shave", price: "$45" },
  { name: "Kids' Cut (under 12)", price: "$25" },
];

const barbers = [
  {
    initials: "MK",
    name: "Marcus K.",
    specialty: "Fades & precision work",
    since: "12 years behind the chair",
  },
  {
    initials: "DR",
    name: "Dre R.",
    specialty: "Beards & hot towel shaves",
    since: "9 years behind the chair",
  },
  {
    initials: "SO",
    name: "Sam O.",
    specialty: "Classic cuts & kids",
    since: "6 years behind the chair",
  },
];

const hours = [
  ["Monday – Friday", "9:00 – 19:00"],
  ["Saturday", "9:00 – 17:00"],
  ["Sunday", "Closed"],
];

const inputCls =
  "w-full bg-white/5 border border-white/15 text-white placeholder-white/35 px-4 py-3 text-sm focus:outline-none focus:border-[#C2A15A] focus:ring-1 focus:ring-[#C2A15A]";

export default function FadeAndCoDemo() {
  return (
    <div style={{ backgroundColor: ink }} className="min-h-screen text-white">
      <div style={{ backgroundColor: brass }} className="text-center px-4 py-2">
        <p className="text-xs font-medium" style={{ color: ink }}>
          Fictional business: a self-initiated concept by{" "}
          <Link href="/concepts/fade-and-co" className="underline">
            Moss &amp; Ross
          </Link>
          . No real shop, staff, or prices.
        </p>
      </div>

      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <p className="font-semibold text-lg tracking-[0.2em] uppercase">
            Fade <span style={{ color: brass }}>&amp;</span> Co.
          </p>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#fc-prices" className="hover:text-white">Prices</a>
            <a href="#fc-barbers" className="hover:text-white">Barbers</a>
            <a href="#fc-hours" className="hover:text-white">Hours</a>
            <a
              href="#fc-book"
              style={{ backgroundColor: brass, color: ink }}
              className="font-semibold px-4 py-2"
            >
              Book a Chair
            </a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div style={{ backgroundColor: brass }} className="w-10 h-1 mx-auto mb-8" />
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-5">
            A sharper standard.
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Straightforward prices, barbers who remember your cut, and a chair
            when you want one.
          </p>
          <a
            href="#fc-book"
            style={{ backgroundColor: brass, color: ink }}
            className="inline-block font-semibold px-8 py-4"
          >
            Book a Chair
          </a>
        </div>
      </section>

      <section id="fc-prices" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Services &amp; Prices
          </h2>
          <ul className="divide-y divide-white/10">
            {services.map((s) => (
              <li key={s.name} className="flex items-baseline justify-between py-4">
                <span className="text-lg">{s.name}</span>
                <span
                  className="flex-1 mx-4 border-b border-dotted border-white/20"
                  aria-hidden="true"
                />
                <span style={{ color: brass }} className="text-lg font-semibold">
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="fc-barbers" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">The Barbers</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {barbers.map((b) => (
              <div key={b.name} className="bg-white/5 border border-white/10 p-6 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center font-semibold mb-4"
                  style={{ backgroundColor: brass, color: ink }}
                >
                  {b.initials}
                </div>
                <p className="font-semibold text-lg">{b.name}</p>
                <p style={{ color: brass }} className="text-sm mb-2">{b.specialty}</p>
                <p className="text-white/50 text-xs">{b.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fc-hours" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Hours</h2>
            <ul className="space-y-3">
              {hours.map(([day, time]) => (
                <li key={day} className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white/70">{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Find Us</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              12 Marlow Lane (a fictional address)
              <br />
              Walk-ins welcome when a chair is free;
              <br />
              booking guarantees your slot.
            </p>
            <div
              className="h-36 border border-white/10 flex items-center justify-center text-white/40 text-sm"
              style={{ backgroundColor: cream + "0d" }}
            >
              Map placeholder
            </div>
          </div>
        </div>
      </section>

      <section id="fc-book" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-3 text-center">Book a Chair</h2>
          <p className="text-white/60 text-center mb-8">
            Pick your service and barber. We&apos;ll confirm by text.
          </p>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <select className={inputCls} defaultValue="" aria-label="Service">
                <option value="" disabled>Service</option>
                {services.map((s) => (
                  <option key={s.name}>{s.name} — {s.price}</option>
                ))}
              </select>
              <select className={inputCls} defaultValue="" aria-label="Barber">
                <option value="" disabled>Barber</option>
                <option>First available</option>
                {barbers.map((b) => (
                  <option key={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className={inputCls} placeholder="Preferred day & time" aria-label="Preferred day and time" />
              <input className={inputCls} placeholder="Your name" aria-label="Your name" />
            </div>
            <input className={inputCls} placeholder="Mobile number (for confirmation)" aria-label="Mobile number" />
            <button
              type="button"
              style={{ backgroundColor: brass, color: ink }}
              className="w-full font-semibold px-6 py-4"
            >
              Request Booking
            </button>
            <p className="text-xs text-white/40 text-center">
              Demonstration flow. In a real build this connects to the
              shop&apos;s booking system.
            </p>
          </form>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-white/50 border-t border-white/10">
        <p className="mb-1">Fade &amp; Co. is a fictional business.</p>
        <p>
          Self-initiated concept designed and built by{" "}
          <Link href="/" className="underline">Moss &amp; Ross</Link>.{" "}
          <Link href="/concepts/fade-and-co" className="underline">
            Read the case study
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
