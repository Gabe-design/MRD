const year = new Date().getFullYear();

const links = {
  Company: [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Website Design", href: "#services" },
    { label: "AI Tools", href: "#services" },
    { label: "Analytics", href: "#services" },
    { label: "Support Plans", href: "#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060c1a] border-t border-white/10 px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="text-white font-bold text-xl tracking-tight">
              MR.<span className="text-blue-400">Digital</span>
            </a>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-xs">
              Web &amp; AI development for small businesses. We build the digital
              tools that help local businesses compete and grow.
            </p>
            <p className="mt-4 text-slate-400 text-sm">
              <a
                href="mailto:hello@mrdigital.com"
                className="hover:text-blue-400 transition-colors"
              >
                hello@mrdigital.com
              </a>
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {year} MR.Digital. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
