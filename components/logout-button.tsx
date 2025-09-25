"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true)
    const supabase = createClient()

    try {
      await supabase.auth.signOut()
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
      onClick={handleLogout}
      disabled={isLoading}
    >
      <LogOut className="h-4 w-4 mr-2" />
      {isLoading ? "Déconnexion..." : "Se déconnecter"}
    </Button>
  )
}
