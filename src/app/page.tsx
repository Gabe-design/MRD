import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concepts from "@/components/Concepts";
import HowItWorks from "@/components/HowItWorks";
import WhatsIncluded from "@/components/WhatsIncluded";
import CTABand from "@/components/CTABand";
import MeetUs from "@/components/MeetUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concepts />
        <HowItWorks />
        <WhatsIncluded />
        <CTABand />
        <MeetUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
