import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concepts from "@/components/Concepts";
import HowItWorks from "@/components/HowItWorks";
import WhatsIncluded from "@/components/WhatsIncluded";
import CTABand from "@/components/CTABand";
import MeetUs from "@/components/MeetUs";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DemoOffer from "@/components/DemoOffer";

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
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <DemoOffer />
    </>
  );
}
