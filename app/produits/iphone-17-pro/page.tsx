import Link from "next/link"
import { ArrowLeft, Star, Shield, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function iPhone17ProPage() {
  const originalPrice = 1499
  const discountedPrice = Math.round(originalPrice * 0.78) // 22% de remise

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

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">{discountedPrice}€</span>
                  <span className="text-xl text-muted-foreground line-through">{originalPrice}€</span>
                  <Badge variant="destructive" className="text-xs">
                    ÉCONOMISEZ 330€
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Ou 48,71€/mois pendant 24 mois</p>
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
                  src="/iphone-17-pro-cosmic-orange-premium-product-shot.jpg"
                  alt="iPhone 17 Pro"
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
              { name: "Titane naturel", color: "#F5F5DC", image: "/iphone-17-pro-natural-titanium.jpg" },
              { name: "Titane bleu", color: "#4A90E2", image: "/iphone-17-pro-blue-titanium.jpg" },
              { name: "Titane blanc", color: "#FFFFFF", image: "/iphone-17-pro-white-titanium.jpg" },
              { name: "Titane noir", color: "#1C1C1E", image: "/iphone-17-pro-black-titanium.jpg" },
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
              <p className="text-sm text-muted-foreground">
                Super Retina XDR 6,3" avec ProMotion, Always-On et Dynamic Island
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Puce</h3>
              <p className="text-sm text-muted-foreground">Puce A18 Pro avec GPU 6 cœurs et Neural Engine 16 cœurs</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Appareil photo</h3>
              <p className="text-sm text-muted-foreground">
                Système Pro 48 Mpx avec Ultra grand-angle et Téléobjectif 5x
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Autonomie</h3>
              <p className="text-sm text-muted-foreground">Jusqu'à 23h de lecture vidéo avec MagSafe et USB-C</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Stockage</h3>
              <p className="text-sm text-muted-foreground">128 Go, 256 Go, 512 Go ou 1 To</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Résistance</h3>
              <p className="text-sm text-muted-foreground">
                Résistant aux éclaboussures, à l'eau et à la poussière (IP68)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Avis clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marie L.",
                rating: 5,
                comment: "Incroyable qualité photo et performance exceptionnelle. Le design en titane est magnifique.",
              },
              {
                name: "Thomas R.",
                rating: 5,
                comment: "Très satisfait de mon achat. L'écran ProMotion fait toute la différence.",
              },
              {
                name: "Sophie M.",
                rating: 4,
                comment: "Excellent téléphone, livraison rapide et service client au top chez TechLoop.",
              },
            ].map((review, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">"{review.comment}"</p>
                <p className="text-sm font-medium">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
