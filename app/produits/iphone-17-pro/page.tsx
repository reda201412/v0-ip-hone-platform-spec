"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Shield, Truck, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function iPhone17ProPage() {
  const [selectedColor, setSelectedColor] = useState("cosmic-orange")
  const [selectedStorage, setSelectedStorage] = useState("256gb")

  const storageOptions = {
    "256gb": {
      label: "256 Go",
      originalPrice: 1329,
      price: Math.round(1329 * 0.78), // 22% de remise = 1036,62€
    },
    "512gb": {
      label: "512 Go",
      originalPrice: 1579,
      price: Math.round(1579 * 0.78), // 22% de remise = 1231,62€
    },
    "1tb": {
      label: "1 To",
      originalPrice: 1829,
      price: Math.round(1829 * 0.78), // 22% de remise = 1426,62€
    },
  }

  const colorOptions = {
    silver: {
      name: "Silver",
      displayName: "Titane Argent",
      color: "#E8E8E8",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-silver_AV1-nW3kcbRleqXAWu2rf10GuVMPcUdw88.webp", // Vue principale
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro--silver_AV3-6ZrkGSlHbx428nTta9sTUPmYhJyz3q.webp", // Gros plan caméras
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-silver-YCM1lceEDpGnvYhVJmqnhT6hGQLlaG.webp", // Vue face/dos
      ],
    },
    "cosmic-orange": {
      name: "Cosmic Orange",
      displayName: "Orange Cosmique",
      color: "#FF6B35",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange_AV1-HYHBaoroNWko7MTCugfZ4SLp9x6dPh.webp", // Vue principale
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange_AV3-ZRAe3C8QXEZzymKLI2HMeeYj43HHVc.webp", // Gros plan caméras
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange-VjPSGfqAiOYnpPyPjxAHCcYEYpqPwy.webp", // Vue face/dos
      ],
    },
    "deep-blue": {
      name: "Deep Blue",
      displayName: "Bleu Profond",
      color: "#1E3A8A",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-deepblue_AV1-JpqsF1a0DcdoqDvCcm3j3hKztYPqA3.webp", // Vue principale
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-deepblue_AV3-eQVxbZcNzegV9ZU3cGqWZMONuq38F2.webp", // Gros plan caméras
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-deepblue-YYeQeTzJECEXA6QdUJ87hfK2bqohZo.webp", // Vue face/dos
      ],
    },
  }

  const currentStorage = storageOptions[selectedStorage]
  const currentColor = colorOptions[selectedColor]
  const savings = currentStorage.originalPrice - currentStorage.price

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
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    NOUVEAU
                  </Badge>
                  <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                    -22% PROMO
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">iPhone 17 Pro</h1>
                <p className="text-xl text-muted-foreground text-balance">Titanium. Si léger. Si résistant. Si Pro.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Couleur - {currentColor.displayName}</h3>
                  <div className="flex gap-3">
                    {Object.entries(colorOptions).map(([key, color]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedColor(key)}
                        className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor === key
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-primary/50"
                        }`}
                        style={{ backgroundColor: color.color }}
                      >
                        {selectedColor === key && (
                          <Check className="absolute inset-0 m-auto h-5 w-5 text-white drop-shadow-sm" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Capacité</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(storageOptions).map(([key, storage]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedStorage(key)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          selectedStorage === key
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-semibold">{storage.label}</div>
                        <div className="text-sm text-muted-foreground">{storage.price}€</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">{currentStorage.price}€</span>
                  <span className="text-xl text-muted-foreground line-through">{currentStorage.originalPrice}€</span>
                  <Badge variant="destructive" className="text-xs">
                    ÉCONOMISEZ {savings}€
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ou {Math.round(currentStorage.price / 24)}€/mois pendant 24 mois
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
                  src={currentColor.images[0] || "/placeholder.svg"}
                  alt={`iPhone 17 Pro ${currentColor.displayName}`}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                {currentColor.images.map((image, index) => (
                  <div key={index} className="w-16 h-16 bg-gray-100 rounded-lg p-2">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`iPhone 17 Pro ${currentColor.displayName} vue ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Couleurs disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(colorOptions).map(([key, color]) => (
              <div key={key} className="text-center space-y-4">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 flex items-center justify-center">
                  <img
                    src={color.images[0] || "/placeholder.svg"}
                    alt={color.displayName}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{color.displayName}</p>
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
              <p className="text-sm text-muted-foreground">
                Super Retina XDR 6,9" avec ProMotion 120 Hz, Always-On et Dynamic Island
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Puce</h3>
              <p className="text-sm text-muted-foreground">Puce A18 Pro avec GPU 6 cœurs et Neural Engine 16 cœurs</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Appareil photo</h3>
              <p className="text-sm text-muted-foreground">
                Système Pro 48 Mpx avec Ultra grand-angle 48 Mpx et Téléobjectif 12 Mpx 5x
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Autonomie</h3>
              <p className="text-sm text-muted-foreground">Jusqu'à 33h de lecture vidéo avec MagSafe et USB-C</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Stockage</h3>
              <p className="text-sm text-muted-foreground">256 Go, 512 Go ou 1 To</p>
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
