"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

const inputClasses =
  "w-full bg-ivory/5 border border-ivory/15 text-ivory placeholder-sand/50 px-4 py-3 text-sm focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-colors";

const selectClasses = `${inputClasses} appearance-none [&>option]:text-charcoal`;

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Read the form before awaiting; currentTarget is nulled after the tick.
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.error || "That didn't send.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "That didn't send.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-charcoal py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Project Inquiries
          </p>
        <h2 className="text-3xl sm:text-4xl font-medium text-ivory tracking-tight mb-4">
          Discuss Your Project
        </h2>
          <p className="text-sand text-lg mb-10">
            Share a few details and we&apos;ll reply within one business day.
          </p>
        </Reveal>

        {submitted ? (
          <div className="bg-ivory/5 border border-ivory/15 p-10 text-center">
            <CheckCircle size={48} className="text-clay mx-auto mb-4" />
            <h3 className="text-ivory text-xl font-semibold mb-2">
              We&apos;ll be in touch soon!
            </h3>
            <p className="text-sand">
              Thanks for reaching out. We typically respond within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-ivory/5 border border-ivory/10 p-8 text-left space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ivory/80 mb-1.5">
                  Your Name <span className="text-clay" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-ivory/80 mb-1.5">
                  Business Name <span className="text-clay" aria-hidden="true">*</span>
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  placeholder="Acme Plumbing"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ivory/80 mb-1.5">
                Email Address <span className="text-clay" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@yourbusiness.com"
                className={inputClasses}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-ivory/80 mb-1.5">
                  Budget Range <span className="text-sand/60 font-normal">(optional)</span>
                </label>
                <select id="budget" name="budget" className={selectClasses} defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1k">$500 – $1,000</option>
                  <option value="1k-2.5k">$1,000 – $2,500</option>
                  <option value="2.5k-5k">$2,500 – $5,000</option>
                  <option value="5k-plus">$5,000+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="timing" className="block text-sm font-medium text-ivory/80 mb-1.5">
                  Desired Timing <span className="text-sand/60 font-normal">(optional)</span>
                </label>
                <select id="timing" name="timing" className={selectClasses} defaultValue="">
                  <option value="" disabled>
                    Select timing
                  </option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-3-months">Within 1–3 months</option>
                  <option value="3-plus-months">3+ months out</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ivory/80 mb-1.5">
                Project Goals
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What should the website do for your business? New site, redesign, more inquiries, online bookings..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Honeypot: hidden from people, tempting to bots. */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company (leave this blank)</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-3 border border-clay/40 bg-clay/10 px-4 py-3"
              >
                <AlertCircle size={18} className="text-clay shrink-0 mt-0.5" />
                <p className="text-sand text-sm">
                  {error}{" "}
                  {CONTACT_EMAIL ? (
                    <>
                      Please email us at{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-ivory underline"
                      >
                        {CONTACT_EMAIL}
                      </a>{" "}
                      and we&apos;ll pick it up from there.
                    </>
                  ) : (
                    <>Please try again in a moment.</>
                  )}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark disabled:bg-clay/50 text-ivory font-semibold px-6 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
              ) : (
                <>
                  Send Inquiry <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
