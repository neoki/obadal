import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { WhySection } from "@/components/WhySection";
import { LeadForm } from "@/components/LeadForm";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AuthoritySection />
        <WhySection />
        <LeadForm />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
