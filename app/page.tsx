import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NewArrivalsSection } from "@/components/new-arrivals-section"
import { FeaturedProducts } from "@/components/featured-products"
import { TrustSection } from "@/components/trust-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StatsSection />
      <NewArrivalsSection />
      <FeaturedProducts />
      <TrustSection />
      <ProcessSection />
      <Footer />
    </main>
  )
}
