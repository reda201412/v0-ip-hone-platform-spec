"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Truck, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function iPhoneAirPage() {
  const [selectedColor, setSelectedColor] = useState("spaceblack")
  const [selectedStorage, setSelectedStorage] = useState("128")

  const colors = [
    {
      id: "spaceblack",
      name: "Noir Spatial",
      value: "#1C1C1E",
      images: {
        main: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-spaceblack_GEO_EMEA-tlOxHDgYTjGUVzpDuZvvPCoF4vqlU8.webp",
        detail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-spaceblack_AV2-lkBH2nZ0dnlsaUgcg3dlCQlzNva2Ac.webp",
      },
    },
    {
      id: "lightgold",
      name: "Or Clair",
      value: "#F5E6D3",
      images: {
        main: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-lightgold_AV1-qJofM18bvlKLdi6foPJWCAc9T6G72L.webp",
        detail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-lightgold_AV2-yipZVokYIfZWm2U7VjX63Ug0tpQilR.webp",
      },
    },
    {
      id: "cloudwhite",
      name: "Blanc Nuage",
      value: "#F8F8F8",
      images: {
        main: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-cloudwhite_AV1-mk7PqJr0bzouLMFidDDKtc2zMmuiWK.webp",
        detail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-cloudwhite_AV2-hN618v6Mg1RgWz2et8H793Ilv45kkr.webp",
      },
    },
    {
      id: "skyblue",
      name: "Bleu Ciel",
      value: "#A8D8EA",
      images: {
        main: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-skyblue_AV1-H9ChlwMFXodg2wOEWtcLQmHwAP89Lk.webp",
        detail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-air-finish-select-202509-skyblue_AV2-nH8yTUtxjhmJOpjcLqThSp92JWiMze.webp",
      },
    },
  ]

  const storageOptions = [
    { id: "128", size: "128 Go", price: 899 },
    { id: "256", size: "256 Go", price: 1049 },
    { id: "512", size: "512 Go", price: 1299 },
  ]

  const currentColor = colors.find((c) => c.id === selectedColor) || colors[0]
  const currentStorage = storageOptions.find((s) => s.id === selectedStorage) || storageOptions[0]

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
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">iPhone Air</h1>
                <p className="text-xl text-muted-foreground text-balance">Ultra-fin. Ultra-léger. Ultra-performant.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Couleur - {currentColor.name}</h3>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor === color.id
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-primary/50"
                        }`}
                        style={{ backgroundColor: color.value }}
                        aria-label={color.name}
                      >
                        {selectedColor === color.id && (
                          <Check className="absolute inset-0 m-auto h-5 w-5 text-white drop-shadow-sm" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Capacité</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {storageOptions.map((storage) => (
                      <button
                        key={storage.id}
                        onClick={() => setSelectedStorage(storage.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          selectedStorage === storage.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-semibold">{storage.size}</div>
                        <div className="text-sm text-muted-foreground">{storage.price}€</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">{currentStorage.price}€</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ou {(currentStorage.price / 24).toFixed(2)}€/mois pendant 24 mois
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
                  src={currentColor.images.main || "/placeholder.svg"}
                  alt={`iPhone Air ${currentColor.name}`}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Couleurs disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {colors.map((color) => (
              <div key={color.id} className="text-center space-y-4">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 flex items-center justify-center">
                  <img
                    src={color.images.main || "/placeholder.svg"}
                    alt={`iPhone Air ${color.name}`}
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
              <p className="text-sm text-muted-foreground">Super Retina XDR 6,1" avec True Tone et Dynamic Island</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Puce</h3>
              <p className="text-sm text-muted-foreground">Puce A17 avec GPU 5 cœurs et Neural Engine 16 cœurs</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Appareil photo</h3>
              <p className="text-sm text-muted-foreground">
                Système 48 Mpx avec Ultra grand-angle et mode Portrait avancé
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Design</h3>
              <p className="text-sm text-muted-foreground">
                Le plus fin iPhone jamais conçu - seulement 6,9 mm d'épaisseur
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Stockage</h3>
              <p className="text-sm text-muted-foreground">128 Go, 256 Go ou 512 Go</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Autonomie</h3>
              <p className="text-sm text-muted-foreground">Jusqu'à 20h de lecture vidéo avec charge rapide USB-C</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
