import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-3xl font-bold text-gold-bright mb-4">
            Everything Inside. One Ecosystem.
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            The rest of the homepage — hub grid, client/affiliate split, and
            everything else — builds here next.
          </p>
        </div>
      </section>
    </main>
  );
}
