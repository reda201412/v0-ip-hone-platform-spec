import { Shield, Award, Microscope, Truck } from "lucide-react"

export function TrustSection() {
  const features = [
    {
      icon: Microscope,
      title: "Tests 50+ Points",
      description:
        "Chaque iPhone subit une batterie de tests rigoureux couvrant tous les aspects techniques et esthétiques.",
    },
    {
      icon: Shield,
      title: "Garantie Étendue",
      description: "24 mois de garantie complète, SAV français expert, remplacement immédiat en cas de problème.",
    },
    {
      icon: Award,
      title: "Certification Apple",
      description:
        "Partenaire agréé Apple, pièces d'origine garanties, respect des standards de qualité les plus élevés.",
    },
    {
      icon: Truck,
      title: "Livraison Sécurisée",
      description: "Expédition 24-48h, emballage premium, suivi temps réel, signature électronique à la réception.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Transparence Radicale</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Notre processus de reconditionnement dépasse les standards de l'industrie. Chaque détail compte pour votre
            tranquillité d'esprit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
