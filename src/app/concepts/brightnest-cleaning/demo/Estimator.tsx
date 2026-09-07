"use client";

import { useMemo, useState } from "react";
import {
  baselineEstimate,
  FREQUENCIES,
  HOME_SIZES,
  SERVICES,
  STANDARD_INCLUSIONS,
  type Frequency,
  type HomeSize,
  type Service,
} from "@/lib/brightnest-rates";

const ink = "#1F4E48";
const teal = "#2F8F83";

const DESCRIPTION_LIMIT = 600;

const inputCls =
  "w-full bg-white border border-[#1F4E48]/20 text-[#1F4E48] placeholder-[#1F4E48]/40 px-4 py-3 text-sm focus:outline-none focus:border-[#2F8F83] focus:ring-1 focus:ring-[#2F8F83]";

type Estimate = {
  tailored: boolean;
  hoursLow: number;
  hoursHigh: number;
  priceLow: number;
  priceHigh: number;
  included: string[];
  assumptions: string[];
  needsVisit: boolean;
  visitReason: string;
};

export default function Estimator() {
  const [service, setService] = useState<Service>("Standard Clean");
  const [homeSize, setHomeSize] = useState<HomeSize>("3 bedrooms");
  const [frequency, setFrequency] = useState<Frequency>("One-off");
  const [description, setDescription] = useState("");
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [pending, setPending] = useState(false);

  // A move-out clean happens once, so a recurring discount would be a
  // nonsense offer. Force the frequency rather than letting the select quote it.
  const recurringAllowed = service !== "Move-In / Move-Out";
  const effectiveFrequency: Frequency = recurringAllowed ? frequency : "One-off";

  const baseline = useMemo(
    () => baselineEstimate(service, homeSize, effectiveFrequency),
    [service, homeSize, effectiveFrequency],
  );

  // Everything the rate card can say on its own. Shown whenever /api/estimate
  // is unavailable — under `next dev` it always is, because Cloudflare Pages
  // Functions do not run there.
  const fromRateCard = (): Estimate => ({
    tailored: false,
    hoursLow: baseline.hoursLow,
    hoursHigh: baseline.hoursHigh,
    priceLow: baseline.priceLow,
    priceHigh: baseline.priceHigh,
    included: STANDARD_INCLUSIONS[service],
    assumptions: ["Based on the size and service you picked, before we see the home."],
    needsVisit: false,
    visitReason: "",
  });

  async function onEstimate() {
    setPending(true);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          homeSize,
          frequency: effectiveFrequency,
          description: description.slice(0, DESCRIPTION_LIMIT),
          hoursLow: baseline.hoursLow,
          hoursHigh: baseline.hoursHigh,
          hourlyRate: baseline.hourlyRate,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setEstimate((await res.json()) as Estimate);
    } catch {
      // No error surfaced on purpose. The rate-card figure is a real answer,
      // not a degraded one, so the visitor gets a price either way.
      setEstimate(fromRateCard());
    } finally {
      setPending(false);
    }
  }

  const money = (n: number) => `£${n.toLocaleString("en-GB")}`;
  const hours = (lo: number, hi: number) =>
    lo === hi ? `${lo} hours` : `${lo}–${hi} hours`;

  return (
    <div className="bg-white rounded-xl p-8 space-y-5" style={{ color: ink }}>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="sr-only">Home size</span>
          <select
            className={inputCls}
            value={homeSize}
            onChange={(e) => setHomeSize(e.target.value as HomeSize)}
            aria-label="Home size"
          >
            {HOME_SIZES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Service</span>
          <select
            className={inputCls}
            value={service}
            onChange={(e) => setService(e.target.value as Service)}
            aria-label="Service"
          >
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="sr-only">How often</span>
        <select
          className={`${inputCls} disabled:opacity-50`}
          value={effectiveFrequency}
          disabled={!recurringAllowed}
          onChange={(e) => setFrequency(e.target.value as Frequency)}
          aria-label="How often"
          aria-describedby={recurringAllowed ? undefined : "bn-frequency-hint"}
        >
          {FREQUENCIES.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        {!recurringAllowed && (
          <p id="bn-frequency-hint" className="text-xs opacity-50 mt-2">
            A move-out clean is a one-off, so there is no recurring rate.
          </p>
        )}
      </label>

      <div>
        <label htmlFor="bn-description" className="block text-sm font-medium mb-2">
          Anything we should know about the home?
        </label>
        <textarea
          id="bn-description"
          className={`${inputCls} min-h-28 resize-y`}
          maxLength={DESCRIPTION_LIMIT}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Two cats, and the kitchen has not had a proper go in about a year. Downstairs loo as well if there is time."
          aria-describedby="bn-description-hint"
        />
        <p id="bn-description-hint" className="text-xs opacity-50 mt-2 flex justify-between gap-4">
          <span>Optional. The more you say, the closer the estimate.</span>
          <span aria-live="polite">{description.length}/{DESCRIPTION_LIMIT}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={onEstimate}
        disabled={pending}
        style={{ backgroundColor: teal }}
        className="w-full text-white font-semibold px-6 py-4 rounded-full disabled:opacity-60"
      >
        {pending ? "Working it out…" : "Get My Estimate"}
      </button>

      {estimate && (
        <div
          className="border rounded-xl p-6 space-y-5"
          style={{ borderColor: `${ink}1a` }}
          aria-live="polite"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] opacity-50 mb-2">
              Your estimate
            </p>
            <p className="text-3xl font-semibold">
              {money(estimate.priceLow)}–{money(estimate.priceHigh)}
            </p>
            <p className="opacity-60 text-sm mt-1">
              {hours(estimate.hoursLow, estimate.hoursHigh)} at £
              {baseline.hourlyRate}/hour
              {baseline.discountPct > 0 &&
                ` — ${Math.round(baseline.discountPct * 100)}% off for ${effectiveFrequency.toLowerCase()} visits`}
            </p>
          </div>

          {estimate.needsVisit && (
            <div
              className="rounded-lg px-4 py-3 text-sm"
              style={{ backgroundColor: `${teal}1a` }}
            >
              <p className="font-medium mb-1">We&apos;d want to see this one first.</p>
              <p className="opacity-70">{estimate.visitReason}</p>
            </div>
          )}

          {estimate.included.length > 0 && (
            <div>
              <p className="font-medium text-sm mb-2">What that covers</p>
              <ul className="space-y-1.5">
                {estimate.included.map((item) => (
                  <li key={item} className="flex items-baseline gap-2 text-sm">
                    <span style={{ color: teal }} aria-hidden="true">
                      ✓
                    </span>
                    <span className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {estimate.assumptions.length > 0 && (
            <div>
              <p className="font-medium text-sm mb-2">What we&apos;ve assumed</p>
              <ul className="space-y-1.5 text-sm opacity-70">
                {estimate.assumptions.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-xs opacity-50">
            An estimate, not a quote. We confirm the price before any work starts.
          </p>
        </div>
      )}

      <p className="text-xs opacity-50 text-center">
        Demonstration estimator on a concept site for a fictional business.
        Nothing is booked and no message is sent.
      </p>
    </div>
  );
}
