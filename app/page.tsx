import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureGrid from "@/components/FeatureGrid";
import ProcessSteps from "@/components/ProcessSteps";
import StatsLedger from "@/components/StatsLedger";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <FeatureGrid />
        <ProcessSteps />
        <StatsLedger />
        <Testimonials />
        <LeadForm />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
