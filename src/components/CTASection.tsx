import Reveal from "@/components/Reveal";
import PatternBackdrop from "@/components/PatternBackdrop";
import InquiryForm from "@/components/InquiryForm";
import { inputClasses, selectClasses } from "@/components/formStyles";
import { BUILD_TIERS } from "@/lib/pricing";

/**
 * Plain-language, because the people filling this in are plumbers and
 * barbers, not designers. "The header feels cramped" is the whole design
 * vocabulary the site asks for elsewhere; this list keeps to that.
 */
const styles = [
  { value: "clean", label: "Clean and simple" },
  { value: "warm", label: "Warm and friendly" },
  { value: "bold", label: "Bold and modern" },
  { value: "established", label: "Traditional and established" },
  { value: "unsure", label: "Not sure. You pick." },
];

/**
 * The form is a demo brief, not a conversation starter. Every field is
 * something we need to build the first version of someone's site, and nothing
 * here asks for a budget or a timeline: you do not ask what someone can
 * afford before you have shown them anything, and the hero promises exactly
 * that. Budget comes up on the call, after the demo, when there is something
 * to price.
 */
export default function CTASection() {
  return (
    <section id="contact" className="relative bg-charcoal py-24 px-6 overflow-hidden">
      {/* Stronger than the hero, which already carries the brand animation.
          Faded out down the section so the form sits on clean charcoal. */}
      <PatternBackdrop className="pattern-fade-bottom opacity-45" />

      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Free Demo
          </p>
          {/* The demo-offer dialog carries the pitch and sends people here, so
              this heading is the instruction rather than a repeat of it. */}
          <h2 className="text-3xl sm:text-4xl font-medium text-ivory tracking-tight mb-4">
            Tell us about your business.
          </h2>
          <p className="text-sand text-lg mb-10">
            We&apos;ll build you a working demo from what you put here. No
            deposit, no commitment, nothing to prepare.
          </p>
        </Reveal>

        <InquiryForm
          track="demo"
          submitLabel="Build My Free Demo"
          success={{
            title: "Your demo is in the queue.",
            body: "We'll reply within one business day to confirm the details, then build it and send you the link.",
          }}
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

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ivory/80 mb-1.5">
                Email <span className="text-clay" aria-hidden="true">*</span>
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
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ivory/80 mb-1.5">
                Phone <span className="text-sand/60 font-normal">(optional, so we can text you the link)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(805) 555-0100"
                className={inputClasses}
              />
            </div>
          </div>

          {/* The one field the demo cannot be built without. The placeholder
              shows the level of detail we mean, so nobody writes "plumbing"
              and nobody writes an essay. */}
          <div>
            <label htmlFor="services" className="block text-sm font-medium text-ivory/80 mb-1.5">
              What does your business do? <span className="text-clay" aria-hidden="true">*</span>
            </label>
            <textarea
              id="services"
              name="services"
              rows={4}
              required
              placeholder="Residential plumbing and water heaters, mostly Thousand Oaks and Newbury Park. Emergency calls are a big part of it. Been going since 2015."
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* A link does most of what a photo upload would, without the
              storage, size limits, and abuse surface uploads bring. An
              Instagram page is usually the best source of real photos a
              local business has. */}
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-ivory/80 mb-1.5">
              Current website or Instagram <span className="text-sand/60 font-normal">(optional)</span>
            </label>
            <input
              id="website"
              name="website"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="yourbusiness.com or @yourbusiness"
              className={inputClasses}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Asks which product they are looking at rather than how much
                money they have. It reads from the published tiers so the
                options can never drift from the pricing page, and "not sure"
                has to be a fine answer or this is a budget question with a
                hat on. */}
            <div>
              <label htmlFor="tier" className="block text-sm font-medium text-ivory/80 mb-1.5">
                Which tier sounds closest? <span className="text-sand/60 font-normal">(optional)</span>
              </label>
              <select id="tier" name="tier" className={selectClasses} defaultValue="">
                <option value="" disabled>
                  Pick one
                </option>
                {BUILD_TIERS.map((t) => (
                  <option key={t.name} value={t.name.toLowerCase()}>
                    {t.name} · {t.price}
                  </option>
                ))}
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="style" className="block text-sm font-medium text-ivory/80 mb-1.5">
                How should it feel? <span className="text-sand/60 font-normal">(optional)</span>
              </label>
              <select id="style" name="style" className={selectClasses} defaultValue="">
                <option value="" disabled>
                  Pick one
                </option>
                {styles.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </InquiryForm>
      </div>
    </section>
  );
}
