"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Concepts", href: "#concepts" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "#process" },
  { label: "What's Included", href: "#included" },
  { label: "Community", href: "/community" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

/**
 * The nav mixes in-page anchors with real routes. Anchors stay plain <a>, so
 * the smooth scroll is left alone; routes go through Link to prefetch and
 * navigate client-side.
 */
function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-ivory/10"
          : "bg-transparent"
      }`}
    >
      {/* Reading position, pinned to the nav's hairline. Fades in with the nav
          background, since there is nothing to indicate at the top of the page.
          Sits at top-16 rather than the header's bottom so the open mobile menu
          does not push it down. */}
      <div
        aria-hidden="true"
        className={`scroll-progress absolute left-0 top-16 h-0.5 w-full origin-left bg-clay transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-ivory font-semibold text-sm uppercase tracking-[0.25em]"
        >
          Moss <span className="text-clay">&amp;</span> Ross
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                href={l.href}
                className="text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-clay hover:bg-clay-dark text-ivory text-xs font-semibold uppercase tracking-[0.15em] px-5 py-2.5 transition-colors duration-200"
        >
          Discuss Your Project
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-ivory p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md px-6 pb-6 border-t border-ivory/10">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  href={l.href}
                  className="text-sand hover:text-ivory text-sm font-medium uppercase tracking-[0.15em] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex bg-clay hover:bg-clay-dark text-ivory font-semibold px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors"
                onClick={() => setOpen(false)}
              >
                Discuss Your Project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
