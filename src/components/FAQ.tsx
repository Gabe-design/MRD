import { ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { HOME_AREA, REGION } from "@/lib/site";

/**
 * Answers are deliberately grounded in promises made elsewhere on the page:
 * the commitments in WhatsIncluded and the steps in HowItWorks. Nothing here
 * introduces a number the rest of the site does not already stand behind.
 */
const faqs = [
  {
    q: "How much does a website cost?",
    a: `Every project is quoted on its own, because a five-page site for a barbershop and a site with a booking system are not the same job. The first call is free, and you get the full price in writing before any work starts. What we quote is what you pay, and there are no invoices you did not see coming.`,
  },
  {
    q: "How long does it take?",
    a: `It depends on how many pages the site needs and how quickly you can get us your content, which is usually the longest pole. We agree a delivery date before we start and we hold ourselves to it: if we miss the agreed date, the next milestone is on us.`,
  },
  {
    q: "Do you only work with businesses near you?",
    a: `No. We are based in ${HOME_AREA} and most of our work is across ${REGION}, so we can meet you in person if that helps. But the work itself is remote, and we already have clients outside California. The process is identical either way.`,
  },
  {
    q: "I don't have a website at all. Where do we start?",
    a: `Exactly where everyone else does: a free call about how your business actually works. You do not need a domain, a logo, or any idea of what you want the site to look like. Bringing nothing is normal, and it is easier than untangling something half-finished.`,
  },
  {
    q: "What do I need to give you?",
    a: `Your logo if you have one, photos of your work, and your business details: services, prices, hours, and the areas you cover. We take it from there, writing the structure and placing the content so it reads well. If you do not have photos, we will tell you what to take.`,
  },
  {
    q: "Who will I actually be dealing with?",
    a: `One of the two of us, from the first call to launch and after. There is no account manager in the middle and nothing gets handed to a contractor you have never spoken to. You will always be talking to the person doing the work.`,
  },
  {
    q: "What if I don't like the design?",
    a: `Then we change it. If the first draft misses the direction you had in mind, the first revision is free. Beyond that, we agree the number of revision rounds before we start, so refinements never turn into a surprise on the invoice.`,
  },
  {
    q: "Do you handle the domain and hosting?",
    a: `Yes. We set up the domain, the hosting, and the go-live so you never have to sit in a registrar's control panel. If you already own a domain, we will move it across without your current site going dark.`,
  },
  {
    q: "What happens after the site launches?",
    a: `We stay available for updates, changes, and fixes through a support arrangement we agree together before the project starts, so you know the cost of that up front too. Your site does not become your problem the day it goes live.`,
  },
  {
    q: "Will my site show up on Google?",
    a: `We build in the things search engines actually check: correct page titles and descriptions, clean structure, and fast load times. We will also walk you through setting up your Google Business Profile, which is what puts a local business in the map results. Nobody can promise a specific ranking, and you should be wary of anyone who does.`,
  },
  {
    q: "Your portfolio is concept sites. Have you built for real businesses?",
    a: `We would rather show you three complete builds we are proud of than a page of logos. The concept sites are real, working websites for businesses we invented, and every page is clickable, so you can judge the craft directly rather than take our word for it. Ask us on the call and we will talk you through the client work as well.`,
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 px-6">
      {/* Mirrors the visible answers exactly, so the markup stays honest if the
          copy above is edited. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-4">
            The Things People Ask Us First
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            If your question isn&apos;t here, ask it on the call. It&apos;s free
            and there&apos;s nothing to prepare.
          </p>
        </Reveal>

        <div className="border-t border-charcoal/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i, 4) * 60}>
              {/* <details> rather than state: it opens without JavaScript, is
                  keyboard operable for free, and lets in-page search find the
                  answers in browsers that expand hidden content. */}
              <details className="group border-b border-charcoal/10">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-charcoal text-base sm:text-lg">
                    {f.q}
                  </h3>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="text-clay shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="text-charcoal/60 leading-relaxed pb-6 pr-10">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
