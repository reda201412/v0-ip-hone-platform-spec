"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export function NewArrivalsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const newModels = [
    {
      name: "iPhone 17 Pro",
      tagline: "Performance ultime",
      colors: ["Cosmic Orange", "Deep Blue", "Silver"],
      startingPrice: 1037, // 22% discount from 1329€
      originalPrice: 1329,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange_AV1-HYHBaoroNWko7MTCugfZ4SLp9x6dPh.webp",
      features: ["A18 Pro", "Titanium", "Triple Caméra Pro"],
      slug: "iphone-17-pro",
    },
    {
      name: "iPhone Air",
      tagline: "Le plus fin jamais créé",
      colors: ["Blue", "Gold", "White", "Black"],
      startingPrice: 899,
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-Plus-hero-geo-240909_inline.jpg.large.jpg",
      features: ["Ultra Thin", "A18", "Pro Performance"],
      slug: "iphone-air",
    },
    {
      name: "iPhone 17",
      tagline: "Plus résistant, plus beau",
      colors: ["Lavender", "Sage", "Mist Blue", "White", "Black"],
      startingPrice: 799,
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
      features: ["A18", "Double Caméra", "Nouveau Design"],
      slug: "iphone-17",
    },
    {
      name: "iPhone 16",
      tagline: "Innovation accessible",
      colors: ["Ultramarine", "Teal", "Pink", "White", "Black"],
      startingPrice: 649,
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
      features: ["A18", "Action Button", "Double Caméra"],
      slug: "iphone-16",
    },
    {
      name: "iPhone 16e",
      tagline: "Essentiel et performant",
      colors: ["White", "Black", "Blue", "Pink"],
      startingPrice: 449,
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-Plus-hero-geo-240909_inline.jpg.large.jpg",
      features: ["A17", "Face ID", "Single Caméra"],
      slug: "iphone-16e",
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= newModels.length - 1 ? 0 : prev + 1))
      }, 5000)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, newModels.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    const newIndex = currentIndex >= newModels.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  const prevSlide = () => {
    const newIndex = currentIndex <= 0 ? newModels.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
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

        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-4 shadow-xl hover:bg-background transition-all duration-200 hover:scale-110"
            aria-label="Modèle précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-4 shadow-xl hover:bg-background transition-all duration-200 hover:scale-110"
            aria-label="Modèle suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-1000 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${newModels.length * 100}%`,
              }}
            >
              {newModels.map((model, index) => (
                <div key={index} className="flex-shrink-0 w-full" style={{ width: `${100 / newModels.length}%` }}>
                  <div className="bg-card border border-border rounded-3xl p-12 hover:shadow-2xl transition-all duration-700">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={model.image || "/placeholder.svg"}
                          alt={model.name}
                          className="w-full max-w-sm mx-auto h-96 object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                        />
                        <Badge className="absolute top-6 left-6 bg-orange-500 hover:bg-orange-600 backdrop-blur-sm">
                          <Sparkles className="h-4 w-4 mr-2" />
                          NEW 2025
                        </Badge>
                        {model.name === "iPhone 17 Pro" && (
                          <Badge className="absolute top-6 right-6 bg-red-500 hover:bg-red-600 backdrop-blur-sm text-lg px-4 py-2">
                            -22%
                          </Badge>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-3">
                          <h3 className="text-4xl lg:text-5xl font-bold">{model.name}</h3>
                          <p className="text-xl text-muted-foreground">{model.tagline}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {model.features.map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                                {feature}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                            {model.colors.slice(0, 5).map((color, idx) => (
                              <div
                                key={idx}
                                className="w-8 h-8 rounded-full border-2 border-border shadow-sm"
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
                                              : color.toLowerCase().includes("teal")
                                                ? "#20b2aa"
                                                : color.toLowerCase().includes("pink")
                                                  ? "#ff69b4"
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
                          <div>
                            <div className="text-3xl font-bold">À partir de {model.startingPrice}€</div>
                            <div className="text-muted-foreground">Neuf uniquement</div>
                            {model.originalPrice && (
                              <div className="text-muted-foreground line-through">
                                Prix initial: {model.originalPrice}€
                              </div>
                            )}
                          </div>

                          <Link href={`/produits/${model.slug}`}>
                            <Button size="lg" className="text-lg px-8 py-4 hover:bg-primary/90 transition-colors">
                              Découvrir {model.name}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {newModels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125 shadow-lg"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                }`}
                aria-label={`Aller au modèle ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/produits/nouveautes">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            >
              Voir tous les nouveaux modèles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
