import Link from "next/link"
import { ArrowLeft, Shield, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function iPhone16ePage() {
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
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                  ABORDABLE
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">iPhone 16e</h1>
                <p className="text-xl text-muted-foreground text-balance">
                  L'essentiel de l'iPhone. À prix accessible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">699€</span>
                </div>
                <p className="text-sm text-muted-foreground">Ou 29,13€/mois pendant 24 mois</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 sm:flex-none">
                  Acheter maintenant
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none bg-transparent">
                  Ajouter au panier
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
              <div className="aspect-square bg-gradient-to-br from-background to-muted rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/iphone-16e-white-premium-product-shot.jpg"
                  alt="iPhone 16e"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Couleurs disponibles */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Couleurs disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Blanc", color: "#F5F5F7" },
              { name: "Noir", color: "#1C1C1E" },
              { name: "Bleu", color: "#007AFF" },
              { name: "Rouge", color: "#FF3B30" },
            ].map((variant) => (
              <div key={variant.name} className="text-center space-y-3">
                <div className="aspect-square bg-gradient-to-br from-background to-muted rounded-2xl p-4 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full border-2 border-border"
                    style={{ backgroundColor: variant.color }}
                  />
                </div>
                <p className="text-sm font-medium">{variant.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Caractéristiques principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold">Écran</h3>
              <p className="text-sm text-muted-foreground">Liquid Retina HD 6,1" avec True Tone</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Puce</h3>
              <p className="text-sm text-muted-foreground">Puce A16 Bionic avec GPU 5 cœurs</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Appareil photo</h3>
              <p className="text-sm text-muted-foreground">Système 12 Mpx avec Ultra grand-angle</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Design</h3>
              <p className="text-sm text-muted-foreground">Boîtier en aluminium avec dos en verre</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Stockage</h3>
              <p className="text-sm text-muted-foreground">64 Go, 128 Go ou 256 Go</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Autonomie</h3>
              <p className="text-sm text-muted-foreground">Jusqu'à 17h de lecture vidéo avec Lightning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
