import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Battery, Shield, Sparkles } from "lucide-react"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro",
      storage: "256GB",
      color: "Cosmic Orange",
      condition: "Neuf",
      grade: "A+",
      batteryHealth: "100%",
      price: 1299,
      originalPrice: 1499,
      image: "/iphone-17-pro-cosmic-orange-premium-product-shot.jpg",
      features: ["Action Button", "Triple Caméra Pro", "Titanium", "A18 Pro"],
      isNew: true,
    },
    {
      id: 2,
      name: "iPhone Air",
      storage: "128GB",
      color: "Blue",
      condition: "Neuf",
      grade: "A+",
      batteryHealth: "100%",
      price: 899,
      originalPrice: 1099,
      image: "/iphone-air-blue-ultra-thin-premium-product-shot.jpg",
      features: ["Ultra Thin", "Pro Performance", "Face ID", "A18"],
      isNew: true,
    },
    {
      id: 3,
      name: "iPhone 17",
      storage: "256GB",
      color: "Lavender",
      condition: "Neuf",
      grade: "A+",
      batteryHealth: "100%",
      price: 799,
      originalPrice: 999,
      image: "/iphone-17-lavender-premium-product-shot.jpg",
      features: ["Double Caméra", "A18", "Face ID", "5G"],
      isNew: true,
    },
    {
      id: 4,
      name: "iPhone 16",
      storage: "128GB",
      color: "Ultramarine",
      condition: "Reconditionné",
      grade: "A+",
      batteryHealth: "98%",
      price: 649,
      originalPrice: 899,
      image: "/iphone-16-ultramarine-premium-product-shot.jpg",
      features: ["Action Button", "Double Caméra", "A18", "5G"],
    },
    {
      id: 5,
      name: "iPhone 16e",
      storage: "64GB",
      color: "White",
      condition: "Reconditionné",
      grade: "A",
      batteryHealth: "95%",
      price: 449,
      originalPrice: 599,
      image: "/iphone-16e-white-premium-product-shot.jpg",
      features: ["Face ID", "Single Caméra", "A17", "5G"],
    },
    {
      id: 6,
      name: "iPhone 15 Pro Max",
      storage: "256GB",
      color: "Titane Naturel",
      condition: "Reconditionné",
      grade: "A+",
      batteryHealth: "97%",
      price: 999,
      originalPrice: 1479,
      image: "/iphone-15-pro-max-titane-naturel-premium-product-s.jpg",
      features: ["Face ID", "Triple Caméra", "Action Button", "A17 Pro"],
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Nouvelle Gamme iPhone</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Découvrez les derniers iPhone 17 Pro, iPhone Air et toute la gamme 2025. Chaque appareil est rigoureusement
            testé, certifié et garanti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative mb-6">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <Badge
                  variant={product.condition === "Neuf" ? "default" : "secondary"}
                  className="absolute top-4 left-4"
                >
                  {product.condition}
                </Badge>
                {product.isNew && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                    <Sparkles className="h-3 w-3 mr-1" />
                    NEW
                  </Badge>
                )}
                {!product.isNew && (
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur rounded-full px-3 py-1">
                    <span className="text-sm font-medium">Grade {product.grade}</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">
                    {product.storage} • {product.color}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Health indicators */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Battery className="h-4 w-4 text-green-500" />
                    <span>{product.batteryHealth}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span>24 mois</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{product.price}€</div>
                    <div className="text-sm text-muted-foreground line-through">{product.originalPrice}€</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Économie {product.originalPrice - product.price}€
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full" size="lg">
                  Voir les détails
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir toute la collection
          </Button>
        </div>
      </div>
    </section>
  )
}
