import type { Metadata } from "next";
import CaseStudy from "@/components/concepts/CaseStudy";

export const metadata: Metadata = {
  title: "Summit Landscapes — Concept Case Study | Moss & Ross",
  description:
    "A self-initiated concept site for a fictional landscaping company, built by Moss & Ross to demonstrate our design and build process.",
};

export default function SummitLandscapesCase() {
  return (
    <CaseStudy
      name="Summit Landscapes"
      industry="Landscaping & Outdoor Construction"
      tagline="A gallery-first website for a fictional landscaping company, built to turn visitors into quote requests."
      palette={{ ink: "#26372C", accent: "#7A9B5E", surface: "#F5F3EC" }}
      brief="Design a site for a small landscaping and outdoor construction company whose best salesperson is its finished work. Show the projects, make the service area obvious before anyone wastes a call, and put a quote request within one click of every section."
      decisions={[
        {
          title: "Photos before paragraphs",
          body: "In the trades, customers judge photos. The project gallery sits under the hero, before any paragraph of selling, because a photo of a finished patio beats a sentence about craftsmanship.",
        },
        {
          title: "One call to action, repeated",
          body: "Every section points to the same place: Request a Quote. We cut competing buttons and newsletter boxes so a ready visitor finds the next step without hunting.",
        },
        {
          title: "The service area answers the first question",
          body: "The most common wasted call in the trades comes from outside the coverage area. We list the towns on the page, so those calls stop before they start and locals recognize their own town.",
        },
        {
          title: "Earthy palette, unfussy type",
          body: "Deep green, warm sand, and generous whitespace read as established and dependable. None of it shows off for other designers.",
        },
      ]}
      functionality={[
        "Browse a project gallery organized by type of work",
        "Scan the services and what each one covers",
        "Check the service area town by town",
        "Complete a full quote-request form with project type and budget",
      ]}
      demoHref="/concepts/summit-landscapes/demo"
    />
  );
}
