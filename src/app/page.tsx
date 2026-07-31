import Hero from "@/components/Hero";
import HubGrid from "@/components/HubGrid";
import AudienceFork from "@/components/AudienceFork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <HubGrid />
      <AudienceFork />
      <Footer />
    </main>
  );
}
