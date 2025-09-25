"use client"

import { useMemo, useState } from "react"
import type { CatalogProduct } from "@/lib/catalog"
import { Parallax, Reveal, Tilt } from "@/components/ui/motion"

export function ProductGallery({ product }: { product: CatalogProduct }) {
  const images = useMemo(() => {
    const base = product.image ? [product.image] : []
    return Array.from(new Set([...(product.gallery || []), ...base]))
  }, [product])
  const [current, setCurrent] = useState(images[0])

  return (
    <div className="relative">
      <Parallax strength={30}>
        <Reveal duration={900} easing="cubic-bezier(0.22, 1, 0.36, 1)">
          <Tilt max={5} scale={1.015}>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img src={current} alt={product.name} className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
            </div>
          </Tilt>
        </Reveal>
      </Parallax>

      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {images.map((src) => (
            <button
              key={src}
              onClick={() => setCurrent(src)}
              className={`h-16 w-16 overflow-hidden rounded-xl border ${current === src ? "border-primary" : "border-border hover:border-foreground/30"}`}
              aria-label="Aperçu visuel"
            >
              <img src={src} alt="Miniature" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}


