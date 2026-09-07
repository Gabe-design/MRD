import { CONTACT_EMAIL, HOME_AREA, REMOTE_NOTE, SERVICE_AREA } from "@/lib/site";

const year = new Date().getFullYear();

const links = {
  Explore: [
    { label: "Concepts", href: "#concepts" },
    { label: "Process", href: "#process" },
    { label: "What's Included", href: "#included" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  "Concept Sites": [
    { label: "Summit Landscapes", href: "/concepts/summit-landscapes" },
    { label: "Fade & Co.", href: "/concepts/fade-and-co" },
    { label: "BrightNest Cleaning", href: "/concepts/brightnest-cleaning" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-ivory/10 px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="text-ivory font-semibold text-sm uppercase tracking-[0.25em]">
              Moss <span className="text-clay">&amp;</span> Ross
              <span className="block mt-1 text-xs font-normal italic normal-case text-sand tracking-normal">
                Digital Studio
              </span>
            </a>
            <p className="mt-4 text-sand text-sm leading-relaxed max-w-xs">
              Polished, practical websites for local businesses, designed and
              built by the two of us.
            </p>
            {/* Falls back to the form while no public address is configured.
                min-h keeps it tappable on a phone either way. */}
            {CONTACT_EMAIL ? (
              <p className="mt-2 text-sand text-sm">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex min-h-[44px] items-center hover:text-clay transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            ) : (
              <p className="mt-2 text-sand text-sm">
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center hover:text-clay transition-colors"
                >
                  Send us a project inquiry
                </a>
              </p>
            )}
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-ivory font-medium text-xs uppercase tracking-[0.2em] mb-4">{group}</h4>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item.label}>
                    {/* min-h keeps these comfortably tappable on a phone; as
                        plain inline links they were about 17px tall. */}
                    <a
                      href={item.href}
                      className="inline-flex min-h-[44px] items-center text-sand hover:text-ivory text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ivory/10 pt-8 pb-8 mb-4">
          <h4 className="text-ivory font-medium text-xs uppercase tracking-[0.2em] mb-4">
            Areas We Serve
          </h4>
          <p className="text-sand text-sm leading-relaxed max-w-3xl">
            {SERVICE_AREA.join(" · ")}
          </p>
          <p className="text-sand/70 text-sm mt-3 max-w-3xl">
            Based in {HOME_AREA}. {REMOTE_NOTE}
          </p>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sand/70 text-sm">
            &copy; {year} Moss &amp; Ross. All rights reserved.
          </p>
          <p className="text-sand/50 text-xs">
            Concept sites shown are fictional businesses, labeled as
            self-initiated work.
          </p>
        </div>
      </div>
    </footer>
  );
}
