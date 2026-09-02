import type { Metadata } from "next";
import CaseStudy from "@/components/concepts/CaseStudy";

export const metadata: Metadata = {
  title: "Fade & Co. — Concept Case Study | Moss & Ross",
  description:
    "A self-initiated concept site for a fictional barbershop, built by Moss & Ross to demonstrate our design and build process.",
};

export default function FadeAndCoCase() {
  return (
    <CaseStudy
      name="Fade & Co."
      industry="Barbershop"
      tagline="A dark, brass-accented site for a fictional barbershop, where a visitor can find the price and start a booking in under a minute."
      palette={{ ink: "#141210", accent: "#C2A15A", surface: "#F1EAE0" }}
      brief="Design a barbershop site where price transparency and booking speed matter more than anything else. A visitor should see the full price list, pick a barber, and start a booking without a dead end, on a phone, standing on the sidewalk outside."
      decisions={[
        {
          title: "The price list is the centerpiece",
          body: "Most barbershop sites hide prices, and visitors leave because of it. Here the full list, every service and every price, sits second on the page in large type, like a menu on the wall.",
        },
        {
          title: "People book people",
          body: "Regulars come back to a barber. Profiles with each barber's specialty let a first-time visitor choose a person, so the booking feels personal before they sit down.",
        },
        {
          title: "Dark by design",
          body: "Near-black surfaces with brass accents borrow from the shop itself: leather, steel, warm light. The site feels like the room.",
        },
        {
          title: "One booking path",
          body: "The booking section asks for service, barber, and preferred time. In a real build this connects to the shop's booking system; the demo says so on the page.",
        },
      ]}
      functionality={[
        "Read the complete service and price list",
        "Meet each barber and their specialty",
        "Check opening hours and location details",
        "Walk through the booking flow from service to time preference",
      ]}
      demoHref="/concepts/fade-and-co/demo"
    />
  );
}
