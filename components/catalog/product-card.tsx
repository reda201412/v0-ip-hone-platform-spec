"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { CatalogProduct } from "@/lib/catalog"
import { Reveal, Tilt } from "@/components/ui/motion"

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <Link href={`/produits/${product.slug}`} className="group block">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 will-change-transform hover:-translate-y-1 hover:shadow-2xl">
        {product.isNew && (
          <Badge className="absolute left-4 top-4 z-10 bg-orange-500 hover:bg-orange-600">Nouveau</Badge>
        )}

          <Tilt max={4} scale={1.01}>
            <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-black/10 to-transparent">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </Tilt>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-muted-foreground">{product.tagline}</p>

            <div className="mt-3 flex items-center gap-2">
              {product.colors.slice(0, 5).map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="inline-block size-4 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Button variant="outline">En savoir plus</Button>
              <span className="text-sm text-muted-foreground">À partir de {product.variants[0]?.price}€</span>
            </div>
          </div>
        </div>
      </Reveal>
    </Link>
  )
}


