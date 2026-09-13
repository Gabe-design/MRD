import Reveal from "@/components/Reveal";
import PatternBackdrop from "@/components/PatternBackdrop";
import InquiryForm from "@/components/InquiryForm";
import { inputClasses } from "@/components/formStyles";

/**
 * The community track's own application, on its own page. It used to send
 * people to the studio's demo form, which asks a nonprofit which paid tier
 * it wants for a programme the page has just called free. Same form engine
 * as the demo request, different fields, because what we need to know here
 * is what is eating the week, not what the site should look like.
 *
 * Deliberately shorter than the paid form. This is an application to a free
 * programme with three places, and the page promises a short note: the
 * "before number" and the write-up permission from the fit section are
 * things to settle on the first call, not boxes to fill in cold.
 */
export default function CommunityApply() {
  return (
    <section id="apply" className="relative bg-charcoal py-24 px-6 overflow-hidden">
      <PatternBackdrop className="pattern-fade-bottom opacity-45" />

      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Apply as a Partner
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-ivory tracking-tight mb-4">
            Tell us what is eating the week.
          </h2>
          <p className="text-sand text-lg mb-10">
            A short note is plenty. We read every one, and the first call is
            where the details get worked out.
          </p>
        </Reveal>

        <InquiryForm
          track="community"
          submitLabel="Apply as a Partner"
          success={{
            title: "Thank you. We have it.",
            body: "We'll reply within a few business days, with an honest answer either way. Places are limited, so a no is not a judgement on the work you do.",
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
                placeholder="Maria Delgado"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-ivory/80 mb-1.5">
                Organization <span className="text-clay" aria-hidden="true">*</span>
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                autoComplete="organization"
                placeholder="Conejo Valley Food Bank"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Whichever they actually answer. Requiring an email assumes a
              preference a lot of directors do not have, and a phone number
              from someone who lives on their phone beats an inbox they check
              on Fridays. The function works out which is which. */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-ivory/80 mb-1.5">
                Best way to reach you <span className="text-clay" aria-hidden="true">*</span>
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                placeholder="Email or phone, whichever you answer"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="contact2" className="block text-sm font-medium text-ivory/80 mb-1.5">
                A second way <span className="text-sand/60 font-normal">(optional)</span>
              </label>
              <input
                id="contact2"
                name="contact2"
                type="text"
                placeholder="The other one, if you'd like to give both"
                className={inputClasses}
              />
            </div>
          </div>

          {/* One line, on purpose. The mission is context; the next field is
              the application. */}
          <div>
            <label htmlFor="mission" className="block text-sm font-medium text-ivory/80 mb-1.5">
              What does your organization do? <span className="text-clay" aria-hidden="true">*</span>{" "}
              <span className="text-sand/60 font-normal">(one line is fine)</span>
            </label>
            <input
              id="mission"
              name="mission"
              type="text"
              required
              placeholder="Weekly groceries for about 400 families across the Conejo Valley."
              className={inputClasses}
            />
          </div>

          {/* The whole application is really this field. The placeholder is a
              worked example so people describe a process rather than a wish. */}
          <div>
            <label htmlFor="process" className="block text-sm font-medium text-ivory/80 mb-1.5">
              What process costs you the most staff time? <span className="text-clay" aria-hidden="true">*</span>
            </label>
            <textarea
              id="process"
              name="process"
              rows={4}
              required
              placeholder="Intake. Every new family fills out a paper form, someone retypes it into a spreadsheet, and the same questions come in by phone and email all week. It's most of one person's Mondays."
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* The one thing from the fit section worth asking up front: an
              engagement that ends with nobody to hand the tool to has already
              failed, and it is easier to say now than on the call. */}
          <div>
            <label htmlFor="owner" className="block text-sm font-medium text-ivory/80 mb-1.5">
              Who on your staff would own this after we leave? <span className="text-sand/60 font-normal">(optional)</span>
            </label>
            <input
              id="owner"
              name="owner"
              type="text"
              placeholder="A name or a role. It's fine if you're not sure yet."
              className={inputClasses}
            />
          </div>
        </InquiryForm>
      </div>
    </section>
  );
}
