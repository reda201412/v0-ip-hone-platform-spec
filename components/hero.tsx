import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Award, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">
                Nouveau : iPhone 17 Pro & iPhone Air disponibles
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                iPhone 17 Pro & Air.
                <br />
                <span className="text-muted-foreground">L'innovation à portée de main.</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                Découvrez les derniers iPhone 17 Pro, iPhone Air ultra-fin et toute la gamme 2025. Neufs et
                reconditionnés avec transparence radicale et qualité garantie.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/produits/iphone-17-pro">
                <Button size="lg" className="text-base">
                  Découvrir iPhone 17 Pro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/produits/iphone-air">
                <Button variant="outline" size="lg" className="text-base bg-transparent">
                  Voir iPhone Air
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Garantie 24 mois</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Livraison 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Certifié Apple</span>
              </div>
            </div>
          </div>

          {/* Product showcase */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
                alt="iPhone 17 Pro Cosmic Orange"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">iPhone 17 Pro</p>
                  <p className="text-xs text-muted-foreground">Cosmic Orange • Neuf</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">1169€</p>
                <p className="text-xs text-muted-foreground line-through">1499€</p>
                <p className="text-xs text-green-600 font-medium">-22%</p>
              </div>
            </div>

            <div className="absolute top-32 right-8 opacity-60 hover:opacity-100 transition-opacity">
              <img
                src="https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-Plus-hero-geo-240909_inline.jpg.large.jpg"
                alt="iPhone Air Blue"
                className="w-24 h-32 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                AIR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
