"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingBag, User, Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">TechLoop</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-1">
              <Link href="/produits/iphone-17-pro" className="text-sm font-medium hover:text-primary transition-colors">
                iPhone 17 Pro
              </Link>
              <Badge className="bg-orange-500 hover:bg-orange-600 text-xs px-1.5 py-0.5">
                <Sparkles className="h-2 w-2 mr-0.5" />
                NEW
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <Link href="/produits/iphone-air" className="text-sm font-medium hover:text-primary transition-colors">
                iPhone Air
              </Link>
              <Badge className="bg-orange-500 hover:bg-orange-600 text-xs px-1.5 py-0.5">
                <Sparkles className="h-2 w-2 mr-0.5" />
                NEW
              </Badge>
            </div>
            <Link href="/produits/iphone-17" className="text-sm font-medium hover:text-primary transition-colors">
              iPhone 17
            </Link>
            <Link href="/produits/iphone-16" className="text-sm font-medium hover:text-primary transition-colors">
              iPhone 16
            </Link>
            <Link href="/produits/reconditionnes" className="text-sm font-medium hover:text-primary transition-colors">
              Reconditionnés
            </Link>
            <Link href="/garantie" className="text-sm font-medium hover:text-primary transition-colors">
              Garantie
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/recherche">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/compte">
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/panier">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <Link
                  href="/produits/iphone-17-pro"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  iPhone 17 Pro
                </Link>
                <Badge className="bg-orange-500 hover:bg-orange-600 text-xs px-1.5 py-0.5">NEW</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/produits/iphone-air" className="text-sm font-medium hover:text-primary transition-colors">
                  iPhone Air
                </Link>
                <Badge className="bg-orange-500 hover:bg-orange-600 text-xs px-1.5 py-0.5">NEW</Badge>
              </div>
              <Link href="/produits/iphone-17" className="text-sm font-medium hover:text-primary transition-colors">
                iPhone 17
              </Link>
              <Link href="/produits/iphone-16" className="text-sm font-medium hover:text-primary transition-colors">
                iPhone 16
              </Link>
              <Link
                href="/produits/reconditionnes"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Reconditionnés
              </Link>
              <Link href="/garantie" className="text-sm font-medium hover:text-primary transition-colors">
                Garantie
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
