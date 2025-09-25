"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Battery, Shield, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // Tablet: 2 items
      } else {
        setItemsPerView(3) // Desktop: 3 items
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro",
      storage: "256GB",
      color: "Cosmic Orange",
      condition: "Neuf",
      grade: "A+",
      batteryHealth: "100%",
      price: 1037, // 22% discount from 1329€
      originalPrice: 1329,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange_AV1-HYHBaoroNWko7MTCugfZ4SLp9x6dPh.webp",
      features: ["Action Button", "Triple Caméra Pro", "Titanium", "A18 Pro"],
      isNew: true,
      slug: "iphone-17-pro",
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
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-Plus-hero-geo-240909_inline.jpg.large.jpg",
      features: ["Ultra Thin", "Pro Performance", "Face ID", "A18"],
      isNew: true,
      slug: "iphone-air",
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
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
      features: ["Double Caméra", "A18", "Face ID", "5G"],
      isNew: true,
      slug: "iphone-17",
    },
    {
      id: 4,
      name: "iPhone 16",
      storage: "128GB",
      color: "Ultramarine",
      condition: "Neuf",
      grade: "A+",
      batteryHealth: "100%",
      price: 649,
      originalPrice: 899,
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
      features: ["Action Button", "Double Caméra", "A18", "5G"],
      isNew: true,
      slug: "iphone-16",
    },
    {
      id: 5,
      name: "iPhone 16e",
      storage: "64GB",
      color: "White",
      condition: "Neuf",
      grade: "A+",
      batteryHealth: "100%",
      price: 449,
      originalPrice: 599,
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-Plus-hero-geo-240909_inline.jpg.large.jpg",
      features: ["Face ID", "Single Caméra", "A17", "5G"],
      isNew: true,
      slug: "iphone-16e",
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
      image:
        "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
      features: ["Face ID", "Triple Caméra", "Action Button", "A17 Pro"],
      slug: "iphone-15-pro-max",
    },
  ]

  const maxIndex = Math.max(0, products.length - itemsPerView)

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }, 4000)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, maxIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const nextSlide = () => {
    goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    goToSlide(currentIndex <= 0 ? maxIndex : currentIndex - 1)
  }

  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance">Nouvelle Gamme iPhone</h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Découvrez les derniers iPhone 17 Pro, iPhone Air et toute la gamme 2025. Chaque appareil est rigoureusement
            testé, certifié et garanti.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile for better UX */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 md:p-3 shadow-lg hover:bg-background transition-all duration-200 hover:scale-110 hidden sm:flex"
            aria-label="Produit précédent"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 md:p-3 shadow-lg hover:bg-background transition-all duration-200 hover:scale-110 hidden sm:flex"
            aria-label="Produit suivant"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(products.length / itemsPerView) * 100}%`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <div className="group bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Product Image */}
                    <div className="relative mb-4 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge
                        variant={product.condition === "Neuf" ? "default" : "secondary"}
                        className="absolute top-2 md:top-4 left-2 md:left-4 backdrop-blur-sm text-xs"
                      >
                        {product.condition}
                      </Badge>
                      {product.isNew && (
                        <Badge className="absolute top-2 md:top-4 right-2 md:right-4 bg-orange-500 hover:bg-orange-600 backdrop-blur-sm text-xs">
                          <Sparkles className="h-2 w-2 md:h-3 md:w-3 mr-1" />
                          NEW
                        </Badge>
                      )}
                      {!product.isNew && (
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-background/90 backdrop-blur rounded-full px-2 md:px-3 py-1">
                          <span className="text-xs md:text-sm font-medium">Grade {product.grade}</span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {product.storage} • {product.color}
                        </p>
                      </div>

                      {/* Features - Better responsive layout */}
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {product.features.slice(0, itemsPerView === 1 ? 2 : 4).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Health indicators - Responsive layout */}
                      <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
                        <div className="flex items-center gap-1">
                          <Battery className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                          <span>{product.batteryHealth}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
                          <span className="hidden sm:inline">24 mois</span>
                          <span className="sm:hidden">24m</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-current" />
                          <span>4.9</span>
                        </div>
                      </div>

                      {/* Pricing - Better mobile layout */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xl md:text-2xl font-bold">{product.price}€</div>
                          <div className="text-xs md:text-sm text-muted-foreground line-through">
                            {product.originalPrice}€
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs md:text-sm text-green-600 font-medium">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </div>
                          <div className="text-xs text-muted-foreground hidden sm:block">
                            Économie {product.originalPrice - product.price}€
                          </div>
                        </div>
                      </div>

                      <Link href={`/produits/${product.slug}`}>
                        <Button
                          className="w-full group-hover:bg-primary/90 transition-colors"
                          size={itemsPerView === 1 ? "lg" : "default"}
                        >
                          Voir les détails
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link href="/produits">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            >
              Voir toute la collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
