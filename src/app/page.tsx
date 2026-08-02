import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import HubGrid from "@/components/HubGrid";
import ConsoleSpotlight from "@/components/ConsoleSpotlight";
import AudienceFork from "@/components/AudienceFork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <ProofStrip />
      <HubGrid />
      <ConsoleSpotlight />
      <AudienceFork />
      <Footer />
    </main>
  );
}
