import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Filters } from "@/components/catalog/filters"
import { ProductCard } from "@/components/catalog/product-card"
import { demoCatalog, type CatalogProduct } from "@/lib/catalog"
import { Suspense } from "react"

export default function ProduitsPage() {
  const products: CatalogProduct[] = demoCatalog

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <Filters />

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Explorez la gamme</h1>
          <p className="mt-2 text-muted-foreground">Inspiré par le design et les micro‑interactions d’Apple</p>
        </div>

        <Suspense fallback={<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{Array.from({length:6}).map((_,i)=>(<div key={i} className="h-64 animate-pulse rounded-3xl border border-border bg-card"/>))}</div>}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Suspense>
      </section>

      <Footer />
    </main>
  )
}


