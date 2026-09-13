"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Which lane a submission belongs to. The Pages Function reads this to decide
 * which fields are required and how to subject the email, so the studio's
 * demo requests and the community track's applications land in the same
 * inbox but never look alike.
 */
export type Track = "demo" | "community";

type Props = {
  track: Track;
  submitLabel: string;
  success: { title: string; body: string };
  /** The fields. Everything else about the form is the same for every track. */
  children: React.ReactNode;
};

/**
 * The part of a form that does not change between the demo request and the
 * community application: submission, the honeypot, the error state, and the
 * success panel. The fields are passed in, because that is the only thing
 * that differs, and forking the whole component for two field lists would
 * mean fixing every bug twice.
 */
export default function InquiryForm({
  track,
  submitLabel,
  success,
  children,
}: Props) {
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

  if (submitted) {
    return (
      <div className="bg-charcoal/80 backdrop-blur-sm border border-ivory/15 p-10 text-center">
        <CheckCircle size={48} className="text-clay mx-auto mb-4" />
        <h3 className="text-ivory text-xl font-semibold mb-2">{success.title}</h3>
        <p className="text-sand">{success.body}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-charcoal/80 backdrop-blur-sm border border-ivory/15 p-8 text-left space-y-4"
      noValidate
    >
      <input type="hidden" name="track" value={track} />

      {children}

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
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ivory underline">
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
            {submitLabel} <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
