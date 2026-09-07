import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  FileText,
  GraduationCap,
  Inbox,
  Target,
} from "lucide-react";
import PatternBackdrop from "@/components/PatternBackdrop";
import Reveal from "@/components/Reveal";
import { SITE_NAME } from "@/lib/site";

const description =
  "The community track: short, fixed-scope AI and operations projects for small nonprofits, built to be handed over. Free for the first three partner organizations.";

export const metadata: Metadata = {
  title: `Community Track — AI Help for Nonprofits | ${SITE_NAME}`,
  description,
  alternates: { canonical: "/community" },
  openGraph: {
    type: "website",
    url: "/community",
    siteName: SITE_NAME,
    title: `Community Track — AI Help for Nonprofits | ${SITE_NAME}`,
    description,
  },
};

/**
 * The three promises that separate this from an agency retainer. They lead the
 * page because a nonprofit's real fear is buying something it cannot run once
 * the contractor leaves, so that gets answered before any list of services.
 */
const commitments = [
  {
    title: "You Keep the Capability",
    body: "Every project ends with a trained staff member and written documentation. No retainer, no dependency on us to keep it running after we go.",
  },
  {
    title: "We Measure Before and After",
    body: "We write down what the work costs you today, before we change anything, then measure the same thing at the end. You get the number either way.",
  },
  {
    title: "One Process, Finished",
    body: "We fix a single process completely rather than half-fixing five. Small scope, real handover, done in weeks rather than quarters.",
  },
];

const offers = [
  {
    icon: Inbox,
    title: "Intake & Triage",
    body: "Turn a chaotic inbox or a paper intake into a real form plus a summarize-and-route step, so staff open a short brief instead of reading forty raw messages. It clears the clutter so your people reach the people faster.",
  },
  {
    icon: FileText,
    title: "Grant & Report Drafting",
    body: "A source-of-truth library of your mission language, program numbers, and past narratives, plus a repeatable workflow that produces the first draft of an application or a funder report.",
  },
  {
    icon: BarChart3,
    title: "Data Cleanup & One Real Dashboard",
    body: "We take your donor, volunteer, or program export, clean it up, and build the one page that answers what your director actually asks: who lapsed, what retention looks like, which program is growing.",
  },
  {
    icon: Target,
    title: "Outcomes Reporting",
    body: "Raw service logs turned into board-ready and funder-ready outcome summaries on a schedule you can keep, so reporting season stops being a scramble every time.",
  },
  {
    icon: GraduationCap,
    title: "Staff Enablement",
    body: "A half-day workshop for your team, plus a prompt library and a plain-English usage policy: what never gets pasted in, how to check what comes back, and who to ask when it looks wrong.",
  },
];

const steps = [
  {
    step: "01",
    title: "Baseline",
    description:
      "A free call, then we write down what the process costs you today: hours a week, turnaround time, how many people it touches.",
    yourPart: "Tell us where the time goes. There is nothing to prepare.",
  },
  {
    step: "02",
    title: "Scope",
    description:
      "We pick one process and put the scope in writing: what we will build, what it deliberately will not do, and the date it is finished.",
    yourPart:
      "Name the one thing that would help most. We will tell you if it fits.",
  },
  {
    step: "03",
    title: "Build Alongside You",
    description:
      "We build it with the person who will own it, not in a vacuum, and share progress as it takes shape rather than at the end.",
    yourPart: "Give us one staff member for a couple of hours a week.",
  },
  {
    step: "04",
    title: "Train & Document",
    description:
      "Your staff member runs it while we watch, and we write the whole thing down in language your next hire can follow.",
    yourPart:
      "Tell us where the instructions are unclear. That is what this step is for.",
  },
  {
    step: "05",
    title: "Hand Over",
    description:
      "You own the tool and the documentation outright. We check in once at thirty days to fix whatever real use uncovered.",
    yourPart: "Use it for a month and keep a list.",
  },
];

const missionAreas = [
  "Food security and basic needs",
  "Education, youth development, and workforce programs",
  "Veterans, health, and community services",
  "Civic technology and public-service delivery",
];

const asked = [
  "One staff member who will own the tool after we leave",
  "The before number, even if it is only a rough estimate",
  "Permission to write up what we built, with anything sensitive removed",
];

