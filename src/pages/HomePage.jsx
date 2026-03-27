import Hero from "../components/Hero";
import ChatInterface from "../components/ChatInterface";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import LegalDatabase from "../components/LegalDatabase";
import CTASection from "../components/CTASection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ChatInterface />
      <Features />
      <HowItWorks />
      <LegalDatabase />
      <CTASection />
    </main>
  );
}
