const projects = [
  {
    category: "Restaurant",
    title: "Bella Vista Kitchen",
    description: "Online ordering integration, Google Maps SEO, and a redesigned menu page that increased reservations by 40%.",
    result: "+40% reservations",
    bg: "from-orange-50 to-amber-50",
    accent: "bg-orange-100 text-orange-700",
  },
  {
    category: "HVAC & Plumbing",
    title: "Peak Comfort HVAC",
    description: "New site with service area pages and a 24/7 AI chatbot that qualifies leads while the owner sleeps.",
    result: "3× more leads",
    bg: "from-blue-50 to-cyan-50",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    category: "Retail",
    title: "Greenleaf Garden Center",
    description: "E-commerce site with seasonal promotions and automated email follow-ups for repeat customers.",
    result: "+60% online sales",
    bg: "from-green-50 to-emerald-50",
    accent: "bg-green-100 text-green-700",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We&apos;ve helped local businesses across industries get online and
            grow their revenue with digital tools that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl bg-gradient-to-br ${p.bg} border border-slate-100 p-6 flex flex-col`}
            >
              <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${p.accent}`}>
                {p.category}
              </span>
              <h3 className="font-bold text-slate-900 text-xl mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                {p.description}
              </p>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-blue-600 font-bold text-lg">{p.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
