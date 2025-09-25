import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { demoCatalog } from "@/lib/catalog"
import { VariantSelector } from "@/components/catalog/variant-selector"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HighlightsSection, CeramicShieldSection, CameraSection, PerformanceSection } from "@/components/catalog/pdp-sections"
import { Parallax, Reveal, Tilt } from "@/components/ui/motion"
import { ProductGallery } from "@/components/catalog/product-gallery"

type Params = { params: { slug: string } }

export default function ProductPage({ params }: Params) {
  const product = demoCatalog.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-2 text-3xl font-semibold">Produit introuvable</h1>
          <p className="text-muted-foreground">Ce produit n'existe pas ou a été retiré.</p>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto grid grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        <div className="relative">
          {product.isNew && <Badge className="absolute left-2 top-2 z-10 bg-orange-500">Nouveau</Badge>}
          <ProductGallery product={product} />
        </div>

        <div className="space-y-6">
          <Reveal>
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">{product.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{product.tagline}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <VariantSelector product={product} />
          </Reveal>

          <Reveal delay={200}>
            <div className="flex gap-3">
              <Button className="px-8">Ajouter au panier</Button>
              <Button variant="outline" className="px-8">
                Acheter maintenant
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border p-4">
                <div className="text-sm text-muted-foreground">Garantie</div>
                <div className="text-base">24 mois • échanges/retours faciles</div>
              </div>
              <div className="rounded-2xl border border-border p-4">
                <div className="text-sm text-muted-foreground">Livraison estimée</div>
                <div className="text-base">Sous 24‑48h (indicatif)</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <HighlightsSection />
      <CeramicShieldSection />
      <CameraSection />
      <PerformanceSection />

      <Footer />
    </main>
  )
}


