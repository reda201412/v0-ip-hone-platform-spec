import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Shield, Zap, Camera, Battery, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function iPhoneAirPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-xl font-semibold">iPhone Air</h1>
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
              NOUVEAU
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-blue-500/10 text-blue-500 border-blue-500/20">Nouveau</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">iPhone Air</h1>
              <p className="text-xl text-muted-foreground mb-6">
                L'iPhone le plus fin jamais conçu. Avec la puissance Pro à l'intérieur.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">999€</span>
              </div>
              <p className="text-sm text-muted-foreground">Ou 41,62€/mois pendant 24 mois</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Couleurs disponibles :</h3>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-background shadow-lg ring-2 ring-blue-500/20"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 border-2 border-background shadow-lg"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border-2 border-background shadow-lg"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-background shadow-lg"></div>
              </div>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span>Blue</span>
                <span>•</span>
                <span>Gold</span>
                <span>•</span>
                <span>White</span>
                <span>•</span>
                <span>Black</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1 bg-blue-500 hover:bg-blue-600">
                Acheter maintenant
              </Button>
              <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                Ajouter au panier
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-3xl overflow-hidden">
              <Image
                src="/iphone-air-blue-ultra-thin-premium-product-shot.jpg"
                alt="iPhone Air Blue"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Smartphone className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Design Ultra-Fin</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Seulement 6,25 mm d'épaisseur, l'iPhone le plus fin jamais créé
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Puce A18</h3>
              </div>
              <p className="text-sm text-muted-foreground">Performances exceptionnelles dans un format ultra-compact</p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Camera className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Appareil Photo Avancé</h3>
              </div>
              <p className="text-sm text-muted-foreground">Système double caméra 48 Mpx avec mode Portrait amélioré</p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Battery className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Autonomie Optimisée</h3>
              </div>
              <p className="text-sm text-muted-foreground">Jusqu'à 22 heures de lecture vidéo malgré sa finesse</p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Aluminium Aérospatial</h3>
              </div>
              <p className="text-sm text-muted-foreground">Construction légère et résistante avec Ceramic Shield</p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Smartphone className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Écran Super Retina XDR</h3>
              </div>
              <p className="text-sm text-muted-foreground">6,6" avec luminosité exceptionnelle et couleurs précises</p>
            </CardContent>
          </Card>
        </div>

        {/* Specifications */}
        <Card className="border-border/40">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Caractéristiques techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Écran</h3>
                  <p className="text-sm text-muted-foreground">Super Retina XDR OLED 6,6" (2868 x 1320) 60 Hz</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Puce</h3>
                  <p className="text-sm text-muted-foreground">A18 avec Neural Engine 16 cœurs</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stockage</h3>
                  <p className="text-sm text-muted-foreground">128 Go, 256 Go, 512 Go</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Appareil photo</h3>
                  <p className="text-sm text-muted-foreground">
                    Double système 48 Mpx : Principal et Ultra grand-angle
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Autonomie</h3>
                  <p className="text-sm text-muted-foreground">Jusqu'à 22 heures de lecture vidéo</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dimensions</h3>
                  <p className="text-sm text-muted-foreground">163,0 × 77,8 × 6,25 mm - 169 g</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