export default function CommunityTrack() {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors"
          >
            <ArrowLeft size={14} /> Moss &amp; Ross
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-clay hover:bg-clay-dark text-ivory text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 transition-colors"
          >
            Apply as a Partner
          </Link>
        </div>
      </header>

      <main>
        <section className="relative bg-charcoal overflow-hidden">
          {/* The same backdrop as the home hero. There is no brand animation on
              this page to sit against, so it runs fainter, and a scrim keeps
              the left side dark enough for the headline to stay legible over
              the bright part of the pattern. */}
          <PatternBackdrop
            align="centre"
            className="mask-feather-x hidden opacity-20 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40"
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
            <Reveal className="max-w-3xl">
              <div className="w-10 h-1 bg-clay mb-10" aria-hidden="true" />

              <p className="text-clay text-xs font-medium uppercase tracking-[0.25em] mb-6">
                The Community Track · Nonprofit Partners
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-ivory leading-[1.1] tracking-tight mb-8">
                AI help for nonprofits, built to be handed over.
              </h1>

              <p className="text-lg sm:text-xl text-sand max-w-2xl mb-12 leading-relaxed">
                We spend a few weeks inside one small organization, fix a single
                process that is eating staff time, and leave behind the tool and
                the ability to run it without us.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-200"
                >
                  Apply as a Partner <ArrowRight size={16} />
                </Link>
                <a
                  href="#what-we-build"
                  className="inline-flex items-center justify-center gap-2 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] border border-ivory/25 hover:border-ivory/50 transition-colors duration-200"
                >
                  See What We Build
                </a>
              </div>
              <p className="text-sand/80 text-sm">
                Free for the first three partner organizations. A fixed
                nonprofit rate after that, quoted before we start.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="why" className="bg-ivory py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl mb-16">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                Why This Exists
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
                Most nonprofits cannot hire for this. They can borrow it.
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-4">
                Small organizations are doing work that matters on software held
                together by spreadsheets and one person&apos;s memory. The tools
                that would give them their time back already exist, but hiring
                someone to set them up costs more than the problem does.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                So we do it as a short, fixed project, and we do it in the open:
                everything gets documented and handed to a person on your staff.
                The point is not to become a line in your budget. The point is
                to leave you able to do it again without us.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={(i % 3) * 90}
                  className="bg-white border border-charcoal/10 p-6"
                >
                  <h3 className="text-charcoal font-medium text-lg mb-3">
                    {c.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">{c.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-build" className="bg-ivory-deep py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                What We Build
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-4">
                Five Projects That Give Staff Time Back
              </h2>
              <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
                Each one is a few weeks of work, scoped in writing, ending in a
                handover. Pick the one that hurts most.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {offers.map((o, i) => (
                <Reveal
                  key={o.title}
                  delay={(i % 3) * 90}
                  className="bg-white border border-charcoal/10 p-6"
                >
                  <o.icon size={22} className="text-clay mb-4" aria-hidden="true" />
                  <h3 className="text-charcoal font-medium text-lg mb-3">
                    {o.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">{o.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="border border-charcoal/10 bg-white p-6 max-w-3xl mx-auto text-center">
              <p className="text-charcoal/60 leading-relaxed">
                We still build websites, and nonprofits need those too. If your
                donation path is broken or your program pages are unreadable on
                a phone, that is a revenue problem, and it belongs on this list
                as much as anything above.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="how-it-runs" className="bg-ivory py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                How It Runs
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-4">
                Five Steps, and You Own It at the End
              </h2>
            </Reveal>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <Reveal
                  key={s.step}
                  delay={(i % 3) * 90}
                  className="bg-white border border-charcoal/10 p-6 sm:p-8"
                >
                  <div className="grid sm:grid-cols-[auto_1fr] gap-4 sm:gap-8">
                    <span className="text-clay font-medium text-sm">{s.step}</span>
                    <div>
                      <h3 className="text-charcoal font-medium text-lg mb-3">
                        {s.title}
                      </h3>
                      <p className="text-charcoal/60 leading-relaxed mb-4">
                        {s.description}
                      </p>
                      <p className="text-charcoal/45 text-sm">
                        <span className="uppercase tracking-[0.15em] text-xs text-clay mr-2">
                          Your Part
                        </span>
                        {s.yourPart}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="bg-charcoal py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                Who It Is For
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-ivory tracking-tight mb-6">
                Small teams doing direct service.
              </h2>
              <p className="text-sand leading-relaxed mb-8">
                We work best with organizations under about fifty staff, where
                one person wears four hats and the process we are fixing is one
                of them. We stay inside a few mission areas so we get better at
                them rather than starting over every time:
              </p>
              <ul className="space-y-3">
                {missionAreas.map((m, i) => (
                  <li key={m} className="flex items-baseline gap-4">
                    <span className="text-clay text-sm font-medium">
                      0{i + 1}
                    </span>
                    <span className="text-sand">{m}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90} className="border border-ivory/15 p-8">
              <h3 className="text-ivory font-medium text-lg mb-4">
                When We Are Not the Right Fit
              </h3>
              <p className="text-sand leading-relaxed mb-4">
                If you need someone to operate the tool permanently, if the work
                requires handling protected client records we should not see, or
                if what you actually need is a case-management system replaced,
                this is the wrong engagement.
              </p>
              <p className="text-sand leading-relaxed">
                We will say so on the first call rather than after the invoice,
                and point you toward someone who does that work properly.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="cost" className="bg-ivory py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
                What It Costs
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
                The first three partners pay nothing.
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-4">
                We are building this track deliberately, and the fastest way to
                do that well is real work for real organizations. The first
                three partners get a full project at no cost.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                After that it is a fixed nonprofit rate, written down before
                anything starts, on the same terms as the rest of our work: no
                surprise invoices, and we own our deadlines.
              </p>
            </Reveal>

            <Reveal
              delay={90}
              className="bg-ivory-deep border border-charcoal/10 p-8"
            >
              <h3 className="text-charcoal font-medium text-lg mb-5">
                What We Ask in Return
              </h3>
              <ul className="space-y-4">
                {asked.map((a, i) => (
                  <li key={a} className="flex items-baseline gap-4">
                    <span className="text-clay text-sm font-medium">
                      0{i + 1}
                    </span>
                    <span className="text-charcoal/70 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory-deep py-24 px-6 border-t border-charcoal/10">
          <Reveal className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-6">
              Tell us what is eating the week.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
              Send a short note about your organization and the process that
              costs you the most time. Mention the community track in your
              message so it reaches the right place.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/85 text-ivory font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors"
            >
              Apply as a Partner <ArrowRight size={16} />
            </Link>
          </Reveal>
        </section>
      </main>

      <footer className="bg-charcoal px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sand hover:text-ivory text-xs font-medium uppercase tracking-[0.15em] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Moss &amp; Ross
          </Link>
          <p className="text-sand/50 text-xs">
            The community track is our nonprofit and public-interest work.
          </p>
        </div>
      </footer>
    </div>
  );
}
