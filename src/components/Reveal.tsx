"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/** How far above the bottom edge a block has to reach before it plays. */
const TRIGGER_INSET = 40;

type Pending = { el: HTMLElement; show: () => void };

/**
 * One shared scroll pass drives every Reveal on the page: a single passive
 * listener and a single rAF, rather than an observer each.
 *
 * It reveals anything whose top has crossed the trigger line, which includes
 * blocks already scrolled past. An IntersectionObserver would miss those: a
 * jump from an anchor link moves a block from below the viewport to above it
 * without ever intersecting, and it would stay blank on the way back up.
 */
const pending = new Set<Pending>();
let frame = 0;

function flush() {
  frame = 0;
  const line = window.innerHeight - TRIGGER_INSET;
  for (const entry of pending) {
    if (entry.el.getBoundingClientRect().top < line) {
      pending.delete(entry);
      entry.show();
    }
  }
  if (pending.size === 0) stopListening();
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush);
}

function startListening() {
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
}

function stopListening() {
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

function register(entry: Pending) {
  if (pending.size === 0) startListening();
  pending.add(entry);
  schedule();
  return () => {
    pending.delete(entry);
    if (pending.size === 0) stopListening();
  };
}

type RevealProps = {
  children: ReactNode;
  /** transition-delay in milliseconds, for staggering a row of siblings */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fade-up entrance for a block of content.
 *
 * The hidden state lives in CSS behind the .js-reveal class, which the inline
 * script in the layout adds before the body paints. That keeps the exported
 * HTML readable when the bundle never runs, and avoids the flash a
 * hide-on-hydration approach would cause on a statically exported page.
 */
export default function Reveal({ children, delay = 0, className = "", as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Tells the layout's failsafe that the bundle is alive and will reveal.
    document.documentElement.setAttribute("data-reveal-ready", "");

    const el = ref.current;
    if (!el) return;

    return register({ el, show: () => setVisible(true) });
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  );
}
