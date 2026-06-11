"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#0a0f1e] py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #1d4ed8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
          Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Tell us a bit about your business and we&apos;ll get back to you with a
          free consultation. No obligation, no tech jargon.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
            <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">
              We&apos;ll be in touch soon!
            </h3>
            <p className="text-slate-400">
              Thanks for reaching out. We typically respond within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Your Name <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Business Name <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  placeholder="Acme Plumbing"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email Address <span className="text-red-400" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@yourbusiness.com"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                What do you need help with?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your business and what you're looking for..."
                className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
