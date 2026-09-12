import type { Metadata } from "next";
import PartnerStory from "@/components/community/PartnerStory";
import { SITE_NAME } from "@/lib/site";

/**
 * The partner-story template, filled with placeholder content so the layout can
 * be reviewed before there is a real engagement to write up.
 *
 * To publish an actual story: copy this folder to src/app/community/<slug>/,
 * replace every field below with the real thing, drop the `preview` prop, and
 * remove the robots block so it can be indexed. Leave a metric out rather than
 * estimating it, and keep the `note` on anything that is measured: the notes
 * are what separate this from an agency brag sheet.
 *
 * Kept out of the index while it holds placeholder content.
 */
export const metadata: Metadata = {
  title: `Partner Story Template (Sample) | ${SITE_NAME}`,
  description:
    "Layout preview for community track partner stories. Placeholder content, not a real engagement.",
  robots: { index: false, follow: false },
};

export default function PartnerStoryTemplate() {
  return (
    <PartnerStory
      preview
      org="Valley Harvest Food Bank"
      missionArea="Food Security · Sample Story"
      facts={[
        { label: "Project", value: "Intake & Triage" },
        { label: "Duration", value: "4 weeks" },
        { label: "Organization", value: "9 staff, 60 volunteers" },
        { label: "Owner After Handover", value: "Operations Coordinator" },
      ]}
      summary="Requests for food assistance arrived in three places at once and were sorted by hand every morning. We replaced the sorting with a single intake form and a summarize-and-route step, and trained the operations coordinator to run and change it herself."
      problem={[
        "Assistance requests came in by phone, through a web form, and by walk-in, and all three landed in one shared inbox. Every morning someone spent the first hour of the day reading them, working out which were urgent, and forwarding each one to the right program.",
        "The cost was not only the hour. Requests that arrived on a Friday afternoon often waited until Monday, and because urgency was judged by whoever happened to be reading, the same situation could be handled two different ways depending on the day.",
      ]}
      metrics={[
        {
          label: "Staff time on intake sorting",
          before: "6 hrs/week",
          after: "45 min/week",
          note: "Measured by the operations coordinator across two weeks before the project and two weeks after handover.",
        },
        {
          label: "Time to first response",
          before: "up to 3 days",
          after: "same day",
          note: "Median across 120 requests in the month following handover.",
        },
        {
          label: "Requests handled per week",
          before: "~40",
          after: "~65",
          note: "Same staffing. The increase is capacity freed, not new demand.",
        },
      ]}
      built={[
        {
          title: "One intake form, three doors",
          body: "Phone, web, and walk-in requests now enter through the same form, filled in by the requester or by staff on their behalf. Nothing else changed about how people ask for help.",
        },
        {
          title: "A summary instead of a thread",
          body: "Each request arrives as a short brief: what is needed, how urgent, which program fits, and anything flagged for a human to read closely. The original message stays attached underneath.",
        },
        {
          title: "Routing rules the staff wrote",
          body: "The urgency and program rules came out of a two-hour session with the people who had been making those calls by hand. They are written in plain language and edited in a document, not in code.",
        },
        {
          title: "A weekly view for the coordinator",
          body: "One page showing what came in, what is still open, and what has been waiting longest, so nothing needs to be remembered to be tracked.",
        },
      ]}
      handover={[
        "The operations coordinator ran the system for the final week while we watched and answered questions.",
        "The routing rules live in a document she can edit without us, and changes take effect the same day.",
        "A four-page written guide covers running it, changing the rules, and what to do when something looks wrong.",
        "We checked in once at thirty days, fixed two things real use had uncovered, and closed the project.",
      ]}
      quote={{
        text: "The part I did not expect is that I can change it myself. When the winter program started we added a category in ten minutes.",
        attribution: "Operations Coordinator, Valley Harvest Food Bank",
      }}
      limits="This did not touch case management, and it does not decide who receives assistance: every request is still read and every decision is still made by a person. It also did not fix the underlying data problem, which is that program records live in three systems that do not talk to each other. That is a larger project, and we said so rather than half-solving it in four weeks."
    />
  );
}
