import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight } from "lucide-react"

export function NewArrivalsSection() {
  const newModels = [
    {
      name: "iPhone 17 Pro",
      tagline: "Performance ultime",
      colors: ["Cosmic Orange", "Deep Blue", "Silver"],
      startingPrice: 1299,
      image: "/iphone-17-pro-cosmic-orange-premium-product-shot.jpg",
      features: ["A18 Pro", "Titanium", "Triple Caméra Pro"],
    },
    {
      name: "iPhone Air",
      tagline: "Le plus fin jamais créé",
      colors: ["Blue", "Gold", "White", "Black"],
      startingPrice: 899,
      image: "/iphone-air-blue-ultra-thin-premium-product-shot.jpg",
      features: ["Ultra Thin", "A18", "Pro Performance"],
    },
    {
      name: "iPhone 17",
      tagline: "Plus résistant, plus beau",
      colors: ["Lavender", "Sage", "Mist Blue", "White", "Black"],
      startingPrice: 799,
      image: "/iphone-17-lavender-premium-product-shot.jpg",
      features: ["A18", "Double Caméra", "Nouveau Design"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-500">Nouveautés 2025</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">La nouvelle génération iPhone</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            iPhone 17 Pro, iPhone Air et iPhone 17. Découvrez l'innovation Apple dans sa forme la plus aboutie.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {newModels.map((model, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center space-y-6">
                <div className="relative">
                  <img
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    className="w-48 h-64 object-cover mx-auto rounded-2xl"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">
                    <Sparkles className="h-3 w-3 mr-1" />
                    NEW
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{model.name}</h3>
                  <p className="text-muted-foreground">{model.tagline}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap justify-center gap-2">
                    {model.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center gap-1">
                    {model.colors.slice(0, 4).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-border"
                        style={{
                          backgroundColor: color.toLowerCase().includes("orange")
                            ? "#ff6b35"
                            : color.toLowerCase().includes("blue")
                              ? "#007aff"
                              : color.toLowerCase().includes("lavender")
                                ? "#c7a2ff"
                                : color.toLowerCase().includes("gold")
                                  ? "#ffd700"
                                  : color.toLowerCase().includes("silver")
                                    ? "#c0c0c0"
                                    : color.toLowerCase().includes("sage")
                                      ? "#9caf88"
                                      : color.toLowerCase().includes("white")
                                        ? "#ffffff"
                                        : color.toLowerCase().includes("black")
                                          ? "#000000"
                                          : "#6b7280",
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">À partir de {model.startingPrice}€</div>
                    <div className="text-sm text-muted-foreground">Neuf et reconditionné</div>
                  </div>

                  <Button className="w-full" size="lg">
                    Découvrir {model.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Voir tous les nouveaux modèles
          </Button>
        </div>
      </div>
    </section>
  )
}
