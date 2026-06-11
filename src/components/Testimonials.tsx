import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "MR.Digital completely transformed our online presence. We went from zero leads from our website to getting 5–10 new inquiries a week. Best investment we've made.",
    name: "James Kowalski",
    role: "Owner, Peak Comfort HVAC",
    initials: "JK",
    color: "bg-blue-500",
  },
  {
    quote:
      "They made the whole process so easy. I was nervous because I'm not tech-savvy at all, but they explained everything clearly and delivered exactly what they promised.",
    name: "Maria Santos",
    role: "Owner, Bella Vista Kitchen",
    initials: "MS",
    color: "bg-violet-500",
  },
  {
    quote:
      "The AI chatbot they built handles customer questions all night. I wake up with booked appointments instead of a voicemail inbox. It's honestly changed the way I run my business.",
    name: "Derek Olsen",
    role: "Owner, Greenleaf Garden Center",
    initials: "DO",
    color: "bg-emerald-500",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Local Business Owners
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what our clients say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col"
            >
              <Stars />
              <blockquote className="text-slate-700 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
