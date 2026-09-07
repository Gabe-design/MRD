"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";

/** Remembered per browser, so a returning visitor is not asked again. */
const STORAGE_KEY = "mr-demo-offer-seen";
const SUPPRESS_DAYS = 30;

/** How far down the page counts as "reading it properly". */
const TRIGGER_RATIO = 0.6;

/**
 * In development the offer opens on every reload, ignoring the 30-day
 * suppression, so it can be looked at without clearing storage between passes.
 * NODE_ENV is inlined at build time, so this is a constant false in a
 * production bundle and the suppression behaves normally there.
 */
const ALWAYS_SHOW = process.env.NODE_ENV !== "production";

function recentlySeen() {
  if (ALWAYS_SHOW) return false;
  try {
    const seen = window.localStorage.getItem(STORAGE_KEY);
    if (!seen) return false;
    const age = Date.now() - Number(seen);
    return Number.isFinite(age) && age < SUPPRESS_DAYS * 864e5;
  } catch {
    // Storage blocked (private windows, strict settings). Showing it once is
    // better than showing it on every scroll, so treat it as already seen.
    return true;
  }
}

function remember() {
  if (ALWAYS_SHOW) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* nothing to do; the in-memory guard still prevents a second open */
  }
}

/**
 * A single offer, shown once, to someone who has read enough of the page to
 * care. Deliberately scroll-triggered rather than on a timer: a fixed delay
 * fires at whatever the visitor happens to be doing, which is as likely to be
 * mid-sentence as mid-decision.
 */
export default function DemoOffer() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (recentlySeen()) return;

    let frame = 0;

    const check = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable < TRIGGER_RATIO) return;

      // Someone already at the form is converting. Interrupting them with an
      // offer to convert is the one moment this cannot help. Bypassed in
      // development, where scrolling straight to the bottom should still show
      // the dialog rather than silently skip it.
      if (!ALWAYS_SHOW) {
        const contact = document.getElementById("contact");
        if (
          contact &&
          contact.getBoundingClientRect().top < window.innerHeight
        ) {
          return;
        }
      }

      stop();
      remember();
      setOpen(true);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    function stop() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return stop;
  }, []);

  // Everything that only applies while the dialog is up: the scroll lock, the
  // keyboard contract, and putting focus back where it came from.
  useEffect(() => {
    if (!open) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    // Replacing the scrollbar with padding keeps the page from jumping sideways
    // as it locks.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      // Keep Tab inside the dialog: the page behind it is inert to a mouse, and
      // it should be inert to the keyboard too.
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      restoreFocusTo.current?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="backdrop-in fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 px-6 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-offer-title"
        aria-describedby="demo-offer-body"
        className="dialog-in relative w-full max-w-md border border-ivory/15 bg-charcoal p-8 sm:p-10"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          data-autofocus
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center text-sand transition-colors hover:text-ivory"
        >
          <X size={18} />
        </button>

        <div className="mb-6 h-1 w-10 bg-clay" aria-hidden="true" />

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
          Free Demo
        </p>

        <h2
          id="demo-offer-title"
          className="mb-4 text-2xl font-medium leading-tight tracking-tight text-ivory sm:text-3xl"
        >
          See it before you pay a thing.
        </h2>

        <p
          id="demo-offer-body"
          className="mb-8 leading-relaxed text-sand"
        >
          We&apos;ll design and build a working demo of your site first, at no
          cost. You open it on your own phone, click through the real thing, and
          decide from there. If it isn&apos;t right, you don&apos;t pay.
        </p>

        <a
          href="#contact"
          onClick={close}
          className="inline-flex w-full items-center justify-center gap-2 bg-clay px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ivory transition-colors hover:bg-clay-dark"
        >
          Start a Free Demo <ArrowRight size={16} />
        </a>

        <button
          type="button"
          onClick={close}
          className="mt-4 w-full text-center text-sm text-sand/70 transition-colors hover:text-sand"
        >
          Not right now
        </button>
      </div>
    </div>
  );
}
