import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Vérifiez votre email</CardTitle>
            <CardDescription>Nous avons envoyé un lien de confirmation à votre adresse email</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Cliquez sur le lien dans l'email pour activer votre compte et vous connecter.
            </p>
            <p className="text-xs text-gray-500">Vous n'avez pas reçu l'email ? Vérifiez votre dossier spam.</p>
            <div className="pt-4">
              <Link href="/auth/login" className="text-blue-600 hover:underline text-sm font-medium">
                Retour à la connexion
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
