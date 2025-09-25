"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Truck, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const colors = [
  {
    name: "Blanc",
    value: "white",
    hex: "#F5F5F7",
    images: {
      main: "/images/iphone-17/white-main.webp",
      product: "/images/iphone-17/white-product.webp",
    },
  },
  {
    name: "Noir",
    value: "black",
    hex: "#1D1D1F",
    images: {
      main: "/images/iphone-17/black-main.webp",
      product: "/images/iphone-17/black-product.webp",
    },
  },
  {
    name: "Sauge",
    value: "sage",
    hex: "#A3B18A",
    images: {
      main: "/images/iphone-17/sage-main.webp",
      product: "/images/iphone-17/sage-product.webp",
    },
  },
  {
    name: "Brume",
    value: "mistblue",
    hex: "#A8DADC",
    images: {
      main: "/images/iphone-17/mistblue-main.webp",
      product: "/images/iphone-17/mistblue-product.webp",
    },
  },
  {
    name: "Lavande",
    value: "lavender",
    hex: "#C8A2C8",
    images: {
      main: "/images/iphone-17/lavender-main.webp",
      product: "/images/iphone-17/lavender-product.webp",
    },
  },
]

const storageOptions = [
  { capacity: "256 Go", price: 969 },
  { capacity: "512 Go", price: 1219 },
]

export default function iPhone17Page() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[0])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  NOUVEAU
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">iPhone 17</h1>
                <p className="text-xl text-muted-foreground text-balance">Coloré. Puissant. Merveilleux.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Couleur - {selectedColor.name}</h3>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color)}
                        className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor.value === color.value
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-primary/50"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Couleur ${color.name}`}
                      >
                        {selectedColor.value === color.value && (
                          <Check className="absolute inset-0 m-auto h-5 w-5 text-white drop-shadow-sm" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Capacité</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {storageOptions.map((option) => (
                      <button
                        key={option.capacity}
                        onClick={() => setSelectedStorage(option)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedStorage.capacity === option.capacity
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-semibold">{option.capacity}</div>
                        <div className="text-sm text-muted-foreground">{option.price}€</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">{selectedStorage.price}€</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ou {(selectedStorage.price / 24).toFixed(2)}€/mois pendant 24 mois
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white">
                  Acheter
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Ajouter au panier
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  Livraison gratuite
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Garantie 2 ans
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Paiement sécurisé
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 flex items-center justify-center">
                <img
                  src={selectedColor.images.main || "/placeholder.svg"}
                  alt={`iPhone 17 ${selectedColor.name}`}
                  className="w-full h-full object-contain transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Couleurs disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {colors.map((color) => (
              <div key={color.value} className="text-center space-y-4">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 flex items-center justify-center">
                  <img
                    src={color.images.product || "/placeholder.svg"}
                    alt={`iPhone 17 ${color.name}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Caractéristiques principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Écran</h3>
              <p className="text-sm text-muted-foreground">Super Retina XDR 6,3" avec True Tone et Dynamic Island</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Puce</h3>
              <p className="text-sm text-muted-foreground">Puce A18 avec GPU 5 cœurs et Neural Engine 16 cœurs</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Appareil photo</h3>
              <p className="text-sm text-muted-foreground">Système 48 Mpx avec Ultra grand-angle et Fusion Camera</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Autonomie</h3>
              <p className="text-sm text-muted-foreground">Jusqu'à 22h de lecture vidéo avec charge rapide</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Stockage</h3>
              <p className="text-sm text-muted-foreground">256 Go ou 512 Go</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Résistance</h3>
              <p className="text-sm text-muted-foreground">
                Résistant aux éclaboussures, à l'eau et à la poussière (IP68)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
