import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Shield, Zap, Camera, Battery, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function iPhone17Page() {
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
            <h1 className="text-xl font-semibold">iPhone 17</h1>
            <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
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
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-purple-500/20">Nouveau</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">iPhone 17</h1>
              <p className="text-xl text-muted-foreground mb-6">Encore plus délicieux. Encore plus durable.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">899€</span>
              </div>
              <p className="text-sm text-muted-foreground">Ou 37,46€/mois pendant 24 mois</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Couleurs disponibles :</h3>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 border-2 border-background shadow-lg ring-2 ring-purple-500/20"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-300 to-green-500 border-2 border-background shadow-lg"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 border-2 border-background shadow-lg"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border-2 border-background shadow-lg"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-background shadow-lg"></div>
              </div>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span>Lavender</span>
                <span>•</span>
                <span>Sage</span>
                <span>•</span>
                <span>Mist Blue</span>
                <span>•</span>
                <span>White</span>
                <span>•</span>
                <span>Black</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1 bg-purple-500 hover:bg-purple-600">
                Acheter maintenant
              </Button>
              <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                Ajouter au panier
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-3xl overflow-hidden">
              <Image
                src="/iphone-17-lavender-premium-product-shot.jpg"
                alt="iPhone 17 Lavender"
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
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Puce A18</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Performances fluides pour toutes vos activités quotidiennes
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Camera className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Système Caméra Avancé</h3>
              </div>
              <p className="text-sm text-muted-foreground">Double appareil photo 48 Mpx avec mode Nuit amélioré</p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Battery className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Autonomie Toute la Journée</h3>
              </div>
              <p className="text-sm text-muted-foreground">Jusqu'à 20 heures de lecture vidéo avec charge rapide</p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Smartphone className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Écran Super Retina XDR</h3>
              </div>
              <p className="text-sm text-muted-foreground">6,1" avec couleurs éclatantes et luminosité adaptative</p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Aluminium Recyclé</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Construction durable avec Ceramic Shield et résistance IP68
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Apple Intelligence</h3>
              </div>
              <p className="text-sm text-muted-foreground">IA personnelle pour une expérience utilisateur intuitive</p>
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
                  <p className="text-sm text-muted-foreground">Super Retina XDR OLED 6,1" (2556 x 1179) 60 Hz</p>
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
                  <p className="text-sm text-muted-foreground">Jusqu'à 20 heures de lecture vidéo</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Connectivité</h3>
                  <p className="text-sm text-muted-foreground">5G, Wi-Fi 6E, Bluetooth 5.3, USB-C</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
