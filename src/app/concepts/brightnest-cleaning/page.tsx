import type { Metadata } from "next";
import CaseStudy from "@/components/concepts/CaseStudy";

export const metadata: Metadata = {
  title: "BrightNest Cleaning — Concept Case Study | Moss & Ross",
  description:
    "A self-initiated concept site for a fictional home-cleaning company, built by Moss & Ross to demonstrate our design and build process.",
};

export default function BrightNestCase() {
  return (
    <CaseStudy
      name="BrightNest Cleaning"
      industry="Home Cleaning Services"
      tagline="A light, reassuring site for a fictional cleaning company that answers a visitor's objections before they ask."
      palette={{ ink: "#1F4E48", accent: "#2F8F83", surface: "#FAFAF7" }}
      brief="Design a home-cleaning site that earns trust from strangers who are about to let someone into their house. The site should answer the real objections before contact: what's included, where you go, who supplies what. The person who writes in is then half-convinced before the first reply."
      decisions={[
        {
          title: "Service options as honest cards",
          body: "Each option (standard, deep, move-in/out, recurring) lists what it includes, so choosing feels like reading a menu.",
        },
        {
          title: "The FAQ is a first-class section",
          body: "Cleaning inquiries repeat the same questions: supplies, pets, keys, cancellations. We answer them on the page with expandable FAQs so the first email can skip straight to scheduling.",
        },
        {
          title: "The design matches the product",
          body: "Off-white surfaces with calm green accents make the pages themselves look tidied.",
        },
        {
          title: "A short inquiry",
          body: "The form asks for home size, service, and frequency. Everything else belongs in the follow-up conversation.",
        },
      ]}
      functionality={[
        "Compare the service options and what each includes",
        "Check the list of areas covered",
        "Expand the FAQs on supplies, pets, access, and cancellations",
        "Send an inquiry with home size, service, and frequency",
      ]}
      demoHref="/concepts/brightnest-cleaning/demo"
    />
  );
}
