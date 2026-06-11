import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "50+", label: "Businesses Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2×", label: "Avg. Lead Increase" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0f1e] flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #1d4ed8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <Sparkles size={14} />
          Web &amp; AI Development for Local Businesses
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl mb-6">
          Your Business Deserves a{" "}
          <span className="text-blue-400">Website That Works</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          We build fast, modern websites and AI-powered tools for small businesses —
          so you can focus on running your business while we grow it online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors duration-200"
          >
            Get a Free Quote <ArrowRight size={18} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-lg text-base border border-white/20 transition-colors duration-200"
          >
            See Our Work
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-slate-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
