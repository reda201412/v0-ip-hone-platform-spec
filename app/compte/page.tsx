import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Mail, Calendar } from "lucide-react"
import Link from "next/link"
import { LogoutButton } from "@/components/logout-button"

export default async function ComptePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const user = data.user

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mon Compte</h1>
          <p className="text-gray-600 mt-2">Gérez vos informations personnelles et vos préférences</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Informations personnelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informations personnelles
              </CardTitle>
              <CardDescription>Vos informations de compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Membre depuis</p>
                  <p className="text-sm text-gray-600">{new Date(user.created_at).toLocaleDateString("fr-FR")}</p>
                </div>
              </div>
              {user.user_metadata?.first_name && (
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Nom</p>
                    <p className="text-sm text-gray-600">
                      {user.user_metadata.first_name} {user.user_metadata.last_name}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions rapides */}
          <Card>
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
              <CardDescription>Gérez votre compte et vos préférences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/compte/commandes">Mes commandes</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/compte/adresses">Mes adresses</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/compte/preferences">Préférences</Link>
              </Button>
              <div className="pt-4 border-t">
                <LogoutButton />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistiques du compte */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Aperçu du compte</CardTitle>
            <CardDescription>Votre activité sur TechLoop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">0</div>
                <div className="text-sm text-gray-600">Commandes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">0€</div>
                <div className="text-sm text-gray-600">Total dépensé</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">0</div>
                <div className="text-sm text-gray-600">Produits favoris</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
