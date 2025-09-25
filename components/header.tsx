"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingBag, User, Menu, X, Sparkles, LogOut } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    // Get initial user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setIsLoading(false)
    }

    getUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

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

            {!isLoading && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {user ? (
                    <>
                      <div className="px-2 py-1.5">
                        <p className="text-sm font-medium">{user.email}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.user_metadata?.first_name && user.user_metadata?.last_name
                            ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
                            : "Utilisateur"}
                        </p>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/compte">Mon compte</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/compte/commandes">Mes commandes</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/compte/preferences">Préférences</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                        <LogOut className="h-4 w-4 mr-2" />
                        Se déconnecter
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/auth/login">Se connecter</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/auth/signup">Créer un compte</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

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

              <div className="border-t pt-4 space-y-2">
                {user ? (
                  <>
                    <Link href="/compte" className="block text-sm font-medium hover:text-primary transition-colors">
                      Mon compte
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                    >
                      Se déconnecter
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" className="block text-sm font-medium hover:text-primary transition-colors">
                      Se connecter
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="block text-sm font-medium hover:text-primary transition-colors"
                    >
                      Créer un compte
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
