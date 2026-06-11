import { Globe, Bot, BarChart3, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Professional Websites",
    description:
      "Fast, mobile-first websites that look great and rank on Google. Built to convert visitors into customers.",
    tags: ["Custom Design", "SEO-Ready", "Mobile-First"],
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    description:
      "Chatbots, lead qualification, and automation tools that work for your business 24/7 — even when you're not.",
    tags: ["AI Chatbot", "Lead Gen", "Automation"],
  },
  {
    icon: BarChart3,
    title: "Growth & Analytics",
    description:
      "Track what's working. We set up dashboards and analytics so you always know how your online presence is performing.",
    tags: ["Google Analytics", "Reporting", "Insights"],
  },
  {
    icon: Wrench,
    title: "Ongoing Support",
    description:
      "No more waiting on agencies. Get fast updates, hosting, and support from a team that knows your business.",
    tags: ["Fast Turnaround", "Hosting", "Updates"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything Your Business Needs Online
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From your first website to AI tools that save you hours every week —
            we handle the digital side so you don&apos;t have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-5 group-hover:bg-blue-100 transition-colors">
                <s.icon size={22} className="text-blue-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
