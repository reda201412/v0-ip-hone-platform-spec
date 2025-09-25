"use client"

import { useMemo, useState } from "react"
import type { CatalogProduct, CatalogVariant } from "@/lib/catalog"
import { Badge } from "@/components/ui/badge"

export function VariantSelector({ product, onChange }: { product: CatalogProduct; onChange?: (v: CatalogVariant) => void }) {
  const [selectedStorage, setSelectedStorage] = useState(product.variants[0]?.storage)
  const [selectedColor, setSelectedColor] = useState(product.variants[0]?.color.name)

  const current = useMemo(() => {
    return (
      product.variants.find((v) => v.storage === selectedStorage && v.color.name === selectedColor) || product.variants[0]
    )
  }, [product.variants, selectedStorage, selectedColor])

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 text-sm text-muted-foreground">Capacité</div>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(product.variants.map((v) => v.storage))).map((storage) => (
            <button
              key={storage}
              onClick={() => {
                setSelectedStorage(storage)
                onChange?.(current)
              }}
              className={`rounded-xl border px-4 py-2 transition-colors ${
                selectedStorage === storage ? "border-primary bg-primary/10" : "border-border hover:bg-accent"
              }`}
            >
              {storage}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 text-sm text-muted-foreground">Couleur</div>
        <div className="flex flex-wrap items-center gap-3">
          {product.colors.map((c) => {
            const isActive = selectedColor === c.name
            return (
              <button
                key={c.name}
                title={c.name}
                onClick={() => {
                  setSelectedColor(c.name)
                  onChange?.(current)
                }}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all ${
                  isActive ? "border-primary bg-primary/10" : "border-border hover:bg-accent"
                }`}
              >
                <span className="inline-block size-4 rounded-full ring-1 ring-border" style={{ backgroundColor: c.hex }} />
                <span className="text-sm">{c.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-3xl font-semibold">{current.price}€</div>
        {current.originalPrice && (
          <>
            <div className="text-muted-foreground line-through">{current.originalPrice}€</div>
            <Badge variant="secondary">-{Math.round((1 - current.price / (current.originalPrice || current.price)) * 100)}%</Badge>
          </>
        )}
      </div>
    </div>
  )
}


