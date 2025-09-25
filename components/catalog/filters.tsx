"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export type FiltersState = {
  model?: string
  storage?: string
  color?: string
  condition?: string
  priceMin?: number
  priceMax?: number
}

export function Filters({ onChange }: { onChange?: (f: FiltersState) => void }) {
  const [filters, setFilters] = useState<FiltersState>({})

  const update = (next: Partial<FiltersState>) => {
    const merged = { ...filters, ...next }
    setFilters(merged)
    onChange?.(merged)
  }

  const clear = () => {
    setFilters({})
    onChange?.({})
  }

  return (
    <div className="sticky top-16 z-30 -mx-4 mb-4 border-b border-border/40 bg-background/80 px-4 py-3 backdrop-blur">
      <div className="container mx-auto flex flex-wrap items-center gap-2">
        <Badge variant="outline" className="cursor-pointer" onClick={() => update({ model: "iPhone 17 Pro" })}>
          iPhone 17 Pro
        </Badge>
        <Badge variant="outline" className="cursor-pointer" onClick={() => update({ model: "iPhone Air" })}>
          iPhone Air
        </Badge>
        <Badge variant="outline" className="cursor-pointer" onClick={() => update({ model: "iPhone 17" })}>
          iPhone 17
        </Badge>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={clear}>
            Réinitialiser
          </Button>
        </div>
      </div>
    </div>
  )
}


